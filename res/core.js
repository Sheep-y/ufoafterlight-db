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
   var all = ns.all = new Array(900);
   var used_id = [];
   for ( var type in this.data ) {
      data[ type ].forEach( function each_data( e ) {
         e.type = type;
         if ( e.id ) {
            e.text = ns.ucword( txt.name[ e.id ] );
            if ( ! e.text ) e.text = ns.uncamel( e.name );
            if ( type !== 'training' ) used_id.push( e.id );
         }
         if ( e.name ) {
            if ( ent[ e.name ] ) _.warn ( 'Duplicate entity "' + e.name + '"' );
            else ent[ e.name ] = e;
         }
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
   // Training processing. Training is different from other data.
   data.training.forEach( function each_training( e ) {
      e.text = ns.ucword( txt.training[ e.id + '_name' ] );
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
   'MartianArtifact1': /(One|Two)MartianArtifact/,
   'MartianArtifact2': /(One|Two)MartianArtifact/,
   'MartianArtifact3': /(One|Two)MartianArtifact/,
};

ns.type = function ufoal_type( e ) {
   if ( e.unknown ) return 'Unused';
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