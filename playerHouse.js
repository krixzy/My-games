let house
let tileSet

class playerHouse extends Phaser.Scene{
    constructor(){
        super({key: "playerHouse"})
    }
    preload(){
        //loading player
        this.load.spritesheet("mainChar", "sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})
this.load.spritesheet("mainShadow", "sprits/char/Shadow/Shadow 1.png", {frameWidth: 32, frameHeight: 32})
        //loading map
this.load.tilemapTiledJSON("house", "maps/playerhouse.json")
this.load.image("tiles", "tiles.png")
    }
    create(){



      //creating keys
    gameState.pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)


        //creating map
house = this.make.tilemap({key:"house"})
tileSet = house.addTilesetImage("tileSet", "tiles")
house.createLayer("Background", tileSet, this.scene.systems.scale.gameSize.width / 4, this.scene.systems.scale.gameSize.height / 9).setScale(1.5).setOrigin(0.5)
gameState.forGround = house.createLayer("Forground", tileSet, this.scene.systems.scale.gameSize.width / 4, this.scene.systems.scale.gameSize.height / 9).setScale(1.5).setOrigin(0.5)
gameState.door = house.createLayer("Door", tileSet, this.scene.systems.scale.gameSize.width / 4, this.scene.systems.scale.gameSize.height / 9).setScale(1.5).setOrigin(0.5)
gameState.decro = house.createLayer("decro", tileSet, this.scene.systems.scale.gameSize.width / 4, this.scene.systems.scale.gameSize.height / 9).setScale(1.5).setOrigin(0.5)
console.log(this.scene.systems.scale.gameSize)
gameState.forGround.setCollisionByProperty({collider: true})
gameState.door.setCollisionByProperty({collider: true})
gameState.decro.setCollisionByProperty({collider: true})

// main player
if(gameState.curentPosition.inMenu == true){
  gameState.player = this.physics.add.sprite(gameState.curentPosition.x, gameState.curentPosition.y, "mainChar").setDepth(1).setScale(1.5)
  gameState.curentPosition.inMenu = false
}else{
gameState.player = this.physics.add.sprite(1280, 700, "mainChar").setScale(1.5)
}
    gameState.playerShadow = this.physics.add.sprite(gameState.player.x, gameState.player.y + 3, "mainShadow").setScale(1.5) 
    gameState.player.setCollideWorldBounds(true)
    gameState.player.setSize(5, 5)

    // collider
    this.physics.add.collider(gameState.player, gameState.door, () =>{
this.scene.stop("playerHouse")
this.scene.start("gameScene")
    })
this.physics.add.collider(gameState.player, gameState.forGround)
this.physics.add.collider(gameState.player, gameState.decro)
gameState.player.setCollideWorldBounds(true)
    //animations

    this.anims.create({
        key: "mainMoveDown",
        frames: this.anims.generateFrameNumbers("mainChar", {start:0, end: 2}),
        frameRate:12, 
        reteat: -1
      })
  
  this.anims.create({
    key:"mainMoveRight",
    frames: this.anims.generateFrameNumbers("mainChar", {start:6, end: 8}),
    frameRate:12
    
  })
  this.anims.create({
    key:"mainMoveLeft",
    frames: this.anims.generateFrameNumbers("mainChar", {start: 3, end: 5}),
    frameRate:12
  })
  this.anims.create({
    key:"mainMoveUp",
    frames: this.anims.generateFrameNumbers("mainChar", {start:9, end: 11}),
    frameRate: 12
  })
  gameState.cursors = this.input.keyboard.createCursorKeys()
    }
    update(){


       // going in to menu
   if(gameState.pKey.isDown){
    gameState.curentPosition.inMenu = true
    gameState.curentPosition.x = gameState.player.x
    gameState.curentPosition.y = gameState.player.y
    gameState.curentPosition.scene = this.scene.key
    this.scene.stop(this.scene.key)
    this.scene.start("menu")
   }
        if(gameState.cursors.right.isDown && gameState.cursors.down.isDown){
            gameState.player.anims.play("mainMoveRight", true)
      gameState.player.setVelocityX(200)
      gameState.player.setVelocityY(200)
      this.moveShadow()
      //gameState.char.x += 1
      //gameState.char.y += 1
          }else if(gameState.cursors.right.isDown && gameState.cursors.up.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveRight", true)
            gameState.player.setVelocityY(-200)
            gameState.player.setVelocityX(200);
            this.moveShadow()
          }else if(gameState.cursors.left.isDown && gameState.cursors.down.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveLeft", true)
            gameState.player.setVelocityX(-200)
            gameState.player.setVelocityY(200)
            this.moveShadow()
          }else if(gameState.cursors.left.isDown && gameState.cursors.up.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveLeft", true)
            gameState.player.setVelocityY(-200)
            gameState.player.setVelocityX(-200)
            this.moveShadow()
          }
          else if(gameState.cursors.right.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveRight", true)
        gameState.player.setVelocityX(200)
        gameState.player.setVelocityY(0)
        this.moveShadow()
      }else if(gameState.cursors.left.isDown && gameState.pause === false){
        gameState.player.anims.play("mainMoveLeft", true)
        gameState.player.setVelocityX(-200)
        gameState.player.setVelocityY(0)
        this.moveShadow()
      }else if(gameState.cursors.up.isDown && gameState.pause === false){
        gameState.player.anims.play("mainMoveUp", true)
        gameState.player.setVelocityY(-200)
        gameState.player.setVelocityX(0)
        this.moveShadow()
      }else if(gameState.cursors.down.isDown && gameState.pause === false){
        gameState.player.anims.play("mainMoveDown", true)
        gameState.player.setVelocityY(200)
        gameState.player.setVelocityX(0)
        this.moveShadow()
        
      }else if(gameState.pause === false){
        gameState.player.setVelocityX(0)
        gameState.player.setVelocityY(0)
        this.moveShadow()
      }

    }
    moveShadow(){
        gameState.playerShadow.x = gameState.player.x
        gameState.playerShadow.y = gameState.player.y + 3
        if(gameState.cursors.up.isDown){
    gameState.playerShadow.y = gameState.player.y
        }else if (gameState.cursors.down.isDown){
          gameState.playerShadow.y = gameState.player.y + 3
        }
      }
}