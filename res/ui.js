// <![CDATA[
(function ufoal_ui( ns ) { 'use strict';

var event = {}; // Event handlers are stored here

var displayed = []; // Displayed entity stack; cleared with each new result

var ui = ns.ui = {
   'event' : event,

   'init' : function ui_init() {
      _.hide( '.hide' );
      _.removeClass( '.hide' );
      _( '#title' )[0].textContent = document.title;
      document.head.appendChild( _.create( 'meta', { rel: 'apple-touch-icon', href: _('link[rel="icon"]')[0].href } ) );

      // Initialise searchable data list
      var data_search = _( '#data_search' )[0];
      _.col( ns.all, 'text' ).sort().forEach( function each_option( e ) {
      if ( e )
         data_search.appendChild( _.create( 'option', { value: e } ) );
      });

      // Search handler
      var txt_search = _( '#txt_search' )[0];
      txt_search.addEventListener( 'input', event.txt_search_input );
      if ( location.search ) {
         var match = location.search.match( /\bquery=([^&]*)/ );
         if ( match.length ) txt_search.value = decodeURIComponent( match[1] );
      }
      event.txt_search_input();

      _.show( '#pnl_search' );
      //_( 'input[autofocus]' )[0].focus(); // Focus may cause browser to not trigger datalist dropdown.
      _( 'input[autofocus]' )[0].select();
   },

   'clear_result' : function ui_clear_result() {
      _.hide('#pnl_license');
      var pnl_result = _.show( '#pnl_result' )[0];
      displayed = []; // Reset display record
      pnl_result.innerHTML = '';
      return pnl_result;
   },

   'show_result' : function ui_show_result( roots ) {
      var pnl_result = ui.clear_result();
      roots.forEach( function( root ) {
      var result = ui.box_recur( root );
      event.btn_desc_click( { target: _( result, '.desc' )[0] } ); // Show top level descriptions
      pnl_result.appendChild( result );
      });
   },

   'box_recur' : function ui_box_recur( root ) {
      var result = ui[ 'create_' + root.type + '_box' ]( root );
      if ( root.prereq ) {
         for ( var t in root.prereq ) {
            var e = ns.entity[ t ];
            if ( e )
               result.appendChild( ui.box_recur( e ) );
            else
               result.appendChild( ui.create_entity_box( t ) );
         }
      } else {
      _.addClass( result, 'leaf' );
      }
      return result;
   },

   'create_tech_box' : function ui_create_tech_box( e ) {
      var orig = ns.txt.tech_orig[ e.orig ];
      var result = ui.create_box( e, 'tech', 'icon_tech_'+orig.toLowerCase(), orig );
      return ui.create_help_buttons( result );
   },

   'create_building_box' : function ui_create_building_box( e ) {
      var result = ui.create_box( e, 'building', 'icon_ui_building', 'Building' );
      _( result, 'b' )[0].title = ns.txt.building[ e.id + '_tip' ];
      return ui.create_help_buttons( result );
   },

   'create_box' : function ui_create_box( e, className, icon, alt ) {
      var result = _.create( 'div', { 'class': className + ' treenode', 'data-name': e.name } );
      if ( displayed.indexOf( e ) >= 0 ) result.className += ' collapsed';
      else displayed.push( e );
      result.appendChild( _.create( 'b', e.text ) );
      result.appendChild( _.create( 'img', { 'class': 'icon', src: _('#'+icon)[0].src, alt: alt } ) );
      if ( e.day )       result.appendChild( _.create( 'span', { 'class': 'manday', text: e.day + ' man days' } ) );
      else if ( e.hour ) result.appendChild( _.create( 'span', { 'class': 'manhour', text: e.hour + ' man hours' } ) );
      return result;
   },

   'create_fold_buttons' : function ui_create_help_buttons( e ) {
      e.appendChild( _.create( 'img', { 'class': 'collapse', src: _('#icon_ui_minus')[0].src, alt: 'Expand', 'tabindex': 0, 'aria-role': 'button', onclick: event.btn_collapse_click } ) );
      e.appendChild( _.create( 'img', { 'class': 'expand', src: _('#icon_ui_plus')[0].src, alt: 'Collapse', 'tabindex': 0, 'aria-role': 'button', onclick: event.btn_expand_click } ) );
      return e;
   },

   'create_help_buttons' : function ui_create_help_buttons( e ) {
      ui.create_fold_buttons( e );
      e.appendChild( _.create( 'img', { 'class': 'desc', src: _('#icon_ui_desc')[0].src, alt: 'Descriptions', 'tabindex': 0, 'aria-role': 'button', onclick: event.btn_desc_click } ) );
      return e;
   },

   /* Create a general entity box */
   'create_entity_box' : function ui_create_entity_box( e ) {
      var result = _.create( 'div', { 'class': 'entity treenode' } );
      if ( e.match( /^[A-Z][a-z]+[1-7]$/ ) ) { // resource
      var req = { 'T_CrystalMining': /^Crystals\d$/, 'T_NobleMetalMining': /^Noble\d$/, 'FossilePowerUpgrade': /^Energy[45]$/, 'AlienPowerUpgrade': /^Energy[678]$/ };
      for ( var r in req ) {
         if ( e.match( req[r] ) ) {
            if ( displayed.indexOf( r ) >= 0 ) result.className += ' collapsed';
            else displayed.push( r );
            ui.create_fold_buttons( result );
            result.appendChild( ui.box_recur( ns.entity[r] ) );
            req = null;
            break;
         }
      }
      if ( req ) _.addClass( result, 'resource' );
      e = "Lv. " + e.substr( e.length-1 ) + " " + e.substr( 0, e.length-1 );
      } else {
      e = e.split( /(?=[A-Z0-9])/ ).join( ' ' ).trim();
      }
      result.insertBefore( _.create( 'b', e ), result.firstChild );
      return result;
   },
};

})( ufoal ); // ]]>