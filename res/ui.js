// <![CDATA[
(function ufoal_ui( ns ) { 'use strict';

var event = {}; // Event handlers are stored here


var ui = ns.ui = {
   'event' : event,
   'displayed' : [], // Displayed entity stack; cleared with each new result

   'init' : function ui_init() {
      _.hide( '.hide' );
      _.removeClass( '.hide' );
      _( '#title' )[0].textContent = document.title;
      document.head.appendChild( _.create( 'meta', { rel: 'apple-touch-icon', href: _('link[rel="icon"]')[0].href } ) );

      // Initialise searchable data list
      var data_search = _( '#data_search' )[0];
      var options = _.col( ns.all, 'text' ).sort()
      options.forEach( function each_option( e, i ) {
         if ( e && options.indexOf( e ) === i ) // Filter out empties and duplicates
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
      ui.displayed = []; // Reset display record
      pnl_result.innerHTML = '';
      return pnl_result;
   },

   'show_result' : function ui_show_result( roots ) {
      var pnl_result = ui.clear_result();
      roots.forEach( function( root ) {
         if ( ui.displayed.indexOf( root ) >= 0 ) return;
         var result = ui.box_recur( root );
         event.btn_desc_click( { target: _( result, '.desc' )[0] } ); // Show top level descriptions
         pnl_result.appendChild( result );
      });
   },

   'box_recur' : function ui_box_recur( root ) {
      var result = ui[ 'create_' + root.type + '_box' ]( root );
      if ( root.prereq ) {
         var req = root.prereq;
         if ( ! ( req instanceof Array ) ) req = Object.keys( req );
         _.log( req );
         req.forEach( function recur_prereq( t ) {
            var e = ns.entity[ t ];
            if ( e )
               result.appendChild( ui.box_recur( e ) );
            else
               result.appendChild( ui.create_entity_box( t ) );
         });
      } else {
         if ( _( result, '.treenode' ).length <= 0 )
            _.addClass( result, 'leaf' );
      }
      return result;
   },
};

})( ufoal ); // ]]>