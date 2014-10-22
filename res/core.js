var ufoal = (function ufoal_core(){ 'use strict';

var ns = { // Main namespace
  data: _.Map(), // raw game data
  txt: _.Map(), // text
  entity: _.Map(), // Entity lookup dict
};

ns.data.map_entity = function ufoal_data_map_entity ( data ) {
  var raw = ns.data[data], names = ns.txt.name;
  raw.forEach( function each_data( e ) {
    e.type = data;
    if ( e.id ) e.text = names[ e.id ];
    if ( e.name ) ns.entity[ e.name ] = e;
  });
}

return ns;

})();