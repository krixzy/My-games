let churchmap
let churchtileset

class church extends Phaser.Scene{
    constructor(){
        super({key: "church"})
    }
    preload(){
//map preload
this.load.image("tillemap", "\\tiles.png")
this.load.tilemapTiledJSON("churchmap", "\\maps/church.json")

//charloading
this.load.spritesheet("mainChar", "\\sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})
this.load.spritesheet("mainShadow", "\\sprits/char/Shadow/Shadow 1.png", {frameWidth: 32, frameHeight: 32})
    }
    create(){

            //creating keys
    gameState.pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)

        //create map
churchmap = this.make.tilemap({key: "churchmap"})
//adding tilleset
churchtileset = churchmap.addTilesetImage("tiles", "tillemap")
//background
churchmap.createLayer("background", churchtileset,400, 150)
//forground
let wallCollider = churchmap.createLayer("forground", churchtileset,400, 150)
wallCollider.setCollisionByProperty({collider: true})
//decro
let decroCollider = churchmap.createLayer("decro", churchtileset,400, 150)
decroCollider.setCollisionByProperty({collider: true})
//door
let doorCollider = churchmap.createLayer("door", churchtileset, 400, 150)
doorCollider.setCollisionByProperty({collider: true})
//upperwall
let wall = churchmap.createLayer("wall", churchtileset, 400, 150).setDepth(2)
wall.setCollisionByProperty({collider: true})
// mainplayer creation
if(gameState.curentPosition.inMenu == true){
  gameState.player = this.physics.add.sprite(gameState.curentPosition.x, gameState.curentPosition.y, "mainChar").setDepth(1)
  gameState.curentPosition.inMenu = false
}else{
gameState.player = this.physics.add.sprite(1055, 650, "mainChar").setDepth(1)
}
gameState.playerShadow = this.physics.add.sprite(gameState.player.x, gameState.player.y + 3, "mainShadow") 
gameState.player.setCollideWorldBounds(true)
gameState.player.setSize(20, 20)


//colliders
console.log("test")
//doorcollider
this.physics.add.collider(gameState.player, doorCollider, ()=>{
    gameState.inChurch = true
    this.scene.stop("church")
    this.scene.start("gameScene")
})
//wallcollider
this.physics.add.collider(gameState.player, wallCollider)
this.physics.add.collider(gameState.player, decroCollider)
this.physics.add.collider(gameState.player, wall)
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