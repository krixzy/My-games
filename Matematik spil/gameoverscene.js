class gameoverscene extends Phaser.Scene{
    constructor(){
        super({key: "gameoverscene"})
    }
    preload(){
      
    }
    create(){
      
      gameState.backGround = this.add.image(0, 0, "background").setOrigin(0, 0)
      this.cameras.main.setBackgroundColor(0xffffff)
      gameState.ground = this.physics.add.sprite(3000, 900, "bund").setOrigin(0.5, 0.1).setGravityY(-800)

      gameState.secondBox  =  this.add.rectangle(880, 270, 400, 500, 0xffffff).setOrigin(0.5, 0.5)
      gameState.secondBox.isStroked = false
      gameState.secondBox.lineWidth = 5
      gameState.secondBox.strokeAlpha = 1
      gameState.secondBox.strokeColor = "0x00FFF7"
      //gameState.secondBoxText = this.add.text(875, 450, "Menu", gameState.headerStyle).setOrigin(0.5,0.5)
      gameState.secondBox.setInteractive()
      console.log(gameState.secondBox)
                    //gameover text
    this.add.text(875, 200, "GAME OVER", {font: "40px Arial", fill: "#000000", align: "center"}).setOrigin(0.5,0)
    gameState.nameText = this.add.text(870, 300, "Tilføj dit navn:",{font: "35px Arial", fill: "#000000", align: "center"}).setOrigin(0.5,0)
    this.add.text(875, 50, "Point:"  + gameState.points, gameState.headerStyle).setOrigin(0.5, 0)
   gameState.name =  this.add.text(980, 300, "", {font: "35px Arial", fill: "#000000", align: "center"}).setOrigin(0, 0)
    this.input.keyboard.on("keydown", (arr1) =>{
        if (arr1.keyCode === 8 &&  gameState.name.text.length > 0)
        {
            gameState.name.text = gameState.name.text.substr(0, gameState.name.text.length - 1);
            gameState.nameText.x = gameState.nameText.x + 8.5
            gameState.name.x = gameState.name.x + 8.5
            gameState.secondBox.width = gameState.secondBox.width - 17
            gameState.secondBox.x = gameState.secondBox.x + 8.5
           

        }
        else if (arr1.keyCode === 32 || (arr1.keyCode >= 48 && arr1.keyCode < 90))
        {
            gameState.name.text += arr1.key;
            gameState.secondBox.x = gameState.secondBox.x - 8.5
            gameState.secondBox.width = gameState.secondBox.width + 17
            gameState.nameText.x = gameState.nameText.x - 8.5
            gameState.name.x = gameState.name.x - 8.5
           

        }
      })
   

                //første box


        gameState.firstBox  =  this.add.rectangle(875, 450, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
        gameState.firstBox.isStroked = true
        gameState.firstBox.lineWidth = 5
        gameState.firstBox.strokeAlpha = 1
        gameState.firstBox.strokeColor = "0x00FFF7"
        gameState.firstBoxText = this.add.text(875, 450, "Menu", gameState.headerStyle).setOrigin(0.5,0.5)
        gameState.firstBox.setInteractive()



       



                    //figur
        gameState.start = this.physics.add.sprite(400, 850, "figur").setGravity(0, -800).setFrame(2)
        gameState.firstBox.on("pointerover", () =>{
            // gameState.firstBox.strokeColor = "0xFF9300"
           gameState.firstBox.fillColor = "0xFF9300"
         })
         gameState.firstBox.on("pointerout", () =>{
           //  gameState.firstBox.strokeColor = "0x00FFF7"
             gameState.firstBox.fillColor = "0xffffff"
         })
         gameState.firstBox.on("pointerdown", () =>{
           gameState.topScores.push([gameState.name.text, gameState.points])
           gameState.topScores.sort((a, b) =>{
            return b[1] - a[1]})
            gameState.topScores.pop()
            localStorage.setItem("score", JSON.stringify(gameState.topScores))
             this.scene.stop("gameoverscene")
            this.scene.start("startScene")
         })

            //anden box


      /*  gameState.secondBox = this.add.rectangle(875, 550, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
        gameState.secondBox.isStroked = true
        gameState.secondBox.lineWidth = 5
        gameState.secondBox.strokeAlpha = 1
        gameState.secondBox.strokeColor = "0x00FFF7"
        gameState.secondBox.setInteractive()
        gameState.secondBoxText = this.add.text(875, 550, "Menu",gameState.headerStyle).setOrigin(0.5, 0.5)
*/

    }
    update(){
        
    }
}