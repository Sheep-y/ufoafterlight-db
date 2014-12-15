(function ufoal_ui_builder( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;
var txt = ns.txt;

ui.create_title = function ui_create_title( e ) {
   var iname = '';
   if ( typeof( e ) === 'string' ) e = ns.entity[ e ];
   else if ( ! ns.maindata( e ) ) iname = ' data-iname="' + _.escHtml( ns.iname( e ) ) + '"';
   var name = e.text.trim().replace( / *\([^)]*\)$/, '' );
   return '<a class="title" href="?query=' + encodeURIComponent( name ) + '" ' + iname + '>' + _.escHtml( name ) + '</a>';
}

ui.create_index = function ui_create_index() {
   var nav = _( '#nav_top' )[0];
   var top = _.create( 'ul' );
   var options = [];
   
   function MinorMajorAdvSorter( a, b ) {
      var aa = a.text.replace( /^Minor|^Major|^Advanced /, '' );
      var bb = b.text.replace( /^Minor|^Major|^Advanced /, '' );
      if ( aa === bb ) return _.sorter( 'text', 'reverse' )( a, b );
      return _.sorter()( aa, bb );
   }

   function createList( name, items, sorter ) {
      var cat = _.create( 'li' ), list = _.create( 'ul' ), created = _.Map(), html = '';
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
      top.appendChild( cat );
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
         var sorter = ( type === 'people' ) ? sorter = null
            : ( ( type === 'training' || type === 'station' ) ? sorter = MinorMajorAdvSorter
               : _.sorter( 'text' ) );
         createList( type, ns.data[type], sorter );
      }
   }
   _( '#pnl_index' )[0].appendChild( top );
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
}

ui.create_building_box = function ui_create_building_box( e ) {
   return create_base_box( e, 'building' );
};

ui.create_general_box = function ui_create_general_box( e, icon ) {
   return create_base_box( e, icon );
}

/* Create a general entity box */
ui.create_entity_box = function ui_create_entity_box( e ) {
   var className = 'entity treenode';
   var is_resource = e.match( /^[A-Z][a-z]+[1-7]$/ ), name;
   if ( is_resource ) { // resource
      name = "Lv. " + e.substr( e.length-1 ) + " " + e.substr( 0, e.length-1 );
   } else {
      name = txt.trigger[ e ] || ns.uncamel( e );
   }
   var result = '<b>' + _.escHtml( name ) + '</b>';
   for ( var r in ns.special_req ) {
      // If special resources, add requirements
      if ( e.match( ns.special_req[r] ) ) {
         if ( ui.displayed.indexOf( r ) >= 0 ) className += ' collapsed';
         else ui.displayed.push( r );
         result += create_fold_buttons();
         result += ui.box_recur( ns.entity[r] );
         is_resource = false; // Do not float like a resource
      }
   }
   if ( is_resource ) className += ' resource';
   result = '<div class="' + className + '">' + result + '</div>';
   return result;
};

/** Basic box with title, icon, expand/collapse buttons, man days, and relevant logic */
function create_base_box( e, className, icon, alt ) {
   if ( ! icon ) icon = 'icon_data_' + className;
   icon = _( '#'+icon )[0];
   if ( ! alt ) alt = ns.ucfirst( className );
   var type = ns.type( e );
   if ( ui.displayed.indexOf( e ) >= 0 ) className += ' collapsed';

   var result = '<div class="' + className + ' treenode" data-index="' + e.allIndex + '">';
   result += ui.create_title( e );
   if ( type )  result += ' (' + type + ')';
   result += '<img class="icon" src="' + _.escHtml( icon.src ) + '" alt="' + _.escHtml( alt ) + '"/>';
   if ( e.day ) result += '<span class="manday">' + _.escHtml( e.day + ' man-days' ) + "</span>";
   else if ( e.hour ) result += '<span class="manhour">' + _.escHtml( e.hour + ' man-hours' ) + "</span>";
   result += create_help_buttons();
   result += '</div>';

   if ( ui.displayed.indexOf( e ) < 0 ) ui.displayed.push( e );
   return result;
}

ui.res = {}; // Filled by ui.init
var aria_button = 'tabindex="0" aria-role="button"';

function create_fold_buttons() {
   return '<img class="collapse" src="' + ui.res.uri_minus + '" alt="Expand" '+aria_button+' onclick="ufoal.ui.event.btn_collapse_click(event)"/>'
     + '<img class="expand" src="' + ui.res.uri_plus + '" alt="Collapse" '+aria_button+' onclick="ufoal.ui.event.btn_expand_click(event)"/>';
}

function create_help_buttons() {
   return create_fold_buttons()
      + '<img class="desc" src="' + ui.res.uri_desc + '" alt="Descriptions" '+aria_button+' onclick="ufoal.ui.event.btn_desc_click(event)"/>';
}

})( ufoal );