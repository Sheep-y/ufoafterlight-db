(function ufoal_ui_builder( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;
var txt = ns.txt;

ui.create_title = function ui_create_title( e ) {
   if ( typeof( e ) === 'string' ) e = ns.entity[ e ];
   var title = ns.get_hint( e ), attr = '';
   var name = e.text.trim().replace( / *\([^)]*\)$/, '' );
   if ( title ) attr += ' title="' + _.escHtml( title ) + '"';
   if ( ! ns.maindata( e ) ) attr += ' data-iname="' + _.escHtml( ns.iname( e ) ) + '"';
   return '<a class="title" href="?query=' + encodeURIComponent( name ) + '" ' + attr + '>' + _.escHtml( name ) + '</a>';
};

ui.create_index = function ui_create_index() {
   var nav = _( '#nav_top' )[0];
   var body = _.create( 'ul' );
   var options = []; // Auto complete list
   var plain_sorter = _.sorter(), rev_text_sorter = _.sorter( 'text', 'reverse' );

   function MinorMajorAdvSorter( a, b ) { // Sort *after* discarding leading major/minor.
      var aa = a.text.replace( /^Minor|^Major|^Advanced /, '' );
      var bb = b.text.replace( /^Minor|^Major|^Advanced /, '' );
      if ( aa === bb ) return rev_text_sorter( a, b );
      return plain_sorter( aa, bb );
   }

   function createList( name, items, sorter ) {
      var cat = _.create( 'li' ), list = _.create( 'ul' );
      var html = '', created = _.Map(), map = ns.maps.compare[ name ];
      if ( map ) {
         for ( var title in map ) {
            html += '<a class="title" href="?compare=' + map[ title ] + '">(' + _.escHtml( title ) + ')</a>';
         }
      }
      items = items.filter( function( e ){ return e; } );
      if ( sorter ) items.sort( sorter );
      items.forEach( function create_index( e ) {
         var txt = e.text;
         if ( ! created[ txt ] ) {
            html += ui.create_title( e );
            if ( e.type !== 'unit' && e.type !== 'squad' && options.indexOf( txt ) < 0 )
               options.push( txt );
            created[ txt ] = true;
         }
      });
      list.innerHTML = html;
      cat.appendChild( _.create( 'span', { text: ns.ucfirst( name ), id: name } ) );
      cat.appendChild( list );
      body.appendChild( cat );
      nav.appendChild( _.create( 'a', { href: '?#' + name, text: ns.ucfirst( name ), class: 'f_left', onclick: event.btn_reset_click } ) );
   }

   // Create item index
   var items = _.Map();
   ns.data.item.forEach( function each_item_index( e ) {
      var type = 'item';
      if ( e.isvisible === 0 ) type = 'system';
      else if ( e.weapon ) type = e.weapon.ammo ? 'weapon' : 'item';
      else if ( e.armour ) type = 'armour';
      else if ( e.ammo ) type = 'ammo';
      else if ( e.addon ) type = 'addon';
      if ( ! items[type] ) items[type] = [];
      items[type].push( e );
   });
   // List items in this order
   [ 'armour','weapon','ammo','addon','item','system' ].forEach( function each_item_type_index( type ) {
      if ( items[type] ) createList( type, items[type] );
   });

   // Create other indexes
   for ( var type in ns.data ) {
      if ( type !== 'item' ) {
         var sorter = ( type === 'people' ) ? null
            : ( ( type === 'training' || type === 'station' ) ? MinorMajorAdvSorter
               : _.sorter( 'text' ) );
         createList( type, ns.data[type], sorter );
      }
   }
   _( '#pnl_index' )[0].appendChild( body );
   return options;
};

ui.create_box = function ui_create_box( e ) {
   var method = 'create_' + e.type + '_box';
   if ( ! ui[ method ] ) method = 'create_general_box';
   return ui[ method ]( e, e.type );
};

ui.create_tech_box = function ui_create_tech_box( e ) {
   var orig = txt.tech_orig[ ~~e.orig ].toLowerCase();
   return create_base_box( e, 'tech', 'icon_tech_'+orig, orig );
};

ui.create_item_box = function ui_create_item_box( e ) {
   return create_base_box( e, 'item', 'icon_item_general' );
};

ui.create_general_box = function ui_create_general_box( e, icon ) {
   return create_base_box( e, icon );
};

/* Create a general entity box */
ui.create_entity_box = function ui_create_entity_box( e ) {
   var result = _.create( 'div' ), className = 'entity treenode';
   var is_resource = e.match( /^[A-Z][a-z]+[1-7]$/ ), name;
   if ( is_resource ) { // resource
      name = "Lv. " + e.substr( e.length-1 ) + " " + e.substr( 0, e.length-1 );
   } else {
      name = txt.trigger[ e ] || ns.uncamel( e );
   }
   result.innerHTML = '<b>' + _.escHtml( name ) + '</b>';
   for ( var r in ns.maps.special_req ) {
      // If special resources, e.g. TwoMartianArtifacts, add requirements
      if ( e.match( ns.maps.special_req[r] ) ) {
         if ( ui.displayed.indexOf( r ) >= 0 ) className += ' collapsed';
         else ui.displayed.push( r );
         result.innerHTML += create_fold_buttons(); // Inefficient but happens rarely
         result.appendChild( ui.box_recur( ns.entity[r] ) );
         is_resource = false; // Do not float like a resource
         break;
      }
   }
   if ( is_resource ) className += ' resource';
   result.className = className;
   return result;
};

/** Basic box with title, icon, expand/collapse buttons, man days, and relevant logic */
function create_base_box( e, className, icon, alt ) {
   if ( ! icon ) icon = 'icon_data_' + className;
   if ( ! alt ) alt = ns.ucfirst( className );
   if ( ui.displayed.indexOf( e ) >= 0 ) className += ' collapsed';

   var html = '<div class="' + _.escHtml( className ) + ' treenode" data-index="' + e.allIndex + '">';
   html += '<div class="icon ' + icon + '" title="' + _.escHtml( alt ) + '"></div>' + ui.create_title( e );
   var type = ns.type( e );
   if ( type )  html += ' (' + type + ')';
   if ( ! ui.comparing ) {
      if ( e.day ) html += '<span class="manday">' + _.escHtml( e.day + ' man-days' ) + "</span>";
      else if ( e.hour ) html += '<span class="manhour">' + _.escHtml( e.hour + ' man-hours' ) + "</span>";
      html += create_fold_buttons();
   }
   html += '<div class="desc icon icon_ui_desc" title="Descriptions" tabindex="0" aria-role="button" onclick="ufoal.ui.event.btn_desc_click(event)"></div>';
   html += '</div>';

   if ( ui.displayed.indexOf( e ) < 0 ) ui.displayed.push( e );
   return ui.to_dom( html );
};

function create_fold_buttons() {
   return '<div class="collapse icon icon_ui_minus" title="Collapse" tabindex="0" aria-role="button" onclick="ufoal.ui.event.btn_collapse_click(event)"></div>' +
          '<div class="expand   icon icon_ui_plus " title="Expand"   tabindex="0" aria-role="button" onclick="ufoal.ui.event.btn_expand_click(event)"  ></div>' ;
};

ui.create_desc = function ui_create_desc( e ) {
   var html = '<div class="help">';
   if ( ui.compared.indexOf( e ) < 0 ) {
      html += '<div class="icon icon_ui_plus clipicon" title="Add to compare"';
   } else {
      html += '<div class="icon icon_ui_minus clipicon" title="Remove from compare"';
   }
   html += ' tabindex="0" aria-role="button" onclick="ufoal.ui.event.btn_clipboard_click(event)"></div>';
   html += '<div class="icon icon_ui_clipboard" style="float:right"></div>';
   html += ns.get_desc( e );
   return ui.to_dom( html + '</div>' );
};

})( ufoal );