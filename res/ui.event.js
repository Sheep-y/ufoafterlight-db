(function ufoal_ui( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;

var txt_search = _( '#txt_search' )[0];

event.window_popstate = function window_popstate( evt ) {
   ui.update_state();
};

event.lnk_internal_click = function lnk_internal_click( evt ) {
   if ( ! evt ) return;
   if ( evt.prevendDefault ) evt.preventDefault();
   if ( evt.target && evt.target.href ) {
      var destination = evt.target.href;
      if ( destination.startsWith( '?query=' ) ) {
         if ( evt.preventDefault ) evt.preventDefault();
         txt_search.value = destination.substr( 6 );
         ui.search( txt_search.value );
         return false;
      }
   }
};

event.txt_search_input = function txt_search_input( evt ) {
   _.hide( '#lbl_not_found' );
   var val = txt_search.value.trim();
   if ( ! val ) {
      if ( document.activeElement && document.activeElement === txt_search )
         return; // Prevent reverting to index while user is still typing.
      ui.update_state();
   } else {
      ui.search( val );
   }
};

event.btn_reset_click = function btn_reset_click( evt ) {
   txt_search.value = '';
   event.window_popstate();
};

event.btn_collapse_click = function btn_collapse_click( evt ) {
   _.addClass( evt.target.parentNode, 'collapsed' );
};

event.btn_expand_click = function btn_expand_click( evt ) {
   _.removeClass( evt.target.parentNode, 'collapsed' );
};

event.btn_desc_click = function btn_desc_click( evt ) {
   var box = evt.target.parentNode;

   // Remove description if any already exists
   var help = _( box, '.help' );
   if ( help.length > 0 && help[0].parentNode === box )
      return box.removeChild( _( box, '.help' )[0] );

   // Create and insert description
   var e = ns.entity[ box.dataset.name ];
   var help = _.create( 'div', { class: 'help', html: ns.get_desc( e ) } );
   var firstdiv = box.querySelector( 'div' );
   box.insertBefore( help, firstdiv && firstdiv.parentNode === box ? firstdiv : undefined );
};

event.lnk_help_click = function lnk_help_click( evt ) {
   if ( evt ) evt.preventDefault();
   if ( location.hash !== '#help' )
      history.pushState( null, '', '?#help' );
   event.window_popstate();
};

event.lnk_license_click = function lnk_license_click( evt ) {
   if ( evt ) evt.preventDefault();
   if ( location.hash !== '#license' )
      history.pushState( null, '', '?#license' );
   event.window_popstate();
};

})( ufoal );