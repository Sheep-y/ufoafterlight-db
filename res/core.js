// <![CDATA[
var ufoal = (function ufoal_core(){ 'use strict';

var ns = { // Main namespace
   data: {}, // raw data
   txt: {}, // text data
   entity: {}, // Name to Entity map
};

ns.init = function ufoal_init() {
   var txt = ns.txt.name;
   var ent = ns.entity;
   var data = ns.data;
   var all = ns.all = new Array(360);
   for ( var type in this.data ) {
      data[ type ].forEach( function each_data( e ) {
         e.type = type;
         if ( e.id ) {
            e.text = txt[ e.id ];
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
      }
   });
   // Training processing. Training is different from other data.
   data.training.forEach( function each_training( e ) {
      e.text = ns.ucword( ns.txt.training[ e.id + '_name' ] );
      if ( e.upgrade ) e.upgrade = data.training[ e.upgrade-1 ].name;
   });
   ns.ui.init();
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
   return txt.split( /\b(?=\w)/ ).map( ns.ucfirst ).join( '' );
}

ns.uncamel = function ufoal_uncamel( txt ) {
   return txt.split( /(?=[A-Z0-9])/ ).join( ' ' ).trim();
};

return ns;

})(); // ]]>