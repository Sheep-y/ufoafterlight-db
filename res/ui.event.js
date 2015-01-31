(function ufoal_ui( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;

var txt_search = _( '#txt_search' )[0];

event.window_popstate = function window_popstate( evt ) {
   ui.update_state();
};

event.body_click = function body_click( evt ) {
   if ( ! evt || ! evt.target || ! evt.target.className ) return;
   if ( evt.target.className === 'title' ) return event.lnk_internal_click( evt );
};

event.lnk_internal_click = function lnk_internal_click( evt ) {
   if ( evt && evt.target && evt.target.href && ! evt.ctrlKey && evt.button === 0 ) {
      _.noDef( evt );
      var destination = evt.target.getAttribute( 'href' );

      if ( destination.indexOf( '?query=' ) === 0 ) {
         txt_search.value = evt.target.dataset.iname || decodeURIComponent( destination.substr( 7 ) );
         ui.search( txt_search.value );
         event.txt_search_blur();
         return false;

      } else if ( destination.indexOf( '?compare=' ) === 0 ) {
         var comp = destination.replace( /\?compare=/, '' );
         if ( comp !== ui.find_compare() )
            history.pushState( null, '', '?compare=' + comp );
         ui.compare( comp );
         return false;

      } else {
         _.warn( 'Ignoring unknown destination: ' + destination );
      }

   } else {
      if ( ! evt ) _.warn( 'lnk_internal_click without event' );
      else if ( ! evt.target ) _.warn( 'lnk_internal_click without target' );
      else if ( ! evt.target.href ) _.warn( 'lnk_internal_click without target href' );
      if ( evt.ctrlKey ) _.log( 'Ignoring ctrl-click' );
      else if ( evt.button !== 0 ) _.log( 'Ignoring non-left click' );
   }
};

event.txt_search_input = function txt_search_input( evt ) {
   if ( txt_search_input.timer ) clearTimeout( txt_search_input.timer );
   txt_search_input.timer = 0;

   var val = txt_search.value.trim();
   if ( ! val ) {
      _.hide( '#lbl_not_found' );
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
   if ( ui.displayed && val !== ( ui.find_query() || '' ) ) {
      if ( ! val && ui.find_compare() !== null ) return;
      history.pushState( null, '', '?query=' + val );
   }
};

event.btn_reset_click = function btn_reset_click( evt ) {
   if ( evt && evt.target && evt.target.href && ( evt.ctrlKey || evt.button !== 0 ) ) return;
   txt_search.value = '';
   history.pushState( null, '', evt.target.getAttribute( 'href' ) || '?#' );
   _.noDef( evt );
   ui.update_state();
};

event.btn_collapse_click = function btn_collapse_click( evt ) {
   evt.target.parentNode.classList.add( 'collapsed' );
};

event.btn_expand_click = function btn_expand_click( evt ) {
   evt.target.parentNode.classList.remove( 'collapsed' );
};

event.btn_desc_click = function btn_desc_click( evt ) {
   var box = evt.target.parentNode;

   // Remove description if any already exists
   var help = _( box, '.help' );
   if ( help.length > 0 && help[0].parentNode === box )
      return box.removeChild( _( box, '.help' )[0] );

   // Create and insert description
   var help = ui.create_desc( ns.all[ box.dataset.index ] );
   box.insertBefore( help, box.querySelector( '.desc' ).nextSibling );
};

event.btn_clipboard_click = function lnk_btn_clipboard_click( evt ) {
   var clicked = ns.all[ evt.target.parentNode.parentNode.dataset.index ];
   var pos = ui.compared.indexOf( clicked );
   ui.save_compare();
   if ( pos >= 0 ) {
      ui.compared.splice( pos, 1 );
      evt.target.classList.remove( 'icon_ui_minus' );
      evt.target.classList.add( 'icon_ui_plus' );
   } else {
      ui.compared.push( clicked );
      evt.target.classList.remove( 'icon_ui_plus' );
      evt.target.classList.add( 'icon_ui_minus' );
   }
   ui.update_compare();
};

event.lnk_help_click = function lnk_help_click( evt ) {
   _.noDef( evt );
   if ( location.hash !== '#help' )
      history.pushState( null, '', '?#help' );
   ui.update_state();
   if ( window.localStorage ) localStorage.setItem( 'sheepy.ufoal.ran', '1' );
};

event.lnk_license_click = function lnk_license_click( evt ) {
   _.noDef( evt );
   if ( location.hash !== '#license' )
      history.pushState( null, '', '?#license' );
   ui.update_state();
};

event.btn_clear_compare_click = function btn_clear_compare_click( evt ) {
   ui.save_compare();
   ui.compared = [];
   ui.update_compare();
};

event.btn_undo_compare_click = function btn_undo_compare_click( evt ) {
   ui.undo_compare();
};

event.btn_redo_compare_click = function btn_redo_compare_click( evt ) {
   ui.redo_compare();
};

})( ufoal );