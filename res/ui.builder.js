// <![CDATA[
(function ufoal_ui_builder( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;

ui.create_box = function ui_create_box( e ) {
  return ui[ 'create_' + e.type + '_box' ]( e );
};

ui.create_tech_box = function ui_create_tech_box( e ) {
   var orig = ns.txt.tech_orig[ e.orig ];
   var result = ui.create_base_box( e, 'tech', 'icon_tech_'+orig.toLowerCase(), orig );
   return ui.create_help_buttons( result );
};

ui.create_building_box = function ui_create_building_box( e ) {
   var result = ui.create_base_box( e, 'building', 'icon_ui_building', 'Building' );
   _( result, '.title' )[0].title = ns.txt.building[ e.id + '_tip' ];
   ui.create_help_buttons( result );
   if ( e.upgrage ) { // Add lower tier building as requirement
      var from = ns.entity[ e.upgrade ];
      if ( from ) result.appendChild( ui.box_recur( from ) );
   }
   return result;
};

ui.create_item_box = function ui_create_item_box( e ) {
   var result = ui.create_base_box( e, 'item', 'icon_ui_item', 'Item' );
   return ui.create_help_buttons( result );
};

/* Create a general entity box */
ui.create_entity_box = function ui_create_entity_box( e ) {
   var result = _.create( 'div', { 'class': 'entity treenode' } );
   if ( e.match( /^[A-Z][a-z]+[1-7]$/ ) ) { // resource
   var req = { 'T_CrystalMining': /^Crystals\d$/, 'T_NobleMetalMining': /^Noble\d$/, 'FossilePowerUpgrade': /^Energy[45]$/, 'AlienPowerUpgrade': /^Energy[678]$/ };
   for ( var r in req ) {
      // If special resources, add requirements
      if ( e.match( req[r] ) ) {
         if ( ui.displayed.indexOf( r ) >= 0 ) result.className += ' collapsed';
         else ui.displayed.push( r );
         ui.create_fold_buttons( result );
         result.appendChild( ui.box_recur( ns.entity[r] ) );
         req = null;
         break;
      }
   }
   if ( req ) _.addClass( result, 'resource' );
      e = "Lv. " + e.substr( e.length-1 ) + " " + e.substr( 0, e.length-1 );
   } else {
      e = ns.uncamel( e );
   }
   result.insertBefore( _.create( 'b', e ), result.firstChild );
   return result;
};

ui.create_base_box = function ui_create_base_box( e, className, icon, alt ) {
   var result = _.create( 'div', { 'class': className + ' treenode', 'data-name': e.name } );
   if ( ui.displayed.indexOf( e ) >= 0 ) result.className += ' collapsed';
   else ui.displayed.push( e );
   result.appendChild( _.create( 'a', { class: 'title', text: e.text, onclick: event.lnk_block_title_click } ) );
   result.appendChild( _.create( 'img', { class: 'icon', src: _('#'+icon)[0].src, alt: alt } ) );
   if ( e.day )       result.appendChild( _.create( 'span', { class: 'manday', text: e.day + ' man days' } ) );
   else if ( e.hour ) result.appendChild( _.create( 'span', { class: 'manhour', text: e.hour + ' man hours' } ) );
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

})( ufoal ); // ]]>