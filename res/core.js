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
   var all = ns.all = [];
   var used_id = [];
   var spec_names = ['race','subrace','unit','training'];
   for ( var type in this.data ) {
      var set_name = spec_names.indexOf( type ) < 0;
      data[ type ].forEach( function each_data( e ) {
         e.type = type;
         if ( set_name && e.id ) {
            e.text = ns.ucword( txt.name[ e.id ] );
            if ( ! e.text ) e.text = ns.uncamel( e.name );
            used_id.push( e.id );
         }
         if ( e.name ) {
            var ename = e.name;
            if ( type === 'race' || type === 'subrace' ) { // Races / subrace / units have same name with each other, need special entity id
               ename = type + '_' + ename;
               ns.special_req[ e.name ] = new RegExp( '\\b' + _.escRegx( ename ) + '\\b' );
            }
            if ( ent[ ename ] ) _.warn ( 'Duplicate entity "' + ename + '"' );
            else ent[ ename ] = e;
         }
         e.allIndex = all.length;
         all.push( e );
      });
   }
   data.unused = ns.find_unused( used_id );
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
   // Special names.
   spec_names.forEach( function each_name( type ) {
      var t = txt[type];
      data[type].forEach( function each_name_entry( e ) {
         e.text = t && t[ e.id ] ? ns.ucword( t[ e.id ] ) : ns.uncamel( e.name );
      });
   });
   // Dependency chain link-up
   ['training','station','subrace','unit'].forEach( function each_upgrade( type ) {
      type = data[type];
      type.forEach( function each_upgrade_entry( e ) {
         if ( e.upgrade ) e.upgrade = type[ e.upgrade-1 ].name;
         else if ( e.subrace ) e.prereq = [ 'subrace_' + ns.data.subrace[ e.subrace - 1 ].name ];
         else if ( e.race ) e.prereq = [ 'race_' + e.race ];
      });
   });
   ns.ui.init();
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
         else if ( id === 210 ) entry.prereq = { "209":1 } // Beastman Elements Control -> Controlling Martian Elements
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

ns.special_req = {
   'MineCrystalMinor': /\bCrystals\d\b/,
   'MineNobleMinor': /\bNoble\d\b/,
   'FossilePowerUpgrade': /\bEnergy[45]\b/,
   'AlienPowerUpgrade': /\bEnergy[6789]\b/,
   'MartianArtifact1': /\b(One|Two)MartianArtifact\b/,
   'MartianArtifact2': /\b(One|Two)MartianArtifact\b/,
   'MartianArtifact3': /\b(One|Two)MartianArtifact\b/,
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

ns.inflate = function ufoal_inflate( data ) {
   _.ary( data ).forEach( function each_inflate( e, i ){
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