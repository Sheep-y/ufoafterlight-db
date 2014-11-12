(function ufoal_desc( ns ){ 'use strict';

var txt = ns.txt;

/** Return the description of any entity */
ns.get_desc = function ufoal_get_desc( e ) {
   var content = 'Id: ' + e.id + ', ' + e.name;
   content += '<hr/>';
   if ( e.type === 'tech' ) {
      content += txt.tech[ e.id + '_b4' ] + '<hr/>' + ns.txt.tech[ e.id + '_done' ];
   } else if ( e.type === 'item' ) {
      content += ns.get_item_desc( e );
   } else {
      content += ns.get_general_desc( e );
      if ( e.effect ) content += '<hr/>Effect: ' + ns.uncamel( e.effect ); // Training
   }
   return content;
};

/** Description for entities other then technologies */
ns.get_general_desc = function ufoal_get_general_desc( e ) {
   var txt = ns.txt[ e.type ];
   return txt[ e.id ] ? txt[ e.id ] : '(Internal data; no description)';
};

function percent( v ) { return (v*100) + '%'; }
function second( t ) { return (t/10) + '&thinsp;s.'; }

ns.get_item_desc = function ufoal_get_item_desc( e ) {
   var sub, result = [ ns.get_general_desc( e ) + '<hr/>' ];
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
      add( '<hr/>' );
      if ( sub.headslotIndex && sub.handslotIndex ) add( 'Addon slots: 2' );
      else if ( sub.headslotIndex || sub.handslotIndex ) add( 'Addon slot: 1' );
      if ( sub.maxhostility ) add( 'Env. Resist: ' + sub.maxhostility );
      if ( sub.protection ) sub.protection.forEach( function( e, i ) {
         if ( i ) add( txt.damage_type[i] + ': ' + percent( e ) );
      });
   }

   if ( e.ammo ) {
      sub = e.ammo;
      add( '<hr/>' );
      if ( sub.capacity ) add( 'Ammo capaticy: ' + sub.capacity );
      if ( sub.isrechargable ) add( '(Recharge at base)' );
      if ( ! e.weapon ) {
         for ( var wid in ns.data.item ) {
            var w = ns.data.item[ wid ];
            if ( w.weapon && w.weapon.ammo ) {
               w.weapon.ammo.forEach( function ammo_match_each( ammo ) {
                  if ( ammo.ammoIT === e.name && ammo.wam ) {
                     if ( w ) {
                        add( '<br/><a class="title" href="?query=' + encodeURIComponent(w.text) + '" onclick="ufoal.ui.event.lnk_block_title_click(event)">' + w.text + '</a>' );
                        w = null;
                     }
                     add( ammo.wam.map( ns.get_ammo_desc ).join('<br/>') );
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
      // TODO: Replace with shapeIndex
      add( 'Hands: ' + ( ( sub.righthandhelper === "parent_one-handed" ) ? '1' : '2' ) );
      if ( sub.muzzleslotIndex ) slot.push( 'Muzzle' );
      if ( sub.visorslotIndex ) slot.push( 'Scope' );
      if ( sub.additionalslotIndex ) slot.push( 'Underbarrel' );
      if ( sub.origin ) add( 'Type: ' + ns.uncamel( txt.weapon_origin[ sub.origin ] ) ) ;
      if ( slot.length ) add( 'Addons: ' + slot.join( ', ' ) );
      if ( sub.deploytime ) add( 'Deploy: ' + second( sub.deploytime ) );

      if ( sub.ammo ) { sub.ammo.forEach( function( ammo ) {
         add( ' ' );
         var clip = ns.entity[ ammo.ammoIT ];
         var line = '<a class="title" href="?query=' + encodeURIComponent(clip.text) + '" onclick="ufoal.ui.event.lnk_block_title_click(event)">' + clip.text + '</a>';
         if ( clip.ammo.capacity ) line += ' (' + clip.ammo.capacity + ')';
         if ( ammo.reloadtime ) line +=' Reload ' + second( ammo.reloadtime );
         add( line );
         if ( ammo.wam ) { 
            add( ammo.wam.map( ns.get_ammo_desc ).join('<br/>') );
         }
      });}
   }
   return result.join( '<br/>' ).replace( /(<br\/>)*<hr\/>(<[bh]r\/>)+/g, '<hr/>' );
};

ns.get_ammo_desc = function ufoal_get_ammo_desc( wam ) {
   var indent = '<br/> &nbsp; &nbsp;';
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
         line += '<br/><br/>Range: ';
         for ( var v in vis ) {
            if ( vis[v] ) line += v + ': ' + percent( vis[ v ] ) + ', ';
         }
         line = line.substr( 0, line.length-2 );
      }
   }
   return line;
}

})( ufoal );