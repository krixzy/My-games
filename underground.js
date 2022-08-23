let underGroundMap
let underGroundTileMap
let randomGeneraterNumber = 10000

class underGround extends Phaser.Scene{
    constructor(){
        super({key: "underGround"})
    }
    preload(){
        //loading map
this.load.image("tiles", "\\tiles.png")
this.load.tilemapTiledJSON("underGroundMap", "\\maps/underground.json")

//charloading
this.load.spritesheet("mainChar", "\\sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})
this.load.spritesheet("mainShadow", "\\sprits/char/Shadow/Shadow 1.png", {frameWidth: 32, frameHeight: 32})
    }
    create(){
console.log
      //Repel function
      if(gameState.repelPotionAktive == true){
        randomGeneraterNumber = 10000
      gameState.timeEvent = this.time.addEvent({
        delay: gameState.repelTimer,
        callback: () =>{
          this.enemyTimer
          gameState.repelPotionAktive = false
        },
        callbackScope: this
    })
  }else{
    this.enemyTimer()
  }


 //creating keys
 gameState.pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)


        // undergroundmap
underGroundMap = this.add.tilemap("underGroundMap")
        //tilemap
underGroundTileMap = underGroundMap.addTilesetImage("tiles")


        //background
        underGroundMap.createLayer("background", underGroundTileMap)
        //forground
        let forGround = underGroundMap.createLayer("forground", underGroundTileMap)
        forGround.setCollisionByProperty({collider: true})
        //robe
        let robe = underGroundMap.createLayer("robe", underGroundTileMap)
        robe.setCollisionByProperty({collider: true})
        //wall
        let wall = underGroundMap.createLayer("wall", underGroundTileMap).setDepth(2)
        wall.setCollisionByProperty({collider: true})
        


        // mainplayer creation
if(gameState.inUnderGroundBattleGround){
  gameState.inUnderGroundBattleGround = false
  gameState.player = this.physics.add.sprite(gameState.playerPositionX, gameState.playerPositionY, "mainChar").setDepth(1)
}else if(gameState.curentPosition.inMenu == true){
  gameState.curentPosition.inMenu = false
  gameState.player = this.physics.add.sprite(gameState.curentPosition.x, gameState.curentPosition.y, "mainChar").setDepth(1.5)
}else{
  gameState.player = this.physics.add.sprite(2420, 100, "mainChar").setDepth(1)
}
gameState.playerShadow = this.physics.add.sprite(gameState.player.x, gameState.player.y + 3, "mainShadow") 
gameState.player.setCollideWorldBounds(true)
gameState.player.setSize(20, 20)


//colliders

this.physics.add.collider(gameState.player, robe, () =>{
  gameState.inUnderGround = true
  this.scene.stop("underGround")
  this.scene.start("gameScene")
})

this.physics.add.collider(gameState.player, wall)

//camara settings

this.physics.world.setBounds(0, 0, 2560, 1600)
this.cameras.main.setBounds(0, 0, 2560, 1600)
this.cameras.main.startFollow(gameState.player, true)
this.cameras.roundPixels = true

gameState.cursors = this.input.keyboard.createCursorKeys()

    }
    update(){

      if(gameState.pKey.isDown){
        gameState.curentPosition.inMenu = true
        gameState.curentPosition.x = gameState.player.x
        gameState.curentPosition.y = gameState.player.y
        gameState.curentPosition.scene = this.scene.key
        if(gameState.timeEvent){
        gameState.repelTimer = Math.floor(gameState.repelTimer - gameState.timeEvent.elapsed)
        }
        this.scene.stop(this.scene.key)
        this.scene.start("menu")
       }

      //console.log player x and y
    if(gameState.cursors.space.isDown){
      console.log(gameState.player)
  }
        if(gameState.cursors.right.isDown && gameState.cursors.down.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveRight", true)
      gameState.player.setVelocityX(200)
      gameState.player.setVelocityY(200)
      this.moveShadow()
      this.randomFight()
          }else if(gameState.cursors.right.isDown && gameState.cursors.up.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveRight", true)
            gameState.player.setVelocityY(-200)
            gameState.player.setVelocityX(200);
            this.moveShadow()
            this.randomFight()
          }else if(gameState.cursors.left.isDown && gameState.cursors.down.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveLeft", true)
            gameState.player.setVelocityX(-200)
            gameState.player.setVelocityY(200)
            this.moveShadow()
            this.randomFight()
          }else if(gameState.cursors.left.isDown && gameState.cursors.up.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveLeft", true)
            gameState.player.setVelocityY(-200)
            gameState.player.setVelocityX(-200)
            this.moveShadow()
            this.randomFight()
          }
          else if(gameState.cursors.right.isDown && gameState.pause === false){
            gameState.player.anims.play("mainMoveRight", true)
        gameState.player.setVelocityX(200)
        gameState.player.setVelocityY(0)
        this.moveShadow()
        this.randomFight()
      }else if(gameState.cursors.left.isDown && gameState.pause === false){
        gameState.player.anims.play("mainMoveLeft", true)
        gameState.player.setVelocityX(-200)
        gameState.player.setVelocityY(0)
        this.moveShadow()
        this.randomFight()
      }else if(gameState.cursors.up.isDown && gameState.pause === false){
        gameState.player.anims.play("mainMoveUp", true)
        gameState.player.setVelocityY(-200)
        gameState.player.setVelocityX(0)
        this.moveShadow()
        this.randomFight()
      }else if(gameState.cursors.down.isDown && gameState.pause === false){
        gameState.player.anims.play("mainMoveDown", true)
        gameState.player.setVelocityY(200)
        gameState.player.setVelocityX(0)
        this.moveShadow()
        this.randomFight()
        
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
          gameState.playerShadow.y = gameState.player.y + 5
        }
    }
    randomFight(){

      let fightTrigger = Math.floor(Math.random() * randomGeneraterNumber)
      
      if(fightTrigger > 10000){
        gameState.playerPositionX = gameState.player.x
        gameState.playerPositionY = gameState.player.y
        gameState.number += 1
        this.cameras.main.shake(1000, 0.01,true, (arg1,arg2) =>{
          gameState.pause = true
          this.physics.pause()
          if(arg2 > 0.9){
            randomGeneraterNumber = 10000
            gameState.inUnderGroundBattleGround = true
            this.scene.stop("underGround")
            this.scene.start("underGroundBattleGround")
          }
        })
        
      
        
      }
    }
    enemyTimer(){
      this.time.addEvent({
  callback:() =>{
    console.log(randomGeneraterNumber)
randomGeneraterNumber += 10
  },
  delay: 2000,
  repeat: -1
})
    }
}