// <![CDATA[
(function ufoal_ui( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;

event.txt_search_input = function txt_search_input( evt ) {
  _.hide( '#lbl_not_found' );
  var val = _( '#txt_search')[0].value;
  if ( ! val ) return;
  var name = val.toLowerCase().split( ': ' );
  if ( name.length <= 1 ) name.unshift();
  var target = ns.data.tech.concat( ns.data.building ).filter( function(e){
    if ( ! e.text ) _.log( e );
    return e.text.toLowerCase() === name[1] && ( ! name[0] || e.type == name[0] );
  } );
  if ( target.length <= 0 ) return _.show( '#lbl_not_found' );
  history.pushState( {}, '', '#' + val );
  ui.show_result( target[0] );
};

event.btn_collapse_click = function btn_collapse_click( evt ) {
  _.addClass( evt.target.parentNode, 'collapsed' );
};

event.btn_expand_click = function btn_expand_click( evt ) {
  _.removeClass( evt.target.parentNode, 'collapsed' );
};

event.btn_desc_click = function btn_desc_click( evt ) {
  var box = evt.target.parentNode;

  // Remove description
  var help = _( box, '.help' );
  if ( help.length > 0 && help[0].parentNode === box )
    return box.removeChild( _( box, '.help' )[0] );

  // Create description
  var help = _.create( 'div', { 'class': 'help' } );
  var e = ns.entity[ box.dataset.name ];
  if ( e.type === 'tech' ) {
    help.innerHTML = ns.txt.tech[ e.id + '_b4' ] + '<hr/>' + ns.txt.tech[ e.id + '_done' ];
  } else {
    help.innerHTML = ns.txt[ e.type ][ e.id ];
  }
  var firstdiv = box.querySelector( 'div' );
  box.insertBefore( help, firstdiv && firstdiv.parentNode === box ? firstdiv : undefined );
};

event.lnk_license_click = function lnk_license_click( evt ) {
  evt.preventDefault();
  _.hide('#pnl_result');
  _.show('#pnl_license');
};

})( ufoal ); // ]]>