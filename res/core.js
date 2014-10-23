// <![CDATA[
var ufoal = (function ufoal_core(){ 'use strict';

var ns = { // Main namespace
   data: _.Map(), // raw game data
   txt: _.Map(), // text
   entity: _.Map(), // Entity lookup dict
};

ns.init = function ufoal_init() {
   var txt = ns.txt.name;
   var ent = ns.entity;
   var all = ns.all = new Array(100);
   for ( var type in this.data ) {
      ns.data[ type ].forEach( function each_data( e, i ) {
         e.type = type;
         if ( e.id ) {
            e.text = txt[ e.id ];
            if ( ! e.text ) _.info( 'Entity without name: ' + type + ' #' + i + ' (' + e.id + ':' + e.name + ')'  );
         }
         if ( e.name ) {
            if ( ent[ e.name ] ) _.warn ( 'Duplicate entity "' + e.name + '"' );
            else ent[ e.name ] = e;
         }
         all.push( e );
      });
   }
   ns.ui.init();
}

return ns;

})(); // ]]>