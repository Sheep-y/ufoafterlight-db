ufoal.maps = {

special_req : { /* Entity relationship mappings */
   'MineCrystalMinor': /\bCrystals\d\b/,
   'MineNobleMinor': /\bNoble\d\b/,
   'FossilePowerUpgrade': /\bEnergy[45]\b/,
   'AlienPowerUpgrade': /\bEnergy[6789]\b/,
   'MartianArtifact1': /\b(One|Two)MartianArtifact\b/,
   'MartianArtifact2': /\b(One|Two)MartianArtifact\b/,
   'MartianArtifact3': /\b(One|Two)MartianArtifact\b/
},

ammo_req : { /* Ammo training mapping by attack mode */
   'Heal': 'MedicineMinor', /* Only include human trainings to keep it simple */
   'HealAdvanced': 'MedicineMajor',
   'DefuseMine': 'SurveyingMinor',
   'RepairSuit': 'SuitManipulationMinor',
   'RepairRobot': 'AutomationMinor'
},

weapon_req : { /* Weapon/Device training mapping by attack mode */
   'RobotControl': 'AutomationMinor',
   'Homing': 'DrivingMinor',
   'EMP': 'EMEquipmentMinor',
   'PlasmaShot': 'PlasmaWeaponsMinor',
   'PsiHeal': 'PsionicEquipmentMinor',
   'PsiControll': 'PsionicEquipmentMajor'
},

heavy_weapon : { /* Heavy weapons. Let me know if you can detect them correctly without using a name list. */
   'BeastmenBigRifle': 1,
   'BeastmenCannon': 1,
   'BeastmenGrenadeLauncher': 1,
   'HumanGatling': 1,
   'HumanLaserCannon': 1,
   'HumanRocketLauncher': 1,
   'WarpCannon': 1
}

};