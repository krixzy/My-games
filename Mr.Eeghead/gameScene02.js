class gameScene02 extends Phaser.Scene{
    constructor(){
        super({ key: "gameScene02"})
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
        this.add.text(100, 25, "døde " + gameState.deaths, {font: "25px"})
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
    gameState.levelText = this.add.text(850, 25, "world 1 - 2")

    for(let i = 0; i < gameState.platForm.children.entries.length; i++){

        gameState.platForm.children.entries[i].body.checkCollision.down = false
        gameState.platForm.children.entries[i].body.checkCollision.left = false
        gameState.platForm.children.entries[i].body.checkCollision.right = false
    }
       
  
    //mapeCreation 
    gameState.spikeWall.create(300, 900, "noBotSpike")
    gameState.spikeWall.create(650, 880, "noBotSpike")
    gameState.spikeWall.create(1000, 870, "noBotSpike")
    gameState.spikeWall.create(1350, 860, "noBotSpike")
    gameState.spikeWall.create(1400, 210, "noBotSpike")
    gameState.spikeWall.create(1400, 319, "noSpike")
    gameState.spikeWall.create(1400, 419, "noSpike")
    gameState.spikeWall.create(1400, 525, "noTopSpike")
    gameState.spikeWall.create(1000, 450, "noBotSpike").setRotation(1.50)
    gameState.spikeWall.create(885, 458, "noTopSpike").setRotation(1.50)
    gameState.spikeWall.create(786, 465, "noTopSpike").setRotation(1.50)
    gameState.spikeWall.create(687, 472, "noTopSpike").setRotation(1.50)
    gameState.spikeWall.create(588, 479, "noTopSpike").setRotation(1.50)
    gameState.spikeWall.create(489, 486, "noTopSpike").setRotation(1.50)
    gameState.spikeWall.create(550, 190, "allSpike")
    gameState.spikeWall.create(850, 190, "allSpike")
    

    // const allSpikes = [[]]
    const allPlatForms = [[1600, 800],[1600, 690], [1600, 580], [1600, 470], [1600, 360], [1600, 250], [1200, 250], [1200, 400], [1200, 600], [1000, 620], [800, 640], [600, 660], [400, 680], [150, 650],[150, 550],[150, 440],[150, 330], [150, 220], [400, 200]]
    gameState.portal = this.physics.add.sprite(700, 300, "portal").setGravityY(-500)
    for(let i = 0; i< allPlatForms.length; i++){
        gameState.platForm.create(allPlatForms[i][0], allPlatForms[i][1], "platForm")
    }
   /* for(let i = 0; i < allSpikes.length; i++){
        gameState.spikeWall
    }*/
this.physics.add.collider(gameState.spikeWall, gameState.player, () =>{
    this.scene.restart()
    gameState.deaths += 1
})
for(let i = 0; i < gameState.platForm.children.entries.length; i++){

    gameState.platForm.children.entries[i].body.checkCollision.down = false
    gameState.platForm.children.entries[i].body.checkCollision.left = false
    gameState.platForm.children.entries[i].body.checkCollision.right = false
    
}
this.physics.add.collider(gameState.portal, gameState.player, () => {
    this.physics.pause()
    this.cameras.main.fade(1000, 255, 255, 255, false, function(camera, progress) {
        if (progress > .9) {
            this.scene.stop("gameScene02")
            this.scene.start("gameScene03")
        }
      });
 })
   
    }
    update(){
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
    /*if (gameState.cursors.left.isDown && gameState.cursors.space.isDown){
        gameState.player.setTexture()
    }*/
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