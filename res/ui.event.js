// <![CDATA[
(function ufoal_ui( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;

var txt_search = _( '#txt_search')[0];

event.window_popstate = function window_popstate( evt ) {
   txt_search.value = ui.find_query();
   event.txt_search_input( evt );
};

event.txt_search_input = function txt_search_input( evt ) {
   _.hide( '#lbl_not_found' );
   var val = txt_search.value.trim();
   if ( ! val ) {
      if ( ui.find_query() )
         history.pushState( {}, '', '?' );
      return ui.show_panel( '#pnl_index' );
   }

   var name = val.toLowerCase();
   var target = ns.all.filter( function(e){
      return e.text.toLowerCase() === name;
   });
   if ( target.length <= 0 ) return _.show( '#lbl_not_found' );
   if ( val !== ui.find_query() ) 
      history.pushState( {}, '', '?query=' + val );
   ui.show_result( target );
};

event.btn_reset_click = function btn_reset_click( evt ) {
   txt_search.value = '';
   event.txt_search_input();
};

event.lnk_block_title_click = function lnk_block_title_click( evt ) {
   txt_search.value = evt.target.textContent;
   event.txt_search_input();
};

event.btn_collapse_click = function btn_collapse_click( evt ) {
   _.addClass( evt.target.parentNode, 'collapsed' );
};

event.btn_expand_click = function btn_expand_click( evt ) {
   _.removeClass( evt.target.parentNode, 'collapsed' );
};

event.btn_desc_click = function btn_desc_click( evt ) {
   var box = evt.target.parentNode;

   // Remove description
   var help = _( box, '.help' );
   if ( help.length > 0 && help[0].parentNode === box )
      return box.removeChild( _( box, '.help' )[0] );

   // Create description
   var help = _.create( 'div', { class: 'help' } );
   var e = ns.entity[ box.dataset.name ], txt = ns.txt[ e.type ];
   var content = 'Id: ' + e.id + ', ' + e.name;
   if ( e.effect ) content += '<br/>Effect: ' + ns.uncamel( e.effect );
   content += '<hr/>';
   if ( e.type === 'tech' ) {
      content += txt[ e.id + '_b4' ] + '<hr/>' + ns.txt.tech[ e.id + '_done' ];
   } else {
      content += txt[ e.id ] ? txt[ e.id ] : '(Internal data; no description)';
   }
   help.innerHTML = content;
   var firstdiv = box.querySelector( 'div' );
   box.insertBefore( help, firstdiv && firstdiv.parentNode === box ? firstdiv : undefined );
};

event.lnk_license_click = function lnk_license_click( evt ) {
   evt.preventDefault();
   ui.show_panel( '#pnl_license' );
};

})( ufoal ); // ]]>