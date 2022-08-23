class startScene extends Phaser.Scene {
    constructor(){
      super({ key:  'startScene' });
    }
    preload() {
      this.load.video("backGroundVideo", "sprits/Background.mp4")
      this.load.audio("run", "audio/løb2.wav")
      this.load.audio("walk", "audio/løb.wav")
      this.load.audio("fail", "audio/fail.wav")
      this.load.audio("win", "audio/win.wav")
      this.load.audio("music", "audio/background.wav")
      this.load.audio("jump","audio/Jump3.wav" )
      this.load.spritesheet("arrow", "sprits/arrow.png", {frameWidth: 900, frameHeight: 700})
      this.load.image("grass", "sprits/Grass.png")
      this.load.spritesheet("jump", "sprits/1x.png", {frameWidth: 128, frameHeight:128})
      this.load.spritesheet("blink", "sprits/blink.png", {frameWidth:88, frameHeight: 128})
      this.load.spritesheet("løb", "sprits/løb.png", {frameHeight:85, frameWidth:110})
      this.load.image("bund", "sprits/bund.png",)
        this.load.image("background", "sprits/background1.png")
        this.load.spritesheet("figur", " sprits/standing.png", {frameWidth:85.3, frameHeight:128})
      this.load.image("enemy", "sprits/badguy.png")
  
    }
    create(){
    gameState.topScores = JSON.parse(localStorage.getItem("score"))
    
    let video = this.add.video(0, -125, "backGroundVideo", {loop:true}).setOrigin(0, 0)
      video.play(true)
     video.setVolume(0)

      gameState.points = 0
      gameState.rounds = 0
         if(gameState.runSound){   
      gameState.runSound.stop()
      gameState.walkSound.stop()
         }           

         
        
                   //startbox
      gameState.startbox  =  this.add.rectangle(875, 350, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
      gameState.startbox.isStroked = true
      gameState.startbox.lineWidth = 5
      gameState.startbox.strokeAlpha = 1
      gameState.startbox.strokeColor = "0x00FFF7"
      gameState.startBoxText = this.add.text(875, 350, "Start", gameState.headerStyle).setOrigin(0.5,0.5)
      gameState.startbox.setInteractive()




    
                   //tutorial
      gameState.tutorialBox  =  this.add.rectangle(875, 450, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
      gameState.tutorialBox.isStroked = true
      gameState.tutorialBox.lineWidth = 5
      gameState.tutorialBox.strokeAlpha = 1
      gameState.tutorialBox.strokeColor = "0x00FFF7"
      gameState.tutorialBoxText = this.add.text(875, 450, "Tutorial", gameState.headerStyle).setOrigin(0.5,0.5)
      gameState.tutorialBox.setInteractive()





                   //topScore
         gameState.topscoreBox  =  this.add.rectangle(875, 550, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
      gameState.topscoreBox.isStroked = true
      gameState.topscoreBox.lineWidth = 5
      gameState.topscoreBox.strokeAlpha = 1
      gameState.topscoreBox.strokeColor = "0x00FFF7"
      gameState.topscoreBoxText = this.add.text(875, 550, "Topscore", gameState.headerStyle).setOrigin(0.5,0.5)
      gameState.topscoreBox.setInteractive()







                            //dificulty
                            //begynder
        gameState.begynderBox  =  this.add.rectangle(515, 650, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
        gameState.begynderBox.isStroked = true
        gameState.begynderBox.lineWidth = 5
        gameState.begynderBox.strokeAlpha = 1
        gameState.begynderBox.strokeColor = "0x00FFF7"
        gameState.begynderBoxText = this.add.text(515, 650, "Begynder", gameState.headerStyle).setOrigin(0.5,0.5)
        gameState.begynderBoxText = this.add.text(515, 710, "1 point",{font: "15px Arial", fill: "#000000", align: "center"}).setOrigin(0.5,0.5)
        gameState.begynderBox.setInteractive()
            //nem
        gameState.nemBox  =  this.add.rectangle(695, 650, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
        gameState.nemBox.isStroked = true
        gameState.nemBox.lineWidth = 5
        gameState.nemBox.strokeAlpha = 1
        gameState.nemBox.strokeColor = "0x00FFF7"
        gameState.nemBoxText = this.add.text(695, 650, "Nem", gameState.headerStyle).setOrigin(0.5,0.5)
        gameState.begynderBoxText = this.add.text(695, 710, "2 point",{font: "15px Arial", fill: "#000000", align: "center"}).setOrigin(0.5,0.5)
        gameState.nemBox.setInteractive()
        //normal
        gameState.normalBox  =  this.add.rectangle(875, 650, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
        gameState.normalBox.isStroked = true
        gameState.normalBox.lineWidth = 5
        gameState.normalBox.strokeAlpha = 1
        gameState.normalBox.strokeColor = "0x00FFF7"
        gameState.normalBoxText = this.add.text(875, 650, "Normal", gameState.headerStyle).setOrigin(0.5,0.5)
        gameState.begynderBoxText = this.add.text(875, 710, "5 point",{font: "15px Arial", fill: "#000000", align: "center"}).setOrigin(0.5,0.5)

        gameState.normalBox.setInteractive()
        //svær
        gameState.sværBox  =  this.add.rectangle(1055, 650, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
        gameState.sværBox.isStroked = true
        gameState.sværBox.lineWidth = 5
        gameState.sværBox.strokeAlpha = 1
        gameState.sværBox.strokeColor = "0x00FFF7"
        gameState.sværBoxText = this.add.text(1055, 650, "Svær", gameState.headerStyle).setOrigin(0.5,0.5)
        gameState.begynderBoxText = this.add.text(1055, 710, "15 point",{font: "15px Arial", fill: "#000000", align: "center"}).setOrigin(0.5,0.5)

        gameState.sværBox.setInteractive()
        //umuligt
        gameState.umuligtBox  =  this.add.rectangle(1235, 650, 170, 80, 0xffffff).setOrigin(0.5, 0.5)
        gameState.umuligtBox.isStroked = true
        gameState.umuligtBox.lineWidth = 5
        gameState.umuligtBox.strokeAlpha = 1
        gameState.umuligtBox.strokeColor = "0x00FFF7"
        gameState.umuligtBoxText = this.add.text(1235, 650, "Umuligt", gameState.headerStyle).setOrigin(0.5,0.5)
        gameState.begynderBoxText = this.add.text(1235, 710, "25 point",{font: "15px Arial", fill: "#000000", align: "center"}).setOrigin(0.5,0.5)

        gameState.umuligtBox.setInteractive()






      //gameState.start = this.physics.add.sprite(400, 400, "figur").setGravity(0, -800).setFrame(2)


        //creating animation
        this.anims.create({
          key: "stand",
          frames: this.anims.generateFrameNumbers("figur", {start:0, end:11}),
          frameRate: 5,
          repeat: -1
      })
      

      //gameState.start.anims.play("stand", true)

   

        //startbox controls

      gameState.startbox.on("pointerover", () =>{
         // gameState.startbox.strokeColor = "0xFF9300"
        gameState.startbox.fillColor = "0xFF9300"
      })
      gameState.startbox.on("pointerout", () =>{
        //  gameState.startbox.strokeColor = "0x00FFF7"
          gameState.startbox.fillColor = "0xffffff"
      })
      gameState.startbox.on("pointerdown", () =>{
          this.scene.stop("startScene")
          this.scene.start("gamescene")
      })



      //tutorialbox controls

      gameState.tutorialBox.on("pointerover", () =>{
        // gameState.tutorialBox.strokeColor = "0xFF9300"
       gameState.tutorialBox.fillColor = "0xFF9300"
     })
     gameState.tutorialBox.on("pointerout", () =>{
       //  gameState.tutorialBox.strokeColor = "0x00FFF7"
         gameState.tutorialBox.fillColor = "0xffffff"
     })
     gameState.tutorialBox.on("pointerdown", () =>{
         this.scene.stop("startScene")
         this.scene.start("tutorial")
     })




        //topscore
        gameState.topscoreBox.on("pointerover", () =>{
          // gameState.topscoreBox.strokeColor = "0xFF9300"
         gameState.topscoreBox.fillColor = "0xFF9300"
       })
       gameState.topscoreBox.on("pointerout", () =>{
         //  gameState.topscoreBox.strokeColor = "0x00FFF7"
           gameState.topscoreBox.fillColor = "0xffffff"
       })
       gameState.topscoreBox.on("pointerdown", () =>{
           this.scene.stop("startScene")
           this.scene.start("topscore")
       })



            //dificulty





            //begynder
            gameState.begynderBox.on("pointerover", () =>{
              // gameState.begynderBox.strokeColor = "0xFF9300"
             gameState.begynderBox.fillColor = "0xFF9300"
           })
           gameState.begynderBox.on("pointerout", () =>{
             if(gameState.checkList.begynderBox == false){
             //  gameState.begynderBox.strokeColor = "0x00FFF7"
               gameState.begynderBox.fillColor = "0xffffff"
             }
           })
           gameState.begynderBox.on("pointerdown", () =>{
            this.colorChange()
            gameState.checkList.begynderBox = true
               gameState.difficulty = 0
               
               gameState.begynderBox.fillColor = "0xFF9300"
           }) 


           //nem

           gameState.nemBox.on("pointerover", () =>{
            // gameState.nemBox.strokeColor = "0xFF9300"
           gameState.nemBox.fillColor = "0xFF9300"
         })
         gameState.nemBox.on("pointerout", () =>{
           if(gameState.checkList.nemBox == false){
           //  gameState.nemBox.strokeColor = "0x00FFF7"
             gameState.nemBox.fillColor = "0xffffff"
           }
         })
         gameState.nemBox.on("pointerdown", () =>{
          this.colorChange()
          gameState.checkList.nemBox = true
          gameState.difficulty = 1
          
          gameState.nemBox.fillColor = "0xFF9300"
         })

            //normal

            gameState.normalBox.on("pointerover", () =>{
              // gameState.normalBox.strokeColor = "0xFF9300"
             gameState.normalBox.fillColor = "0xFF9300"
           })
           gameState.normalBox.on("pointerout", () =>{
             if(gameState.checkList.normalBox == false){
             //  gameState.normalBox.strokeColor = "0x00FFF7"
               gameState.normalBox.fillColor = "0xffffff"
             }
              })
           gameState.normalBox.on("pointerdown", () =>{
            this.colorChange()
            gameState.checkList.normalBox = true
            gameState.difficulty = 2
            
            gameState.normalBox.fillColor = "0xFF9300"
           })



            //svær
            gameState.sværBox.on("pointerover", () =>{
              // gameState.sværBox.strokeColor = "0xFF9300"
             gameState.sværBox.fillColor = "0xFF9300"
           })
           gameState.sværBox.on("pointerout", () =>{
             if(gameState.checkList.sværBox == false){
             //  gameState.sværBox.strokeColor = "0x00FFF7"
               gameState.sværBox.fillColor = "0xffffff"
             }
              })
           gameState.sværBox.on("pointerdown", () =>{
            this.colorChange()
            gameState.checkList.sværBox = true
            gameState.difficulty = 3
            
            gameState.sværBox.fillColor = "0xFF9300"
           })

           //umuligt
           gameState.umuligtBox.on("pointerover", () =>{
            // gameState.umuligtBox.strokeColor = "0xFF9300"
           gameState.umuligtBox.fillColor = "0xFF9300"
         })
         gameState.umuligtBox.on("pointerout", () =>{
           if(gameState.checkList.umuligtBox == false){
           //  gameState.umuligtBox.strokeColor = "0x00FFF7"
             gameState.umuligtBox.fillColor = "0xffffff"
           }
            })
         gameState.umuligtBox.on("pointerdown", () =>{
          this.colorChange()
          gameState.checkList.umuligtBox = true
               gameState.difficulty = 4
               
               gameState.umuligtBox.fillColor = "0xFF9300"
         })
         this.colorChange()
  }
    update() {
     
    
    

   
  }
  colorChange(){
    gameState.checkList.umuligtBox = false
    gameState.checkList.sværBox = false
    gameState.checkList.normalBox = false
    gameState.checkList.begynderBox = false
    gameState.checkList.nemBox = false
    gameState.umuligtBox.fillColor = "0xffffff"
    gameState.sværBox.fillColor = "0xffffff"
    gameState.normalBox.fillColor = "0xffffff"
    gameState.nemBox.fillColor = "0xffffff"
    gameState.begynderBox.fillColor = "0xffffff"
  }
}
