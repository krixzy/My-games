let moving = 5000
class gameScene03 extends Phaser.Scene{
    constructor(){
        super({key: "gameScene03"})
    }
    preload(){
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
         if (gameState.hardMode === true){
             moving = 2000
         }
        this.add.text(100, 25, "døde " + gameState.deaths, {font: "25px"})
        //this.add.rectangle(130, 30, 140, 80, 0x000000).setAlpha(0.4)
        const makingSky = () =>{
            gameState.sky = this.physics.add.group()
            for(let i = 0; i < 8; i++){
            gameState.sky.create(Math.floor(Math.random() * 1800), Math.floor(Math.random() * 150), "sky1").setScale(2).setGravityY(-500).setVelocityX(Math.floor(-2 * Math.random() * 7))
            }
        }
        makingSky()
            this.add.sprite(50, 840, "tree1").setScale(1.5)
    this.add.sprite(450, 840, "tree1").setScale(1.5)
    this.add.sprite(920, 840, "tree1").setScale(1.5)
    this.add.sprite(1200, 840, "tree1").setScale(1.5)
    this.add.sprite(1600, 840, "tree1").setScale(1.5)
    this.add.sprite(200, 876, "hill1")
    this.add.sprite(800, 876, "hill1").flipX = true
    this.add.sprite(1400, 876, "hill1")
    //this.add.sprite(200, 150, "sky1").setScale(1.5)
    //this.add.sprite(550, 140, "sky1").setScale(1.5)
    //this.add.sprite(900, 160, "sky1").setScale(1.5)
    //this.add.sprite(1250, 120, "sky1").setScale(1.5)
    //this.add.sprite(1600, 100, "sky1").setScale(1.5)
            gameState.spikeWall = this.physics.add.staticGroup()
            gameState.wall = this.physics.add.staticGroup();
            gameState.platForm = this.physics.add.staticGroup();
            gameState.cursors = this.input.keyboard.createCursorKeys(); 
            gameState.player = this.physics.add.sprite(100, 850, "figur").setScale(0.8)
          
          for(let i = 0; i < gameState.ground.length; i++){
              gameState.platForm.create(gameState.ground[i], 910, "platForm")
              console.log(gameState.sky.children.entries[1].x)
          }
        
          //gameState.player.setGravityY()
          
          gameState.player.setCollideWorldBounds(true)
          gameState.player.setInteractive()
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
    
          
        this.physics.add.collider(gameState.platForm, gameState.player, () =>{
           gameState.onGround = true
          
        })
        this.physics.add.collider(gameState.wall, gameState.player, () =>{
            gameState.onGround = true
        })
    
       
        gameState.kasse = this.add.rectangle(900, 30, 200, 80, 0x000000).setAlpha(0.4)
        gameState.levelText = this.add.text(850, 25, "world 1 - 3")
    
        for(let i = 0; i < gameState.platForm.children.entries.length; i++){
    
            gameState.platForm.children.entries[i].body.checkCollision.down = false
            gameState.platForm.children.entries[i].body.checkCollision.left = false
            gameState.platForm.children.entries[i].body.checkCollision.right = false
        }
           
      gameState.spike = this.physics.add.group()
        //mapeCreation 


        //walls creation
gameState.movingWall01 = this.physics.add.sprite(300, 860, "allSpike").setGravityY(-500).setScale(0.6)
gameState.movingWall02 = this.physics.add.sprite(300, 640, "allSpike").setGravityY(-500).setScale(0.7)
gameState.movingWall03 = this.physics.add.sprite(300, 440, "allSpike").setGravityY(-500).setScale(0.75)
gameState.movingWall04 = this.physics.add.sprite(950, 480, "allSpike").setGravityY(-500).setScale(0.7)


this.physics.add.collider(gameState.player, gameState.movingWall01, () =>{
    this.scene.restart()
    gameState.deaths += 1
})
this.physics.add.collider(gameState.player, gameState.movingWall02, () =>{
    this.scene.restart()
    gameState.deaths += 1
})
this.physics.add.collider(gameState.player, gameState.movingWall03, () =>{
    this.scene.restart()
    gameState.deaths += 1
})
this.physics.add.collider(gameState.player, gameState.movingWall04, () =>{
    this.scene.restart()
    gameState.deaths += 1
})
    
        const allPlatForms = [[1600, 800], [1500, 700],[1300, 700],[1100, 700], [900, 700], [700, 700], [500, 700], [300, 700],[100, 700], [100, 600], [100, 500], [300, 500], [500, 500], [700, 500], [900, 500], [1100, 500], [1300, 500], [1500, 500], [1600, 400], [1500, 200], [1300, 200], [1600, 300], [1100, 200]]
        
        gameState.portal = this.physics.add.sprite(800, 200, "portal").setGravityY(-500)
       
        for(let i = 0; i< allPlatForms.length; i++){
            gameState.platForm.create(allPlatForms[i][0], allPlatForms[i][1], "platForm")
        }

        this.physics.add.overlap(gameState.spike, gameState.player, () =>{
            this.scene.restart()
            gameState.deaths += 1
        })
        this.physics.add.overlap(gameState.spike, gameState.platForm)


    this.physics.add.overlap(gameState.spikeWall, gameState.player, () =>{
        this.scene.restart()
        gameState.deaths += 1
    })
    for(let i = 0; i < gameState.platForm.children.entries.length; i++){
    
        gameState.platForm.children.entries[i].body.checkCollision.down = false
        gameState.platForm.children.entries[i].body.checkCollision.left = false
        gameState.platForm.children.entries[i].body.checkCollision.right = false
        
    }
    //tweens / moving walls
      gameState.movingWall01.moving = this.tweens.add({
        targets: gameState.movingWall01,
        x: 1100,
        ease: 'Linear',
        duration: 2000,
        repeat: -1,
        yoyo: true,
        
      })
      gameState.movingWall02.moving = this.tweens.add({
        targets: gameState.movingWall02,
        x: 1200,
        ease: "Linear",
        duration: moving,
        repeat: -1,
        yoyo: true,
        
      })
     gameState.movingWall03.moving = this.tweens.add({
        targets: gameState.movingWall03,
        x: 1200,
        ease: 'Linear',
        duration: moving,
        repeat: -1,
        yoyo: true,
        
      })
      gameState.movingWall04.moving = this.tweens.add({
        targets: gameState.movingWall04,
        y: 0,
        ease: 'Linear',
        duration: 1000,
        repeat: -1,
        yoyo: true,
        
      })
    //gameState.enemy.move.play() 
    gameState.rotation = -1
    this.physics.add.collider(gameState.portal, gameState.player, () => {
        this.physics.pause()
        this.cameras.main.fade(1000, 255, 255, 255, false, function(camera, progress) {
            if (progress > .9) {
                this.scene.stop("gameScene03")
                this.scene.start("gameScene04")
            }
          });
        })
    }
    update(){
        gameState.movingWall02.setRotation(gameState.rotation -= 0.5)
      
        for(let i = 0; i < gameState.sky.children.entries.length; i++){
            if(gameState.sky.children.entries[i].x < -80)
            gameState.sky.children.entries[i].destroy()
        }
        if(gameState.sky.children.entries.length < 8){
            gameState.sky.create(1850, Math.floor(Math.random() * 150), "sky1").setScale(2).setGravityY(-500).setVelocityX(Math.floor(-2 * Math.random() * 7))
        }
        if(gameState.sky.children.entries)
gameState.sky.x -=0.1
        gameState.portal.anims.play("ending", true)

if (gameState.onGround === true && gameState.player.body.velocity.y === 0){
    gameState.lookingLeft = false
    gameState.lookingRight = false
}
        if(gameState.cursors.space.isDown){
        if(gameState.onGround === true && gameState.player.body.velocity.y === 0){
            gameState.player.anims.play("playerof", true)
            gameState.player.setVelocityY(-340)
            gameState.onGround = false
            gameState.inAir = true
           
            
            
            
        }
       // console.log(gameState.player.body.velocity.y)
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
    gameState.player.setVelocityX(-300)
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
    gameState.player.setVelocityX(300)
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

    gameState.player.setVelocityX(0)
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