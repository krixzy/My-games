class tutorial extends Phaser.Scene{
    constructor(){
        super({key: "tutorial"})
    }
    preload(){

    }
    create(){
   
   
   
   //sounds
   gameState.winSound = this.sound.add("win", {volume: 0.1, loop: true})
   gameState.jumpSound = this.sound.add("jump")
   gameState.music = this.sound.add("music", {volume: 0.05, loop: true})
 //  gameState.music.play()
   gameState.failSound = this.sound.add("fail", {volume: 0.1})
   gameState.runSound = this.sound.add("run", {volume: 0.6})
   gameState.walkSound = this.sound.add("walk", {volume: 0.6})
   
   
   
   
   
   
   
   
   
   
   
   
      //adding background
      gameState.backGround = this.add.image(0, 0, "background").setOrigin(0, 0)
      gameState.backGround2 = this.add.image(1920, 0, "background").setOrigin(0, 0)
      gameState.backGround3 = this.add.image(3840, 0, "background").setOrigin(0, 0)
      gameState.backGround4 = this.add.image(5760, 0, "background").setOrigin(0, 0)
      this.cameras.main.setBackgroundColor(0xffffff)
   
      
   
   
   
   
   //laver bunden
   gameState.ground = this.physics.add.sprite(3000, 900, "bund").setOrigin(0.5, 0.1).setGravityY(-800)
   gameState.ground.body.immovable = true
   
   
   
   
   
   
   
   //laver platforme
   this.platforms()
    this.tal()
   
   
   
   
   
   
   
     //laver player
    
   gameState.player = this.physics.add.sprite(500, 870, "figur").setScale(0.5)
   gameState.player.body.collideWorldBounds = true
   gameState.player.setInteractive();
   //console.log(gameState.player)
   
   
   
   
   
   
   
           //laver modstander
   
   
   
   
   
  
   
                                      //tutorial



                    gameState.tutorialBox = this.add.rectangle(500, 720, 600, 160, 0xffffff).setOrigin(0.5, 0.5)
                    gameState.tutorialBox.isStroked = true
      gameState.tutorialBox.lineWidth = 5
      gameState.tutorialBox.strokeAlpha = 1
      gameState.tutorialBox.strokeColor = "0x678f33"
                    gameState.tutorialTextBox1 = this.add.text(500, 720, "Hej og velkommen\n \n Jeg vil nu vise dig hvordan spillet fungere.\n Du flytter mig rundt, ved at bruge piltasterne.\n Prøv det nu.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
                    gameState.checkList.tutorial1 = true   
                      // this.physics.pause()




        gameState.func = () =>{
            this.time.addEvent({
                delay:2000, 
                callback:gameState.textRemover, 
                callbackScope: this,
        })
        }
            
            gameState.textRemover = () =>{
                gameState.checkList.tutorial3 = false
                gameState.checkList.tutorial4 = true
                gameState.tutorialBox.destroy()
                gameState.tutorialTextBox1.destroy()
                gameState.tutorialBox = this.add.rectangle(gameState.player.x, 350, 800, 130, 0xffffff).setOrigin(0.5, 0.5)
                gameState.tutorialBox.isStroked = true
  gameState.tutorialBox.lineWidth = 5
  gameState.tutorialBox.strokeAlpha = 1
  gameState.tutorialBox.strokeColor = "0x678f33"
                gameState.tutorialTextBox1 = this.add.text(gameState.player.x, 350, "Du hopper ved at bruge mellemrumstasten. \n Prøv at hoppe lidt rundt og se om du kan komme op til tekstboksen.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
            }





            gameState.tutorialMath = () =>{
                this.physics.pause()
                gameState.tutorialBox = this.add.rectangle(gameState.math.x + 400, 150, 800, 160, 0xffffff).setOrigin(0.5, 0.5)
                gameState.tutorialBox.isStroked = true
  gameState.tutorialBox.lineWidth = 5
  gameState.tutorialBox.strokeAlpha = 1
  gameState.tutorialBox.strokeColor = "0x678f33"
                gameState.tutorialTextBox1 = this.add.text(gameState.math.x + 400, 150, "Nu ved du hvordan du kommer rundt.\n \n Oppe i venstre hjørne står der et regnestykke. \n Du skal regne det ud og gå til den rigtige løsning på banen.\n Tryk på pil ned for at komme videre.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
                gameState.arrow = this.add.sprite(gameState.math.x + 300, 50, "arrow").setScale(0.15)
                gameState.arrow.flipX = true
                gameState.arrow.anims.play("blinkingArrow", true)
            }





            gameState.tutorialPoint = () =>{
               
                gameState.checkList.tutorial6 = true
                gameState.tutorialBox = this.add.rectangle(gameState.pointsText.x + 400, 150, 800, 130, 0xffffff).setOrigin(0.5, 0.5)
                gameState.tutorialBox.isStroked = true
  gameState.tutorialBox.lineWidth = 5
  gameState.tutorialBox.strokeAlpha = 1
  gameState.tutorialBox.strokeColor = "0x678f33"
  
                gameState.tutorialTextBox1 = this.add.text(gameState.pointsText.x + 400, 150, "Du se dine point her.\n Du får point, for være gang du rammer den rigtige løsning.\n Du for flere point desto højere sværedsgrad du har valgt.\n Hop for at komme videre.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
                gameState.arrow = this.add.sprite(gameState.pointsText.x + 200, 50, "arrow").setScale(0.15)
                gameState.arrow.flipX = true
                gameState.arrow.anims.play("blinkingArrow", true)
            }






            gameState.tutorialFall = () =>{
                gameState.tutorialBox.destroy()
                gameState.tutorialTextBox1.destroy()
                gameState.arrow.destroy()
                this.physics.resume()
                gameState.tutorialBox = this.add.rectangle(gameState.player.x , 250, 1000, 80, 0xffffff).setOrigin(0.5, 0.5)
                gameState.tutorialBox.isStroked = true
                gameState.tutorialBox.lineWidth = 5
                gameState.tutorialBox.strokeAlpha = 1
                gameState.tutorialBox.strokeColor = "0x678f33"
                gameState.tutorialTextBox1 = this.add.text(gameState.player.x , 250, "Du kan komme igennem platformene ved at, trykke pil ned når du står på en platform.\n Prøv det nu, så ses vi igen når du er kommet helt nede på jorden.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
            }







                gameState.tutorialWin = ()=>{
                    gameState.enemySpeed = 5000
                    this.enemyMove()
                    gameState.tutorialBox.destroy()
                    gameState.tutorialTextBox1.destroy()
                    //gameState.arrow.destory()
                    gameState.checkList.tutorial8 = false
                    gameState.checkList.tutorial9 = true
                    gameState.tutorialBox = this.add.rectangle(gameState.player.x , 550, 1000, 130, 0xffffff).setOrigin(0.5, 0.5)
                gameState.tutorialBox.isStroked = true
                gameState.tutorialBox.lineWidth = 5
                gameState.tutorialBox.strokeAlpha = 1
                gameState.tutorialBox.strokeColor = "0x678f33"
                gameState.tutorialTextBox1 = this.add.text(gameState.player.x , 550, "Hvis han fanger dig, i spillet er spillet slut.\n Det samme gælder hvis du røre et forkert tal. \n Når du følger dig klar, skal du finde den rigtige løsning for at komme igang med spillet.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
                }





                gameState.destroyer = () =>{
                    gameState.tutorialBox.destroy()
                    gameState.tutorialTextBox1.destroy()
                } 






   
   //laver collider
   
  
   
           //collider med modstander
   this.physics.add.collider(gameState.player, gameState.enemy, () =>{
       gameState.numbersArray = []
   gameState.platformArray = []
   gameState.platformAmount = []
   gameState.music.stop()
   gameState.failSound.play()
        this.physics.pause()
        
        this.add.text(gameState.player.body.x, gameState.player.body.y - 10, "you lose", gameState.headerStyle)
   this.cameras.main.shake(2000, .01, false, (arr1, arr2)=>{
   if(arr2 > .8){
       this.scene.stop("gamescene")
       this.scene.start("gameoverscene")
   }
   })
   }) 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
               //collider med bunden
   this.physics.add.collider(gameState.player, gameState.ground, () =>{
    gameState.checkList.falling = false
       if(gameState.checkList.tutorial7 == true){
       /* gameState.arrow = this.add.sprite(gameState.player.x + 100, 100, "arrow").setScale(0.2)
        gameState.arrow.flipX = true
        gameState.arrow.anims.play("blinkingArrow", true)*/
        gameState.tutorialBox.destroy()
        gameState.tutorialTextBox1.destroy()
        gameState.checkList.tutorial7 = false
        gameState.checkList.tutorial8 = true
       // this.physics.pause()
        gameState.enemy = this.physics.add.sprite(gameState.player.x, 100, "enemy").setScale(0.15).setGravityY(-800)
        //this.enemyMove()
        gameState.tutorialBox = this.add.rectangle(gameState.player.x , 350, 700, 130, 0xffffff).setOrigin(0.5, 0.5)
                gameState.tutorialBox.isStroked = true
                gameState.tutorialBox.lineWidth = 5
                gameState.tutorialBox.strokeAlpha = 1
                gameState.tutorialBox.strokeColor = "0x678f33"
                gameState.tutorialTextBox1 = this.add.text(gameState.player.x , 350, "Ham du ser i toppen, er ikke din ven. \n Han vil jagte dig, mens du finder den rigtige løsning. \n Prøv at gå lidt rundt og se som han jagter dig. \n Bare rolig han gør dig ikke noget i denne tutorial.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
       }
      
   })
   
   
   
   
   
                   //collider med platforme
   this.physics.add.collider(gameState.player, gameState.platforms, () =>{
    gameState.checkList.falling = false
   })
   
   
   
   
   
   
               //collider med forkertnummer
   /*this.physics.add.collider(gameState.textGroup, gameState.player, () =>{
       gameState.numbersArray = []
   gameState.platformArray = []
   gameState.platformAmount = []
   gameState.music.stop()
   gameState.failSound.play()
        this.physics.pause()
        this.add.text(gameState.player.body.x, gameState.player.body.y - 10, "you lose", gameState.headerStyle)
   this.cameras.main.shake(2000, .01, false, (arr1, arr2)=>{
   if(arr2 > .8){
       this.scene.stop("gamescene")
       this.scene.start("startScene")
   }
   })
   })*/
   
   
   
   
   
   
   
               //collieder med winnernummeret
   this.physics.add.collider(gameState.player, gameState.winNumber, (arg1, arg2) =>{
    gameState.numbersArray = []
   gameState.platformArray = []
   gameState.platformAmount = []
   gameState.runSound.stop()
   gameState.walkSound.stop()
    this.scene.stop("tutorial")
    this.scene.start("startScene")
 
   
   
   
   //this.scene.restart()
   
   
   })
   
   
   
   
   
   //adding camara
   this.physics.world.setBounds(0, 0, 6000, 900)
   this.cameras.main.setBounds(0, 0, 6000, 900)
   this.cameras.main.startFollow(gameState.player, true)
   
   
   
   
   
   
   
   
   
   
   //laver controls
   gameState.cursors = this.input.keyboard.createCursorKeys()
   
   
   //gameState.player.setTexture("jump")
   
   
   
   
   //laver animationer
   
           //runing
   
           this.anims.create({
               key:"walking",
               frames: this.anims.generateFrameNumbers("løb", {start:0, end: 17}),
               frameRate: 25,
              // reteat: -1
           })
   
   
   this.anims.create({
       key:"running",
       frames: this.anims.generateFrameNumbers("løb", {start:0, end: 17}),
       frameRate: 35,
      // reteat: -1
   })
           //standing
   this.anims.create({
       key: "stand",
       frames: this.anims.generateFrameNumbers("figur", {start:0, end:11}),
       frameRate: 10
   })
   
           //blinking
   this.anims.create({
       key: "blink",
       frames: this.anims.generateFrameNames("blink", {start:0, end: 10}),
       frameRate: 60
   })
   
   
   



            //arrowblinking


            this.anims.create({
                key: "blinkingArrow",
                frames: this.anims.generateFrameNumbers("arrow", {start:0, end:1}),
                frameRate: 2,
                repeat: -1
            })




   //laver physics
   
   this.physics.add.existing(gameState.winNumber, 1)
   
   
   //lavert tweens
   
   
   
   
   
   
   
   
   
   

   
   
    }
   
   
   
   
   
                                                               //update
   
   
   
   
   
   
   
   
   
   
    update(arr1, arr2){



                            //tutorial 6
    if(gameState.checkList.tutorial6 == true && gameState.cursors.space.isDown){
        gameState.checkList.tutorial6 = false
        gameState.checkList.tutorial7 = true
        gameState.tutorialFall()
    }


                            //tutorial 5      
if(gameState.checkList.tutorial5 == true && gameState.cursors.down.isDown){
    gameState.tutorialBox.destroy()
    gameState.tutorialTextBox1.destroy()
    gameState.arrow.destroy()
    gameState.checkList.tutorial5 = false
    gameState.checkList.tutorial6 = true
        gameState.tutorialPoint()
}




                            //tutorial 2
        if(gameState.player.x > 1400 && gameState.checkList.tutorial2 == true){
            gameState.tutorialBox.destroy()
        gameState.tutorialTextBox1.destroy()
        gameState.arrow.destroy()
        gameState.checkList.tutorial2 = false
        gameState.tutorialBox = this.add.rectangle(1800, 620, 820, 130, 0xffffff).setOrigin(0.5, 0.5)
    gameState.tutorialBox.isStroked = true
gameState.tutorialBox.lineWidth = 5
gameState.tutorialBox.strokeAlpha = 1
gameState.tutorialBox.strokeColor = "0x678f33"
    gameState.tutorialTextBox1 = this.add.text(1800, 620, "Hvis du synes det går for langsomt,\n kan du løbe ved at, holde shift knappen nede, mens du går.\n(shift knappen er den helt over til venster på tastaturet med en lille pil op).\n Prøv at tryk på den mens du går.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
    gameState.checkList.tutorial3 = true   
        }
   
   gameState.math.x = this.cameras.main.scrollX + 10
   gameState.pointsText.x = this.cameras.main.scrollX + 700
   
      // this.platforms()
       //playermovement
   if(gameState.cursors.left.isDown && gameState.cursors.shift.isDown){
    if(gameState.checkList.tutorial3 == true){
        gameState.func()
     }
     if(gameState.checkList.tutorial8 == true){
        gameState.tutorialWin() 
     }
       gameState.player.setVelocityX(-450)
       gameState.player.flipX = true
       gameState.walkSound.stop()
       if( gameState.player.body.velocity.y == 0){
       gameState.player.anims.play("running", true).setBodySize(75, 80, true)
       if(gameState.runSound.isPlaying != true){
       gameState.runSound.play({rate:0.75, loop: true})
       }
       
       }
   
   }else if(gameState.cursors.right.isDown && gameState.cursors.shift.isDown){
       if(gameState.checkList.tutorial3 == true){
          gameState.func()
       }
       if(gameState.checkList.tutorial8 == true){
        gameState.tutorialWin() 
     }
       gameState.player.setVelocityX(450)
       gameState.player.flipX = false
       gameState.walkSound.stop()
       if(gameState.player.body.velocity.y == 0){
       gameState.player.anims.play("running", true).setBodySize(75, 80, true)
       if(gameState.runSound.isPlaying != true){
           gameState.runSound.play({rate:0.75, loop: true})
           }
       }
   }else if(gameState.cursors.left.isDown ){
       gameState.player.setVelocityX(-250)
       gameState.player.flipX = true
       gameState.runSound.stop()
       if(gameState.checkList.tutorial8 == true){
        gameState.tutorialWin() 
     }
       if(gameState.checkList.tutorial1 == true){
        
        gameState.tutorialBox.destroy()
        gameState.tutorialTextBox1.destroy()
        this.tutorial2()
        this.physics.resume()
        gameState.checkList.tutorial1 = false
       }
       
       if( gameState.player.body.velocity.y == 0){
       gameState.player.anims.play("walking", true).setBodySize(75, 80, true)
       if(gameState.walkSound.isPlaying != true){
           gameState.walkSound.play({rate:0.65, loop: true})
           }
       }
   }else if(gameState.cursors.right.isDown){
       gameState.player.setVelocityX(250)
       gameState.player.flipX = false
       gameState.runSound.stop()
       if(gameState.checkList.tutorial8 == true){
        gameState.tutorialWin() 
     }
       if(gameState.checkList.tutorial1 == true){
           
           gameState.tutorialBox.destroy()
               gameState.tutorialTextBox1.destroy()
               this.tutorial2()
        this.physics.resume()
        gameState.checkList.tutorial1 = false
       }
       if(gameState.player.body.velocity.y == 0){
       gameState.player.anims.play("walking", true).setBodySize(75, 80, true)
       if(gameState.walkSound.isPlaying != true){
           gameState.walkSound.play({rate:0.65, loop: true})
           }
       }
   }else{
       gameState.player.setVelocityX(0)
       gameState.runSound.stop()
       gameState.walkSound.stop()
   }
   if(gameState.cursors.space.isDown && gameState.player.body.touching.down == true){
    if(gameState.checkList.tutorial9 == true){
        gameState.checkList.tutorial9 = false
     gameState.destroyer()
    }
       gameState.player.setVelocityY(-550)
       gameState.player.setTexture("jump").setBodySize(75, 80, true).setFrame(0)
       gameState.player.anims.stop("stand")
       gameState.onGround = false
       gameState.jumpSound.play(gameState.config)
       gameState.runSound.stop()
       gameState.walkSound.stop()
   }
   if(gameState.player.body.velocity.y == 0 && gameState.player.body.velocity.x == 0){
   
       gameState.player.anims.play("stand", true).setBodySize(75, 80, true)
   }
   if(gameState.player.body.velocity.y > 25){
      gameState.checkList.falling = true
       gameState.player.setTexture("jump").setBodySize(75, 80, true).setFrame(1)
      gameState.runSound.stop()
      gameState.walkSound.stop()
   
   }
   
   
   if(gameState.cursors.down.isDown && gameState.player.body.y < 840){
       gameState.player.body.checkCollision.down = false
   }else{
       gameState.player.body.checkCollision.down = true
   }
   
   if(gameState.player.y < 450 && gameState.checkList.tutorial4 == true){
        gameState.tutorialBox.destroy()
        gameState.tutorialTextBox1.destroy()
        gameState.checkList.tutorial4 = false
        gameState.checkList.tutorial5 = true
        gameState.tutorialMath()
   }
    }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
                                   //platformgenerator
   
    platforms(){
        let mathX = 0
        let mathY = 0
        let mathX2 = 0
        let mathY2 = 0
        let check1 = false
        let check2 = false
        let check3 = false
        
      gameState.platforms = this.physics.add.staticGroup()
      gameState.platforms.create(500, 700, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)
      gameState.platforms.create(5500, 700, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)
      
      for(let i = 0; i < 1000; i++){
       let randomX = Math.floor(Math.random() * 6000)
       let randomY = Math.floor(Math.random()* 850)
      
       if(randomY < 200){
           randomY += 150
       }
       check1 = false
       check2 = false
       check3 = true
       
       
       for(let y = 0; y < gameState.platforms.children.entries.length; y++){
           //console.log(randomX - gameState.platforms.children.entries[y].body.x)
           if(randomX < gameState.platforms.children.entries[y].body.x){
             mathX =  gameState.platforms.children.entries[y].body.x - randomX
           }else{
            mathX =    randomX - gameState.platforms.children.entries[y].body.x
           }
           if(randomY < gameState.platforms.children.entries[y].body.y){
            mathY = gameState.platforms.children.entries[y].body.y - randomY
           }else{
               mathY = randomY - gameState.platforms.children.entries[y].body.y
           }
          // console.log(mathY)
          // console.log(mathX)
           if(mathX < 500){
            check1 = true   
            //console.log("test1")
               
               // gameState.platforms.create(randomX, randomY, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)
              
           }
           if(mathX < 300  || mathY > 150){
               //console.log(randomX - gameState.platforms.children.entries[y].body.x)
               check2 = true
               
           }
           if(mathY > 150 && mathY < 250){
               check3 = false
              for(let c = 0; c < gameState.platforms.children.entries.length; c++){
                   if(randomX < gameState.platforms.children.entries[c].body.x){
                       mathX2 =  gameState.platforms.children.entries[c].body.x - randomX
                     }else{
                      mathX2 =    randomX - gameState.platforms.children.entries[c].body.x
                     }
                     if(randomY < gameState.platforms.children.entries[c].body.y){
                      mathY2 = gameState.platforms.children.entries[c].body.y - randomY
                     }else{
                         mathY2 = randomY - gameState.platforms.children.entries[c].body.y
                     }
              if(mathX2 < 300){
                  if(mathY2 < 100)
                  check3 = true
              }       
               }
               if(check3 == false){
                   gameState.platforms.create(randomX, randomY, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)  
               }
           }
         
           
       }
     if(check1 == true && check2 == false ){
       
       gameState.platforms.create(randomX, randomY, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)
     }
    
      }
      for(let i = 0; i < gameState.platforms.children.entries.length; i++){
      gameState.platforms.children.entries[i].body.checkCollision.down = false
      gameState.platforms.children.entries[i].body.checkCollision.left = false
      gameState.platforms.children.entries[i].body.checkCollision.right = false
      }
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
               //tilfældige tal generator
   
   
   tal(){
       gameState.plusNumber += 1
   let randomNumber1 = Math.floor(Math.random() * gameState.plusNumber)
   let randomNumber2 = Math.floor(Math.random() * gameState.plusNumber)
   gameState.math = this.add.text(100, 30,"Hvad er:  " +  randomNumber1 + " + "+ randomNumber2, gameState.headerStyle)
   gameState.pointsText = this.add.text(200, 30, "Points:" + gameState.points, gameState.headerStyle)
   gameState.trueNumber = randomNumber1 + randomNumber2
   let randomPlatform = Math.floor(Math.random() *gameState.platforms.children.entries.length)
   gameState.winNumber = this.add.text(gameState.platforms.children.entries[randomPlatform].body.x + 80, gameState.platforms.children.entries[randomPlatform].body.y - 25, gameState.trueNumber, {fill: "0xffffff", font: "bold 20px Arial"}).setOrigin(0.5, 0)
   gameState.numbersArray.push(gameState.trueNumber)
   gameState.platformArray.push(randomPlatform)
   
   
   
   
   
   gameState.textGroup = this.physics.add.group()
   
   
   
   for(let i = 0; i <gameState.platforms.children.entries.length; i++){
       gameState.platformAmount.push(i)
   } 
   
   gameState.platformAmount.splice(gameState.platformAmount.indexOf(randomPlatform), 1)
   
   
   
   
   
   
   
   
   
   
   for(let i = 0; i <gameState.extraNumbers; i++){
   gameState.randomNumber1 = Math.floor(Math.random() * gameState.plusNumber)
   gameState.randomNumber2 = Math.floor(Math.random() * gameState.plusNumber)
   
   
   
   gameState.randomPlatform = gameState.platformAmount[Math.floor(Math.random() * gameState.platformAmount.length)]
   
   
   
   
   
   
   
   gameState.randomNumber = gameState.randomNumber1 + gameState.randomNumber2
   gameState.checkList.checkSameNumber = false
   
   gameState.numbersArray.forEach((arr1) =>{
      
   if(gameState.randomNumber == arr1){
       gameState.checkList.checkSameNumber = true
   
   }
   })
   if(gameState.checkList.checkSameNumber == false){
   
       gameState.platformAmount.splice(gameState.platformAmount.indexOf(gameState.randomPlatform), 1)
       gameState.numbersArray.push(gameState.randomNumber)
       gameState.textGroup.defaults.setAllowGravity = false
       gameState.textGroup.add(this.add.text(gameState.platforms.children.entries[gameState.randomPlatform].body.x + 80,gameState.platforms.children.entries[gameState.randomPlatform].body.y - 25, gameState.randomNumber, {fill: "0xffffff", font: "bold 20px Arial"})).setOrigin(0.5, 0)
       
       
   }else{
   
       i -= 1
   }
   
   }
   }
   enemyMove(){
       gameState.enemyTween = this.tweens.add({
           targets:gameState.enemy,
           x: gameState.player.body.x,
           y: gameState.player.body.y,
           duration: gameState.enemySpeed, 
           onComplete: () =>{
               this.enemyMove()
               if(gameState.enemySpeed > 1500){
              // gameState.enemySpeed -= 500
               }
           }
       })
   }
   tutorial2(){
    gameState.tutorialBox = this.add.rectangle(1400, 720, 600, 130, 0xffffff).setOrigin(0.5, 0.5)
    gameState.tutorialBox.isStroked = true
    gameState.arrow = this.add.sprite(1690, 450, "arrow").setScale(0.4)
    gameState.arrow.anims.play("blinkingArrow", true)
gameState.tutorialBox.lineWidth = 5
gameState.tutorialBox.strokeAlpha = 1
gameState.tutorialBox.strokeColor = "0x678f33"
    gameState.tutorialTextBox1 = this.add.text(1400, 720, "Hvis du går mod højre og venstre rykker banen sig.\n Prøv at gå til højre.", {font: "25px Arial", fill: "#000000", align: "center"}).setOrigin(0.5, 0.5)
    gameState.checkList.tutorial2 = true   
   }
}   