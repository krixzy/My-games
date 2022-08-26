dubbleJump = null
class gameScene05 extends Phaser.Scene{
    constructor(){
        super({key: "gameScene05"})
    }preload(){
        this.load.image("waterDrop", "sprits/waterdrop.png")
        this.load.image("icePlatForm", "sprits/iceplatform.png")
        this.load.image("iceBlock", "sprits/iceblock.png")
        this.load.image("iceBackground", "sprits/icebackground.png")
        this.load.image("wings", "sprits/wings.png")
        this.load.image("noSpike", "sprits/nospike.png")
        this.load.image("noBotSpike", "sprits/nospikebot.png")
        this.load.image("noTopSpike", "sprits/nospiketop.png")
        this.load.image("allSpike", "sprits/spikeallaround.png")
        this.load.spritesheet("fallingRight1", "sprits/fallingright1.png", {frameWidth: 50, frameHeight: 100})
        this.load.spritesheet("portal","sprits/portal.png", {frameWidth: 71, frameHeight: 93})
        this.load.image("tree1", "sprits/tree1.png")
        this.load.image("hill1", "sprits/hill1.png")
        this.load.image("sky1", "sprits/sky1.png")
        this.load.image("top", "sprits/bjælkemedtop.png")
        this.load.image("noTop", "sprits/bjælkeudentop.png")
        this.load.image("down", "sprits/falling5.png")
        this.load.image("downRight", "sprits/fallingright.png")
        this.load.image("up", "sprits/jumping4.png")
        this.load.spritesheet("airright", "sprits/rightair.png", {frameWidth: 50, frameHeight: 100})
        this.load.spritesheet("fall", "sprits/fallingdown.png", {frameWidth: 50, frameHeight: 100})
    this.load.spritesheet("takingof", "sprits/settingof.png", {frameWidth:50, frameHeight: 100})
        this.load.spritesheet("breathing", "sprits/breathing.png", {frameWidth: 43, frameHeight: 96})
        this.load.spritesheet("walking", "/sprits/mr.EegHead walking.png", {frameWidth: 52, frameHeight: 96})
        this.load.image("figur", " /sprits/figur.png")
        this.load.image("platForm", "sprits/platform.png")
    }
    create(){
        //background
        dubbleJump = null
        this.add.image(875, 450, "iceBackground").setAlpha(0.9)

        this.add.text(100, 25, "døde " + gameState.deaths, {font: "25px", backgroundColor: "#000000"})

       

  

    // groups and player
            gameState.waterDrop = this.physics.add.group()
            gameState.spikeWall = this.physics.add.staticGroup()
            gameState.wall = this.physics.add.staticGroup();
            gameState.platForm = this.physics.add.staticGroup();
            gameState.cursors = this.input.keyboard.createCursorKeys(); 
            gameState.player = this.physics.add.sprite(100, 845, "figur").setScale(0.8)
            gameState.portal = this.physics.add.sprite(1650, 350, "portal").setGravityY(-500)
            gameState.waterFalling = [23, 69, 115, 160, 205, 255, 300, 345, 390, 435, 480, 527, 574, 619, 665, 710, 757, 804, 850, 896, 942, 988, 1034, 1080, 1126, 1172, 1218, 1264, 1310, 1356, 1402, 1448, 1494, 1540, 1586, 1632, 1678, 1724]
            

            // thegound
          for(let i = 0; i < gameState.ground.length; i++){
              gameState.platForm.create(gameState.ground[i], 900, "icePlatForm").setScale(1.5).setSize(200, 100).setOffset(-35, -6)
             
          }

          //raindrops falling
        const fallingWater = () =>{
gameState.waterDrop.create(gameState.waterFalling[Math.floor(Math.random() *  38)], 95, "waterDrop").setScale(0.5)
        }
          
          gameState.timeEvent = this.time.addEvent({
             loop:true,
             delay: 1300,
             callback: fallingWater,
             paused: false 
            })
          gameState.player.setCollideWorldBounds(true)
          gameState.player.setInteractive()

          // the animations
          this.anims.create({
              key:"fallLook",
              frames: this.anims.generateFrameNumbers("fallingRight1", {start:0, end: 3}),
              frameRate: 25,
              reteat: 0
          })
          this.anims.create({
              key:"ending",
              frames: this.anims.generateFrameNumbers("portal", {start:0, end: 3}),
              frameRate: 5,
              reteat: -1
          })
          this.anims.create({
              key: "rightair",
              frames: this.anims.generateFrameNumbers("airright", {start: 0, end: 1}),
              frameRate:25, 
              reteat: 0
          })
          this.anims.create({
              key:"falling",
              frames: this.anims.generateFrameNumbers("fall", {start: 0, end: 4}),
              frameRate:30, 
              reteat: 0
          })
          this.anims.create({
              key:"playerof",
              frames: this.anims.generateFrameNumbers("takingof", {start:0, end: 3}),
              frameRate: 25,
              reteat: 0
                 })
          this.anims.create({
              key:"movement",
              frames: this.anims.generateFrameNumbers("walking", {start:0, end: 1}),
              frameRate: 20,
              reteat: -1
          })
          this.anims.create({
              key:"breath",
              frames: this.anims.generateFrameNumbers("breathing", {start:0, end: 3}),
              frameRate: 3,
              reteat: -1
          })
    
          // colliders
          this.physics.add.collider(gameState.waterDrop, gameState.platForm, (arg1) => {
arg1.destroy()
          })
        this.physics.add.collider(gameState.platForm, gameState.player, () =>{
            if(gameState.player.body.velocity.y === 0){
           gameState.onGround = true
           gameState.jumps = 1
            }
           if(gameState.player.body.velocity.y === 0 && dubbleJump === true){
            gameState.jumps = 2
        }
        })
        this.physics.add.collider(gameState.wall, gameState.player, () =>{
            if(gameState.player.body.velocity.y === 0){
            gameState.onGround = true
            gameState.jumps = 1
            }
            if(gameState.player.body.velocity.y === 0 && dubbleJump === true){
                gameState.jumps = 2
            }
        
        })
   this.cameras.main.backgroundColor.setTo(255,255,255)
       // leveltext
        gameState.kasse = this.add.rectangle(900, 30, 200, 80, 0x000000).setAlpha(0.4)
        gameState.levelText = this.add.text(850, 25, "world 2 - 1")
       
        
           
      gameState.spike = this.physics.add.group()
        //mapeCreation 


        //walls creation
const allSpikeWalls = []

for(let i = 0; i < allSpikeWalls.length; i++){
    if(allSpikeWalls[i][3] === true){
    gameState.spikeWall.create(allSpikeWalls[i][0], allSpikeWalls[i][1], allSpikeWalls[i][2]).setRotation(1.58)
    gameState.spikeWall.children.entries[i].setSize(130, 90)
    gameState.spikeWall.children.entries[i].setOffset(-20, 10)
}else{
    gameState.spikeWall.create(allSpikeWalls[i][0], allSpikeWalls[i][1], allSpikeWalls[i][2])
}
}



    // platform creation
        const allPlatForms = [[200, 800], [450, 750], [700, 700], [1100, 700], [1500, 700], [1500, 610], [1100, 600], [700, 590], [250, 600], [200, 510], [200, 420], [650, 450], [750, 370], [850, 300], [1450, 480]] 
        
       
        for(let i = 0; i< allPlatForms.length; i++){
            gameState.platForm.create(allPlatForms[i][0], allPlatForms[i][1], "icePlatForm")
        }

        // reset colliders
        this.physics.add.collider(gameState.spike, gameState.player, () =>{
            this.scene.restart()
            gameState.deaths += 1
        })
        this.physics.add.collider(gameState.spike, gameState.platForm)


    this.physics.add.collider(gameState.spikeWall, gameState.player, () =>{
        this.scene.restart()
        gameState.deaths += 1
    })
// player kan hoppe igennem platform
    for(let i = 0; i < gameState.platForm.children.entries.length; i++){
    
        gameState.platForm.children.entries[i].body.checkCollision.down = false
        gameState.platForm.children.entries[i].body.checkCollision.left = false
        gameState.platForm.children.entries[i].body.checkCollision.right = false
        
    }
    
    // dubblejump add
      
  //gameState.wings = this.physics.add.sprite(1710, 850, "wings").setGravityY(-500).setScale(2)

   /*this.physics.add.overlap(gameState.wings, gameState.player, (arg1) =>{
        dubbleJump = true
       gameState.wings.destroy()
   })*/
// ending
    this.physics.add.collider(gameState.portal, gameState.player, () => {
        this.physics.pause()
        this.cameras.main.fade(1000, 255, 255, 255, false, function(camera, progress) {
            if (progress > .9) {
                this.scene.stop("gameScene05")
                this.scene.start("gameScene06")
            }
          });
        })
        gameState.player.body.setMaxVelocity(300)
        gameState.player.body.setAngularDrag(50)
    }
   
    
    
    
    update(){
    
      
        gameState.portal.anims.play("ending", true)

if (gameState.onGround === true && gameState.player.body.velocity.y === 0){
    gameState.lookingLeft = false
    gameState.lookingRight = false
}
if(Phaser.Input.Keyboard.JustDown(gameState.cursors.space) && gameState.jumps > 0){
    console.log(gameState.jumps)
    gameState.player.anims.play("playerof", true)
            gameState.player.setVelocityY(-340)
            gameState.onGround = false
            gameState.inAir = true
            gameState.jumps --

}
       
    if(gameState.cursors.down.isDown){
    
    gameState.player.body.checkCollision.down = false
    }else{
        gameState.player.body.checkCollision.down = true
    }
    if(gameState.cursors.left.isDown && gameState.player.body.velocity.y > 0 && gameState.inAir === true){
        gameState.player.anims.play("fallLook", true) 
        gameState.player.flipX = true
        gameState.inAir = false
    }else if(gameState.cursors.right.isDown && gameState.player.body.velocity.y > 0 && gameState.inAir === true){
        gameState.player.anims.play("fallLook", true) 
        gameState.player.flipX = false
        gameState.inAir = false
    }else if(gameState.player.body.velocity.y > 0 && gameState.inAir === true){
    gameState.player.anims.play("falling", true)
    gameState.inAir = false
    
    }
   
if ( gameState.cursors.left.isDown){
    gameState.player.setAccelerationX(-300)
    if(gameState.onGround === true && gameState.player.body.velocity.y === 0){
    gameState.player.anims.play("movement", true)
    gameState.player.flipX = true
    }else if(gameState.player.body.velocity.y < 0 && gameState.lookingLeft === false || gameState.cursors.space.isDown  && gameState.lookingLeft === false){
    gameState.player.anims.play("rightair", true)
    gameState.player.flipX = true
    gameState.lookingLeft = true
    gameState.lookingRight = false
    }else if(gameState.player.body.velocity.y > 0 && gameState.lookingLeft === false ){
        gameState.player.setTexture("downRight")
        gameState.player.flipX = true
        gameState.lookingRight = false
        gameState.lookingLeft = true
    }
}else if (gameState.cursors.right.isDown){
    gameState.player.setAccelerationX(300)
    
    if(gameState.onGround === true && gameState.player.body.velocity.y === 0){
    gameState.player.anims.play("movement", true)
    gameState.player.flipX = false
    }else if(gameState.player.body.velocity.y < 0 && gameState.lookingRight === false || gameState.cursors.space.isDown && gameState.lookingRight === false){
        gameState.player.anims.play("rightair", true)
        gameState.player.flipX = false
        gameState.lookingRight = true
        gameState.lookingLeft = false
    }else if(gameState.player.body.velocity.y > 0 && gameState.lookingRight === false){
        gameState.player.setTexture("downRight")
        gameState.player.flipX = false
        gameState.lookingRight = true
        gameState.lookingLeft = false
    }
}else{
    gameState.player.setAccelerationX(0)
   gameState.player.setDragX(200)
    if(gameState.onGround === true){
    gameState.player.anims.play("breath", true)
    }else if(gameState.player.body.velocity.y < 0){
          gameState.player.setTexture("up")
    }else if(gameState.player.body.velocity.y > 0 && gameState.player.anims.isPlaying === false){
        gameState.player.setTexture("down")
    }
}

    }
    
}