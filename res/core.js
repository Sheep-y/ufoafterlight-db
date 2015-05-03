var ufoal = (function ufoal_core(){ 'use strict';

var last_update = new Date( 2015, 1, 2 );

var txt = {};

var ns = { // Main namespace
   data: {}, // Raw data
   txt: txt, // Text data
   map: {}, // Hard-coded mappings
   entity: {} // Name to Entity map
};

function makePrereq( e ) { return e.prereq ? e.prereq : e.prereq = []; }

ns.init = function ufoal_init() {
   var ent = ns.entity;
   var data = ns.data;
   var map = ns.maps;
   var all = ns.all = [];
   var used_id = [];
   var spec_names = ['race','subrace','unit','squad','people','training'];

   for ( var type in this.data ) {
      var set_name = spec_names.indexOf( type ) < 0;
      data[ type ].forEach( function each_data( e ) {
         e.type = type;
         if ( set_name && e.id ) {
            e.text = ns.ucword( txt.name[ e.id ] || ns.uncamel( e.name ) );
            used_id.push( e.id );
         }
         if ( e.name ) {
            var ename = e.name;
            if ( type === 'race' || type === 'subrace' ) { // Races / subrace / units have same name with each other, need special entity id
               ename = type + '_' + ename;
               map.special_req[ e.name ] = new RegExp( '\\b' + _.escRegx( ename ) + '\\b' );
            }
            if ( ent[ ename ] ) _.warn ( 'Duplicate entity "' + ename + '"' );
            else ent[ ename ] = e;
         }
         e.allIndex = all.length;
         all.push( e );
      });
   }
   data.unused = ns.find_unused( used_id );

   // ns.entity has been fully mapped at this stage.

   // Dependency chain link-up
   ['training','station','subrace','unit'].forEach( function each_upgrade( type ) {
      type = data[type];
      type.forEach( function each_upgrade_entry( e ) {
         if ( e.upgrade ) e.upgrade = type[ e.upgrade-1 ].name; // training, station
         else if ( e.subrace ) makePrereq( e ).push( 'subrace_' + data.subrace[ e.subrace ].name ); // Unit
         else if ( e.race !== undefined ) {
            if ( ~~e.race ) makePrereq( e ).push( 'race_' + data.race[ e.race ].name ); // Trainings
            else if ( e.race ) makePrereq( e ).push( 'race_' + e.race ); // Subraces
         }
      });
   });
   // Item processing. Item data is too complicated to normalise at data conversion.
   data.item.forEach( function each_item( e ) {
      if ( e.manufacturable ) {
         e.day = e.manufacturable.assemblytime + "\u202F+\u202F" + e.manufacturable.manufacturingtime;
         e.prereq = makePrereq( e ).concat( e.manufacturable.prereq );
         if ( e.manufacturable.prereq.indexOf( 'T_Cloaking' ) >= 0 ) e.prereq.push( 'StalkingMajor' );
      }
      if ( e.allowentityid ) {
         var prereq = makePrereq( e );
         if ( prereq.indexOf( e.allowentityid ) < 0 )
            prereq.unshift( e.allowentityid );
      }
      if ( e.name in map.fixed_req )
         makePrereq( e ).unshift( map.fixed_req[ e.name ] );
      if ( ! e.hasOwnProperty( 'isvisible' ) ) e.isvisible = 1;
      if ( ( e.weapon || e.armour ) && e.isvisible !== 0 && e.id < 908 ) { // 908+ = robots
         var slots = [];
         if ( e.weapon && e.weapon.ammo ) {
            // Map ammos and weapons to relevant trainings
            e.weapon.ammo.forEach( function each_weapon_init( ammo ) {
               if ( ! ammo.wam || ! ammo.ammoIT ) return;
               var wam = ammo.wam[0];
               ammo = ns.entity[ ammo.ammoIT ];
               if ( map.ammo_req[ wam.weaponmode ] ) {
                  makePrereq( ammo ).unshift( map.ammo_req[ wam.weaponmode ] );
               } else if ( map.weapon_req[ wam.weaponmode ] ) {
                  makePrereq( e ).unshift( map.weapon_req[ wam.weaponmode ] );
               } else if ( wam.weaponmode === 'Melee' || wam.weaponmode === 'Throw' ) {
                  makePrereq( e ).unshift( 'HumanCombat' + ( e.weapon.shapeIndex <= 2 ? 'Minor' : 'Major' ) );
               }
            });
            if ( map.heavy_weapon[ e.name ] ) makePrereq( e ).unshift( 'HeavyEquipmentMinor' );

         } else if ( e.armour && e.manufacturable && e.weight >= 20 && e.id < 900 ) {
            // Not the "correct" check per se, but good and simple enough.
            makePrereq( e ).unshift( 'SuitWearingMajor' );
         }
         [ 'visorslotIndex', 'muzzleslotIndex', 'additionalslotIndex', 'headslotIndex', 'handslotIndex' ].forEach( function each_slot( slot ) {
            if ( e.weapon && e.weapon[ slot ] ) slots.push( e.weapon[ slot ] );
            else if ( e.armour && e.armour[ slot ] ) slots.push( e.armour[ slot ] );
         });
         if ( slots.length ) e.slots = slots;
      }
   });
   // Flatten unit's equipment and training list
   data.unit.forEach( function each_unit( e ) {
      var eq = e.hasEntity = [];
      if ( e.equipment ) {
         e.equipment.forEach( function each_equipment( e ) {
            for ( var type in e ) {
               if ( type === 'slot' || type === 'count' ) continue;
               if ( eq.indexOf( type ) < 0 ) eq.push( e[ type ] );
            }
         });
      }
      if ( e.armour ) eq.push( e.armour );
      if ( e.training ) eq.push.apply( eq, e.training );
   });
   data.squad.forEach( function each_squad( e ) {
      e.prereq = makePrereq( e ).concat( Object.keys( e.units ) );
   });
   data.people.forEach( function each_people( e ) {
      if ( e.subrace ) makePrereq( e ).unshift( 'subrace_' + data.subrace[ e.subrace ].name );
   });
   // Special names.
   spec_names.forEach( function each_name( type ) {
      var t = txt[type];
      data[type].forEach( function each_name_entry( e ) {
         e.text = t && t[ e.id ] ? ns.ucword( t[ e.id ] ) : ns.uncamel( e.name );
         if ( type === 'squad' ) e.text = e.text.replace( /, /, '.' ).replace( /- S /, ' S' );
      });
   });
   ns.ui.log_time( 'Data initialised' );
   ns.ui.init();
   ns.check_update();
};

ns.find_unused = function ufoal_find_unused( used ) {
   var data = ns.data;
   var result = [];
   for ( var id in txt.name ) {
      id = +id;
      if ( used.indexOf( id ) < 0 ) {
         var entry = {
            id: id,
            name: ""+id,
            text: ns.ucword( txt.name[ id ] ),
            unknown: true,
         };
         if ( id < 200 ) entry.type = 'item';
         else if ( id < 390 ) entry.type = 'tech';
         else if ( id < 500 ) entry.type = 'building';
         else if ( id < 800 ) entry.type = 'station';
         else  entry.type = 'item';
         if ( entry.type === 'item' ) entry.typeIndex = 0;
         /*** Manual hard code ***/
         if ( id === 902 ) entry.prereq = { "286":1 }; // Acid Mines -> Acid Mine
         else if ( id === 99 ) entry.prereq = { "303":1 }; // EM Detection -> Magnetic Scanner
         else if ( id === 210 ) entry.prereq = { "209":1 }; // Beastman Elements Control -> Controlling Martian Elements
         else if ( id === 316 ) entry.prereq = { "944":1 }; // 376A -> 376A
         else if ( id === 315 ) entry.prereq = { "943":1 }; // 340G -> 340G
         ns.entity[ id ] = entry;
         entry.allIndex = ns.all.length;
         result.push( entry );
         ns.all.push( entry );
      }
   }
   return result;
};

ns.type = function ufoal_type( e ) {
   if ( e.unknown ) return 'Unused';
   if ( e.type === 'training' && e.race ) return txt.race[ e.race ];
   if ( e.type === 'item' && e.typeIndex ) return txt.item_type[ e.typeIndex ];
   if ( e.name === 'Fireball' ) return e.type; // "Fireball" is race, subrace, unit, and weapon
   return '';
};

/** Get an entity's prereq in array */
ns.prereq = function ufoal_prereq( e ) {
   if ( ! e.prereq ) return [];
   if ( ! ( e.prereq instanceof Array ) ) return Object.keys( e.prereq );
   return e.prereq;
};

ns.iname = function ufoal_iname( e ) {
   if ( e.type === 'race' ) return 'race_' + e.name;
   else if ( e.type === 'subrace' ) return 'subrace_' + e.name;
   return e.name;
};

ns.maindata = function ufoal_maindata( e ) { // Non-main data has lower match priority than main data, and use iname for searching instead of name.
   return ! ( e.unknown || e.type === 'unit' || e.type === 'squad' || ( e.isvisible !== undefined && e.isvisible === 0 ) );
};

ns.ucfirst = function ufoal_ucfirst( txt ) {
   return txt ? txt.substr(0,1).toUpperCase() + txt.substr(1) : txt;
};

ns.ucword = function ufoal_ucword( txt ) {
   return txt ? txt.split( /\b(?=[a-zA-Z])/g ).map( ns.ucfirst ).join( '' ) : txt;
};

ns.uncamel = function ufoal_uncamel( txt ) {
   return txt
      .replace( /[^A-Z0-9](?=[A-Z])|\D(?=\d)/g, '$& ' )
      .replace( /[ _]+/g, ' ' ).trim();
};

ns.github_api = function ufoal_check_update( url, onload, onerror ) {
   var xhr = new XMLHttpRequest();
   xhr.onload = onload.bind( xhr, xhr );
   xhr.onerror = onerror.bind( xhr, xhr );
   xhr.ontimeout = onerror.bind( xhr, xhr, 'timeout' );
   xhr.open( 'get', url, true );
   xhr.setRequestHeader( 'Accept', 'application/vnd.github.v3+json' );
   xhr.setRequestHeader( 'Origin', '*' );
   setTimeout( xhr.send.bind( xhr ), 333 );
};

ns.check_update = function ufoal_check_update() {
   var today = new Date().toISOString().split('T')[0], last_check;
   if ( window.localStorage && ( last_check = localStorage.getItem( 'sheepy.ufoal.last_check_update' ) ) ) {
      if ( last_check === today ) // Check at most once per day
         return ns.ui.log( "Skipping update check.  Already checked not long ago." );
   }
   ns.github_api( 'https://api.github.com/repos/Sheep-y/ufoafterlight-db/branches/master',
      function ufoal_checkUpdate_onload( xhr ) {
         try {
            var data = JSON.parse( xhr.responseText ).commit;
            //var date = new Date( data.pushed_at ); // Used with https://api.github.com/repos/Sheep-y/ufoafterlight-db
            var date = new Date( data.commit.author.date );
            if ( date > last_update ) {
               ns.ui.log( "Found update: " + date );
               ns.get_change_log( '', data );
            } else {
               ns.ui.log( "Finished checking update. No updates." );
            }
         } catch ( ex ) {
            ns.ui.log( "Failed to check update: " + ex );
         }
      },
      function ufoal_checkUpdate_onerror( xhr, err ) {
         ns.ui.log( "Cannot check update; HTTP response " + ( err || xhr.status ) );
      }
   );
   if ( window.localStorage ) localStorage.setItem( 'sheepy.ufoal.last_check_update', today );
};

/** Recursively fetch previous commit and add to changelog */
ns.get_change_log = function ufoal_get_change_log( html, commit ) {
   try {
      var date = new Date( commit.commit.author.date );
      if ( date < last_update ) {
         return ns.ui.notify_update( html );
      }
      date = date.toISOString().split('T')[0];
      html += '<h2>Update ' + date + '</h2><pre>' + _.escHtml( commit.commit.message ) + '</pre>';
      if ( commit.parents.length ) {
         ns.github_api( commit.parents[0].url,
            function ufoal_get_change_log_onload( xhr ) {
               ufoal_get_change_log( html, JSON.parse( xhr.responseText ) );
            },
            function ufoal_get_change_log_onerror( xhr, err ) {
               ns.ui.log( "Error when fetching changelog; HTTP response " + ( err || xhr.status ) );
               ns.ui.notify_update( html );
            }
         );
      } else {
         ns.ui.notify_update( html );
      }
   } catch ( ex ) {
      ns.ui.log( "Error when parsing changelog: " + ex );
      ns.ui.notify_update( html );
   }
};

return ns;

})();