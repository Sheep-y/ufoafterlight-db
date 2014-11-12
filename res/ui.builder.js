(function ufoal_ui_builder( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;
var txt = ns.txt;

ui.create_index = function ui_create_index() {
   var nav = _( '#nav_top' )[0];
   var top = _.create( 'ul' );
   for ( var type in ns.data ) {
      var cat = _.create( 'li', { text: ns.ucfirst( type ), id: type } );
      var list = _.create( 'ul' );
      var data = ns.data[ type ];
      var txtlist = _.col( ns.data[type], 'text' ).sort();
      txtlist.forEach( function create_index( e, i ) {
         if ( e && txtlist.indexOf( e ) === i ) {
            var li = _.create( 'li' );
            var name = ns.ucword( e );
            li.appendChild( _.create( 'a', { class: 'title', text: name, onclick: event.lnk_block_title_click, href: '?query=' + name } ) );
            list.appendChild( li );
         }
      });
      cat.appendChild( list );
      top.appendChild( cat );
      nav.appendChild( _.create( 'a', { href: '#' + type,text: ns.ucfirst( type )
         , class: 'f_left', onclick: event.btn_reset_click } ) );
   }
   _( '#pnl_index' )[0].appendChild( top );
};

ui.create_box = function ui_create_box( e ) {
   return ui[ 'create_' + e.type + '_box' ]( e );
};

ui.create_tech_box = function ui_create_tech_box( e ) {
   var orig = txt.tech_orig[ e.orig ];
   var result = ui.create_base_box( e, 'tech', 'icon_tech_'+orig.toLowerCase(), orig );
   return ui.create_help_buttons( result );
};

ui.create_building_box = function ui_create_building_box( e ) {
   var result = ui.create_base_box( e, 'building' );
   _( result, '.title' )[0].title = txt.building[ e.id + '_tip' ];
   ui.create_help_buttons( result );
   return result;
};

ui.create_item_box = function ui_create_item_box( e ) {
   var result = ui.create_base_box( e, 'item' );
   return ui.create_help_buttons( result );
};

ui.create_training_box = function ui_create_training_box( e ) {
   var result = ui.create_base_box( e, 'training' );
   return ui.create_help_buttons( result );
};

ui.create_station_box = function ui_create_station_box( e ) {
   var result = ui.create_base_box( e, 'station' );
   return ui.create_help_buttons( result );
};

/* Create a general entity box */
ui.create_entity_box = function ui_create_entity_box( e ) {
   var result = _.create( 'div', { 'class': 'entity treenode' } );
   var has_prereq = false;
   for ( var r in ns.special_req ) {
      // If special resources, add requirements
      if ( e.match( ns.special_req[r] ) ) {
         if ( ui.displayed.indexOf( r ) >= 0 ) result.className += ' collapsed';
         else ui.displayed.push( r );
         ui.create_fold_buttons( result );
         result.appendChild( ui.box_recur( ns.entity[r] ) );
         has_prereq = true;
      }
   }
   if ( e.match( /^[A-Z][a-z]+[1-7]$/ ) ) { // resource
      if ( ! has_prereq ) _.addClass( result, 'resource' );
      e = "Lv. " + e.substr( e.length-1 ) + " " + e.substr( 0, e.length-1 );
   } else {
      if ( txt.trigger[ e ] )
         e = txt.trigger[ e ];
      else
         e = ns.uncamel( e );
   }
   result.insertBefore( _.create( 'b', e ), result.firstChild );
   return result;
};

/** Basic box with title, icon, expand/collapse buttons, man days, and relevant logic */
ui.create_base_box = function ui_create_base_box( e, className, icon, alt ) {
   var result = _.create( 'div', { 'class': className + ' treenode', 'data-name': e.name } );
   if ( ! icon ) icon = 'icon_ui_' + className;
   if ( ! alt ) alt = ns.ucfirst( className );
   if ( ui.displayed.indexOf( e ) >= 0 ) result.className += ' collapsed';
   else ui.displayed.push( e );
   var name = ns.ucword( e.text );
   result.appendChild( _.create( 'a', { class: 'title', text: name, onclick: event.lnk_block_title_click, href: '?query=' + name } ) );
   if ( ns.type( e ) ) result.appendChild( _.create( 'span', ' (' + ns.type( e ) + ')' ) );
   result.appendChild( _.create( 'img', { class: 'icon', src: _('#'+icon)[0].src, alt: alt } ) );
   if ( e.day )       result.appendChild( _.create( 'span', { class: 'manday', text: e.day + ' man-days' } ) );
   else if ( e.hour ) result.appendChild( _.create( 'span', { class: 'manhour', text: e.hour + ' man-hours' } ) );
   return result;
};

ui.create_fold_buttons = function ui_create_help_buttons( e ) {
   e.appendChild( _.create( 'img', { class: 'collapse', src: _('#icon_ui_minus')[0].src, alt: 'Expand', tabindex: 0, 'aria-role': 'button', onclick: event.btn_collapse_click } ) );
   e.appendChild( _.create( 'img', { class: 'expand', src: _('#icon_ui_plus')[0].src, alt: 'Collapse', tabindex: 0, 'aria-role': 'button', onclick: event.btn_expand_click } ) );
   return e;
};

ui.create_help_buttons = function ui_create_help_buttons( e ) {
   ui.create_fold_buttons( e );
   e.appendChild( _.create( 'img', { class: 'desc', src: _('#icon_ui_desc')[0].src, alt: 'Descriptions', tabindex: 0, 'aria-role': 'button', onclick: event.btn_desc_click } ) );
   return e;
};

})( ufoal );