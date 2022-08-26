let prisonmap
let prisontilemap

class prison extends Phaser.Scene{
    constructor(){
        super({key: "prison"})
    }
preload(){
this.load.tilemapTiledJSON("prisonmap", "\\maps/prison.json")
this.load.image("tileset", "\\tiles.png")
this.load.spritesheet("mainChar", "\\sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})
this.load.spritesheet("mainShadow", "\\sprits/char/Shadow/Shadow 1.png", {frameWidth: 32, frameHeight: 32})
}
create(){


        //creating keys
        gameState.pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)

    // creating map
    prisonmap = this.add.tilemap("prisonmap")
//adding tileset
prisontilemap = prisonmap.addTilesetImage("tiles", "tileset")

//background
prisonmap.createLayer("background", prisontilemap, 420, 180)
//forground
let forgroundCollider = prisonmap.createLayer("forground", prisontilemap, 420, 180).setDepth(1)
forgroundCollider.setCollisionByProperty({collider: true})
//decro
let decroCollider = prisonmap.createLayer("decro", prisontilemap, 420, 180).setDepth(2)
decroCollider.setCollisionByProperty({collider: true})
//door
let doorCollider = prisonmap.createLayer("door", prisontilemap, 420, 180).setDepth(3)
doorCollider.setCollisionByProperty({collider: true})
//books
prisonmap.createLayer("books", prisontilemap, 420, 180).setDepth(4)
//jaildoor
prisonmap.createLayer("jaildoor", prisontilemap, 420, 180).setDepth(5)


// mainplayer creation
if(gameState.curentPosition.inMenu == true){
  gameState.player = this.physics.add.sprite(gameState.curentPosition.x, gameState.curentPosition.y, "mainChar").setDepth(1.5)
  gameState.curentPosition.inMenu = false
}else{
gameState.player = this.physics.add.sprite(661, 677, "mainChar").setDepth(0)
}
gameState.playerShadow = this.physics.add.sprite(gameState.player.x, gameState.player.y + 3, "mainShadow") 
gameState.player.setCollideWorldBounds(true)
gameState.player.setSize(15, 15)


//animatoins
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


//colliders
this.physics.add.collider(gameState.player, doorCollider, () =>{
    gameState.inPrison = true
    this.scene.stop("prison")
    this.scene.start("gameScene")
})
this.physics.add.collider(gameState.player, forgroundCollider)
this.physics.add.collider(gameState.player, decroCollider)

gameState.cursors = this.input.keyboard.createCursorKeys()
}
update(){


  if(gameState.pKey.isDown){
    gameState.curentPosition.inMenu = true
    gameState.curentPosition.x = gameState.player.x
    gameState.curentPosition.y = gameState.player.y
    gameState.curentPosition.scene = this.scene.key
    this.scene.stop(this.scene.key)
    this.scene.start("menu")
   }
    if(gameState.cursors.space.isDown){
        console.log(gameState.player)
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