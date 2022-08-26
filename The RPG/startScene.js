
const gameState = {
  armorEquipedStats: 0,
  weaponEquipedStats: 0,
  accessoryEquipedStats: 0,
  playerName: "Krixzy",
  killed: [],
  scrolingTextEvent: undefined,
  pause: false,
  inPlayerHouse: false,
  inChurch: false,
  inshop: false,
  inPrison: false,
  inUnderGround: false,
  inUnderGroundBattleGround: false,
  number:0,
  playerStats:{
    level: 1,
    maxHp: 200, 
    hp:50, 
    dmg: 30,
    magic:30,
    defence:0,
    maxMana:100,
    mana: 0,
    xpForLevel: 80,
    curentXp: 0,
    gold: 1000000

  },
  mrSkull:{
    id: "mrSkull",
    level: 1,
    maxHp: 100,
   // hp:100,
    dmg:20,
    defence:0,
    xp: 25,
    gold: 5
  },
blackSkeleton:{
  id:"blackSkeleton",
  level:5,
  maxHp: 120,
  //hp: 100,
  dmg: 15,
  defence: 5,
  xp:35,
  gold: 9
},
skeletonSheld:{
  id:"skeletonSheld",
  level:3,
  maxHp:100,
 // hp:100,
  dmg:15,
  defence:10,
  xp: 30,
  gold: 7
},
texts:{
  armor:{

  },
  weapon:{

  },


  accessory:{

  },
killText1:"",
killText2:"",
killText3:"",

},
checkList:{
  armor:{

  },
  weapon:{

  },
  accessory:{

  },
  nextScene: false,
  items: false,
  equipment: false,
  talent:false,
  save:false,
  option:false,

},
extraSprits:{
  frames:{
armorFrame: 1,
  },
  starSprit: undefined
},
menuItems:{
  
},

//curent position
curentPosition:{
  x: 0,
  y: 0,
  inMenu: false,
  scene: "false"

},





//potion
hpPotion:{
  level: 1,
  id: "hpPotion",
  hp: 200,
  amount:0,
  price: 100,
  upgradePrice: 400
},
mpPotion:{
  level:1,
  id:"mpPotion",
  mana: 10,
  amount: 0,
  price: 100,
  upgradePrice: 400,
  
},
dmgBoost:{
  level:1,
  id:"dmgBoost",
  dmg:3,
  amount:0,
  price: 100,
  upgradePrice: 400
},
magicBoost:{
  level:1,
  id:"magicBoost",
  dmg:3,
  amount:0,
  price: 100,
  upgradePrice: 400,

},
defenceBoost:{
  level:1,
  id:"defenceBoost",
  defence: 8,
  amount: 0,
  price: 100,
  upgradePrice: 400
},
repelPotion:{
  level:1,
  id:"repelBoost",
  duration: 15000,
  amount: 0,
  price: 100,
  upgradePrice: 400
},





//armor items
armor:{
  armorArray: [],
  woodSheld:{
    id: "Woodsheld",
    deff: 4,
    color: "#D2D2D2",
    frame: 0,
    bonus: "none",
    bonusColor: "#ffffff",
    price: 100
  },
  hardWoodSheld:{
    id: "Hardwoodsheld",
    deff: 10,
    color: "#33FE28",
    frame: 22,
    bonus: "none",
    bonusColor: "#ffffff",
    price: 500
  }
},






//weapon itmes
weapon:{
weaponArray:[],
rustySword:{
  id:"Rustysword",
  dmg: 5,
  color: "#D2D2D2",
  sprite: "rustySword",
  bonus:"none",
  bonusColor:"#ffffff",
  price: 100
},
ironSword:{
  id:"Ironsword",
  dmg: 15,
  color:"#33FE28",
  sprite:"ironSword",
  bonus:"none",
  bonusColor: "#ffffff",
  price: 500
}
},

accessory:{
  accessoryArray:[],
  copperRing:{
    id: "Copperring",
    magic: 5,
    color: "#D2D2D2",
    sprite: "copperRing",
    bonus: "none",
    bonusColor: "#ffffff",
    price:100
  },
  silverRing: {
    id: "Silvering",
    magic: 15,
    color: "#33FE28",
    sprite: "silverRing",
    bonus: "none",
    bonusColor: "#000000",
    price: 500
  },

},
boxes:{

},
buffs:{

}


}

const config = {
  
  scene:[  gameScene, underGroundBattleGround, church, playerHouse, shop, prison, underGround, levlingUpScene, menu],
  height: 900,
  width: 1750,
  backgroundColor:"0x000000",
  antialias: true, 
  gameTitle: "the RPG",
  physics:{
default: "arcade",
arcade: {
gravity:{y: 0},
//debug: true
}
  
}

}
const game = new Phaser.Game(config)