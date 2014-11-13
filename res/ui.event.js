(function ufoal_ui( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;

var txt_search = _( '#txt_search' )[0];

event.window_popstate = function window_popstate( evt ) {
   var hash = location.hash;
   if ( hash === '#license' || hash === '#help' ) {
      txt_search.value = '';
      ui.show_panel( '#pnl_' + hash.substr( 1 ) );
   } else {
      var val = txt_search.value = ui.find_query();
      if ( ! val && _( hash ).length > 0 ) {
         ui.show_panel( '#pnl_index' );
         _( hash )[0].scrollIntoView();
      } else {
         event.txt_search_input( evt );
      }
   }
};

event.lnk_internal_click = function lnk_internal_click( evt ) {
   if ( ! evt ) return;
   if ( typeof( evt ) === 'string' ) {
      evt = { target: { href: '?query=' + evt } };
   }
   if ( evt.prevendDefault ) evt.preventDefault();
   if ( evt.target && evt.target.href ) {
      var destination = evt.target.href;
      if ( destination.startsWith( '?query=' ) ) {
         if ( evt.preventDefault ) evt.preventDefault();
         txt_search.value = destination.substr( 6 );
         event.txt_search_input();
         _('#nav_top')[0].scrollIntoView( true );
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
      if ( ui.find_query() || location.hash )
         history.pushState( null, '', '?' );
      return ui.show_panel( '#pnl_index' );
   }

   _.time(); // Reset timer
   var name = val.toLowerCase();
   var id = val.match( /^\d+$/ ) ? +val : null;
   var target = ns.all.filter( function( e ){
      return e.text.toLowerCase() === name
         || e.name.toLowerCase() === name
         || e.id === id;
   });
   if ( target.length <= 0 ) return _.show( '#lbl_not_found' );
   if ( val !== ui.find_query() )
      history.pushState( null, '', '?query=' + val );
   ui.show_result( target );
   _.time( 'Found and displayed: "' + name + '"' );
};

event.btn_reset_click = function btn_reset_click( evt ) {
   txt_search.value = '';
   event.window_popstate();
};

event.lnk_block_title_click = function lnk_block_title_click( evt ) {
   var name = evt.target.textContent.trim().replace( / *\([^)]*\)$/, '' );
   return event.lnk_internal_click( name );
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