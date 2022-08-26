const gameState = {
    ground: [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700],
    ground2:[],
    deaths: 0,
    hardMode: false
    

}
const config = {
    scene:[startScene, Instruktion, gameScene08, gameScene04, Story, gameScene03, gameScene02, gameScene01, gameScene05, gameScene06, gameScene07],
    height: 900,
    width: 1750,
    backgroundColor:"0x00FFFF",
    antialias: true, 
    gameTitle: "jumperman",
    physics:{
default: "arcade",
arcade: {
gravity:{y: 500},
//debug: true
}
    
}

}
const game = new Phaser.Game(config)
