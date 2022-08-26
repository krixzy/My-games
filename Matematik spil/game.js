const gameState = {
    topScoreTexts:{

    },
    topScores: [["Kim", 0],["Kim", 0],["Kim", 3],["Kim", 0],["Kim", 0], ["Kim", 0],["Kim", 0], ["Kim", 0], ["Kim", 0], ["Kim", 0]],
    difficulty: 0,
    headerStyle: {font: "38px Arial", fill: "#000000", align: "center"},
    textStyle: {font: "20px Arial", fill: "#000000", align: "center"},
    plusNumber: 5,
    extraNumbers: 10,
    numbersArray:[],
    platformArray: [],
    platformAmount: [],
    checkList:{
        checkSameNumber: false,
        tutorial1: false,
        tutorial2: false,
        tutorial3: false,
        tutorial4: false,
        tutorial5: false,
        tutorial6: false,
        tutorial7: false,
        tutorial8: false,
        tutorial9: false,
        tutorial10: false,
    },
    config:{
        volume: 0.5
    },
    points: 0,
    enemySpeed: 2000
}
const config = {
    scene:[startScene, gamescene, gameoverscene, tutorial, topscore],
    height: 900,
    width: 1750,
    backgroundColor:"0x13F1D6",
    antialias: true, 
    gameTitle: "projecktbaby",
    physics:{
default: "arcade",
arcade: {
gravity:{y: 800},
//debug: true
}
    
},
dom:{
    createContainer: true
},

}
const game = new Phaser.Game(config)
