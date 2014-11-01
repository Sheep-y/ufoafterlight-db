var ufoal = (function ufoal_core(){ 'use strict';

var txt = {};

var ns = { // Main namespace
   data: {}, // raw data
   txt: txt, // text data
   entity: {}, // Name to Entity map
};

ns.init = function ufoal_init() {
   var ent = ns.entity;
   var data = ns.data;
   var all = ns.all = new Array(360);
   for ( var type in this.data ) {
      data[ type ].forEach( function each_data( e ) {
         e.type = type;
         if ( e.id ) {
            e.text = txt.name[ e.id ];
            if ( ! e.text ) e.text = ns.uncamel( e.name );
         }
         if ( e.name ) {
            if ( ent[ e.name ] ) _.warn ( 'Duplicate entity "' + e.name + '"' );
            else ent[ e.name ] = e;
         }
         all.push( e );
      });
   }
   // Item processing. Item data is too complicated to normalise at data conversion.
   data.item.forEach( function each_item( e ) {
      if ( e.manufacturable ) {
         e.day = e.manufacturable.assemblytime + "\u202F+\u202F" + e.manufacturable.manufacturingtime;
         e.prereq = e.manufacturable.prereq;
         if ( e.allowentityid ) {
            if ( e.prereq ) e.prereq.unshift( e.allowentityid );
            else e.prereq = [ e.allowentityid ];
         }
      }
      if ( e.allowentityid ) {
         if ( ! e.prereq )
            e.prereq = [ e.allowentityid ];
         else if ( e.prereq.indexOf( e.allowentityid ) < 0 )
            e.prereq.push( e.allowentityid );
      }
   });
   // Training processing. Training is different from other data.
   data.training.forEach( function each_training( e ) {
      e.text = ns.ucfirst( txt.training[ e.id + '_name' ].toLowerCase() );
      if ( e.upgrade ) e.upgrade = data.training[ e.upgrade-1 ].name;
   });
   data.station.forEach( function each_station( e ) {
      if ( e.upgrade ) e.upgrade = data.station[ e.upgrade-1 ].name;
   });
   ns.ui.init();
};

/** Return the description of any entity */
ns.get_desc = function ufoal_get_desc( e ) {
   var content = 'Id: ' + e.id + ', ' + e.name;
   content += '<hr/>';
   if ( e.type === 'tech' ) {
      content += txt.tech[ e.id + '_b4' ] + '<hr/>' + ns.txt.tech[ e.id + '_done' ];
   } else if ( e.type === 'item' ) {
      content += ns.get_item_desc( e );
   } else {
      content += ns.get_general_desc( e );
      if ( e.effect ) content += '<hr/>Effect: ' + ns.uncamel( e.effect ); // Training
   }
   return content;
};

/** Description for entities other then technologies */
ns.get_general_desc = function ufoal_get_general_desc( e ) {
   var txt = ns.txt[ e.type ];
   return txt[ e.id ] ? txt[ e.id ] : '(Internal data; no description)';
};

ns.get_item_desc = function ufoal_get_item_desc( e ) {
   var sub, result = [ ns.get_general_desc( e ) + '<hr/>' ];
   function add( t ) { result.push( t ); }
   if ( e.weight ) add( 'Weight: ' + e.weight + ' kg' );
   if ( e.startquantity ) add( 'Starts game with: ' + e.startquantity + ' pieces' );
   if ( e.manufacturable ) {
      sub = e.manufacturable;
      if ( sub.assemblytime ) add( 'Assembly line: ' + sub.assemblytime + ' man-days to setup' );
      if ( sub.manufacturingtime ) add( 'Produce: ' + sub.manufacturingtime + ' man-days per piece' );
   }

   function percent( v ) { return (v*100) + '%'; }
   if ( e.armour ) {
      sub = e.armour;
      add( '<hr/>' );
      if ( sub.headslotIndex && sub.handslotIndex ) add( 'Addon slots: 2' );
      else if ( sub.headslotIndex || sub.handslotIndex ) add( 'Addon slot: 1' );
      if ( sub.maxhostility ) add( 'Env. Resist: ' + sub.maxhostility );
      if ( sub.protection ) sub.protection.forEach( function( e, i ) {
         if ( i ) add( txt.damage_type[i] + ': ' + percent( e ) );
      });
   }

   if ( e.ammo ) {
      sub = e.ammo;
      add( '<hr/>' );
      if ( sub.capacity ) add( 'Ammo capaticy: ' + sub.capacity );
      if ( sub.isrechargable ) add( '(Recharge at base)' );
   }

   function second( t ) { return (t/10) + '&thinsp;s.'; }
   if ( e.weapon ) {
      var slot = [];
      sub = e.weapon;
      add( '<hr/>' );
      // TODO: Replace with shapeIndex
      add( 'Hands: ' + ( ( sub.righthandhelper === "parent_one-handed" ) ? '1' : '2' ) );
      if ( sub.muzzleslotIndex ) slot.push( 'Muzzle' );
      if ( sub.visorslotIndex ) slot.push( 'Scope' );
      if ( sub.additionalslotIndex ) slot.push( 'Underbarrel' );
      if ( sub.origin ) add( 'Type: ' + ns.uncamel( txt.weapon_origin[ sub.origin ] ) ) ;
      if ( slot.length ) add( 'Addons: ' + slot.join( ', ' ) );
      if ( sub.deploytime ) add( 'Deploy: ' + second( sub.deploytime ) );

      if ( sub.ammo ) { sub.ammo.forEach( function( ammo ) {
         add( ' ' );
         var clip = ns.entity[ ammo.ammoIT ];
         var line = '<span class="title" onclick="ufoal.ui.event.lnk_block_title_click(event)">' + clip.text + '</span>';
         if ( clip.ammo.capacity ) line += ' (' + clip.ammo.capacity + ')';
         if ( ammo.reloadtime ) line +=' Reload ' + second( ammo.reloadtime );
         add( line );
         if ( ammo.wam ) { ammo.wam.forEach( function( wam ) {
            var line = wam.weaponmode ? ns.uncamel( wam.weaponmode ) : 'Attack';
            if ( wam.rounds && wam.rounds > 1 ) line += ' (x' + wam.rounds + ')';
            if ( wam.consumption && wam.consumption > 1 ) line += ' (' + wam.consumption + ' ammo per shot)';
            if ( wam.timetofire && wam.timetofire > 1 ) line += ', ' + second( wam.timetofire ) + ' warm up';
            add( line );
            line = ' &nbsp; &nbsp;';
            if ( wam.timeeffect ) {
               add ( line + ' "' + wam.timeeffect + '" effect'
                  + ( wam.effectprobability < 1 ? ' ' + percent( wam.effectprobability ) + ' chance' : '' ) );
            }
            if ( wam.strength && wam.dmgtype ) line += ' ' + wam.strength + ' ' + wam.dmgtype + ' damage';

            sub = null;
            if ( wam.ranged ) sub = wam.ranged;
            else if ( wam.close ) sub = wam.close;
            if ( sub ) {
               if ( sub.range ) line += ' ' + sub.range + ' m';
               if ( sub.aimingtime ) line += ' ' + second( sub.aimingtime );
               if ( sub.accuracy && sub.accuracy < 10 ) line += ', accuracy x' + sub.accuracy;
            }

            if ( wam.radius ) {
               sub = wam.radius;
               if ( sub.visiblitytypeid ) line += ' ' + sub.visiblitytypeid;
               if ( sub.radius ) line += ' radius ' + sub.radius + ' m';
               if ( sub.angle ) line += ' ∠' + sub.angle + 'º';
            }

            if ( wam.autonom ) {
               sub = wam.autonom;
               if ( sub.visibility ) {
                  var vis = sub.visibility
                  add( line + '<br/>' );
                  line = [];
                  for ( var v in vis ) {
                     if ( vis[v] ) line.push( v + ': ' + percent( vis[ v ] ) );
                  }
                  line = 'Range: ' + line.join( ', ' );
               }
            }
            add( line );
         });}
      });}
   }
   return result.join( '<br/>' ).replace( /(<br\/>)*<hr\/>(<[bh]r\/>)+/g, '<hr/>' );
};

ns.special_req = {
   'MineCrystalMinor': /\bCrystals\d\b/,
   'MineNobleMinor': /\bNoble\d\b/,
   'FossilePowerUpgrade': /\bEnergy[45]\b/,
   'AlienPowerUpgrade': /\bEnergy[6789]\b/,
   'MartianArtifact1': /(One|Two)MartianArtifact/,
   'MartianArtifact2': /(One|Two)MartianArtifact/,
   'MartianArtifact3': /(One|Two)MartianArtifact/,
};

ns.type = function ufoal_type( e ) {
   if ( e.type === 'training' && e.race ) return txt.race[ e.race ];
   if ( e.type === 'item' && e.typeIndex ) return txt.item_type[ e.typeIndex ];
   return '';
};

/** Get an entity's prereq in array */
ns.prereq = function ufoal_prereq( e ) {
   if ( ! e.prereq ) return [];
   if ( ! ( e.prereq instanceof Array ) ) return Object.keys( e.prereq );
   return e.prereq;
};

ns.ucfirst = function ufoal_ucfirst( txt ) {
   return txt ? txt.substr(0,1).toUpperCase() + txt.substr(1) : txt;
};

ns.ucword = function ufoal_ucword( txt ) {
   return txt ? txt.split( /\b(?=[a-zA-Z])/g ).map( ns.ucfirst ).join( '' ) : txt;
};

ns.uncamel = function ufoal_uncamel( txt ) {
   return txt.split( /(?=[A-Z0-9])/ ).join( ' ' ).trim();
};

ns.inflate = function ufoal_inflate( data ) {
   _.ary( data ).forEach( function( e, i ){
      try {
         eval( _.inflate( atob( e ) ) );
      } catch ( ex ) {
         _.error( "Error running inflated code #" + i );
         _.error( ex );
      }
   });
};

return ns;

})();