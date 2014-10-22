//<![CDATA[
ufoal.data.equipment = [
{id:1,weight:15,handle:1,type:1,name:"HumanLightBasicArmour"
      Armour Armour RECORD
        maxhostility INT 3
        selfrepaircoef INT 1
        showstatisticsid STR "HumanLightBasicArmour"
        cls:"Light",protect:[0,0.1,0.1,0.1,0.7,0,0.1,0.1,0,1,1],
        slot:[0,1,2,6],
      END_OF_Armour
},
{id:2,weight:15,handle:1,type:1,name:"HumanLightTransportArmour"
      Armour Armour RECORD
        maxhostility INT 4
        selfrepaircoef INT 1
        showstatisticsid STR "HumanLightTransportArmour"
        cls:"Light",protect:[0,0.1,0.1,0.1,0.7,0,0.1,0.1,0,1,1],
        slot:[0,1,2,10],
      END_OF_Armour
      day:3,assembly:1.5,prereq:{"T_TransportSuit","Metal1"}},
{id:3,weight:15,handle:1,type:1,name:"HumanLightBattleArmour"
      Armour Armour RECORD
        maxhostility INT 4
        selfrepaircoef INT 1
        showstatisticsid STR "HumanLightBattleArmour"
        cls:"Light",addon:1,protect:[0,0.3,0.2,0.3,0.65,0,0.3,0.3,0,1,1],
        slot:[0,1,2,7,19],
      END_OF_Armour
      day:5,assembly:2.25,prereq:{"T_Exoskelet","Metal1","Chemicals1"}},
{id:4,weight:5,handle:1,type:1,name:"HumanLightOpenArmour"
      Armour Armour RECORD
        maxhostility INT 1
        selfrepaircoef INT 1
        showstatisticsid STR "HumanLightOpenArmour"
        permanenteffectIndex INT 199
        addon:2,protect:[0,0.5,0.5,0.3,0.9,0,0.3,0.5,0,1,1],
        slot:[0,1,2,9],
      END_OF_Armour
      day:1.5,assembly:0.75,prereq:{"T_LighOpenArmour","Chemicals1"}},
{id:5,weight:10,handle:1,type:1,name:"HumanMediumBattleArmour"
      Armour Armour RECORD
        maxhostility INT 4
        selfrepaircoef INT 1
        showstatisticsid STR "HumanMediumBattleArmour"
        cls:"Medium",addon:1,protect:[0,0.5,0.3,0.2,0.5,0.5,0.5,0.5,0,1,1],
        slot:[0,1,2,5,19],
      END_OF_Armour
      day:10.5,assembly:3.75,prereq:{"T_SuperplasticsComponents","Chemics","Metal1","Chemicals4"}},
{id:6,weight:12,handle:1,type:1,name:"HumanMediumAdvanceArmour"
      Armour Armour RECORD
        maxhostility INT 6
        selfrepaircoef INT 4
        showstatisticsid STR "HumanMediumAdvanceArmour"
        cls:"Medium",addon:2,protect:[0,0.65,0.4,0.3,0.65,0.65,0.65,0.65,0,1,1],
        slot:[0,1,2,5,13,19],
      END_OF_Armour
      day:13.5,assembly:6,prereq:{"T_NinjaSuit","Chemics","Metalurgy","Electronics","Metal1","Noble3","Chemicals5"}},
{id:7,weight:20,handle:4,type:1,name:"HumanHeavyBasicArmour"
      Armour Armour RECORD
        maxhostility INT 6
        selfrepaircoef INT 1
        showstatisticsid STR "HumanHeavyBasicArmour"
        cls:"Heavy",addon:1,protect:[0,0.55,0.45,0.8,0.4,0.1,0.65,0.5,0,1,1],
        slot:[0,1,2,4,14],
      END_OF_Armour
      day:8,assembly:2.25,prereq:{"T_HeavyDutySuit","Energy3","Metal3"}},
{id:8,weight:25,handle:4,type:1,name:"HumanHeavyAdvanceArmour"
      Armour Armour RECORD
        maxhostility INT 7
        selfrepaircoef INT 20
        showstatisticsid STR "HumanHeavyAdvanceArmour"
        permanenteffectIndex INT 197
        addon:2,protect:[0,0.8,0.6,0.85,0,0.1,0.85,0.8,0,1,1],
        slot:[0,1,2,6,14],
      END_OF_Armour
      day:12,assembly:7.5,prereq:{"T_ElectronicalSuit","Electronics","Metal4","Noble3","Energy6"}},
{id:9,weight:20,handle:4,type:1,name:"HumanHeavyLifesupportArmour"
      Armour Armour RECORD
        maxhostility INT 9
        selfrepaircoef INT 6
        showstatisticsid STR "HumanHeavyLifesupportArmour"
        permanenteffectIndex INT 247
        addon:1,protect:[0,0.55,0.45,0.7,0.4,0.1,0.6,0.5,-0.4,1,1],
        slot:[0,1,2,6],
      END_OF_Armour
      day:7.5,assembly:7.5,prereq:{"T_Lifesupport","Energy4","Metal4","Noble2","Chemicals3"}},
{id:10,weight:25,handle:4,type:1,name:"HumanHeavyBattleArmour"
      Armour Armour RECORD
        maxhostility INT 4
        selfrepaircoef INT 1
        showstatisticsid STR "HumanHeavyBattleArmour"
        permanenteffectIndex INT 197
        addon:2,protect:[0,0.72,0.5,0.75,0.2,0.1,0.75,0.72,0,1,1],
        slot:[0,1,2,4,6,18],
      END_OF_Armour
      day:10.5,assembly:5.25,prereq:{"T_ArmoredSuit","Technics","Energy5","Metal4","Noble3"}},
{id:11,weight:50,system:true,handle:1,type:1,name:"BeastmanPrivateArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_BeastmanAutopsy"
        protect:[0,0.1,0.1,0.1,0.7,0,0.1,0.2,0,1,1],
        slot:[0,1,2,7,15],
      END_OF_Armour
},
{id:12,weight:45,system:true,handle:1,type:1,name:"BeastmanShamanArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_BeastmanAutopsy"
        permanenteffectIndex INT 212
        protect:[0,0.1,0.1,0.1,0.7,0.75,0.1,0.2,0,1,1],
        slot:[0,1,2,7,15],
      END_OF_Armour
},
{id:13,weight:45,system:true,handle:1,type:1,name:"BeastmanCaptainArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_BeastmanAutopsy"
        permanenteffectIndex INT 213
        protect:[0,0.45,0.45,0.45,0.7,0,0.45,0.45,0,1,1],
        slot:[0,1,2,7,15],
      END_OF_Armour
},
{id:14,weight:45,system:true,handle:1,type:1,name:"BeastmenAlchemistArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_BeastmanAutopsy"
        permanenteffectIndex INT 211
        protect:[0,0.1,0.1,0.1,0.7,0.75,0.1,0.1,0,1,1],
        slot:[0,1,2,7,15],
      END_OF_Armour
},
{id:15,weight:4,handle:1,type:1,name:"ReticulanPyjamas"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_ReticulanAutopsy"
        protect:[0,0,0,0,0.9,0,0,0.5,0,1,1],
        slot:[0,1,2,4,19],
      END_OF_Armour
},
{id:16,weight:15,handle:1,type:1,name:"ReticulanArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_ReticulanAutopsy"
        permanenteffectIndex INT 299
        protect:[0,0.4,0.2,0.4,0.95,0.3,0.15,0.85,0,1,1],
        slot:[0,1,2,4,6],
      END_OF_Armour
},
{id:17,weight:5,handle:1,type:1,name:"ReticulanExpPyjamas"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "ExpeditionSoldierCaptive"
        protect:[0,0.1,0.1,0.1,0.9,0.1,0.1,0.85,0,1,1],
        slot:[0,1,2,4,19],
      END_OF_Armour
},
{id:18,weight:15,handle:1,type:1,name:"ReticulanExpArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "ExpeditionSoldierCaptive"
        permanenteffectIndex INT 299
        protect:[0,0.55,0.5,0.5,0.95,0.6,0.15,0.9,0,1,1],
        slot:[0,1,2,6,14],
      END_OF_Armour
},
{id:19,weight:15,handle:1,type:1,name:"MartianArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MartianAutopsy"
        protect:[0,0.96,0.3,0.1,0.75,0.45,0.85,0.92,0,1,1],
        slot:[0,1,2,4,6],
      END_OF_Armour
},
{id:20,weight:1,handle:1,type:1,name:"Martian"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MartianAutopsy"
        protect:[0,0.94,0.1,0,0.6,0.45,0.65,0.75,0,1,1],
        slot:[0,1,2,4,19],
      END_OF_Armour
},
{id:21,weight:35,system:true,handle:1,type:1,name:"BeastmenDomina1"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MatriarchAutopsy"
        permanenteffectIndex INT 187
        protect:[0,0.86,0.55,0.7,0.7,0.15,0.65,0.1,0,1,1],
        slot:[0,1,2,6,14],
      END_OF_Armour
},
{id:22,weight:35,system:true,handle:1,type:1,name:"BeastmenDomina2"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MatriarchAutopsy"
        permanenteffectIndex INT 188
        protect:[0,0.92,0.7,0.85,0.85,0.25,0.75,0.15,0,1,1],
        slot:[0,1,2,6,14],
      END_OF_Armour
},
{id:23,weight:0,system:true,handle:1,type:1,name:"ElementsArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MarsElementalBeings"
        protect:[0,0.9,0.9,0.9,0.2,1,0.5,0.9,1,1,1],
        slot:[0,1,2],
      END_OF_Armour
},
{id:25,weight:3,handle:1,type:3,name:"HumanPistol",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:5
        muzzleslotIndex INT 3
        additionalslotIndex INT 4
        ListOfWeaponAmmo ARRAY 3
          SubWeaponAmmo RECORD
            ammoITIndex INT 82,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:0,round:1,str:33,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_Pistol",accuracy:1.6,range:16,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:1,str:33,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:3
                  ng_useid STR "fxShot_Pistol",accuracy:0.72,range:16,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 92,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:0,round:1,str:30,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_Pistol",accuracy:1.6,range:19,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:1,str:30,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:3
                  ng_useid STR "fxShot_Pistol",accuracy:0.72,range:19,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 93,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:0,round:1,str:38,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_Pistol",accuracy:1.6,range:14,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:1,str:38,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:3
                  ng_useid STR "fxShot_Pistol",accuracy:0.72,range:14,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:3,prereq:{"T_Firearms","Energy1","Metal1"}},
{id:26,weight:6,handle:1,type:3,name:"HumanRifle",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:1
        visorslotIndex INT 1
        muzzleslotIndex INT 3
        additionalslotIndex INT 4
        ListOfWeaponAmmo ARRAY 3
          SubWeaponAmmo RECORD
            ammoITIndex INT 82,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:1,round:1,str:40,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_Rifle",accuracy:2,range:24,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:1,round:3,str:40,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_Rifle",accuracy:0.66,range:24,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:1,round:3,str:40,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_Rifle",accuracy:1.25,range:24,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 92,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:1,round:1,str:37,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_Rifle",accuracy:2,range:28,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:1,round:3,str:37,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_Rifle",accuracy:0.66,range:28,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:1,round:3,str:37,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_Rifle",accuracy:1.25,range:28,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 93,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:1,round:1,str:45,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_Rifle",accuracy:2,range:21,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:1,round:3,str:45,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_Rifle",accuracy:0.66,range:21,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:1,round:3,str:45,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_Rifle",accuracy:1.25,range:21,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:4.5,prereq:{"T_Firearms","Energy1","Metal2"}},
{id:27,weight:2,handle:1,type:3,name:"ReticulanLaserRifle",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:2
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 77,reload:60
            ListOfWAM ARRAY 3
              {ttf:1,ttr:2,round:1,str:30,consume:1,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_LaserReticulan",accuracy:3.1,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:30,ttr:2,round:1,str:125,consume:5,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:3,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_LaserReticulanHi",accuracy:3.1,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:1,ttr:2,round:1,str:30,consume:1,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:23,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_LaserReticulan",accuracy:1.6,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:28,weight:10,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:3,name:"BeastmenRifle",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:4
        ListOfWeaponAmmo ARRAY 6
          SubWeaponAmmo RECORD
            ammoITIndex INT 83,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:50,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:50,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:0.55,range:25,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:50,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:1.2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 87,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:55,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 162,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:55,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 162,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:0.55,range:25,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:55,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 162,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:1.2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 88,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:20,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 242,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:1.6,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:20,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 242,mode:2,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:0.5,range:25,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:20,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 242,mode:24,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:1,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 89,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:47,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 239,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:47,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 239,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:0.55,range:25,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:47,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 239,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:1.2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 90,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:45,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 240,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:45,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 240,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:0.55,range:25,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:45,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 240,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:1.2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 91,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:40,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 278,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:40,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 278,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:0.55,range:25,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:40,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 278,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_BeastmenRifle",accuracy:1.2,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:29,weight:5,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:3,name:"BeastmenPistol",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:11
        ListOfWeaponAmmo ARRAY 6
          SubWeaponAmmo RECORD
            ammoITIndex INT 83,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:2,round:1,str:35,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:1.4,range:20,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:1,str:35,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:0.72,range:20,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 87,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:2,round:1,str:32,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:1.4,range:20,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:1,str:32,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:0.72,range:20,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 88,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:2,round:1,str:12,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 242,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:1.25,range:20,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:1,str:12,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 242,mode:23,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:0.66,range:20,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 89,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:2,round:1,str:28,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 239,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:1.4,range:20,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:1,str:28,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 239,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:0.72,range:20,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 90,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:2,round:1,str:28,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 240,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:1.4,range:20,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:1,str:28,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 240,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:0.72,range:20,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 91,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:2,round:1,str:28,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 278,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:1.4,range:20,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:1,str:28,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.4
                timeeffectIndex INT 278,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_BeastmenPistol",accuracy:0.72,range:20,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:30,weight:5,handle:1,type:3,name:"HumanSniperRifle",weapon:{handling:"rifle",deploy:15,hand:2,shape:5,origin:1
        visorslotIndex INT 10
        muzzleslotIndex INT 3
        additionalslotIndex INT 4
        ListOfWeaponAmmo ARRAY 3
          SubWeaponAmmo RECORD
            ammoITIndex INT 82,reload:60
            ListOfWAM ARRAY 2
              {ttf:0,ttr:5,round:1,str:100,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:25
                  ng_useid STR "fxShot_Sniper",accuracy:2,range:40,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:5,round:1,str:160,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:5,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:40
                  ng_useid STR "fxShot_Sniper",accuracy:2,range:40,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 92,reload:60
            ListOfWAM ARRAY 2
              {ttf:0,ttr:5,round:1,str:90,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:25
                  ng_useid STR "fxShot_Sniper",accuracy:2,range:45,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:5,round:1,str:150,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:5,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:40
                  ng_useid STR "fxShot_Sniper",accuracy:2,range:45,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 93,reload:60
            ListOfWAM ARRAY 2
              {ttf:0,ttr:5,round:1,str:120,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:25
                  ng_useid STR "fxShot_Sniper",accuracy:2,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:5,round:1,str:190,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:5,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:40
                  ng_useid STR "fxShot_Sniper",accuracy:2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:4.5,assembly:9,prereq:{"T_AdvancedFirearms","Technics","Metal4"}},
{id:31,weight:4,handle:1,type:3,name:"AncientRifle",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:1
        muzzleslotIndex INT 3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 84,reload:60
            ListOfWAM ARRAY 3
              {ttf:0,ttr:0,round:1,str:38,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_HistoricRifle",accuracy:1.6,range:22,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:4,str:38,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_HistoricRifle",accuracy:0.5,range:22,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:4,str:38,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_HistoricRifle",accuracy:1,range:22,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:32,weight:1,handle:1,type:3,name:"AncientPistol",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:5
        muzzleslotIndex INT 3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 85,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:0,round:1,str:30,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_HistoricPistol",accuracy:1.6,range:16,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:2,str:30,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_HistoricPistol",accuracy:0.8,range:16,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:33,weight:2,handle:1,type:3,name:"AncientColt",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:5
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 86,reload:60
            ListOfWAM ARRAY 2
              {ttf:0,ttr:4,round:1,str:50,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_HistoricColt",accuracy:1,range:20,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:4,round:1,str:50,consume:1,detect:"ProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_HistoricColt",accuracy:0.5,range:20,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:34,weight:13,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:3,type:3,name:"BeastmenBigRifle",weapon:{handling:"rifle",deploy:10,hand:2,shape:5,origin:4
        ListOfWeaponAmmo ARRAY 6
          SubWeaponAmmo RECORD
            ammoITIndex INT 83,reload:60
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:80,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:80,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:0.55,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:80,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:1.2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 87,reload:60
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 162,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 162,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:0.55,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 162,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:1.2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 88,reload:60
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:35,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 1.2
                timeeffectIndex INT 242,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:1.6,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:35,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 1.2
                timeeffectIndex INT 242,mode:2,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:0.55,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:35,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 1.2
                timeeffectIndex INT 242,mode:24,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:1.2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 89,reload:60
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 239,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:1.6,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 239,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:0.5,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 239,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:1.2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 90,reload:60
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 240,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 240,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:0.5,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 240,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:1.2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 91,reload:60
            ListOfWAM ARRAY 3
              {ttf:0,ttr:2,round:1,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 278,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 278,mode:2,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:0.55,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:2,round:3,str:65,consume:1,detect:"Plastic",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                effectprobability FLT 0.75
                timeeffectIndex INT 278,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_BeastmenRifle2",accuracy:1.2,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:36,weight:30,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:3,type:3,name:"BeastmenCannon",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:4
        ListOfWeaponAmmo ARRAY 6
          SubWeaponAmmo RECORD
            ammoITIndex INT 83,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:14,round:1,str:300,consume:2,detect:"Plastic",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T,mode:8,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_BeastmenCannon",accuracy:1.2,range:14,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 87,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:14,round:1,str:250,consume:2,detect:"Plastic",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T
                effectprobability FLT 1
                timeeffectIndex INT 162,mode:8,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_BeastmenCannon",accuracy:1.2,range:14,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 88,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:14,round:1,str:125,consume:2,detect:"Plastic",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T
                effectprobability FLT 1.4
                timeeffectIndex INT 242,mode:8,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_BeastmenCannon",accuracy:1,range:14,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 89,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:14,round:1,str:250,consume:2,detect:"Plastic",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T
                effectprobability FLT 1
                timeeffectIndex INT 239,mode:8,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_BeastmenCannon",accuracy:1.2,range:14,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 90,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:14,round:1,str:250,consume:2,detect:"Plastic",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T
                effectprobability FLT 1
                timeeffectIndex INT 240,mode:8,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_BeastmenCannon",accuracy:1.2,range:14,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 91,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:14,round:1,str:250,consume:2,detect:"Plastic",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T
                effectprobability FLT 1
                timeeffectIndex INT 278,mode:8,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_BeastmenCannon",accuracy:1.2,range:14,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:37,weight:6,handle:1,type:3,name:"HumanShotgun",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:1
        additionalslotIndex INT 4
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 94,reload:40
            ListOfWAM ARRAY 3
              {ttf:0,ttr:5,round:1,str:250,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T,mode:1,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_ShotgunScatter",accuracy:1.6,range:12,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:5,round:1,str:250,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T,mode:23,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_ShotgunScatter",accuracy:0.66,range:12,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:10,round:1,str:200,consume:2,detect:"NoisyProjectileGun",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T,mode:25,dmg_type:1
                Closecombatweapon Closecombatweapon RECORD,accuracy:1
                  ng_useid STR "fxShot_ShotgunScatter",spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:4.5,angle:75
                  isfragment BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:7.5,prereq:{"T_AdvancedFirearms","Metal3"}},
{id:38,weight:20,handle:3,type:3,name:"HumanGatling",weapon:{handling:"rifle",deploy:10,hand:2shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 111,reload:60
            ListOfWAM ARRAY 2
              {ttf:0,ttr:0,round:10,str:45,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:8,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_Gatling",accuracy:1,range:28,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:4,str:45,consume:5,detect:"NoisyProjectileGun",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:26,dmg_type:1
                Closecombatweapon Closecombatweapon RECORD,accuracy:1
                  ng_useid STR "fxShot_GatlingSpray",spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:14,angle:45
                  isfragment BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:9,assembly:11.25,prereq:{"T_Gatling","Metalurgy","Metal6"}},
{id:39,weight:1,handle:1,type:3,name:"ReticulanLaserPistol",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:8
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 77,reload:40
            ListOfWAM ARRAY 2
              {ttf:1,ttr:2,round:1,str:20,consume:1,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_LaserReticulan",accuracy:3.1,range:26,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:1,ttr:2,round:1,str:20,consume:1,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:23,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:2
                  ng_useid STR "fxShot_LaserReticulan",accuracy:1.6,range:26,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:40,weight:4,handle:1,type:3,name:"HumanArcheologicalLaser",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 95,reload:20
            ListOfWAM ARRAY 1
              {ttf:2,ttr:4,round:1,str:15,consume:1,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_LaserHuman",accuracy:2.5,range:30,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 96,reload:20
            ListOfWAM ARRAY 1
              {ttf:2,ttr:4,round:1,str:15,consume:1,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_LaserHuman",accuracy:2.5,range:30,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:1.5,assembly:2.25
},
{id:42,weight:5,handle:1,type:3,name:"HumanLaserRifle",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:1
        visorslotIndex INT 2
        additionalslotIndex INT 5
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 95,reload:40
            ListOfWAM ARRAY 4
              {ttf:1,ttr:2,round:1,str:40,consume:1,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_LaserHuman",accuracy:3.8,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:30,ttr:2,round:1,str:190,consume:5,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:3,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_LaserHumanHi",accuracy:3.8,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:1,ttr:1,round:3,str:40,consume:1,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:12,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:6
                  ng_useid STR "fxShot_LaserHuman",accuracy:1.25,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:1,ttr:2,round:1,str:40,consume:1,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:23,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_LaserHuman",accuracy:1.4,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 96,reload:40
            ListOfWAM ARRAY 4
              {ttf:1,ttr:2,round:1,str:40,consume:1,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_LaserHuman",accuracy:3.8,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:30,ttr:2,round:1,str:190,consume:5,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:3,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:16
                  ng_useid STR "fxShot_LaserHumanHi",accuracy:3.8,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:1,ttr:1,round:3,str:40,consume:1,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:12,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:6
                  ng_useid STR "fxShot_LaserHuman",accuracy:1.25,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:1,ttr:2,round:1,str:40,consume:1,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:23,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:4
                  ng_useid STR "fxShot_LaserHuman",accuracy:1.4,range:35,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:6,prereq:{"T_LaserWeapons","Noble1","Crystals1"}},
{id:44,weight:18,handle:3,type:3,name:"HumanLaserCannon",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:1
        additionalslotIndex INT 5
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 95,reload:60
            ListOfWAM ARRAY 4
              {ttf:2,ttr:4,round:1,str:85,consume:2,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_LaserHuman",accuracy:3.8,range:40,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:2,ttr:2,round:3,str:85,consume:2,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:12,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_LaserHuman",accuracy:1.25,range:40,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:2,ttr:4,round:1,str:85,consume:2,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:23,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_LaserHuman",accuracy:1.4,range:40,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:40,ttr:4,round:1,str:300,consume:10,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:29,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_LaserHumanHi",accuracy:4.75,range:40,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 96,reload:60
            ListOfWAM ARRAY 4
              {ttf:2,ttr:4,round:1,str:85,consume:2,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_LaserHuman",accuracy:3.8,range:40,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:2,ttr:2,round:3,str:85,consume:2,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:12,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_LaserHuman",accuracy:1.25,range:40,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:2,ttr:4,round:1,str:85,consume:2,detect:"Laser",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:23,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_LaserHuman",accuracy:1.4,range:40,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:40,ttr:4,round:1,str:300,consume:10,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:29,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:20
                  ng_useid STR "fxShot_LaserHumanHi",accuracy:4.75,range:40,aim:"AttackAccuracySnap",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:4.5,assembly:7.5,prereq:{"T_LaserWeapons","Energy4","Noble2","Crystals3"}},
{id:45,weight:17,handle:1,type:3,name:"MartianPlasmaCannon",weapon:{handling:"rifle",deploy:30,hand:2,shape:5,origin:9
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 97,reload:60
            ListOfWAM ARRAY 2
              {ttf:0,ttr:15,round:1,str:250,consume:5,detect:"Plasma",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:20,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:15,accuracy:2.5,range:30,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_waveid STR "fxExploPlasma"
                    animationspeed FLT 0.4
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:1.4,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},
              },{ttf:0,ttr:15,round:1,str:300,consume:10,detect:"Flamethrower",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:21,dmg_type:2
                Closecombatweapon Closecombatweapon RECORD,accuracy:0.8
                  ng_useid STR "fxShot_PlasmaThrower",spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:5,angle:30
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:47,weight:25,handle:1,type:3,name:"Annihilator",weapon:{handling:"rocketlauncher",deploy:20,hand:2,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 95,reload:60
            ListOfWAM ARRAY 1
              {ttf:0,ttr:10,round:1,str:400,consume:5,detect:"Plasma",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5,mode:20,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_Anihilator",accuracy:2.5,range:35,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 96,reload:60
            ListOfWAM ARRAY 1
              {ttf:0,ttr:10,round:1,str:400,consume:5,detect:"Plasma",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5,mode:20,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_Anihilator",accuracy:2.5,range:35,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:12,assembly:13.5,prereq:{"T_Annihilator","Metal4","Crystals3","Energy7"}},
{id:48,weight:2,handle:1,type:3,name:"MartianEMPpistol",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:12
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 97,reload:20
            ListOfWAM ARRAY 1
              {ttf:2,ttr:0,round:1,str:80,consume:1,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:8,mode:22,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_EmpMartian",accuracy:1,range:20,aim:"AttackAccuracyMechanical",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:49,weight:7,handle:1,type:3,name:"LightningThrower",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:10
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 97,reload:60
            ListOfWAM ARRAY 1
              {ttf:4,ttr:0,round:1,str:140,consume:2,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:8,mode:22,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:12
                  ng_useid STR "fxShot_EmpMartian",accuracy:1.25,range:30,aim:"AttackAccuracyMechanical",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:50,weight:8,handle:1,type:3,name:"HumanEMPRifle",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:7
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 95,reload:40
            ListOfWAM ARRAY 2
              {ttf:4,ttr:0,round:1,str:200,consume:1,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:4,mode:22,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpHuman",accuracy:1,range:30,aim:"AttackAccuracyMechanical",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:1,str:400,consume:10,detect:"EMP",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:8,mode:28,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpHumanHi",accuracy:0.66,range:20,aim:"AttackAccuracyMechanical",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 96,reload:40
            ListOfWAM ARRAY 2
              {ttf:4,ttr:0,round:1,str:200,consume:1,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:4,mode:22,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpHuman",accuracy:1,range:30,aim:"AttackAccuracyMechanical",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon
              },{ttf:0,ttr:0,round:1,str:400,consume:10,detect:"EMP",atk:"AttackAccuracySnap",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:8,mode:28,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpHumanHi",accuracy:0.66,range:20,aim:"AttackAccuracyMechanical",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:4.5,assembly:6,prereq:{"T_EMWeaponsManufacturing","Energy4","Noble2","Crystals2"}},
{id:51,weight:15,handle:1,type:3,name:"FireballThrower",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:7
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 95,reload:60
            ListOfWAM ARRAY 1
              {ttf:1,ttr:7,round:1,str:0,consume:15,detect:"Flamethrower",atk:"AttackAccuracyMagnetic",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5,mode:14,dmg_type:0
                Rangedweapon Rangedweapon RECORD,aim_time:30,accuracy:99,range:999,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 96,reload:60
            ListOfWAM ARRAY 1
              {ttf:1,ttr:7,round:1,str:0,consume:15,detect:"Flamethrower",atk:"AttackAccuracyMagnetic",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5,mode:14,dmg_type:0
                Rangedweapon Rangedweapon RECORD,aim_time:30,accuracy:99,range:999,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:9,assembly:10.5,prereq:{"T_LightingBolt","Metal4","Noble3","Crystals2","Energy7"}},
{id:52,weight:10,handle:1,type:3,name:"ReticulanLauncher",weapon:{handling:"rifle",deploy:10,hand:2,shape:5,origin:2
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 98,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:5,round:1,str:150,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:8,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_RocketLauncher",accuracy:1,range:33,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_flyingid STR "fxRocketFlameB"
                    ng_waveid STR "fxExploFragReticulan"
                    animationspeed FLT 1
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:4.2,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 99,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:5,round:1,str:100,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"PsiResistance",dmg:"IncreaseDamagePsi",anim:5,mode:8,dmg_type:5
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_RocketLauncher",accuracy:1,range:33,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_flyingid STR "fxRocketFlameB"
                    ng_waveid STR "fxExploPsi"
                    animationspeed FLT 0.25
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:6.5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T
                  isthroughwall BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:53,weight:16,handle:3,type:3,name:"HumanRocketLauncher",weapon:{handling:"rocketlauncher",deploy:10,hand:2,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 100,reload:50
            ListOfWAM ARRAY 1
              {ttf:4,ttr:10,round:1,str:440,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:8,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_RocketLauncher",accuracy:0.66,range:40,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_flyingid STR "fxRocketFlame"
                    ng_waveid STR "fxExploFragHumanHi"
                    animationspeed FLT 1.5
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:5.8,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 101,reload:50
            ListOfWAM ARRAY 1
              {ttf:4,ttr:10,round:1,str:80,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T
                effectprobability FLT 1.8
                timeeffectIndex INT 241,mode:8,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_RocketLauncher",accuracy:0.66,range:40,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_flyingid STR "fxRocketFlame"
                    ng_waveid STR "fxExploThermite"
                    animationspeed FLT 1.5
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:5.25,prereq:{"T_RocketbasedWeapons","Metal3"}},
{id:54,weight:5,handle:1,type:3,name:"HumanGrenadeLauncher",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:1
        permanenteffectIndex INT 288
        ListOfWeaponAmmo ARRAY 5
          SubWeaponAmmo RECORD
            ammoITIndex INT 64,reload:30
            ListOfWAM ARRAY 1
              {ttf:0,ttr:2,round:1,str:100,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T,mode:8,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_GrenadeLauncherHuman",accuracy:1.25,range:26,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploFragHumanHi"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:3.4,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 65,reload:30
            ListOfWAM ARRAY 1
              {ttf:0,ttr:2,round:1,str:20,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T
                effectprobability FLT 1.2
                timeeffectIndex INT 242,mode:8,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_GrenadeLauncherHuman",accuracy:1,range:30,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploAcidHuman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:1.5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 66,reload:30
            ListOfWAM ARRAY 1
              {ttf:0,ttr:2,round:1,str:115,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T,mode:8,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_GrenadeLauncherHuman",accuracy:1.25,range:34,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploFragHuman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:2.8,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 67,reload:30
            ListOfWAM ARRAY 1
              {ttf:0,ttr:2,round:1,str:115,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageMagnetic",anim:2
                pellets BOOL T,mode:8,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_GrenadeLauncherHuman",accuracy:1.25,range:30,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploEmpHuman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 68,reload:30
            ListOfWAM ARRAY 1
              {ttf:0,ttr:2,round:1,str:200,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T,mode:13,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_GrenadeLauncherHuman",accuracy:1.25,range:30,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploStun"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:2.8,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:4.5,prereq:{"T_RocketbasedWeapons","Metal3"}},
{id:55,weight:8,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:3,type:3,name:"BeastmenGrenadeLauncher",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 3
          SubWeaponAmmo RECORD
            ammoITIndex INT 69,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:2,round:1,str:100,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T,mode:8,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_GrenadeLauncher",accuracy:1,range:25,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploFragBeastman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:2.8,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 70,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:2,round:1,str:60,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T
                effectprobability FLT 0.75
                timeeffectIndex INT 162,mode:8,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_GrenadeLauncher",accuracy:1,range:25,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploFragBeastmanHi"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:4,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 71,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:2,round:1,str:25,consume:1,detect:"Launcher",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:2
                pellets BOOL T
                effectprobability FLT 1.2
                timeeffectIndex INT 242,mode:8,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_GrenadeLauncher",accuracy:0.8,range:25,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploAcidBeastman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:1.5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:60,weight:22,handle:3,type:5,name:"WarpCannon",weapon:{handling:"rocketlauncher",deploy:15,hand:2,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 51,reload:0
            ListOfWAM ARRAY 1
              {ttf:10,ttr:10,round:1,str:999,consume:1,detect:"Laser",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5,mode:1,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_WarpCannon",accuracy:1.6,range:35,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:6,recharge:true,shape:5}
},
{id:62,weight:4,handle:1,type:3,name:"BuzzSawCrossbow",weapon:{handling:"buzzSaw",deploy:3,hand:2,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 102,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:0,round:1,str:100,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamageDefault",anim:21,mode:6,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1.25
                  ng_useid STR "fxShot_BuzzSaw",spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
              },{ttf:0,ttr:2,round:1,str:100,consume:1,detect:"Tool",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:8,dmg_type:3
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_Crossbow",accuracy:1.6,range:15,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 103,reload:40
            ListOfWAM ARRAY 2
              {ttf:0,ttr:0,round:1,str:300,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamageDefault",anim:21,mode:6,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1.25
                  ng_useid STR "fxShot_BuzzSaw",spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
              },{ttf:0,ttr:2,round:1,str:300,consume:1,detect:"Tool",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:8,dmg_type:3
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_Crossbow",accuracy:1.6,range:15,aim:"AttackAccuracyMechanical",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:1.5,assembly:9,prereq:{"T_AntiMartioanWeapons","Energy4","Metal4"}},
{id:63,weight:1,handle:1,type:3,name:"ToolKit",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:1
        ListOfWeaponAmmo ARRAY 3
          SubWeaponAmmo RECORD
            ammoITIndex INT 108,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5,mode:17,dmg_type:10
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 109,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:-40,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:15,mode:19,dmg_type:9
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 110,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5,mode:18,dmg_type:0
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon
                ,spread:{range:3,angle:180
                  isfragment BOOL F},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:1.5,assembly:3
},
{id:64,weight:1,handle:1,type:3,name:"BasicMediKit",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:1
        ListOfWeaponAmmo ARRAY 8
          SubWeaponAmmo RECORD
            ammoITIndex INT 104,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:15
                effectprobability FLT 999
                timeeffectIndex INT 164,mode:15,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 105,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:15
                effectprobability FLT 999
                timeeffectIndex INT 165,mode:16,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 106,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:15
                effectprobability FLT 999
                timeeffectIndex INT 166,mode:16,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 107,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:15
                effectprobability FLT 999
                timeeffectIndex INT 167,mode:16,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 78,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:-30,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageMedical",anim:15,mode:15,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 79,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:-60,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageMedical",anim:15
                effectprobability FLT 999
                timeeffectIndex INT 217,mode:16,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 80,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:15
                effectprobability FLT 999
                timeeffectIndex INT 246,mode:15,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 81,reload:10
            ListOfWAM ARRAY 1
              {ttf:1,ttr:1,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:15
                effectprobability FLT 999
                timeeffectIndex INT 163,mode:16,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:3.75,prereq:{"T_Medicine","Metal1"}},
{id:65,weight:2,handle:1,type:3,name:"BuzzSaw",weapon:{handling:"buzzSaw",deploy:3,hand:2,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 2
          SubWeaponAmmo RECORD
            ammoITIndex INT 102,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:100,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamageDefault",anim:21,mode:6,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1.25
                  ng_useid STR "fxShot_BuzzSaw",spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
          SubWeaponAmmo RECORD
            ammoITIndex INT 103,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:300,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamageDefault",anim:21,mode:6,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1.25
                  ng_useid STR "fxShot_BuzzSaw",spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:1.5,assembly:2.25
},
{id:66,weight:1,handle:1,type:5,name:"BeastmanMedkit",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:4
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 56,reload:0
            ListOfWAM ARRAY 1
              {ttf:2,ttr:2,round:1,str:-45,consume:1,detect:"Tool",atk:"AttackAccuracyMechanical",def:"DodgeBullet",dmg:"IncreaseDamageMedical",anim:25,mode:15,dmg_type:8
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:20,recharge:true,shape:6}
},
{id:75,weight:1,handle:1,type:5,name:"MindControll",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:2
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 57,reload:0
            ListOfWAM ARRAY 1
              {ttf:30,ttr:1,round:1,str:0,consume:0,detect:"Psi",atk:"PsiAttack",def:"PsiResistance",dmg:"IncreaseDamagePsi",anim:4
                effectprobability FLT 1.2
                timeeffectIndex INT 168,mode:31,dmg_type:5
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  isthroughwall BOOL T
                  ng_useid STR "fxShot_Psi",accuracy:3.1,range:17,aim:"PsiAttack",rng:"AttackRangePsi"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6}
},
{id:78,weight:5,handle:1,type:5,name:"PsionicWeapon",weapon:{handling:"rifle",deploy:5,hand:2,shape:5,origin:2
        permanenteffectIndex INT 289
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 58,reload:0
            ListOfWAM ARRAY 3
              {ttf:20,ttr:1,round:1,str:55,consume:0,detect:"Psi",atk:"PsiAttack",def:"PsiResistance",dmg:"IncreaseDamagePsi",anim:4,mode:9,dmg_type:5
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  isthroughwall BOOL T
                  ng_useid STR "fxShot_Psi",accuracy:3.1,range:17,aim:"PsiAttack",rng:"AttackRangePsi"
                END_OF_Rangedweapon
              },{ttf:20,ttr:1,round:1,str:55,consume:0,detect:"Psi",atk:"PsiAttack",def:"PsiResistance",dmg:"IncreaseDamagePsi",anim:4,mode:10,dmg_type:5
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  isthroughwall BOOL T
                  ng_useid STR "fxShot_Psi",accuracy:3.1,range:17,aim:"PsiAttack",rng:"AttackRangePsi"
                END_OF_Rangedweapon
              },{ttf:20,ttr:1,round:1,str:0,consume:0,detect:"Psi",atk:"PsiAttack",def:"PsiResistance",dmg:"IncreaseDamagePsi",anim:4
                effectprobability FLT 1
                timeeffectIndex INT 277,mode:11,dmg_type:5
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  isthroughwall BOOL T
                  ng_useid STR "fxShot_Psi",accuracy:3.1,range:17,aim:"PsiAttack",rng:"AttackRangePsi"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6}
},
{id:79,weight:1,handle:1,type:5,name:"PsionicHealing",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:2
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 59,reload:0
            ListOfWAM ARRAY 1
              {ttf:20,ttr:1,round:1,str:-25,consume:0,detect:"Psi",atk:"PsiAttack",def:"PsiResistance",dmg:"IncreaseDamagePsi",anim:4,mode:30,dmg_type:8
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  isthroughwall BOOL T
                  ng_useid STR "fxShot_Psi",accuracy:10,range:15,aim:"PsiAttack",rng:"AttackRangePsi"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6}
},
{id:80,weight:0.5,handle:1,type:5,name:"HumanKnife",weapon:{handling:"meleeWeapon",deploy:1,hand:1,shape:2,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 60,reload:0
            ListOfWAM ARRAY 2
              {ttf:0,ttr:0,round:1,str:30,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamagePhysical",anim:10,mode:6,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1,spd:"AttackSpeedBlades"
                END_OF_Closecombatweapon
              },{ttf:1,ttr:0,round:1,str:60,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeBullet",dmg:"IncreaseDamagePhysical",anim:5,mode:7,dmg_type:3
                Rangedweapon Rangedweapon RECORD,aim_time:2,accuracy:1,range:10,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:2},
      day:0.75,assembly:0.75
},
{id:81,weight:0.3,handle:1,type:5,name:"MartianWeirdKnife",weapon:{handling:"meleeWeapon",deploy:1,hand:1,shape:6,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 61,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:60,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamagePhysical",anim:10,mode:6,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1,spd:"AttackSpeedBlades"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6}
},
{id:82,weight:2,handle:1,type:5,name:"Katana",weapon:{handling:"meleeWeapon",deploy:1,hand:1,shape:13,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 62,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:140,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamagePhysical",anim:15,mode:6,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:2,spd:"AttackSpeedBlades"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:13},
      day:3,assembly:5.25,prereq:{"T_AdvancedMetalurgy","Metalurgy","Energy3","Metal4","Noble2"}},
{id:83,weight:0.3,system:0
      allowentityid STR "T_EMWeaponsHandling",handle:1,type:5,name:"LightSword",weapon:{handling:"meleeWeapon",deploy:1,hand:1,shape:13,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 63,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:160,consume:0,detect:"Laser",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamageMagnetic",anim:15,mode:6,dmg_type:7
                Closecombatweapon Closecombatweapon RECORD,accuracy:2,spd:"AttackSpeedBlades"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:13}
},
{id:85,weight:0.5,handle:1,type:5,name:"HumanDefenceGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:1,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 64,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:100,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:13
                pellets BOOL T,mode:7,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:0.8,range:11,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploFragHumanHi"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:3.4,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:1},
      day:0.75,assembly:2.25,prereq:{"T_CombatExplosives","Metal1","Chemicals1"}},
{id:86,weight:0.5,handle:1,type:5,name:"HumanAcidGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:1,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 65,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:20,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:13
                pellets BOOL T
                effectprobability FLT 1.2
                timeeffectIndex INT 242,mode:7,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:0.8,range:15,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploAcidHuman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:2,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:1},
      day:1.5,assembly:3,prereq:{"T_AcidWeapons","Metal1","Chemicals4"}},
{id:87,weight:0.5,handle:1,type:5,name:"HumanAttackGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:1,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 66,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:115,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:13
                pellets BOOL T,mode:7,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:0.8,range:19,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploFragHuman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:2.8,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:1},
      day:0.75,assembly:2.25,prereq:{"T_CombatExplosives","Metal1","Chemicals1"}},
{id:88,weight:0.5,handle:1,type:5,name:"HumanEMGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:1,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 67,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:150,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageMagnetic",anim:13
                pellets BOOL T,mode:7,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:0.8,range:15,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploEmpHuman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:1},
      day:1.5,assembly:8.25,prereq:{"T_EMGrenades","Energy4","Metal1","Crystals2"}},
{id:89,weight:0.5,handle:1,type:5,name:"HumanStunGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:1,origin:1
        permanenteffectIndex INT 288
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 68,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:200,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:13
                pellets BOOL T,mode:13,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:0.8,range:15,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploStun"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:3,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:1},
      day:2,assembly:6,prereq:{"T_NonLethalCombat","Metal1"}},
{id:90,weight:1,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:5,name:"BeastmenGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:2,origin:4
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 69,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:75,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:13
                pellets BOOL T,mode:7,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:0.8,range:15,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploFragBeastman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:2.8,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:2}
},
{id:91,weight:1,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:5,name:"BeastmenAntiarmorGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:2,origin:4
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 70,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:50,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:13
                pellets BOOL T
                effectprobability FLT 0.75
                timeeffectIndex INT 162,mode:7,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:0.8,range:15,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploFragBeastmanHi"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:2,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:2}
},
{id:92,weight:1,system:0
      allowentityid STR "T_BeastmenAlchemistInterrogation",handle:1,type:5,name:"BeastmenAcidGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:2,origin:4
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 71,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:25,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:13
                pellets BOOL T
                effectprobability FLT 1.2
                timeeffectIndex INT 242,mode:7,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:0.8,range:15,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploAcidBeastman"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:1.5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:2}
},
{id:93,weight:0.3,system:0
      allowentityid STR "T_EMWeaponsHandling",handle:1,type:5,name:"MartianEMGrenade",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:1,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 72,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:200,consume:1,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeExplosion",dmg:"IncreaseDamageMagnetic",anim:13
                pellets BOOL T,mode:7,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:1,range:19,aim:"AttackAccuracyPhysical",rng:"AttackRangeThrow"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL T
                    ng_waveid STR "fxExploEmpMartian"
                    animationspeed FLT 0
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:6,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:1}
},
{id:95,weight:0,handle:1,type:5,name:"RobotControl",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 73,reload:0
            ListOfWAM ARRAY 2
              {ttf:2,ttr:2,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeRemoteControll",dmg:"IncreaseDamageDefault",anim:5
                effectprobability FLT 1
                timeeffectIndex INT 175,mode:27,dmg_type:0
                Rangedweapon Rangedweapon RECORD,aim_time:5,accuracy:1,range:20,aim:"AttackAccuracyManipulation",rng:"AttackRangeDefault"
                END_OF_Rangedweapon
              },{ttf:2,ttr:2,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeRemoteControll",dmg:"IncreaseDamageDefault",anim:5
                effectprobability FLT 1
                timeeffectIndex INT 175,mode:32,dmg_type:0
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:4,recharge:true,shape:6},
      day:6,assembly:6.75,prereq:{"T_MartianDronesRemoteControl","Robotics","Metal1","Crystals2"}},
{id:96,weight:5,handle:1,type:5,name:"MartianRobotControl",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 74,reload:0
            ListOfWAM ARRAY 1
              {ttf:2,ttr:2,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                effectprobability FLT 1
                timeeffectIndex INT 175,mode:4,dmg_type:0
                Rangedweapon Rangedweapon RECORD,aim_time:10,accuracy:1,range:30,aim:"AttackAccuracyManipulation",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:4,recharge:true,shape:6}
},
{id:97,weight:0.2,handle:1,type:5,name:"MovementScanner",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 75,reload:0
            ListOfWAM ARRAY 1
              {ttf:2,ttr:2,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                effectprobability FLT 999
                timeeffectIndex INT 176,mode:4,dmg_type:0
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon
                ,spread:{range:40,angle:360
                  isfragment BOOL F
                  visiblitytypeid STR "Movement"
                  isscanner BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:7,recharge:true,shape:6},
      day:4.5,assembly:4.5,prereq:{"T_BasicDetection","Metal1"}},
{id:98,weight:1,handle:1,type:5,name:"MetalScanner",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 76,reload:0
            ListOfWAM ARRAY 1
              {ttf:2,ttr:2,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                effectprobability FLT 999
                timeeffectIndex INT 176,mode:4,dmg_type:0
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon
                ,spread:{range:66,angle:360
                  isfragment BOOL F
                  visiblitytypeid STR "EMVision"
                  isscanner BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:7,recharge:true,shape:6},
      day:4.5,assembly:3.75,prereq:{"T_BasicDetection","Metal1"}},
{id:100,weight:0.5,handle:1,type:4,name:"ReticulanBattery",ammo:{capacity:20,shape:2}
},
{id:101,weight:1,handle:1,type:4,name:"BasicFirstAidSet",ammo:{capacity:10,shape:1},
      day:0.375,assembly:1.5,prereq:{"T_Medicine","Chemicals1"}},
{id:102,weight:1,handle:1,type:4,name:"AdvancedFirstAidSet",ammo:{capacity:20,shape:1},
      day:0.75,assembly:6.75,prereq:{"T_AdvancedMedicine","Chemics","Chemicals4"}},
{id:103,weight:1,handle:1,type:4,name:"BasicStimulant1",ammo:{capacity:1,shape:1},
      day:0.75,assembly:4.5,prereq:{"T_Stimulants","Chemicals2"}},
{id:104,weight:1,handle:1,type:4,name:"AdvancedStimulant1",ammo:{capacity:1,shape:1},
      day:3,assembly:9,prereq:{"T_AdvancedDrugs","Chemics","Chemicals5","Chemicals6"}},
{id:105,weight:0.5,handle:1,type:4,name:"HumanProjectileAmmo",ammo:{capacity:25,shape:2},
      day:0.75,assembly:1.5,prereq:{"T_Firearms","Metal1"}},
{id:107,weight:1,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:4,name:"BeastmenAmmo",ammo:{capacity:27,shape:2}
},
{id:108,weight:0.8,handle:1,type:4,name:"AncientAutomatAmmo",ammo:{capacity:32,shape:2}
},
{id:109,weight:0.2,handle:1,type:4,name:"AncientPistolAmmo",ammo:{capacity:16,shape:2}
},
{id:110,weight:0.2,handle:1,type:4,name:"AncientColtAmmo",ammo:{capacity:6,shape:2}
},
{id:111,weight:1,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:4,name:"BeastmenArmorPiercingAmmo",ammo:{capacity:21,shape:2}
},
{id:112,weight:1,system:0
      allowentityid STR "T_BeastmenAlchemistInterrogation",handle:1,type:4,name:"BeastmenAcidAmmo",ammo:{capacity:21,shape:2}
},
{id:113,weight:1,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:4,name:"BeastmenPoisonAmmo",ammo:{capacity:21,shape:2}
},
{id:114,weight:1,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:4,name:"BeastmenParalyzeAmmo",ammo:{capacity:21,shape:2}
},
{id:115,weight:1,system:0
      allowentityid STR "T_BeastmenSoldierInterrogation",handle:1,type:4,name:"BeastmenDecreaseSkillAmmo",ammo:{capacity:21,shape:2}
},
{id:117,weight:0.8,handle:1,type:4,name:"HumanLongRangeAmmo",ammo:{capacity:25,shape:2},
      day:1.5,assembly:2.25,prereq:{"T_AdvancedFirearms","Metal2"}},
{id:118,weight:0.8,handle:1,type:4,name:"HumanLargeDamageAmmo",ammo:{capacity:25,shape:2},
      day:1.5,assembly:2.25,prereq:{"T_AdvancedFirearms","Metal2"}},
{id:119,weight:0.4,handle:1,type:4,name:"HumanShotgunShell",ammo:{capacity:8,shape:2},
      day:0.75,assembly:1.5,prereq:{"T_AdvancedFirearms","Metal1"}},
{id:120,weight:0.6,handle:1,type:4,name:"HumanBattery",ammo:{capacity:15,shape:2},
      day:0.75,assembly:1.5
},
{id:121,weight:0.7,handle:1,type:4,name:"HumanAdvancedBattery",ammo:{capacity:30,shape:2},
      day:2.25,assembly:5.25,prereq:{"T_ReticulanEnergySources","Energy5","Noble3"}},
{id:122,weight:0.4,handle:1,type:4,name:"MartianPlasmaBattery",ammo:{capacity:30,shape:2}
},
{id:123,weight:1.5,handle:1,type:4,name:"ReticulanRockets",ammo:{capacity:1,shape:13}
},
{id:124,weight:1.5,handle:1,type:4,name:"ReticulanPsiRockets",ammo:{capacity:1,shape:13}
},
{id:125,weight:2.5,handle:1,type:4,name:"HumanExplosiveRockets",ammo:{capacity:1,shape:13},
      day:1.5,assembly:3.75,prereq:{"T_RocketbasedWeapons","Metal1","Chemicals1","Fuel3"}},
{id:126,weight:2.5,handle:1,type:4,name:"HumanPhosphorusRockets",ammo:{capacity:1,shape:13},
      day:2,assembly:6,prereq:{"T_CombatCombustibles","Metal1","Chemicals4","Fuel4"}},
{id:136,weight:1,handle:1,type:4,name:"BuzzSawAmmo",ammo:{capacity:1,shape:2},
      day:0.375,assembly:1.5
},
{id:137,weight:1,handle:1,type:4,name:"BuzzSawAmmo2",ammo:{capacity:1,shape:2},
      day:0.75,assembly:5.25,prereq:{"T_AntiMartioanWeapons","Metalurgy","Metal3","Noble2"}},
{id:138,weight:0.1,handle:1,type:4,name:"BasicStimulant2",ammo:{capacity:1,shape:1},
      day:0.75,assembly:4.5,prereq:{"T_Stimulants","Chemicals2"}},
{id:139,weight:0.1,handle:1,type:4,name:"MediumStimulant1",ammo:{capacity:1,shape:1},
      day:1.5,assembly:6.75,prereq:{"T_AdvancedStimulants","Chemics","Chemicals3","Chemicals4"}},
{id:140,weight:0.1,handle:1,type:4,name:"MediumStimulant2",ammo:{capacity:1,shape:1},
      day:1.5,assembly:6.75,prereq:{"T_AdvancedStimulants","Chemics","Chemicals3","Chemicals4"}},
{id:141,weight:0.1,handle:1,type:4,name:"AdvancedStimulant2",ammo:{capacity:1,shape:1},
      day:3,assembly:9,prereq:{"T_AdvancedDrugs","Chemics","Chemicals5","Chemicals6"}},
{id:142,weight:1.4,handle:1,type:4,name:"SuitRepairSet",ammo:{capacity:10,shape:2},
      day:0.375,assembly:1.5
},
{id:143,weight:1.8,handle:1,type:4,name:"RobotRepairSet",ammo:{capacity:10,shape:2},
      day:0.375,assembly:1.5,prereq:{"T_BattleDrones","Robotics"}},
{id:144,weight:2,handle:1,type:4,name:"MineDestructionSet",ammo:{capacity:1,shape:2},
      day:0.375,assembly:1.5,prereq:{"T_LandMines"}},
{id:148,weight:1,handle:1,type:4,name:"HumanGatlingAmmo",ammo:{capacity:100,shape:6},
      day:0.75,assembly:4.5,prereq:{"T_Gatling","Metal3"}},
{id:150,weight:0.3,handle:1,type:2,name:"SniperScope"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 329
        ListOfAddonSlotIndex ARRAY 2
          INT 1
          INT 10
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:3,prereq:{"T_AdvancedOptics","Optics","Metal1"}},
{id:151,weight:0.2,handle:1,type:2,name:"RecoilCompensator"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 287
        ListOfAddonSlotIndex ARRAY 1
          INT 1
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:2.25,prereq:{"T_FirearmStabilization","Metal3","Chemicals2","Fuel2"}},
{id:153,weight:0.4,handle:1,type:2,name:"Gyrostabilizer"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 333
        ListOfAddonSlotIndex ARRAY 1
          INT 4
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:3.75,prereq:{"T_FirearmStabilization","Metal2"}},
{id:154,weight:0.2,handle:1,type:2,name:"Silencer"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 335
        ListOfAddonSlotIndex ARRAY 1
          INT 3
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:4.5,assembly:3,prereq:{"T_SilentFire","Chemicals2"}},
{id:155,weight:0.2,handle:1,type:2,name:"Accelerator"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 337
        ListOfAddonSlotIndex ARRAY 1
          INT 3
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:2.25,prereq:{"T_FirearmStabilization","Noble1"}},
{id:156,weight:0.3,handle:1,type:2,name:"AdvancedScope"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 330
        ListOfAddonSlotIndex ARRAY 2
          INT 1
          INT 10
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:10.5,assembly:7.5,prereq:{"T_AdvancedOptics","Optics","Metal2","Crystals3"}},
{id:157,weight:0.3,handle:1,type:2,name:"AdvancedRecoilCompensator"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 332
        ListOfAddonSlotIndex ARRAY 1
          INT 1
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:9,assembly:6,prereq:{"T_FirearmStabilization","Metal5","Chemicals3","Fuel4"}},
{id:159,weight:0.3,handle:1,type:2,name:"AdvancedGyrostabilizer"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 334
        ListOfAddonSlotIndex ARRAY 1
          INT 4
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:12,assembly:9,prereq:{"T_FirearmStabilization","Metal5"}},
{id:160,weight:0.3,handle:1,type:2,name:"AdvancedSilencer"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 336
        ListOfAddonSlotIndex ARRAY 1
          INT 3
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:6,prereq:{"T_SilentFire","Noble2","Chemicals4"}},
{id:161,weight:0.3,handle:1,type:2,name:"AdvancedAccelerator"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 338
        ListOfAddonSlotIndex ARRAY 1
          INT 3
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:10.5,assembly:6,prereq:{"T_FirearmStabilization","Noble3"}},
{id:162,weight:0.4,handle:1,type:2,name:"LaserCooler"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 339
        ListOfAddonSlotIndex ARRAY 1
          INT 5
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:4.5,assembly:4.5,prereq:{"T_Cooling","Chemicals3"}},
{id:163,weight:0.4,handle:1,type:2,name:"LaserHeater"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 340
        ListOfAddonSlotIndex ARRAY 1
          INT 5
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:6,prereq:{"T_PowerLasers","Energy4","Noble2"}},
{id:164,weight:0.4,handle:1,type:2,name:"LaserScope"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 341
        ListOfAddonSlotIndex ARRAY 1
          INT 2
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:6,prereq:{"T_AdvancedOptics","Optics","Metal1"}},
{id:165,weight:0.4,handle:1,type:2,name:"LaserPowerEnhancer"
      Addon Addon RECORD
        isarmouraddon BOOL F
        permanenteffectIndex INT 342
        ListOfAddonSlotIndex ARRAY 1
          INT 2
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:2.25,prereq:{"T_PowerLasers","Crystals3"}},
{id:167,weight:1,handle:5,type:2,name:"RobotRemoteControlDefense"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 253
        ListOfAddonSlotIndex ARRAY 2
          INT 8
          INT 9
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:5.25,prereq:{"T_RemoteControlProtection","Robotics","Crystals2"}},
{id:168,weight:1,handle:5,type:2,name:"RobotAdvancedVideoSensor"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 136
        ListOfAddonSlotIndex ARRAY 2
          INT 8
          INT 9
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:3,prereq:{"T_AdvancedOptics","Robotics","Optics","Noble2","Crystals2"}},
{id:169,weight:0.5,handle:1,type:2,name:"OpticsNightVision"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 255
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:4.5,prereq:{"T_AdvancedOptics","Optics","Noble1"}},
{id:170,weight:0.5,handle:1,type:2,name:"OpticsInfravision"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 254
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:3,prereq:{"T_AdvancedOptics","Optics","Chemicals1"}},
{id:171,weight:0.5,handle:1,type:2,name:"OpticsEM"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 256
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:5.25,prereq:{"T_MartianArchives","Optics","Crystals2"}},
{id:172,weight:1,handle:1,type:2,name:"Shield"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 257
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:10.5,assembly:4.5,prereq:{"T_DefenseForceField","Technics","Noble4","Crystals1"}},
{id:173,weight:1,handle:1,type:2,name:"PsiAbsorber"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 258
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:6.75,prereq:{"T_PsiAbsorber","Chemicals2","Crystals3"}},
{id:175,weight:1,handle:1,type:2,name:"MagneticEnhancer"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 137
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:10.5,assembly:9,prereq:{"T_EMWeaponsManufacturing","Technics","Crystals4"}},
{id:176,weight:1,handle:1,type:2,name:"AimingSupport"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 261
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:5.25,prereq:{"T_AimingSupport","Electronics","Metal3","Noble2"}},
{id:177,weight:1,handle:1,type:2,name:"Cloaker"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 138
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:12,assembly:10.5,prereq:{"T_Cloaking","Technics","Crystals4"}},
{id:178,weight:1,handle:5,type:2,name:"RobotAdvancedAudioSensors"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 139
        ListOfAddonSlotIndex ARRAY 2
          INT 8
          INT 9
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:4.5,prereq:{"T_AdvancedOptics","Robotics","Technics","Noble2"}},
{id:180,weight:1,handle:5,type:2,name:"RobotEMPulseNegator"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 317
        ListOfAddonSlotIndex ARRAY 2
          INT 8
          INT 9
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:7.5,assembly:5.25,prereq:{"T_EMPrincipes","Robotics","Technics","Crystals4"}},
{id:181,weight:1,handle:5,type:2,name:"RobotKineticInceptor"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 318
        ListOfAddonSlotIndex ARRAY 2
          INT 8
          INT 9
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:6,assembly:2.25,prereq:{"T_FirearmStabilization","Robotics","Metal3","Chemicals3","Fuel4"}},
{id:182,weight:1,handle:1,type:2,name:"SmellAbsorber"
      Addon Addon RECORD
        isarmouraddon BOOL T
        permanenteffectIndex INT 319
        ListOfAddonSlotIndex ARRAY 2
          INT 6
          INT 7
        END_OF_ListOfAddonSlotIndex
      END_OF_Addon
      day:4.5,assembly:3.75,prereq:{"T_SmellAbsorption","Chemics","Chemicals4"}},
{id:900,weight:4,handle:1,type:5,name:"Dynamite",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:6,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 140,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:1000,consume:1,detect:"Tool",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:15
                pellets BOOL T,mode:4,dmg_type:6
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:7,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},
                Autonomweapon Autonomweapon RECORD
                  timetoactivate INT 150
                  ismine BOOL F
                  ng_waveid STR "fxExploFragHumanHi"
                  ListOfVisibilityType ARRAY 9
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Seeing"
                      shiningcoef FLT 0.2
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Hearing"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Infra"
                      shiningcoef FLT 1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Psionic"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "NightVision"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "EMVision"
                      shiningcoef FLT 0.2
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Hearthbeat"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Smell"
                      shiningcoef FLT 1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Movement"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                  END_OF_ListOfVisibilityType
                END_OF_Autonomweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6},
      day:0.75,assembly:1.5
},
{id:901,weight:4.5,handle:1,type:5,name:"ContactMine",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:6,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 141,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:650,consume:1,detect:"Tool",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:15
                pellets BOOL T,mode:4,dmg_type:6
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:6.5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},
                Autonomweapon Autonomweapon RECORD
                  timetoactivate INT 100
                  ismine BOOL T
                  ng_waveid STR "fxExploFragHuman"
                  ListOfVisibilityType ARRAY 9
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Seeing"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Hearing"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Infra"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Psionic"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "NightVision"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "EMVision"
                      shiningcoef FLT 0.5
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Hearthbeat"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Smell"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Movement"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                  END_OF_ListOfVisibilityType
                END_OF_Autonomweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6},
      day:1.5,assembly:2.25,prereq:{"T_LandMines","Chemicals2"}},
{id:903,weight:2,handle:1,type:5,name:"PlasticMine",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:6,origin:4
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 142,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:400,consume:1,detect:"Tool",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:15
                pellets BOOL T,mode:4,dmg_type:6
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:5.5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},
                Autonomweapon Autonomweapon RECORD
                  timetoactivate INT 100
                  ismine BOOL T
                  ng_waveid STR "fxExploFragBeastman"
                  ListOfVisibilityType ARRAY 9
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Seeing"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Hearing"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Infra"
                      shiningcoef FLT 0.5
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Psionic"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "NightVision"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "EMVision"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Hearthbeat"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Smell"
                      shiningcoef FLT 1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Movement"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                  END_OF_ListOfVisibilityType
                END_OF_Autonomweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6}
},
{id:904,weight:1.5,handle:1,type:5,name:"ReticulanMine",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:2
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 143,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:450,consume:1,detect:"Tool",atk:"AttackAccuracyMechanical",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:15
                pellets BOOL T,mode:4,dmg_type:6
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:5,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},
                Autonomweapon Autonomweapon RECORD
                  timetoactivate INT 100
                  ismine BOOL T
                  ng_waveid STR "fxExploFragReticulan"
                  ListOfVisibilityType ARRAY 9
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Seeing"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Hearing"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Infra"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Psionic"
                      shiningcoef FLT 1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "NightVision"
                      shiningcoef FLT 0.1
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "EMVision"
                      shiningcoef FLT 0.5
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Hearthbeat"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Smell"
                      shiningcoef FLT 0.2
                    END_OF_SubVisibilitytype
                    SubVisibilitytype RECORD
                      visibilitytypeid STR "Movement"
                      shiningcoef FLT 0
                    END_OF_SubVisibilitytype
                  END_OF_ListOfVisibilityType
                END_OF_Autonomweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6}
},
{id:905,weight:0.6,handle:1,type:5,name:"EMCloaker",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 144,reload:0
            ListOfWAM ARRAY 1
              {ttf:2,ttr:2,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                effectprobability FLT 999
                timeeffectIndex INT 177,mode:4,dmg_type:0
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon
                ,spread:{range:2,angle:360
                  isfragment BOOL F
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:7,recharge:true,shape:6},
      day:9,assembly:7.5,prereq:{"T_Cloaking","Technics","Crystals4"}},
{id:906,weight:0.8,system:0
      allowentityid STR "T_BeastmanShamanInterrogation",handle:1,type:5,name:"BeastmenSmellScanner",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:4
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 145,reload:0
            ListOfWAM ARRAY 1
              {ttf:2,ttr:2,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                effectprobability FLT 999
                timeeffectIndex INT 176,mode:4,dmg_type:0
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon
                ,spread:{range:66,angle:360
                  isfragment BOOL F
                  visiblitytypeid STR "Smell"
                  isscanner BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:7,recharge:true,shape:6}
},
{id:907,weight:0.8,system:0
      allowentityid STR "T_BeastmanShamanInterrogation",handle:1,type:5,name:"BeastmenHeartbeatScanner",weapon:{handling:"pistol",deploy:3,hand:1,shape:6,origin:4
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 146,reload:0
            ListOfWAM ARRAY 1
              {ttf:2,ttr:2,round:1,str:0,consume:1,detect:"Tool",atk:"AttackAccuracyManipulation",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                effectprobability FLT 999
                timeeffectIndex INT 176,mode:4,dmg_type:0
                Closecombatweapon Closecombatweapon RECORD,accuracy:10,spd:"ToolSpeed"
                END_OF_Closecombatweapon
                ,spread:{range:66,angle:360
                  isfragment BOOL F
                  visiblitytypeid STR "Hearthbeat"
                  isscanner BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:7,recharge:true,shape:6}
},
{id:908,weight:10,handle:5,type:1,name:"BattleDecking"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "BattleDecking"
        headslotIndex INT 0
        handslotIndex INT 9
        protect:[0,0.4,0.5,0.6,0.3,1,0.5,0.25,1,0,1],
        slot:[7,7,17,17],
      END_OF_Armour
      day:4.5,assembly:7.5,prereq:{"T_AdvancedDecking","Robotics","Metal4"}},
{id:909,weight:10,handle:5,type:1,name:"ArmoredDecking"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "ArmoredDecking"
        headslotIndex INT 0
        handslotIndex INT 9
        protect:[0,0.9,0.85,0.9,0.5,1,0.9,0.75,1,0,1],
        slot:[7,17],
      END_OF_Armour
      day:7.5,assembly:7.5,prereq:{"T_ArmoredDecking","Robotics","Metal6"}},
{id:910,weight:10,handle:5,type:1,name:"HiTechDecking"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "HiTechDecking"
        headslotIndex INT 8
        handslotIndex INT 9
        protect:[0,0.45,0.6,0.7,0,1,0.25,0.15,1,0,1],
        slot:[7,7,7,7,17,17,17,17],
      END_OF_Armour
      day:10.5,assembly:15,prereq:{"T_SuperBattleDecking","Robotics","Electronics","Metal5","Noble3"}},
{id:911,weight:10,handle:5,type:1,name:"BasicDecking"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "BasicDecking"
        protect:[0,0,0.2,0.2,0,1,0,0,1,0,1],
        slot:[7,17],
      END_OF_Armour
      day:1.5,assembly:4.5,prereq:{"T_BattleDrones","Robotics","Metal2"}},
{id:912,weight:10,handle:5,type:1,name:"Martian1Decking"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MartianDronesUse"
        protect:[0,0.2,0.4,0.7,0,1,0.2,0.2,1,0,1],
        slot:[7,17],
      END_OF_Armour
},
{id:913,weight:10,handle:5,type:1,name:"Martian2Decking"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MartianDronesUse"
        protect:[0,0.45,0.6,0.8,0,1,0.55,0.3,1,0,1],
        slot:[7,7,17,17],
      END_OF_Armour
},
{id:914,weight:120,handle:1,type:6,name:"BeastmanCorpse",corpse:{subrace:"BeastmanSoldier",salvage:1}},
{id:915,weight:30,handle:5,type:7,name:"RobotBody"
      Robotic Robotic RECORD
        type STR "body"
      END_OF_Robotic
      day:3,assembly:6.75,prereq:{"T_BattleDrones","Robotics","Metal1"}},
{id:916,weight:10,handle:5,type:7,name:"SpareParts"
      Robotic Robotic RECORD
        type STR "heal"
      END_OF_Robotic
      day:0.375,assembly:1.5,prereq:{"T_BattleDrones","Robotics"}},
{id:917,weight:10,handle:5,type:7,name:"MartianSpareParts"
      Robotic Robotic RECORD
        type STR "heal"
      END_OF_Robotic
      day:0.375,assembly:2.25,prereq:{"T_MartianDronesUse","Robotics"}},
{id:918,weight:1,handle:1,type:7,name:"ProcessorMinor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "ProcessorMinor"
      END_OF_Robotic
      day:0.75,assembly:2.25,prereq:{"T_MinorEnhacements","Robotics","Metal1"}},
{id:919,weight:1,handle:1,type:7,name:"MemoryMinor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "MemoryMinor"
      END_OF_Robotic
      day:0.75,assembly:2.25,prereq:{"T_MinorEnhacements","Robotics","Metal1"}},
{id:920,weight:1,handle:1,type:7,name:"SensorMinor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "SensorMinor"
      END_OF_Robotic
      day:0.75,assembly:2.25,prereq:{"T_MinorEnhacements","Robotics","Metal1"}},
{id:921,weight:1,handle:1,type:7,name:"GearMinor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "GearMinor"
      END_OF_Robotic
      day:0.75,assembly:2.25,prereq:{"T_MinorEnhacements","Robotics","Metal1"}},
{id:922,weight:1,handle:1,type:7,name:"MonitorMinor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "MonitorMinor"
      END_OF_Robotic
      day:0.75,assembly:2.25,prereq:{"T_MinorEnhacements","Robotics","Metal1"}},
{id:923,weight:1,handle:1,type:7,name:"ProcessorMajor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "ProcessorMajor"
      END_OF_Robotic
      day:1.5,assembly:6.75,prereq:{"T_MajorEnhancements","Robotics","Electronics","Noble1"}},
{id:924,weight:1,handle:1,type:7,name:"MemoryMajor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "MemoryMajor"
      END_OF_Robotic
      day:1.5,assembly:6.75,prereq:{"T_MajorEnhancements","Robotics","Electronics","Noble1"}},
{id:925,weight:1,handle:1,type:7,name:"SensorMajor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "SensorMajor"
      END_OF_Robotic
      day:1.5,assembly:6.75,prereq:{"T_MajorEnhancements","Robotics","Electronics","Noble1"}},
{id:926,weight:1,handle:1,type:7,name:"GearMajor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "GearMajor"
      END_OF_Robotic
      day:1.5,assembly:6.75,prereq:{"T_MajorEnhancements","Robotics","Electronics","Noble1"}},
{id:927,weight:1,handle:1,type:7,name:"MonitorMajor"
      Robotic Robotic RECORD
        type STR "upgrade"
        trainingid STR "MonitorMajor"
      END_OF_Robotic
      day:1.5,assembly:6.75,prereq:{"T_MajorEnhancements","Robotics","Electronics","Noble1"}},
{id:928,weight:4,handle:5,type:3,name:"RobotRifle",weapon:{handling:"rifle",deploy:3,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 174,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:3,str:40,consume:1,detect:"ProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_Rifle",accuracy:1,range:28,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:4.5,prereq:{"T_Firearms","Robotics","Energy1","Metal2"}},
{id:929,weight:4,handle:5,type:3,name:"RobotGatling",weapon:{handling:"rifle",deploy:5,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 177,reload:60
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:10,str:40,consume:1,detect:"NoisyProjectileGun",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:1,mode:24,dmg_type:1
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_Gatling",accuracy:0.8,range:28,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:7.5,assembly:11.25,prereq:{"T_Gatling","Robotics","Metalurgy","Metal6"}},
{id:930,weight:4,handle:5,type:3,name:"RobotAnnihilator",weapon:{handling:"rifle",deploy:20,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 175,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:10,round:1,str:300,consume:5,detect:"Plasma",atk:"AttackAccuracyAimed",def:"DodgeExplosion",dmg:"IncreaseDamageDefault",anim:5,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:8
                  ng_useid STR "fxShot_Anihilator",accuracy:1,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:12,assembly:13.5,prereq:{"T_Annihilator","Robotics","Metal4","Crystals3","Energy7"}},
{id:931,weight:4,handle:5,type:3,name:"RobotRocketLauncher",weapon:{handling:"rifle",deploy:10,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 176,reload:50
            ListOfWAM ARRAY 1
              {ttf:4,ttr:10,round:1,str:250,consume:1,detect:"Launcher",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5,mode:1,dmg_type:6
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_RocketLauncher",accuracy:0.66,range:40,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_flyingid STR "fxRocketFlame"
                    ng_waveid STR "fxExploFragHuman"
                    animationspeed FLT 1.5
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:4.6,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:4.5,assembly:5.25,prereq:{"T_RocketbasedWeapons","Robotics","Metal3"}},
{id:932,weight:4,handle:5,type:3,name:"RobotLaserCannon",weapon:{handling:"rifle",deploy:3,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 175,reload:60
            ListOfWAM ARRAY 1
              {ttf:2,ttr:6,round:1,str:70,consume:2,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:15
                  ng_useid STR "fxShot_LaserHuman",accuracy:3.1,range:40,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:6,assembly:7.5,prereq:{"T_LaserWeapons","Robotics","Energy4","Noble2","Crystals3"}},
{id:933,weight:4,handle:5,type:3,name:"RobotLaserRifle",weapon:{handling:"rifle",deploy:3,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 175,reload:40
            ListOfWAM ARRAY 1
              {ttf:2,ttr:4,round:1,str:35,consume:1,detect:"Laser",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:2,mode:1,dmg_type:7
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_LaserHuman",accuracy:3.1,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:3,assembly:6,prereq:{"T_LaserWeapons","Robotics","Noble1","Crystals1"}},
{id:934,weight:4,handle:5,type:3,name:"RobotEMPRifle",weapon:{handling:"rifle",deploy:3,shape:5,origin:1
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 175,reload:40
            ListOfWAM ARRAY 1
              {ttf:4,ttr:0,round:1,str:150,consume:1,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:4,mode:1,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpMartian",accuracy:1,range:30,aim:"AttackAccuracyAimed",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},day:9,assembly:6,prereq:{"T_EMWeaponsManufacturing","Robotics","Energy4","Noble2","Crystals2"}},
{id:935,weight:1,handle:5,type:4,name:"RobotProjectileAmmo",ammo:{capacity:40,shape:6},
      day:0.75,assembly:0.75,prereq:{"T_Firearms","Robotics","Metal1"}},
{id:936,weight:1,handle:5,type:4,name:"RobotBattery",ammo:{capacity:40,shape:6},
      day:0.75,assembly:1.5,prereq:{"T_LaserWeapons","Robotics","Energy3"}},
{id:937,weight:1,handle:5,type:4,name:"RobotRocket",ammo:{capacity:1,shape:13},
      day:1.5,assembly:3.75,prereq:{"T_RocketbasedWeapons","Robotics","Metal1","Chemicals1","Fuel3"}},
{id:938,weight:1,handle:1,type:4,name:"RobotGatlingAmmo",ammo:{capacity:120,shape:6},
      day:1.5,assembly:4.5,prereq:{"T_Gatling","Robotics","Metal3"}},
{id:939,weight:83,handle:1,type:6,name:"MartianFlyWreck1",corpse:{subrace:"RobotLevitating",repair:"T_MartianDronesUse",salvage:0.2,armor:151}},
{id:940,weight:181,handle:1,type:6,name:"MartianSpiderWreck1",corpse:{subrace:"RobotWalking",repair:"T_MartianDronesUse",salvage:0.2,armor:151}},
{id:941,weight:10,handle:1,type:3,name:"BeastmanArtifact1",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:6,origin:4
}},
{id:942,weight:10,handle:1,type:3,name:"BeastmanArtifact2",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:6,origin:4
}},
{id:945,weight:35,handle:1,type:6,name:"ReticulanCorpse",corpse:{subrace:"ReticulanRebel",salvage:1}},
{id:946,weight:5,handle:1,type:6,name:"WormCorpse",corpse:{subrace:"WormSub",salvage:1}},
{id:947,weight:78,handle:1,type:6,name:"SpiderCorpse",corpse:{subrace:"SpiderSub",salvage:1}},
{id:948,weight:226,handle:1,type:6,name:"BossCorpse",corpse:{subrace:"BossSub",salvage:1}},
{id:949,weight:112,handle:1,type:6,name:"RollerCorpse",corpse:{subrace:"RollerSub",salvage:1}},
{id:950,weight:51,handle:1,type:6,name:"MartianCorpse",corpse:{subrace:"MartianSub",salvage:1}},
{id:951,weight:2,handle:1,type:6,name:"MartianPetCorpse",corpse:{subrace:"PlantPetSub",salvage:1}},
{id:952,weight:20,handle:5,type:1,name:"TurtleScoutDecking"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "TurtleScoutDecking"
        headslotIndex INT 0
        handslotIndex INT 9
        protect:[0,0.98,0.96,0.98,0.6,1,0.96,0.9,1,0,1]
        ListOfArmourNormalSlot ARRAY 0
        END_OF_ListOfArmourNormalSlot
      END_OF_Armour
      day:7.5,assembly:4.5,prereq:{"T_ArmoredDecking","Robotics","Metal5"}},
{id:953,weight:4,system:true,handle:1,type:3,name:"RobotEMPPistol",weapon:{handling:"rifle",deploy:3,shape:5,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 192,reload:40
            ListOfWAM ARRAY 1
              {ttf:4,ttr:0,round:1,str:60,consume:1,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:8,mode:1,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpMartian",accuracy:1,range:20,aim:"AttackAccuracyAimed",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:954,weight:4,system:true,handle:1,type:3,name:"RobotEMPRifleMartian",weapon:{handling:"rifle",deploy:3,shape:5,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 192,reload:40
            ListOfWAM ARRAY 1
              {ttf:4,ttr:0,round:1,str:100,consume:1,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:8,mode:1,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpMartian",accuracy:1.25,range:30,aim:"AttackAccuracyAimed",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:955,weight:4,system:true,handle:1,type:4,name:"RobotMartianEnergyCell",ammo:{capacity:30,shape:6}
},
{id:956,weight:0,system:true,handle:1,type:5,name:"PetAttackMartianPlant",weapon:{handling:"rifle",deploy:3,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 193,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:15,consume:0,detect:"Tool",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:5,mode:1,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_EmpMartian",accuracy:2,range:5,aim:"AttackAccuracyMagnetic",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:957,weight:0,system:true,handle:1,type:5,name:"PetAttackWorm",weapon:{handling:"rifle",deploy:3,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 194,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:15,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:10
                effectprobability FLT 0.15
                timeeffectIndex INT 242,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_FlushA",accuracy:1,range:2.5,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:958,weight:0,system:true,handle:1,type:5,name:"PetAttackSpiderLegOrange",weapon:{handling:"rifle",deploy:3,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 195,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:125,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamagePhysical",anim:26,mode:1,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:959,weight:0,system:true,handle:1,type:5,name:"PetAttackSpiderFlushOrange",weapon:{handling:"rifle",deploy:3,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 196,reload:0
            ListOfWAM ARRAY 0
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:960,weight:0,system:true,handle:1,type:5,name:"PetAttackBoss",weapon:{handling:"rifle",deploy:9,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 197,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:5,round:1,str:100,consume:0,detect:"Tool",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:15
                pellets BOOL T
                effectprobability FLT 1
                timeeffectIndex INT 242,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:10,accuracy:1,range:25,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_waveid STR "fxExploFlushB"
                    animationspeed FLT 2
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:1,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:961,weight:0,system:true,handle:1,type:5,name:"PetAttackElements",weapon:{handling:"rifle",deploy:3,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 198,reload:0
            ListOfWAM ARRAY 1
              {ttf:5,ttr:15,round:1,str:20,consume:0,detect:"Tool",atk:"AttackAccuracyAimed",def:"DodgeMelee",dmg:"IncreaseDamageDefault",anim:5,mode:1,dmg_type:6
                Closecombatweapon Closecombatweapon RECORD,accuracy:1,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:962,weight:0,system:true,handle:1,type:5,name:"PetattackRoller",weapon:{handling:"rifle",deploy:3,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 199,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:100,consume:0,detect:"Tool",atk:"AttackAccuracyAimed",def:"DodgeExplosion",dmg:"IncreaseDamagePhysical",anim:13
                pellets BOOL T,mode:1,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:1.5,angle:360
                  isfragment BOOL F},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:963,weight:0,system:true,handle:1,type:3,name:"RobotPlasmaCannonMartian",weapon:{handling:"rifle",deploy:30,shape:5,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 192,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:30,round:1,str:140,consume:5,detect:"Plasma",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:10,accuracy:2.5,range:30,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_waveid STR "fxExploPlasma"
                    animationspeed FLT 0.4
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:1.4,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:964,weight:0,system:true,handle:1,type:3,name:"MechPlasmaCannon",weapon:{handling:"rifle",deploy:12,shape:5,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 192,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:12,round:1,str:180,consume:5,detect:"Plasma",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:10,accuracy:2.5,range:30,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_waveid STR "fxExploPlasma"
                    animationspeed FLT 0.25
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:1.4,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:965,weight:0,system:true,handle:1,type:3,name:"MechEMPRifle",weapon:{handling:"rifle",deploy:5,shape:5,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 192,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:140,consume:1,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:6,mode:1,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpMartian",accuracy:1.6,range:30,aim:"AttackAccuracyAimed",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:966,weight:0,system:true,handle:1,type:3,name:"BossPlasmaCannon",weapon:{handling:"rifle",deploy:25,shape:5,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 192,reload:40
            ListOfWAM ARRAY 1
              {ttf:0,ttr:30,round:1,str:350,consume:5,detect:"Plasma",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:10,accuracy:2.5,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                  Slowprojectileweapon Slowprojectileweapon RECORD
                    isbalistic BOOL F
                    ng_waveid STR "fxExploPlasma"
                    animationspeed FLT 0.25
                  END_OF_Slowprojectileweapon
                END_OF_Rangedweapon
                ,spread:{range:1.4,angle:360
                  isfragment BOOL T
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:967,weight:0,system:true,handle:1,type:3,name:"BossEMPRifle",weapon:{handling:"rifle",deploy:10,shape:5,origin:3
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 192,reload:40
            ListOfWAM ARRAY 1
              {ttf:12,ttr:0,round:1,str:300,consume:1,detect:"EMP",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageMagnetic",anim:12,mode:1,dmg_type:4
                Rangedweapon Rangedweapon RECORD,aim_time:10
                  ng_useid STR "fxShot_EmpMartian",accuracy:2,range:35,aim:"AttackAccuracyAimed",rng:"AttackRangeMagnetic"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
}},
{id:968,weight:100,system:true,handle:1,type:1,name:"MartianMechArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MechDisassembly"
        permanenteffectIndex INT 15
        protect:[0,0.65,0.65,0.82,0,1,0.3,0.1,1,0,1],
        slot:[7,17,17],
      END_OF_Armour
},
{id:969,weight:100,system:true,handle:1,type:1,name:"MartianBossArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_SpiderDroneDisassembly"
        permanenteffectIndex INT 16
        protect:[0,0.82,0.82,0.88,0,1,0.6,0.15,1,0,1],
        slot:[7,17],
      END_OF_Armour
},
{id:970,weight:30,system:true,handle:1,type:1,name:"PetArmourWormBlack"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_WormAutopsy"
        protect:[0,0.3,0.1,0.3,0.9,0.9,0.2,0.3,0,1,1],
        slot:[0],
      END_OF_Armour
},
{id:971,weight:30,system:true,handle:1,type:1,name:"PetArmourSpiderOrange"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_SpiderAutopsy"
        protect:[0,0.3,0,0.3,0.8,0.9,0.2,0.3,0,1,1],
        slot:[0,1],
      END_OF_Armour
},
{id:972,weight:30,system:true,handle:1,type:1,name:"PetArmourRoller"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_RollerAutopsy"
        protect:[0,0.35,0.1,0.7,1,0.9,0.4,0.8,1,1,1],
        slot:[0],
      END_OF_Armour
},
{id:973,weight:100,system:true,handle:1,type:1,name:"PetArmourBoss"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_BossAutopsy"
        protect:[0,0.3,0.1,0.5,1,1,0.3,0.6,0,1,1],
        slot:[0],
      END_OF_Armour
},
{id:974,weight:30,system:true,handle:1,type:1,name:"PetArmourMartianPlant"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_MartianPetAutopsy"
        protect:[0,0,0,0,1.5,1,0,0,0,1,1],
        slot:[0],
      END_OF_Armour
},
{id:975,weight:30,system:true,handle:1,type:1,name:"PetArmourWormClear"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_WormAutopsy"
        permanenteffectIndex INT 251
        protect:[0,0.3,0.1,0.2,0.9,0.9,0.2,0.3,0,1,1],
        slot:[0],
      END_OF_Armour
},
{id:976,weight:30,system:true,handle:1,type:1,name:"PetArmourSpiderPurple"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_SpiderAutopsy"
        protect:[0,0.3,0.1,0.2,0.8,0.9,0.2,0.3,0,1,1],
        slot:[0,1],
      END_OF_Armour
},
{id:977,weight:0,system:true,handle:1,type:5,name:"PetAttackSpiderLegPurple",weapon:{handling:"rifle",deploy:3,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 214,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:110,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeMelee",dmg:"IncreaseDamagePhysical",anim:26,mode:1,dmg_type:3
                Closecombatweapon Closecombatweapon RECORD,accuracy:1,spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:978,weight:0,system:true,handle:1,type:5,name:"PetAttackSpiderFlushPurple",weapon:{handling:"rifle",deploy:3,shape:6,origin:0
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 215,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:10,round:1,str:80,consume:0,detect:"Tool",atk:"AttackAccuracyPhysical",def:"DodgeBullet",dmg:"IncreaseDamagePhysical",anim:5
                effectprobability FLT 0.5
                timeeffectIndex INT 242,mode:1,dmg_type:2
                Rangedweapon Rangedweapon RECORD,aim_time:5
                  ng_useid STR "fxShot_FlushB",accuracy:1,range:16,aim:"AttackAccuracyAimed",rng:"AttackRangeDefault"
                END_OF_Rangedweapon},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:5}
},
{id:979,weight:181,handle:1,type:6,name:"MartianSpiderWreck2",corpse:{subrace:"RobotWalking",repair:"T_MartianDronesUse",salvage:0.2,armor:152}},
{id:980,weight:83,handle:1,type:6,name:"MartianFlyWreck2",corpse:{subrace:"RobotLevitating",repair:"T_MartianDronesUse",salvage:0.2,armor:152}},
{id:981,weight:312,handle:1,type:6,name:"MartianBigSpiderWreck",corpse:{subrace:"RobotGreatSpider",salvage:1}},
{id:982,weight:302,handle:1,type:6,name:"MartianMechWreck",corpse:{subrace:"RobotMech",salvage:1}},
{id:983,weight:42,handle:1,type:6,name:"RobotCorpseTurtle",corpse:{subrace:"RobotWheeled",repair:"T_BattleDrones",salvage:0.5,armor:189}},
{id:984,weight:63,handle:1,type:6,name:"RobotCorpseBasic",corpse:{subrace:"RobotWheeled",repair:"T_BattleDrones",salvage:0.5,armor:150}},
{id:985,weight:164,handle:1,type:6,name:"RobotCorpseArmored",corpse:{subrace:"RobotWheeled",repair:"T_BattleDrones",salvage:0.5,armor:148}},
{id:986,weight:127,handle:1,type:6,name:"RobotCorpseBattle",corpse:{subrace:"RobotWheeled",repair:"T_BattleDrones",salvage:0.5,armor:147}},
{id:987,weight:119,handle:1,type:6,name:"RobotCorpseHiTech",corpse:{subrace:"RobotWheeled",repair:"T_BattleDrones",salvage:0.5,armor:149}},
{id:988,weight:36,handle:1,type:6,name:"ReticulanExpeditionCorpse",corpse:{subrace:"ReticulanOriginal",salvage:1}},
{id:989,weight:36,handle:1,type:6,name:"MatriarchCorpse",corpse:{subrace:"BeastmanMistress",salvage:1}},
{id:990,weight:7,handle:1,type:3,name:"MartianArtifact1",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:2,origin:3
}},
{id:991,weight:11,handle:1,type:3,name:"MartianArtifact2",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:2,origin:3
}},
{id:992,weight:4,handle:1,type:3,name:"MartianArtifact3",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:2,origin:3
}},
{id:993,weight:3,handle:1,type:3,name:"ReticulanArtifact",weapon:{handling:"throwingWeapon",deploy:3,hand:1,shape:6,origin:2
}},
{id:994,weight:5,system:true,handle:1,type:1,name:"FireballArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "FireballThrower"
        protect:[0,0.95,0.5,0.9,-1,1,0.7,0.9,1,1,1],
        slot:[0],
      END_OF_Armour
},
{id:995,weight:0,handle:1,type:5,name:"FireballWeapon",weapon:{handling:"rifle",deploy:0,hand:2,shape:6,origin:7
        ListOfWeaponAmmo ARRAY 1
          SubWeaponAmmo RECORD
            ammoITIndex INT 232,reload:0
            ListOfWAM ARRAY 1
              {ttf:0,ttr:0,round:1,str:666,consume:0,detect:"Plasma",atk:"AttackAccuracyAimed",def:"DodgeBullet",dmg:"IncreaseDamageDefault",anim:5
                pellets BOOL T,mode:1,dmg_type:2
                Closecombatweapon Closecombatweapon RECORD,accuracy:1
                  ng_useid STR "fxExploLightningBall",spd:"AttackSpeedDefault"
                END_OF_Closecombatweapon
                ,spread:{range:2.5,angle:360
                  isfragment BOOL F
                  isepicenterhit BOOL T},},
            END_OF_ListOfWAM
          END_OF_SubWeaponAmmo
        END_OF_ListOfWeaponAmmo
},ammo:{capacity:1,shape:6}
},
{id:1001,weight:5,handle:1,type:3,name:"MartianxCrystal1",weapon:{handling:"throwingWeapon",deploy:5,hand:1,shape:2,origin:3
}},
{id:1002,weight:7,handle:1,type:3,name:"MartianxCrystal2",weapon:{handling:"throwingWeapon",deploy:5,hand:1,shape:2,origin:3
}},
{id:1003,weight:50,system:true,handle:1,type:1,name:"BeastmanSergeantArmour"
      Armour Armour RECORD
        maxhostility INT 15
        selfrepaircoef INT 99
        showstatisticsid STR "T_BeastmanAutopsy"
        permanenteffectIndex INT 214
        protect:[0,0.25,0.25,0.25,0.7,0,0.25,0.25,0,1,1],
        slot:[0,1,2,7,15],
      END_OF_Armour
},
]; // ]]>