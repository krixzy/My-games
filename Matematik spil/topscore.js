class topscore extends Phaser.Scene{
    constructor(){
        super({ key:  'topscore' });
      }


      preload(){

      }
      create(){
        this.add.text(875, 100, "Topscore:", {font: "50px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5, 0.5)
        gameState.topScoreTexts.name1 = this.add.text(650, 200, "1. " + gameState.topScores[0][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point1 = this.add.text(1000, 200, gameState.topScores[0][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name2 = this.add.text(650, 250, "2. " + gameState.topScores[1][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point2 = this.add.text(1000, 250, gameState.topScores[1][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name3 = this.add.text(650, 300, "3. " + gameState.topScores[2][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point3 = this.add.text(1000, 300, gameState.topScores[2][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name4 = this.add.text(650, 350, "4. " + gameState.topScores[3][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point4 = this.add.text(1000, 350, gameState.topScores[3][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name5 = this.add.text(650, 400, "5. " + gameState.topScores[4][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point5 = this.add.text(1000, 400, gameState.topScores[4][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name6 = this.add.text(650, 450, "6. " + gameState.topScores[5][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point6 = this.add.text(1000, 450, gameState.topScores[5][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name7 = this.add.text(650, 500, "7. " + gameState.topScores[6][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point7 = this.add.text(1000, 500, gameState.topScores[6][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name8 = this.add.text(650, 550, "8. " + gameState.topScores[7][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point8 = this.add.text(1000, 550, gameState.topScores[7][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name9 = this.add.text(650, 600, "9. " + gameState.topScores[8][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point9 = this.add.text(1000, 600, gameState.topScores[8][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)



        gameState.topScoreTexts.name10 = this.add.text(650, 650, "10. " + gameState.topScores[9][0],{font: "30px Arial", fill: "#ffffff", align: "center"} ).setOrigin(0,0.5)
        gameState.topScoreTexts.point10 = this.add.text(1000, 650, gameState.topScores[9][1] + " points",{font: "30px Arial", fill: "#ffffff", align: "center"}).setOrigin(0,0.5)
       




        gameState.menuBox  =  this.add.rectangle(875, 750, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
        gameState.menuBox.isStroked = true
        gameState.menuBox.lineWidth = 5
        gameState.menuBox.strokeAlpha = 1
        gameState.menuBox.strokeColor = "0x00FFF7"
        gameState.menuBoxText = this.add.text(875, 750, "Menu", gameState.headerStyle).setOrigin(0.5,0.5)
        gameState.menuBox.setInteractive()





        gameState.menuBox.on("pointerover", () =>{
          // gameState.menuBox.strokeColor = "0xFF9300"
         gameState.menuBox.fillColor = "0xFF9300"
       })
       gameState.menuBox.on("pointerout", () =>{
         //  gameState.menuBox.strokeColor = "0x00FFF7"
           gameState.menuBox.fillColor = "0xffffff"
       })
       gameState.menuBox.on("pointerdown", () =>{
           this.scene.stop("topscore")
           this.scene.start("startScene")
       })
      }update(){

      }
}