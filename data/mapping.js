ufoal.maps = {

special_req : { /* Entity relationship mappings */
   'MineCrystalMinor': /\bCrystals\d\b/,
   'MineNobleMinor': /\bNoble\d\b/,
   'FossilePowerUpgrade': /\bEnergy[45]\b/,
   'AlienPowerUpgrade': /\bEnergy[6789]\b/,
   'MartianArtifact1': /\b(One|Two)MartianArtifact\b/,
   'MartianArtifact2': /\b(One|Two)MartianArtifact\b/,
   'MartianArtifact3': /\b(One|Two)MartianArtifact\b/,
},

ammo_req : { /* Ammo training mapping by attack mode */
   'Heal': 'MedicineMinor', /* Only include human trainings to keep it simple */
   'HealAdvanced': 'MedicineMajor',
   'DefuseMine': 'SurveyingMinor',
   'RepairSuit': 'SuitManipulationMinor',
   'RepairRobot': 'AutomationMinor',
},

weapon_req : { /* Weapon/Device training mapping by attack mode */
   'RobotControl': 'AutomationMinor',
   'Homing': 'DrivingMinor',
   'EMP': 'EMEquipmentMinor',
   'PlasmaShot': 'PlasmaWeaponsMinor',
   'PsiHeal': 'PsionicEquipmentMinor',
   'PsiControll': 'PsionicEquipmentMajor',
},

heavy_weapon : { /* Heavy weapons. Let me know if you can detect them correctly without using a name list. */
   'BeastmenBigRifle': 1,
   'BeastmenCannon': 1,
   'BeastmenGrenadeLauncher': 1,
   'HumanGatling': 1,
   'HumanLaserCannon': 1,
   'HumanRocketLauncher': 1,
   'WarpCannon': 1,
},

compare : {
   'armour' : {
      'Light' : 'HumanLightBasicArmour;HumanLightTransportArmour;HumanLightBattleArmour;HumanLightOpenArmour;HumanMediumBattleArmour;HumanMediumAdvanceArmour',
      'Heavy' : 'HumanHeavyBasicArmour;HumanHeavyAdvanceArmour;HumanHeavyLifesupportArmour;HumanHeavyBattleArmour',
      'Robot' : 'BasicDecking;BattleDecking;ArmoredDecking;TurtleScoutDecking;HiTechDecking;Martian1Decking;Martian2Decking',
      'Alien' : 'ReticulanPyjamas;ReticulanArmour;ReticulanExpPyjamas;ReticulanExpArmour;Martian;MartianArmour',
   },
   'system' : {
      'Beastman Armour' : 'BeastmanPrivateArmour;BeastmanShamanArmour;BeastmanCaptainArmour;BeastmenAlchemistArmour;BeastmanSergeantArmour;BeastmenDomina1;BeastmenDomina2;PetArmourWormBlack;PetArmourWormClear;PetArmourSpiderPurple;PetArmourSpiderOrange;PetArmourRoller;PetArmourBoss',
      'Other Armour' : 'ElementsArmour;MartianMechArmour;MartianBossArmour;PetArmourMartianPlant;FireballArmour',
      'Beastman Weapon' : 'PetAttackWorm;PetAttackSpiderLegPurple;PetAttackSpiderLegOrange;PetAttackSpiderFlushPurple;PetAttackSpiderFlushOrange;PetattackRoller;PetAttackBoss',
      'Other Weapon' : 'PetAttackElements;RobotEMPPistol;RobotEMPRifleMartian;RobotPlasmaCannonMartian;MechPlasmaCannon;MechEMPRifle;BossPlasmaCannon;BossEMPRifle;PetAttackMartianPlant;FireballWeapon',
   },
   'weapon' : {
      'Firearm' : 'AncientColt;AncientPistol;AncientRifle;HumanPistol;HumanRifle;HumanSniperRifle;HumanShotgun;BeastmenPistol;BeastmenRifle',
      'Laser'  : 'HumanArcheologicalLaser;ReticulanLaserPistol;ReticulanLaserRifle;HumanLaserRifle;HumanLaserCannon',
      'Energy' : 'MartianEMPpistol;LightningThrower;MartianPlasmaCannon;WarpCannon;HumanEMPRifle;Annihilator;FireballThrower',
      'Melee' : 'HumanKnife;MartianWeirdKnife;Katana;LightSword;BuzzSaw;BuzzSawCrossbow',
      'Heavy' : 'HumanGatling;BeastmenBigRifle;BeastmenCannon',
      'Explosive' : 'ReticulanLauncher;HumanRocketLauncher;HumanGrenadeLauncher;BeastmenGrenadeLauncher;HumanDefenceGrenade;HumanAttackGrenade;HumanStunGrenade;HumanAcidGrenade;HumanEMGrenade;BeastmenGrenade;BeastmenAntiarmorGrenade;BeastmenAcidGrenade;MartianEMGrenade',
      'Mines' : 'Dynamite;ReticulanMine;ContactMine;PlasticMine',
      'Robot' : 'RobotRifle;RobotLaserRifle;RobotGatling;RobotLaserCannon;RobotRocketLauncher;RobotEMPRifle;RobotAnnihilator'
   },
   'ammo' : {
      'Firearm' : 'HumanProjectileAmmo;HumanLongRangeAmmo;HumanLargeDamageAmmo;BeastmenAmmo;BeastmenArmorPiercingAmmo;BeastmenAcidAmmo;BeastmenPoisonAmmo;BeastmenParalyzeAmmo;BeastmenDecreaseSkillAmmo',
   },
   'addon' : {
      'Firearm' : 'SniperScope;AdvancedScope;RecoilCompensator;AdvancedRecoilCompensator;Gyrostabilizer;AdvancedGyrostabilizer;Silencer;AdvancedSilencer;Accelerator;AdvancedAccelerator',
      'Laser' :  'LaserCooler;LaserHeater;LaserScope;LaserPowerEnhancer',
      'Armor' : 'OpticsNightVision;OpticsInfravision;OpticsEM;PsiAbsorber;SmellAbsorber;Cloaker;Shield;AimingSupport;MagneticEnhancer;',
      'Robot' : 'RobotAdvancedVideoSensor;RobotAdvancedAudioSensors;RobotKineticInceptor;RobotRemoteControlDefense;RobotEMPulseNegator',
   },
   'building' : {
      'Resource' : 'Aqua;CisternAquaUpgrade;DirectGainAquaUpgrade;Power;FossilePowerUpgrade;AlienPowerUpgrade;StoreFuel;StoreMetal;StoreMedical',
      'Research' : 'Lab;MarsSimulation;Communication;DataCommunication;Range;Pyrotechnics;Autopsy;Alien;Computer;Magnetic',
      'Production' : 'Workshop;Robotics;Electronics;Technics;Chemics;Optics;Metalurgy',
   },
   'station' : {
      'Mines' : 'MineFuelMinor;MineFuelMajor;MineMetalMinor;MineMetalMajor;MineChemicalsMinor;MineChemicalsMajor;MineNobleMinor;MineNobleMajor;MineCrystalMinor;MineCrystalMajor',
      'Others' : 'Geosonde;Excavations;MilitaryMinor;MilitaryMajor;TerraformMinor;TerraformMajor',
   },
   'people' : {
      'Human' : 'Ute Heinemann;Harald Zamyatin;Diego Ramirez;Samantha Svensson;Hikaru Yoshimori;Tadeusz Yoshimori;Gene Lawrence;Mark Wells;Pauline Lasalle;Benat Haradze;Oliver Svensson;Vera Schrooten;Claude Lasalle;Pierre Lasalle;Rita Lawrence;Rita2;Olga Zamyatina;Olga2',
      'Alien' : "Tabatch't'kvlam;Oghla'k'nkmant;Bilakhi'na'mosse;Prakhti'm'tklami;Zatr'la'tchkhol;J!nai%e;Shoo*m!;Cai%m!",
   },
   /*
   'tech' : {},
   'addon' : {},
   'item' : {},
   'training' : {},
   'squad' : {},
   'unit' : {},
   'subrace' : {},
   'race' : {},
   */
}

};