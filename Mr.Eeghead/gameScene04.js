let dubbleJump = null
var spacebar;
class gameScene04 extends Phaser.Scene{
    constructor(){
        super({key: "gameScene04"})
    }
    
    preload(){
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
        this.add.text(100, 25, "døde " + gameState.deaths, {font: "25px"})
        

        // the sky
        const makingSky = () =>{
            gameState.sky = this.physics.add.group()
            for(let i = 0; i < 8; i++){
            gameState.sky.create(Math.floor(Math.random() * 1800), Math.floor(Math.random() * 150), "sky1").setScale(2).setGravityY(-500).setVelocityX(Math.floor(-2 * Math.random() * 7))
            }
        }
        makingSky()

        //background trees and mountens
            this.add.sprite(50, 840, "tree1").setScale(1.5)
    this.add.sprite(450, 840, "tree1").setScale(1.5)
    this.add.sprite(920, 840, "tree1").setScale(1.5)
    this.add.sprite(1200, 840, "tree1").setScale(1.5)
    this.add.sprite(1600, 840, "tree1").setScale(1.5)
    this.add.sprite(200, 876, "hill1")
    this.add.sprite(800, 876, "hill1").flipX = true
    this.add.sprite(1400, 876, "hill1")

    // groups and player
            gameState.spikeWall = this.physics.add.staticGroup()
            gameState.wall = this.physics.add.staticGroup();
            gameState.platForm = this.physics.add.staticGroup();
            gameState.cursors = this.input.keyboard.createCursorKeys(); 
            gameState.player = this.physics.add.sprite(100, 850, "figur").setScale(0.8)
            gameState.portal = this.physics.add.sprite(400, 330, "portal").setGravityY(-500)
          

            // thegound
          for(let i = 0; i < gameState.ground.length; i++){
              gameState.platForm.create(gameState.ground[i], 910, "platForm")
              console.log(gameState.sky.children.entries[1].x)
          }
        
          
          
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
    
          // player colliders
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
            gameState.onGround = true
            gameState.jumps = 1
            if(gameState.player.body.velocity.y === 0 && dubbleJump === true){
                gameState.jumps = 2
            }
        })
    
       // leveltext
        gameState.kasse = this.add.rectangle(900, 30, 200, 80, 0x000000).setAlpha(0.4)
        gameState.levelText = this.add.text(850, 25, "world 1 - 4")
       
        
           
      gameState.spike = this.physics.add.group()
        //mapeCreation 


        //walls creation
const allSpikeWalls = [[100, 750, "noTopSpike", true], [208, 750, "noSpike", true],[308, 750, "noSpike", true],[408, 750, "noSpike", true],[508, 750, "noSpike", true],[608, 750, "noSpike", true],[708, 750, "noSpike", true],[808, 750, "noSpike", true],[908, 750, "noSpike", true],[1008, 750, "noSpike", true],[1108, 750, "noSpike", true],[1208, 750, "noSpike", true],[1308, 750, "noSpike", true],[1408, 750, "noSpike", true],[1508, 750, "noSpike", true],[1608, 750, "noSpike", true],[1550, 660, "noTopSpike"], [1550, 551, "noSpike"], [1550, 451, "noSpike"], [1550, 351, "noSpike"], [1550, 251, "noSpike"], [1550, 183, "noBotSpike"],[1460, 180, "noBotSpike", true], [1355, 180, "noSpike", true], [1255, 180, "noSpike", true],[1155, 180, "noSpike", true],[1055, 180, "noSpike", true],[955, 180, "noSpike", true],[855, 180, "noSpike", true],[755, 180, "noSpike", true],[655, 180, "noSpike", true],[555, 180, "noSpike", true],[455, 180, "noSpike", true],[355, 180, "noSpike", true],[247, 180, "noTopSpike", true], [240, 250, "noBotSpike"], [240, 350, "noSpike"], [240, 450, "noSpike"],[240, 520, "noTopSpike"], [340, 440, "noBotSpike", true],[440, 440, "noBotSpike", true],[540, 440, "noBotSpike", true],[640, 440, "noBotSpike", true],[740, 440, "noBotSpike", true],[840, 440, "noBotSpike", true],[940, 440, "noBotSpike", true],[1040, 440, "noBotSpike", true],[1140, 440, "noBotSpike", true],[1240, 440, "noBotSpike", true]]

for(let i = 0; i < allSpikeWalls.length; i++){
    if(allSpikeWalls[i][3] === true){
    gameState.spikeWall.create(allSpikeWalls[i][0], allSpikeWalls[i][1], allSpikeWalls[i][2]).setRotation(1.58)
    gameState.spikeWall.children.entries[i].setSize(130, 90)
    gameState.spikeWall.children.entries[i].setOffset(-20, 10)
}else{
    gameState.spikeWall.create(allSpikeWalls[i][0], allSpikeWalls[i][1], allSpikeWalls[i][2])
}
}


    console.log(gameState.spikeWall)

    // platform creation
        const allPlatForms = [[1700, 700], [1700, 500], [1700, 300], [1700, 100], [1350, 100], [1000, 100], [650, 100], [250, 100], [150, 690], [320, 690], [890, 690], [1400, 690], [1400, 500],[1150, 380],[950, 380], [750, 380], [550, 380],[380, 380]] 
        
       
        for(let i = 0; i< allPlatForms.length; i++){
            gameState.platForm.create(allPlatForms[i][0], allPlatForms[i][1], "platForm")
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
      
  gameState.wings = this.physics.add.sprite(1710, 850, "wings").setGravityY(-500).setScale(2)

   this.physics.add.overlap(gameState.wings, gameState.player, (arg1) =>{
        dubbleJump = true
       gameState.wings.destroy()
       gameState.dubbleJumpText.destroy()
   })
// ending
    this.physics.add.collider(gameState.portal, gameState.player, () => {
        this.physics.pause()
        this.cameras.main.fade(1000, 255, 255, 255, false, function(camera, progress) {
            if (progress > .9) {
                this.scene.stop("gameScene04")
                this.scene.start("gameScene05")
            }
          });
        })
        gameState.dubbleJumpText = this.add.text(1200, 800, "vingerne gør at du kan hoppe 2 gange", {fill: "0x000000", font: "bold 25px Arial", boundsAlignH: "center"})
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
