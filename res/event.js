// <![CDATA[
(function ufoal_ui( ns ) { 'use strict';

var ui = ns.ui;
var event = ui.event;

event.txt_search_input = function txt_search_input( evt ) {
  _.hide( '#lbl_not_found' );
  var val = _( '#txt_search')[0].value.trim();
  if ( ! val ) return;
  var name = val.toLowerCase();
  var target = ns.all.filter( function(e){
    return e.text.toLowerCase() === name;
  });
  if ( target.length <= 0 ) return _.show( '#lbl_not_found' );
  history.pushState( {}, '', '?query=' + val );
  ui.show_result( target );
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
  ui.clear_result();
  _.hide('#pnl_result');
  _.show('#pnl_license');
};

})( ufoal ); // ]]>