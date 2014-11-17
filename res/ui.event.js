(function ufoal_ui( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;

var txt_search = _( '#txt_search' )[0];

event.window_popstate = function window_popstate( evt ) {
   ui.update_state();
};

event.lnk_internal_click = function lnk_internal_click( evt ) {
   if ( ! evt ) return;
   if ( evt.target && evt.target.href ) {
      if ( evt.preventDefault ) evt.preventDefault();
      var destination = evt.target.getAttribute( 'href' );
      if ( destination.indexOf( '?query=' ) === 0 ) {
         if ( evt.preventDefault ) evt.preventDefault();
         txt_search.value = destination.substr( 7 );
         ui.search( txt_search.value );
         event.txt_search_blur();
         return false;
      }
   }
};

event.txt_search_input = function txt_search_input( evt ) {
   _.hide( '#lbl_not_found' );
   if ( txt_search_input.timer ) clearTimeout( txt_search_input.timer );
   txt_search_input.timer = 0;

   var val = txt_search.value.trim();
   if ( ! val ) {
      if ( ui.is_typing() )
         return; // Prevent reverting to index while user is still typing.
      ui.update_state();
   } else {
      if ( ui.search( val ) ) {
         txt_search_input.timer = setTimeout( event.txt_search_blur, 3000 );
      }
   }
};
event.txt_search_input.timer = 0;

event.txt_search_blur = function txt_search_blur( evt ) {
   var val = txt_search.value.trim();
   if ( ui.displayed && val != ui.find_query() ) {
      history.pushState( null, '', '?query=' + val );
   }
};

event.btn_reset_click = function btn_reset_click( evt ) {
   txt_search.value = '';
   history.pushState( null, '', evt.target.getAttribute( 'href' ) || '?#' );
   evt.preventDefault();
   ui.update_state();
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
   ui.update_state();
   if ( window.localStorage ) localStorage.setItem( 'sheepy.ufoal.ran', '1' );
};

event.lnk_license_click = function lnk_license_click( evt ) {
   if ( evt ) evt.preventDefault();
   if ( location.hash !== '#license' )
      history.pushState( null, '', '?#license' );
   ui.update_state();
};

})( ufoal );