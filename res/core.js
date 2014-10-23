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
   var all = ns.all = new Array(360);
   for ( var type in this.data ) {
      ns.data[ type ].forEach( function each_data( e, i ) {
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
   ns.data.item.forEach( function each_item( e ) {
      if ( e.manufacturable ) {
         e.day = e.manufacturable.assemblytime + "\u202F+\u202F" + e.manufacturable.manufacturingtime;
         e.prereq = e.manufacturable.prereq;
      }
   });
   ns.ui.init();
};

ns.uncamel = function ufoal_uncamel( txt ) {
   return txt.split( /(?=[A-Z0-9])/ ).join( ' ' ).trim();
};

return ns;

})(); // ]]>