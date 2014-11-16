(function ufoal_ui( ns ) { 'use strict';

var event = {}; // Event handlers are stored here

var pnl_help = _( '#pnl_help' )[0];
var pnl_index = _( '#pnl_index' )[0];
var pnl_result = _( '#pnl_result' )[0];
var pnl_enable = _( '#pnl_enable' )[0];
var pnl_license = _( '#pnl_license' )[0];
var txt_search = _( '#txt_search' )[0];

var ui = ns.ui = {
   'event' : event,
   'displayed' : [], // Displayed entity stack; cleared with each new result

   'init' : function ui_init() {
      _.hide( '.hide' );
      _.removeClass( '.hide' );
      _( '#title' )[0].textContent = document.title;
      document.head.appendChild( _.create( 'meta', { rel: 'apple-touch-icon', href: _( '#favicon' )[0].href } ) );
      window.addEventListener( 'popstate', event.window_popstate );
      _.attr( 'a[href^="?query="]', { onclick: event.lnk_internal_click } );

      // Initialise index and searchable data list
      ui.create_index();
      pnl_help.appendChild( _.create( 'span', 'Data loaded in ' + _.time( 'Data loaded' )[1] + 'ms' ) );

      var data_search = _( '#data_search' )[0];
      var options = _.col( ns.all, 'text' ).sort();
      options.forEach( function each_option( e, i ) {
         if ( e && options.indexOf( e ) === i ) // Filter out empties and duplicates
            data_search.appendChild( _.create( 'option', { value: e } ) );
      });
      _.show( [ pnl_search, pnl_index ] );

      // Update query from url
      if ( ! window.localStorage || localStorage.getItem( 'sheepy.ufoal.ran' ) ) {
         event.window_popstate();
      } else {
         event.lnk_help_click();
         window.localStorage.setItem( 'sheepy.ufoal.ran', '1' );
      }

      //txt_search.focus(); // Focus may cause browser to not trigger datalist dropdown.
      txt_search.select();
   },

   'find_query' : function ui_find_query() {
      if ( location.search ) {
         var match = location.search.match( /\bquery=([^&]*)/ );
         if ( match && match.length ) return decodeURIComponent( match[1] ).trim();
      }
      return "";
   },

   'is_typing' : function ui_is_typing() {
      return document.activeElement && document.activeElement === txt_search;
   },

   'search' : function ui_search( val ) {
      _.time(); // Reset timer
      var name = val.toLowerCase();
      var id = val.match( /^\d+$/ ) ? +val : null;
      var target = ns.all.filter( function( e ){
         return e.text.toLowerCase() === name
            || e.name.toLowerCase() === name
            || e.id === id;
      });
      if ( target.length <= 0 ) return _.show( '#lbl_not_found' );
      ui.show_result( target );
      _.time( 'Found and displayed: "' + name + '"' );
   },

   // Update display and uri to match current input / uri state
   'update_state' : function ui_update_state() {
      var hash = location.hash, e = hash ? _( hash ) : [];
      if ( hash === '#license' || hash === '#help' || e.length > 0 ) {
         txt_search.value = '';
         if ( e.length ) {
            ui.show_panel( '#pnl_index' );
            _( hash )[0].scrollIntoView();
         } else {
            ui.show_panel( '#pnl_' + hash.substr( 1 ) );
         }
      } else {
         var val = ui.find_query();
         txt_search.value = val;
         if ( val ) ui.search( val );
      }
   },

   'show_panel' : function ui_show_panel( panel ) {
      _.hide( [ pnl_index, pnl_result, pnl_enable, pnl_license, pnl_help ] );
      pnl_enable.innerHTML = pnl_result.innerHTML = '';
      ui.displayed = []; // Reset display record
      if ( panel ) {
         _('#nav_top')[0].scrollIntoView( true );
         return _.show( panel );
      }
   },

   'show_result' : function ui_show_result( roots ) {
      ui.show_panel( pnl_result );
      // Find enabled entries for each result
      roots.forEach( function( root ) {
         var regx = ns.special_req[ root.name ];
         var enable = ns.all.filter( function( e ) {
            var req = ns.prereq( e );
            return req.indexOf( root.name ) >= 0
                || ( regx && req.join( ' ' ).match( regx ) )
                || ( e.upgrade && e.upgrade === root.name );
         });

         if ( enable.length > 0 ) {
            var result = ui.create_box( root );
            result.appendChild( _.create( 'div', { class: 'help', text: 'This entity enables the following:' } ) );
            enable.forEach( function(e) {
               result.appendChild( ui.create_box( e ) );
            });
            pnl_enable.appendChild( result );
            _.show( pnl_enable );
         }
      });
      ui.displayed = [];

      // Find requirements for each result
      roots.forEach( function( root ) {
         if ( ui.displayed.indexOf( root ) >= 0 ) return;
         var result = ui.box_recur( root );
         event.btn_desc_click( { target: _( result, '.desc' )[0] } ); // Show top level descriptions
         pnl_result.appendChild( result );
      });
   },

   'box_recur' : function ui_box_recur( root ) {
      var result = ui.create_box( root );
      if ( root.prereq ) {
         ns.prereq( root ).forEach( function recur_prereq( t ) {
            var e = ns.entity[ t ];
            if ( e ) {
               result.appendChild( ui.box_recur( e ) );
            } else {
               result.appendChild( ui.create_entity_box( t ) );
            }
         });
      } else {
         if ( _( result, '.treenode' ).length <= 0 )
            _.addClass( result, 'leaf' );
      }
      if ( root.upgrade ) { // Add lower tier entity as requirement
         var from = ns.entity[ root.upgrade ];
         if ( from ) result.appendChild( ui.box_recur( from ) );
      }
      return result;
   },
};

})( ufoal );   