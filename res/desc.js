(function ufoal_desc( ns ){ 'use strict';

var txt = ns.txt, br = '<br/>', hr = '<hr/>', sp = ' &nbsp; &nbsp; ';

/** Return the description of any entity */
ns.get_desc = function ufoal_get_desc( e ) {
   var content = 'Id: ' + e.id + ', ' + e.name;
   if ( e.unknown ) 
      content += br + '<b>This entry is unused in the final game</b>';
   content += hr;
   if ( e.type === 'tech' ) {
      content += txt.tech[ e.id + '_b4' ] + hr + ns.txt.tech[ e.id + '_done' ];
   } else if ( e.type === 'training' ) {
      content += txt.training[ e.id + "_desc" ] + hr + 'Effect: ' + ns.uncamel( e.effect );
   } else {
      var method = 'get_' + e.type + '_desc';
      if ( ! ns[ method ] ) method = 'get_general_desc';
      content += ns[ method ]( e );
   }
   return content;
};

/** Description for entities other then technologies */
ns.get_general_desc = function ufoal_get_general_desc( e ) {
   var txt = ns.txt[ e.type ];
   return txt && txt[ e.id ] ? txt[ e.id ] : '(Internal data; no description)';
};

function percent( v ) { return Math.round(v*100, 3) + '%'; }
function second( t ) { return Math.round(t/10, 3) + '&thinsp;s.'; }

ns.get_item_desc = function ufoal_get_item_desc( e ) {
   var sub, result = [ ns.get_general_desc( e ) + hr ], ui = ns.ui;
   function add( t ) { result.push( t ); }
   if ( e.weight ) add( 'Weight: ' + e.weight + ' kg' );
   if ( e.startquantity ) add( 'Starts game with: ' + e.startquantity + ' pieces' );
   if ( e.manufacturable ) {
      sub = e.manufacturable;
      if ( sub.assemblytime ) add( 'Assembly line: ' + sub.assemblytime + ' man-days to setup' );
      if ( sub.manufacturingtime ) add( 'Produce: ' + sub.manufacturingtime + ' man-days per piece' );
   }

   if ( e.armour ) {
      sub = e.armour;
      add( hr );
      if ( sub.headslotIndex && sub.handslotIndex ) add( 'Addon slots: 2' );
      else if ( sub.headslotIndex || sub.handslotIndex ) add( 'Addon slot: 1' );
      if ( sub.maxhostility ) add( 'Env. Resist: ' + sub.maxhostility );
      if ( sub.protection ) sub.protection.forEach( function( e, i ) {
         if ( i ) add( txt.damage_type[i] + ': ' + percent( e ) );
      });
   }

   if ( e.ammo ) {
      sub = e.ammo;
      add( hr );
      if ( sub.capacity ) add( 'Ammo capaticy: ' + sub.capacity );
      if ( sub.isrechargable ) add( '(Recharge at base)' );
      if ( ! e.weapon ) {
         for ( var wid in ns.data.item ) {
            var w = ns.data.item[ wid ];
            if ( w.weapon && w.weapon.ammo ) {
               w.weapon.ammo.forEach( function ammo_match_each( ammo ) {
                  if ( ammo.ammoIT === e.name && ammo.wam ) {
                     if ( w ) {
                        add( br + ui.create_html_title( w ) );
                        w = null;
                     }
                     add( ammo.wam.map( ns.get_ammo_desc ).join( br ) );
                  }
               });
            }
         }
      }
   }

   if ( e.weapon ) {
      var slot = [];
      sub = e.weapon;
      add( '<hr/>' );
      // TODO: Add shapeIndex
      if ( sub.muzzleslotIndex ) slot.push( 'Muzzle' );
      if ( sub.visorslotIndex ) slot.push( 'Scope' );
      if ( sub.additionalslotIndex ) slot.push( 'Underbarrel' );
      if ( sub.origin ) add( 'Type: ' + ns.uncamel( txt.weapon_origin[ sub.origin ] ) ) ;
      if ( slot.length ) add( 'Addons: ' + slot.join( ', ' ) );
      if ( sub.deploytime ) add( 'Deploy: ' + second( sub.deploytime ) );

      if ( sub.ammo ) { sub.ammo.forEach( function( ammo ) {
         add( ' ' );
         var clip = ns.entity[ ammo.ammoIT ];
         var line = ui.create_html_title( clip );
         if ( clip.ammo.capacity ) line += ' (' + clip.ammo.capacity + ')';
         if ( ammo.reloadtime ) line +=' Reload ' + second( ammo.reloadtime );
         add( line );
         if ( ammo.wam ) { 
            add( ammo.wam.map( ns.get_ammo_desc ).join( br ) );
         }
      });}
   }
   return result.join( br ).replace( /(<br\/>)*<hr\/>(<[bh]r\/>)+/g, hr );
};

ns.get_ammo_desc = function ufoal_get_ammo_desc( wam ) {
   var indent = br + sp;
   var line = wam.weaponmode ? ns.uncamel( wam.weaponmode ) : 'Attack';
   if ( wam.rounds && wam.rounds > 1 ) line += ' (x' + wam.rounds + ')';
   if ( wam.consumption && wam.consumption > 1 ) line += ' (' + wam.consumption + ' ammo per shot)';
   if ( wam.timetofire && wam.timetofire > 1 ) line += ', ' + second( wam.timetofire ) + ' warm up';
   if ( wam.timeeffect ) {
      line += indent + ' "' + wam.timeeffect + '" effect'
         + ( wam.effectprobability < 1 ? ' ' + percent( wam.effectprobability ) + ' chance' : '' );
   }
   line += indent;
   if ( wam.strength && wam.dmgtype ) line += ' ' + wam.strength + ' ' + wam.dmgtype + ' damage';

   var sub = null;
   if ( wam.ranged ) sub = wam.ranged;
   else if ( wam.close ) sub = wam.close;
   if ( sub ) {
      if ( sub.range ) line += ' ' + sub.range + ' m';
      if ( sub.aimingtime ) line += ' ' + second( sub.aimingtime );
      if ( sub.accuracy && sub.accuracy < 10 ) line += ', accuracy x' + sub.accuracy;
   }

   if ( wam.radius ) {
      sub = wam.radius;
      if ( sub.visiblitytypeid ) line += ' ' + sub.visiblitytypeid;
      if ( sub.radius ) line += ' radius ' + sub.radius + ' m';
      if ( sub.angle ) line += ' ∠' + sub.angle + 'º';
   }

   if ( wam.autonom ) {
      sub = wam.autonom;
      if ( sub.visibility ) {
         var vis = sub.visibility
         line += br + br + 'Range: ';
         for ( var v in vis ) {
            if ( vis[v] ) line += v + ': ' + percent( vis[ v ] ) + ', ';
         }
         line = line.substr( 0, line.length-2 );
      }
   }
   return line;
}

ns.get_race_desc = function ufoal_get_race_desc( e ) {
   var profile = '', result = '', tsenses = txt.sense;
   result += ( e.organic ? "O" : "Ino" ) + 'rganic race' + br + br + 'Senses' + br;
   e.senses.forEach( function each_sense( e, i ) {
      if ( ! i || ! e.shine ) return;
      profile += sp + tsenses[ i ] + ': ' + percent( e.shine ) + br;
      if ( e.active ) {
         result += sp + tsenses[ i ] + ': ' + percent( e.active.range );
         if ( e.active.angle !== 1 ) result += ' ∠ x'+ e.active.angle;
         result += br;
      }
   });
   result += br + 'Attributes' + br;
   e.attributes.forEach( function each_attr( e ) {
      result += sp + ns.uncamel( e ) + br;
   });
   result += br + 'Visibility' + br + profile;
   return result;
}

ns.get_subrace_desc = function ufoal_get_subrace_desc( e ) {
   var result = '', ui = ns.ui;
   result += 'Exp award: ' + percent( e.exp ) + br + 'Size: ' + percent( e.size ) + br;
   result += 'Speed: ' + percent( e.speed ) + br + 'Capacity: ' + e.capacity + ' kg' + br;
   result += 'Stability:' + ( e.stability < 10 ? percent( e.stability ) : 'Stable' ) + br;
   result += 'HP: ' + e.hp + br + 'Regenerate (Stun Damage): ' + e.stunregen + br;
   if ( e.tempregen ) result += 'Regenerate (Temp Damage): ' + e.tempregen + br;
   if ( e.resurrect ) result += 'Resurrectable' + br;
   if ( e.manipulate ) result += 'Has hands' + br;
   if ( e.snipeIndex ) result += 'Has body parts' + br;

   result += br + 'Armours' + br;
   e.armour.forEach( function each_armour( e ) {
      result += '(' + e.material + ' ' + e.size + 'x' + e.size + ') ';
      result += ui.create_html_title( e.armour ) + br;
      if ( e.corpse ) {
         result += sp + ui.create_html_title( e.corpse ) + br;
      }
   });
   result += br + 'Attribute Weights' + br;
   for ( var k in e.attributes ) {
      result += sp + e.attributes[ k ] + ' ' + ns.uncamel( k ) + br;
   }
   return result;
}

ns.get_unit_desc = function ufoal_get_unit_desc( e ) {
   var result = '', ui = ns.ui;
   if ( e.typeIndex ) result += txt.unit_type[ e.typeIndex ] + br;
   if ( e.level ) result += 'Level: ' + e.level + br;
   if ( e.training ) {
      result += br + 'Training' + br;
      e.training.forEach( function each_training( e ) {
         result += sp + ui.create_html_title( e ) + br;
      });
   }
   if ( e.armour ) result += br + 'Armour' + br + sp + ui.create_html_title( e.armour ) + br;
   if ( e.equipment ) {
      e.equipment.forEach( function each_equipment( e ) {
         var last = '';
         result += br + e.slot;
         for ( var type in e ) {
            switch ( type ) {
               case 'slot': break;
               case 'count':
                  result += ' x' + e[ type ];
                  break;
               default:
                  var eq = ns.entity[ e[ type ] ];
                  result += br + sp;
                  if ( type === 'ammo' && last === 'weapon' ) result += sp + ' with ';
                  result += eq ? ui.create_html_title( eq ) : e[ type ];
            }
            last = type;
         }
         result += br;
      });
   }
   if ( e.attributes.length ) {
      result += br + 'Attribute Weights' + br;
      for ( var k in e.attributes ) {
         result += e.attributes[ k ] + ' ' + ns.uncamel( k ) + br;
      }
   }
   return result;
}

})( ufoal );