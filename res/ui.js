(function ufoal_ui( ns ) { 'use strict';

var event = {}; // Event handlers are stored here

var pnl_help = _( '#pnl_help' )[0];
var pnl_index = _( '#pnl_index' )[0];
var pnl_compare = _( '#pnl_compare' )[0];
var pnl_compare_content = _( '#pnl_compare_content' )[0];
var pnl_result = _( '#pnl_result' )[0];
var pnl_enable = _( '#pnl_enable' )[0];
var pnl_license = _( '#pnl_license' )[0];
var txt_search = _( '#txt_search' )[0];
var time_log = _( '#lbl_time_log' )[0];

var ui = ns.ui = {
   'event' : event,
   'comparing' : true, // True if building compare screen.
   'is_tech' : false, // Whether current stack contains technology, hide trainings if so.
   'displayed' : [], // Displayed entity stack; cleared with each new result
   'compared' : [], // List of entities being compared.
   'compare_undo' : [], // Undo state, just snapshots of compared.
   'compare_redo' : [], // Redo state, just snapshots of compared.

   'init' : function ui_init() {
      _.hide( '.hide' );
      _.removeClass( '.hide' );
      _( '#title' )[0].textContent = document.title;
      document.head.appendChild( _.create( 'meta', { rel: 'apple-touch-icon', href: _( '#favicon' )[0].href } ) );
      window.addEventListener( 'popstate', event.window_popstate );
      _.attr( 'a[href^="?query="]', { onclick: event.lnk_internal_click } );

      // Initialise index and searchable data list
      var options = ui.create_index(), html = '';
      options.forEach( function each_option( e ) {
         html += '<option value="' + _.escHtml( e ) + '"/>';
      });
      _( '#data_search' )[0].innerHTML = html;
      ui.log_time( 'UI built' );
      _.show( pnl_search );

      // Update query from url
      if ( ! window.localStorage || localStorage.getItem( 'sheepy.ufoal.ran' ) || location.hash || location.search ) {
         event.window_popstate();
      } else {
         event.lnk_help_click();
      }

      //txt_search.focus(); // Focus may cause browser to not trigger datalist dropdown.
      txt_search.select();
      ui.log_time( 'UI displayed' );
   },

   'log' : function ui_log( msg ) {
      time_log.appendChild( _.create( 'span', msg ) );
      time_log.appendChild( _.create( 'br' ) );
   },

   'log_time' : function ui_log_time( msg, err, time ) {
      time = _.time( msg );
      ui.log( msg + ' in ' + Math.min( time[0], time[1] ) + 'ms' );
      if ( err ) {
         clearTimeout( errTimeout );
         if ( time ) errTimeout = setTimeout( function(){ msg.textContent = 'Error when ' + err; }, time * 1000 );
      }
   },

   'find_query'   : function ui_find_query()   { return find_url_param( /[?&]query=([^&]*)/   ); },
   'find_compare' : function ui_find_compare() { return find_url_param( /[?&]compare=([^&]*)/ ); },

   'is_typing' : function ui_is_typing() {
      return document.activeElement && document.activeElement === txt_search;
   },

   'to_dom' : function ui_html( html ) {
      return document.createRange().createContextualFragment( html ).firstElementChild;
   },

   'notify_update' : function ui_mark_update( details ) {
      var link = '<a href="https://github.com/Sheep-y/ufoafterlight-db/"';
      _( '#nav_top' )[0].insertAdjacentHTML( 'afterbegin', link + ' class="error">Update availabe!</a><br/>' );
      _( '#pnl_help' )[0].insertAdjacentHTML( 'afterbegin', '<div id="lbl_update" class="help"><h1>New Version Available!</h1>' + link + '>[ [ Download from homepage ] ]</a><br/>' + details + '</div>' );
   },

   'search' : function ui_search( val ) {
      _.hide( '#lbl_not_found' );
      _.time(); // Reset timer
      var target = [], sys = [];
      if ( ns.entity[ val ] ) {
         target = [ ns.entity[ val ] ];
      } else {
         // Match id first
         if ( val.match( /^\d+$/ ) ) {
            val = +val;
            target = ns.all.filter( function( e ){ return e.id === id; } );
         }
         // If no match, try to match names of normal entities
         if ( target.length <= 0 ) {
            var name = val.toLowerCase();
            target = ns.all.filter( function( e ){
               if ( e.text.toLowerCase() === name ) {
                  if ( ns.maindata( e ) ) return true;
                  sys.push( e );
               }
            } );
         }
         // Show system entites if there are no other matches
         if ( target.length <= 0 ) target = sys;
         if ( target.length <= 0 ) return _.show( '#lbl_not_found' ) && false;
      }
      ui.log_time( target.length + ' row(s) matched "' + val + '"' );
      ui.show_result( target );
      return true;
   },

   // Update display to match current input / uri state
   'update_state' : function ui_update_state() {
      var hash = location.hash, e = null;
      var query = ui.find_query();
      var comp = ui.find_compare();
      if ( hash === '#' ) hash = '';
      if ( ! hash && ! query && ! comp ) return ui.show_panel( pnl_index );

      e = hash ? _( '#pnl_index ' + hash ) : [];
      if ( hash === '#license' || hash === '#help' || e.length > 0 ) {
         txt_search.value = '';
         if ( e.length ) {
            ui.show_panel( pnl_index );
            _( hash )[0].scrollIntoView();
         } else {
            ui.show_panel( '#pnl_' + hash.substr( 1 ) );
         }
      } else if ( comp ) {
         ui.compare( comp );
      } else {
         txt_search.value = query;
         if ( query ) ui.search( query );
      }
   },

   'show_panel' : function ui_show_panel( panel ) {
      _.hide( [ pnl_index, pnl_result, pnl_compare, pnl_enable, pnl_license, pnl_help ] );
      _.clear( [ pnl_enable, pnl_result, pnl_compare_content ] );
      ui.displayed.length = 0; // Reset display record
      if ( panel ) {
         _('#nav_top')[0].scrollIntoView( true );
         return _.show( panel );
      }
   },

   'show_result' : function ui_show_result( roots ) {
      ui.comparing = false;
      ui.show_panel( pnl_result );

      // Find requirements for each result
      roots.forEach( function each_result( root ) {
         if ( ui.displayed.indexOf( root ) >= 0 ) return;
         var result = ui.box_recur( root );
         pnl_result.appendChild( result );
         _( result, '.desc' )[0].click(); // Show top level descriptions
      });
      ui.log_time( 'Requirement tree built' );

      // Reverse lookup
      ui.displayed.length = 0;
      roots.forEach( function( root ) {
         var regx = ns.maps.special_req[ root.name ], data = ns.data;
         var lookup = { enable: [], used: [], addons: [] };
         lookup.enable = ns.all.filter( function filter_enable( e ) {
            var req = ns.prereq( e );
            return req.indexOf( root.name ) >= 0
                || ( regx && req.join( ' ' ).match( regx ) )
                || ( e.upgrade && e.upgrade === root.name );
         });
         if ( root.type === 'item' || root.type === 'training' ) {
            // Find subraces with armour
            if ( root.armour ) {
               lookup.used = lookup.used.concat( data.subrace.filter( function filter_used_subrace( e ) {
                  return _.col( e.armour, 'armour' ).indexOf( root.name ) >= 0;
               }) );
            }
            // Find units with equipment
            lookup.used = lookup.used.concat( data.unit.filter( function filter_used_unit( e ) {
               return e.hasEntity.indexOf( root.name ) >= 0;
            }) );
            if ( root.slots ) {
               // Find usable addons
               lookup.addons = data.item.filter( function filter_addon( e ) {
                  return e.addon && e.addon.addonslot.some( function( slot ) {
                     return root.slots.indexOf( slot ) >= 0;
                  });
               });
            } else if ( root.addon ) {
               // Find usable weapon / armour
               lookup.addons = data.item.filter( function filter_addon_reverse( e ) {
                  return e.slots && e.slots.some( function( slot ) {
                     return root.addon.addonslot.indexOf( slot ) >= 0;
                  });
               });
            }
         }

         if ( lookup.enable.length || lookup.used.length || lookup.addons.length ) {
            var desc = { 'enable': 'Enables', 'used': 'Used by:', 'addons': 'Add-ons:' };
            var result = ui.create_box( root );
            for ( var type in desc ) {
               if ( lookup[ type ].length ) {
                  var div = _.create( 'div', { class: 'help', text: desc[ type ] } );
                  result.appendChild( div );
                  lookup[ type ].forEach( function each_enable( e ) {
                     div.appendChild( ui.create_box( e ) );
                  });
               }
            }
            pnl_enable.appendChild( result );
            _.show( pnl_enable );
         }
      });
      ui.log_time( 'Dependency tree built' );
   },

   'box_recur' : function ui_box_recur( root, stack ) {
      if ( ! stack ) stack = [];
      var result = ui.create_box( root );
      if ( root.prereq ) {
         var orig_is_tech = ui.is_tech;
         if ( root.type === 'tech' ) ui.is_tech = true;
         ns.prereq( root ).forEach( function recur_prereq( t ) {
            if ( stack.indexOf( t ) >= 0 ) return;
            else stack.push( t );
            var e = ns.entity[ t ];
            if ( e ) {
               // Do not show trainings for items in tech tree.
               if ( ui.is_tech && e.type === 'training' ) return;
               result.appendChild( ui.box_recur( e, stack ) );
            } else {
               result.appendChild( ui.create_entity_box( t ) );
            }
            --stack.length;
         });
         ui.is_tech = orig_is_tech;
      }
      if ( root.upgrade ) { // Add lower tier entity as requirement
         var from = ns.entity[ root.upgrade ];
         if ( from ) result.appendChild( ui.box_recur( from, stack ) );
      }
      return result;
   },

   'update_compare' : function ui_update_compare() {
      var len = ui.compared.length;
      var lnk_compare = _( '#lnk_compare' )[0];
      if ( len ) {
         _( '#lbl_compare_count' )[0].textContent = len;
         lnk_compare.href = "?compare=" + _.col( ui.compared, 'name' ).join( ';' );
         lnk_compare.title =  _.col( ui.compared, 'text' ).join( ', ' );
      } else {
         lnk_compare.href = "?compare=";
         lnk_compare.title = '';
      }
      _.attr( '#btn_compare_clear', { 'disabled' : len ? undefined : 'disabled' } );
      _.attr( '#btn_compare_undo' , { 'disabled' : ui.compare_undo.length ? undefined : 'disabled' } );
      _.attr( '#btn_compare_redo' , { 'disabled' : ui.compare_redo.length ? undefined : 'disabled' } );
      if ( ( ! ui.comparing ) && ui.find_compare() !== null ) _('#lnk_compare')[0].click();
   },

   'compare' : function ui_compare( list ) {
      _.time(); // Reset timer
      ui.show_panel( pnl_compare );
      if ( list === '' ) return pnl_compare_content.textContent = 'You can add entries for comparison by clicking the clipboard button in entry description.';
      if ( typeof( list ) === 'string' ) list = list.split( /;/ );
      ui.comparing = true;
      ui.compared = []; // Keeping one compare state is simpler and more reliable. Should not affect undo/redo.
      ui.displayed.length = 0;
      list.forEach( function each_compared( e ) {
         e = ns.entity[ e ];
         ui.compared.push( e );
         var box = ui.create_box( e );
         box.classList.add( 'f_left' );
         pnl_compare_content.appendChild( box );
         _( box, '.desc' )[0].click(); // Show top level descriptions
      });
      ui.update_compare();
      ui.comparing = false;
      ui.log_time( list.length + ' entites compared' );
   },

   'save_compare' : function ui_save_compare() {
      ui.compare_redo = [];
      ui.compare_undo.push( ui.compared.concat() );
   },

   'undo_compare' : function ui_undo_compare() {
      if ( ui.compare_undo.length ) {
         ui.compare_redo.push( ui.compared );
         ui.compared = ui.compare_undo.pop();
      }
      ui.update_compare();
   },

   'redo_compare' : function ui_redo_compare() {
      if ( ui.compare_redo.length ) {
         ui.compare_undo.push( ui.compared );
         ui.compared = ui.compare_redo.pop();
      }
      ui.update_compare();
   },
};

function find_url_param( regx ) {
   if ( location.search ) {
      var match = location.search.match( regx );
      if ( match && match.length ) return decodeURIComponent( match[1] ).trim();
   }
   return null;
}

})( ufoal );

/* This is supposed to catch unintended page refesh.  Unfortunately that never happens in debug mode!
window.onbeforeunload = function(e) {
  debugger;
  return 'stop!';
};
*/