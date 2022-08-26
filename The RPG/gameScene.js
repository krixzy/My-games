let roadSign = false

class gameScene extends Phaser.Scene{
  
  constructor(){
      super({ key: "gameScene"})
  }
  preload(){



    //buff loading
    this.load.spritesheet("buff", "sprits/bufficons/buff.png", {frameWidth: 32, frameHeight: 32})


    //potion loading
    this.load.image("hpPotion", "sprits/consumables/HPPotion.png")
    this.load.image("mpPotion", "sprits/consumables/MPPotion.png")
    this.load.image("dmgBoost", "sprits/consumables/DMGBoost.png")
    this.load.image("magicBoost", "sprits/consumables/MAGICBoost.png")
    this.load.image("defenceBoost", "sprits/consumables/DEFENCEBoost.png")
    this.load.image("repelPotion", "sprits/consumables/REPELPotion.png")



    
    
    //map preload
    this.load.image("water2", "tiles/water2.png")
    this.load.image("water", "tiles/water1.png")
    this.load.image("tile", "tiles.png")
    this.load.tilemapTiledJSON("map", "map1.json")



//char preload
this.load.spritesheet("mainChar", "sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})
this.load.spritesheet("mainShadow", "sprits/char/Shadow/Shadow 1.png", {frameWidth: 32, frameHeight: 32})


//wishman
this.load.spritesheet("wishMan", "sprits/char/Male/Male 08-2.png", {frameWidth: 32, frameHeight:32})

  }
  create(){
    



    //creating keys
    gameState.pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)

    //creating label 

    gameState.label = this.add.text(400, 400, '').setDepth(1)

    
    gameState.playerName = "Kim"
//npcs

    //wishman
    gameState.wishMan = this.physics.add.sprite(370, 330, "wishMan").setDepth(1).setSize(40, 40)
    gameState.wishManshadow = this.physics.add.sprite(gameState.wishMan.x, gameState.wishMan.y + 3, "mainShadow").setDepth(2)
    gameState.wishMan.body.immovable = true
    
    // map creation
    gameState.map = this.make.tilemap({key: "map"})
//adding the tilesset
gameState.waterTileset2 = gameState.map.addTilesetImage("water2", "water2")
gameState.waterTileset = gameState.map.addTilesetImage ("water","water" )
    gameState.tileSet = gameState.map.addTilesetImage("tiles", "tile")



//background
    gameState.map.createLayer("background",gameState.tileSet,  -1,-1,  true)
//sign
gameState.sign = gameState.map.createLayer("Sign", gameState.tileSet)
gameState.sign.setCollisionByProperty({sign: true})
//overlaper
gameState.map.createLayer("overlaper", gameState.tileSet).setDepth(2)
//forground
    gameState.colliderLayer = gameState.map.createLayer("forground",gameState.tileSet)
    gameState.colliderLayer.setCollisionByProperty({collider: true})
    //decro
    gameState.decroLayer = gameState.map.createLayer("decro", gameState.tileSet).setDepth(3)
    gameState.decroLayer.setCollisionByProperty({collider: true})
    //playerhousedoor
    gameState.homeDoor = gameState.map.createLayer("door", gameState.tileSet)
    gameState.homeDoor.setCollisionByProperty({collider: true})
    //churchdoor
    gameState.churchDoor = gameState.map.createLayer("churchdoor", gameState.tileSet)
    gameState.churchDoor.setCollisionByProperty({collider: true})
    //shopdoor
    gameState.shopDoor = gameState.map.createLayer("shopdoor", gameState.tileSet)
    gameState.shopDoor.setCollisionByProperty({collider:true})
    //prissondoor
    gameState.prisonDoor = gameState.map.createLayer("prissondoor", gameState.tileSet)
    gameState.prisonDoor.setCollisionByProperty({collider: true})
    //inndoor
    gameState.innDoor = gameState.map.createLayer("inndoor", gameState.tileSet)
    gameState.innDoor.setCollisionByProperty({collider: true})
    //hole
    gameState.hole = gameState.map.createLayer("hole", gameState.tileSet)
    gameState.hole.setCollisionByProperty({collider: true})
    //lake
    gameState.lake = gameState.map.createLayer("water", gameState.waterTileset)
    gameState.lake.setCollisionByProperty({collider: true})
    




    // mainplayer creation
  if(gameState.inChurch === true){
      gameState.player = this.physics.add.sprite(1582, 2345, "mainChar").setDepth(1)
      gameState.inChurch = false
    }else if(gameState.inshop === true){
      gameState.player = this.physics.add.sprite(1230, 2025, "mainChar").setDepth(1)
      gameState.inshop = false

    }else if (gameState.inPrison === true){
      gameState.player = this.physics.add.sprite(1486, 2025, "mainChar").setDepth(1)
      gameState.inPrison = false
    }
    else if (gameState.inUnderGround === true){
      gameState.player = this.physics.add.sprite(2576, 176, "mainChar").setDepth(1)
      gameState.inUnderGround = false
    }else if (gameState.curentPosition.inMenu == true){
      gameState.curentPosition.inMenu = false
      gameState.player = this.physics.add.sprite(gameState.curentPosition.x, gameState.curentPosition.y, "mainChar").setDepth(1)
    }else{ 
      gameState.player = this.physics.add.sprite(335, 330, "mainChar").setDepth(1)
    }
    gameState.playerShadow = this.physics.add.sprite(gameState.player.x, gameState.player.y + 3, "mainShadow") 
    
    gameState.player.setSize(7, 7)




//colliders
    //holecolider
this.physics.add.collider(gameState.player, gameState.hole, () =>{
  this.scene.stop("gameScene")
  this.scene.start("underGround")
})
  //playerhousedoor
this.physics.add.collider(gameState.player, gameState.innDoor, () =>{
  alert("the door is locked come back in a later patch")
})
  //wishmancollider
this.physics.add.collider(gameState.player, gameState.wishMan, () =>{
this.wishManText()
gameState.wishMan.talking = true
this.physics.pause()
gameState.pause = true
})
  //prisonCollider
this.physics.add.collider(gameState.player, gameState.prisonDoor, () =>{
  this.scene.stop("gameScene")
  this.scene.start("prison")
})
  //shopCollider
this.physics.add.collider(gameState.player, gameState.shopDoor, () =>{
  this.scene.stop("gameScene")
  this.scene.start("shop")
})
  //churchCollider
this.physics.add.collider(gameState.player, gameState.churchDoor, ()=>{
  this.scene.stop("gameScene")
  this.scene.start("church")
})
  //signCollider
  this.physics.add.collider(gameState.player, gameState.sign, () =>{
    roadSign = true
    console.log("test1234")
    this.makeSign()
    this.physics.pause()
    gameState.pause = true
})
  //playerHouseCollider
this.physics.add.collider(gameState.player, gameState.homeDoor, () =>{
  this.scene.stop("gameScene")
  this.scene.start("playerHouse")

})
this.physics.add.collider(gameState.player, gameState.lake)

this.physics.add.collider(gameState.player, gameState.colliderLayer)

this.physics.add.collider(gameState.player, gameState.decroLayer)

this.physics.add.collider(gameState.wishMan, gameState.player)

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
this.input.keyboard.on("keybord-W", () =>{
  console.log("test")
})


    gameState.cursors = this.input.keyboard.createCursorKeys()

    //camara settings

    this.physics.world.setBounds(0, 0, 4000, 4000)
    this.cameras.main.setBounds(0, 0, 4000, 4000)
    this.cameras.main.startFollow(gameState.player, true)
    this.cameras.roundPixels = true
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
      
    //console.log player x and y
    /*if(gameState.cursors.shift.isDown){
      this.scene.stop("gameScene")
      this.scene.start("menu")
    }*/
    if(gameState.cursors.space.isDown){
      this.scene.stop("gameScene")
      this.scene.start("shop")
     
  }

  //remove sign text
    if(gameState.cursors.space.isDown) {
      if(roadSign === true){
      console.log("testsign")
      this.destroySign()
      this.physics.resume()
      roadSign = false
      
      }else if (gameState.wishMan.talking){
        gameState.wishMan.talking = false
        gameState.scrollingTextEvent.destroy()
        gameState.wishManTalking.destroy()
        this.physics.resume()
        
        
      }
      gameState.pause = false
    }
//player controle
    if(gameState.cursors.right.isDown && gameState.cursors.down.isDown && gameState.pause === false){
      gameState.player.anims.play("mainMoveRight", true)
gameState.player.setVelocityX(200)
gameState.player.setVelocityY(200)
this.moveShadow()

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
  //move shadow player
  moveShadow(){
    gameState.playerShadow.x = gameState.player.x
    gameState.playerShadow.y = gameState.player.y + 3
    if(gameState.cursors.up.isDown){
gameState.playerShadow.y = gameState.player.y
    }else if (gameState.cursors.down.isDown){
      gameState.playerShadow.y = gameState.player.y + 3
    }
  }

  //make road sign
makeSign(){
  gameState.signBox = this.add.rectangle(gameState.player.x, gameState.player.y -200, 200, 120, 0x72BB1F).setOrigin(0, 0).setAlpha(0.25)
  gameState.signBox.strokeColor = 0x000000
  gameState.signBox.isStroked = true
  gameState.signBox.lineWidth = 2
  gameState.signText = this.add.text(gameState.player.x + 2, gameState.player.y - 200, "\n   Left: " + gameState.playerName + "s house \n \n   Down: Maggitown" , {color: "#000000", fontSize: "20px", fontFamily: "Arial", align: "center"}).setOrigin(0, 0)

  console.log(gameState.sign)
}
//destroy road sign
destroySign(){
  gameState.signBox.destroy()
  gameState.signText.destroy()
}
wishManText(){
   gameState.wishManTalking = this.add.text(gameState.wishMan.x, gameState.wishMan.y , " ", {color: "#FFFFFF", font: "20px Arial", backgroundColor: "#000000", lineSpacing: 5, align: "center", padding: 10}).setOrigin(0.1, 1.3).setAlpha(0.8).setDepth(5)
   this.typewriteText("Hallo there " + gameState.playerName + ", hope you \nare having a great day. Be carefull out \nthere, I hear there is monsters lurcking around", gameState.wishManTalking)



  //this.add.rectangle(gameState.wishMan.x, gameState.wishMan.y, 300, 100, 0x000000).setOrigin(0.5, 1)
}
typewriteText(text, target){
if(gameState.scrollingTextEvent){
  gameState.scrollingTextEvent.destroy()
}
	const length = text.length
	let i = 0
  
	gameState.scrollingTextEvent = this.time.addEvent({
		callback: () => {

			target.text += text[i]
			++i

		},
		repeat: length - 1,
		delay: 50
	})
}
}
