

let shopmap
let tilemap
const shopStats = {
  movingShopKeeper: "right",
  allReadyTalked: false,
  menu: {

  },
  texts: {

  },
  checkList: {

  },
  sprits: {

  }
  
}
class shop extends Phaser.Scene{
    constructor(){
        super({key: "shop"})
    }
    preload(){
this.load.spritesheet("shopKeeper", "/sprits/char/Female/Female 03-3.png",{frameHeight: 32, frameWidth: 32})
this.load.tilemapTiledJSON("shopmap", "\\maps/shop.json")
this.load.image("tilemap", "\\tiles.png")
this.load.spritesheet("mainChar", "\\sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})
this.load.spritesheet("mainShadow", "\\sprits/char/Shadow/Shadow 1.png", {frameWidth: 32, frameHeight: 32})
    }
    create(){
      
       //creating keys
       gameState.pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)
        //create map
        shopmap = this.add.tilemap("shopmap")
        //adding tileset
        tilemap = shopmap.addTilesetImage("tiles", "tilemap")
    //background
    shopmap.createLayer("background", tilemap, 460, 160)
    //forground
    let forGround = shopmap.createLayer("forground", tilemap, 460, 160).setDepth(2)
    forGround.setCollisionByProperty({collider: true})
    //decro
    let decro = shopmap.createLayer("decro", tilemap, 460, 160).setDepth(3)
    decro.setCollisionByProperty({collider: true})
    //door
    let door = shopmap.createLayer("door", tilemap, 460, 160).setDepth(4)
    door.setCollisionByProperty({collider: true})
    
// mainplayer creation
if(gameState.curentPosition.inMenu == true){
  gameState.player = this.physics.add.sprite(gameState.curentPosition.x, gameState.curentPosition.y, "mainChar").setDepth(2)
  gameState.curentPosition.inMenu = false
}else{
gameState.player = this.physics.add.sprite(1180, 653, "mainChar").setDepth(1)
}

gameState.playerShadow = this.physics.add.sprite(gameState.player.x, gameState.player.y + 3, "mainShadow") 
gameState.player.setCollideWorldBounds(true)
gameState.player.setSize(25 ,25 )


//shop Keeper 
gameState.shopKeeper = this.physics.add.sprite(600, 400, "shopKeeper")
gameState.shopKeeperShadow = this.physics.add.sprite(gameState.shopKeeper.x, gameState.shopKeeper.y + 3,"mainShadow")
gameState.shopKeeper.body.immovable = true
shopStats.speed = 40
    //shopKeeper movement
    this.shopKeeperMovement()

//animatoins


//shopkeeper
this.anims.create({
  key: "shopKeeperDown",
  frames: this.anims.generateFrameNumbers("shopKeeper", {start:0, end: 2}),
  frameRate:6, 
  repeat: -1
})

this.anims.create({
key:"shopKeeperRight",
frames: this.anims.generateFrameNumbers("shopKeeper", {start:6, end: 8}),
frameRate:6,
repeat: -1

})
this.anims.create({
key:"shopKeeperLeft",
frames: this.anims.generateFrameNumbers("shopKeeper", {start: 3, end: 5}),
frameRate:6,
repeat: -1
})
this.anims.create({
key:"shopKeeperUp",
frames: this.anims.generateFrameNumbers("shopKeeper", {start:9, end: 11}),
frameRate: 6,
repeat: -1
})






//player
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
  //playercolliders
this.physics.add.collider(gameState.player, door, () =>{
    gameState.inshop = true
    this.scene.stop("shop")
    this.scene.start("gameScene")
})
this.physics.add.collider(gameState.player, decro)
this.physics.add.collider(gameState.player, forGround)
this.physics.add.collider(gameState.player, gameState.shopKeeper, () =>{
  if(shopStats.playerTalking != true){
    if(gameState.shopKeeper.body.touching.up){
      gameState.shopKeeper.setFrame(9)
    }else if(gameState.shopKeeper.body.touching.down){
      gameState.shopKeeper.setFrame(0)
    }else if(gameState.shopKeeper.body.touching.left){
      gameState.shopKeeper.setFrame(3)
    }else if(gameState.shopKeeper.body.touching.right){
      gameState.shopKeeper.setFrame(6)
    }
  gameState.shopKeeper.anims.pause()
  this.physics.pause()
  shopStats.playerTalking = true
  this.shopKeeperText()
  }
})


  //shopkeeper colliders
  this.physics.add.collider(gameState.shopKeeper, decro, () => {
  shopStats.movingShopKeeper = "none"  
  })
  this.physics.add.collider(gameState.shopKeeper, forGround,() => {
    shopStats.movingShopKeeper = "none"  
    })


gameState.cursors = this.input.keyboard.createCursorKeys()

    }


























    //update
    update(){
      //destroy equipment list
      if(shopStats.checkList.equipmentClicked == false && shopStats.texts.equipmentSellText){
        shopStats.texts.equipmentSellText.destroy()
        shopStats.texts.equipmentBuyText.destroy()
        shopStats.texts.equipmentMenuText.destroy()
        console.log("works")
      }


      //destroy sell menu
      if(shopStats.checkList.equipmentSellClicked != true && shopStats.menu.sellMenu){
        shopStats.texts.sellAccessory.destroy()
        shopStats.texts.sellWeapon.destroy()
        shopStats.texts.sellArmor.destroy()
        shopStats.texts.sellEquipmentText.destroy()
        shopStats.menu.sellMenu.destroy()
      }


      //destroying right menu of items
      if(shopStats.checkList.itemBuy == false && shopStats.texts.itemBuyMenuText && shopStats.checkList.itemUpgrade == false){
        shopStats.texts.itemBuyMenuText.destroy()
        shopStats.texts.gold.destroy()
        shopStats.texts.hpPotion.destroy()
        shopStats.sprits.hpPotion.destroy()
        shopStats.texts.mpPotion.destroy()
        shopStats.sprits.mpPotion.destroy()
        shopStats.texts.dmgBoost.destroy()
        shopStats.sprits.dmgBoost.destroy()
        shopStats.texts.magicBoost.destroy()
        shopStats.sprits.magicBoost.destroy()
        shopStats.texts.defenceBoost.destroy()
        shopStats.sprits.defenceBoost.destroy()
        shopStats.texts.repelPotion.destroy()
        shopStats.sprits.repelPotion.destroy()
   
        
      }
      //destroying middle menu of items
      if(shopStats.checkList.itemClicked != true && shopStats.texts.itemMiddleText){
        shopStats.texts.itemMiddleText.destroy()
        shopStats.texts.itemBuyText.destroy()
        shopStats.texts.itemUpgradeText.destroy()

      }



      //closing shopKeeper text
      if(gameState.cursors.space.isDown && shopStats.shopKeeperTalking){
        shopStats.shopKeeperTalking = false
        gameState.shopKeeperTalking.destroy()
        gameState.shopKeeper.setVelocityX(0) 
        gameState.shopKeeper.setVelocityY(0) 
        gameState.scrollingTextEvent.destroy()
        this.openShopMenu()
        
      }
      //closing shop menu
      if(gameState.cursors.space.isDown && shopStats.menuOpen){
        this.physics.resume()
        if(shopStats.allReadyTalked != true){
          shopStats.allReadyTalked = true
        this.time.addEvent({
          delay: 1000,
          callback: () =>{
            shopStats.playerTalking = false
            this.shopKeeperMovement()
            shopStats.allReadyTalked = false
          }
        })
      }
      }



      if(shopStats.playerTalking != true){
      switch(shopStats.movingShopKeeper){
        case "down":  
        gameState.shopKeeper.setVelocityX(0)
        gameState.shopKeeper.setVelocityY(shopStats.speed)
        gameState.shopKeeper.anims.play("shopKeeperDown", true)
        this.shopKeeperShadow()
        break
        case "up":
          gameState.shopKeeper.setVelocityX(0) 
        gameState.shopKeeper.setVelocityY( - shopStats.speed)
        gameState.shopKeeper.anims.play("shopKeeperUp", true)
        this.shopKeeperShadow()
        break
        case "left":
          gameState.shopKeeper.setVelocityY(0)
          gameState.shopKeeper.setVelocityX( - shopStats.speed)
          gameState.shopKeeper.anims.play("shopKeeperLeft", true)
          this.shopKeeperShadow()
          break
          case "right":
            gameState.shopKeeper.setVelocityY(0)
            gameState.shopKeeper.setVelocityX(shopStats.speed)
            gameState.shopKeeper.anims.play("shopKeeperRight", true)
            this.shopKeeperShadow()
          break
          case "none": 
            gameState.shopKeeper.setVelocityY(0)
            gameState.shopKeeper.setVelocityX(0)
            gameState.shopKeeper.anims.pause()
            //console.log("stopall")
            break
      }
    }
      



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

    shopKeeperShadow(){
      gameState.shopKeeperShadow.x = gameState.shopKeeper.x
      gameState.shopKeeperShadow.y = gameState.shopKeeper.y + 3
      if(gameState.cursors.up.isDown){
  gameState.shopKeeperShadow.y = gameState.shopKeeper.y
      }else if (gameState.cursors.down.isDown){
        gameState.shopKeeperShadow.y = gameState.shopKeeper.y + 3
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

    shopKeeperMovement(){
      console.log("aktivated")
     
      this.time.addEvent({
        delay:Math.floor(Math.random() * 10000),
        callback: () =>{
         let randomNumber = Math.floor(Math.random() * 4)
         console.log(randomNumber)
          switch(randomNumber){
            case 0:
              shopStats.movingShopKeeper = "up"
              break
            case 1: 
            shopStats.movingShopKeeper = "down"
            break
            case 2: 
            shopStats.movingShopKeeper = "left"
            break
            case 3:
              shopStats.movingShopKeeper = "right"
              break
          }
          if(shopStats.playerTalking != true){
          this.shopKeeperMovement()
          }
        },
        //repeat: -1,
      })
    
    }
    shopKeeperText(){
      shopStats.shopKeeperTalking = true
      gameState.shopKeeperTalking = this.add.text(gameState.shopKeeper.x, gameState.shopKeeper.y , " ", {color: "#FFFFFF", font: "20px Arial", backgroundColor: "#000000", lineSpacing: 5, align: "center", padding: 10}).setOrigin(0.1, 1.3).setAlpha(0.8).setDepth(5)
      this.typewriteText("Welcome to my shop " + gameState.playerName + ",\nhave a look at my wares", gameState.shopKeeperTalking)
   
   
   
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
      openShopMenu(){
          // making shop menu left
          shopStats.menu.leftMenu = this.add.rectangle(10, 400, 200, 400, 0x518CF3).setOrigin(0, 0.5)
          shopStats.menu.leftMenu.isStroked = true
          shopStats.menu.leftMenu.lineWidth = 8
          shopStats.menu.leftMenu.strokeColor = "0xFFFFFF"
          //making shop menu middle
          shopStats.menu.middleMenu = this.add.rectangle(218, 400, 200, 400, 0x518CF3).setOrigin(0, 0.5)
          shopStats.menu.middleMenu.isStroked = true
            shopStats.menu.middleMenu.lineWidth = 8
            shopStats.menu.middleMenu.strokeColor = "0xFFFFFF"
          //making shop menu right
          shopStats.menu.rightMenu = this.add.rectangle(426, 400, 400, 400, 0x518CF3).setOrigin(0, 0.5).setDepth(3)
          shopStats.menu.rightMenu.isStroked = true
            shopStats.menu.rightMenu.lineWidth = 8
            shopStats.menu.rightMenu.strokeColor = "0xFFFFFF"





            //item text
            const itemStyle = {font: "20px Arial", fill: "#fff"}
            const style = {font: "25px Arial", fill: "#fff"}
            const headLines = {font: "30px TimesNewRoman", fill: "#fff"}
            shopStats.texts.itemText = this.add.text(110, 250, "Items", style).setOrigin(0.5, 0.5)
            shopStats.texts.itemText.setInteractive()


            //pointer over item text
            shopStats.texts.itemText.on("pointerover", () =>{
              shopStats.texts.itemText.setColor("#000000")
            })
            shopStats.texts.itemText.on("pointerout", () =>{
              if(shopStats.checkList.itemClicked != true)
              shopStats.texts.itemText.setColor("#fff")
            })
            //clicking on item text
            shopStats.texts.itemText.on("pointerdown", () =>{
              shopStats.checkList.equipmentBuyClicked = false
              shopStats.checkList.equipmentSellClicked = false
              if(shopStats.checkList.itemClicked != true){
              shopStats.checkList.itemClicked = true
              shopStats.checkList.equipmentClicked = false
             // shopStats.checkList.itemBuy = false
             // shopStats.checkList.itemUpgrade = false
              shopStats.texts.equipmentText.setColor("#fff")
              shopStats.texts.itemText.setColor("#000000")









                  //making middle menu for items
                  shopStats.texts.itemMiddleText = this.add.text(318, 250, "Items:", headLines).setOrigin(0.5, 0.5)


                    //middle buy botten
                  shopStats.texts.itemBuyText = this.add.text(318, 400, "Buy", style).setOrigin(0.5, 0.5)
                  shopStats.texts.itemBuyText.setInteractive()
                      //hover pointer over
                      shopStats.texts.itemBuyText.on("pointerover", () =>{
                        shopStats.texts.itemBuyText.setColor("#000000")
                      })
                      //hover pointer out
                      shopStats.texts.itemBuyText.on("pointerout", () =>{
                        if(shopStats.checkList.itemBuy != true){
                          shopStats.texts.itemBuyText.setColor("#fff")
                        }
                      })


                      








            



                      //pointer clicking itemBuy
                      shopStats.texts.itemBuyText.on("pointerdown", () =>{
                        if(shopStats.checkList.itemUpgrade == true){
                          shopStats.texts.itemBuyMenuText.destroy()
                          shopStats.texts.gold.destroy()
                          shopStats.texts.hpPotion.destroy()
                          shopStats.sprits.hpPotion.destroy()
                          shopStats.texts.mpPotion.destroy()
                          shopStats.sprits.mpPotion.destroy()
                          shopStats.texts.dmgBoost.destroy()
                          shopStats.sprits.dmgBoost.destroy()
                          shopStats.texts.magicBoost.destroy()
                          shopStats.sprits.magicBoost.destroy()
                          shopStats.texts.defenceBoost.destroy()
                          shopStats.sprits.defenceBoost.destroy()
                          shopStats.texts.repelPotion.destroy()
                          shopStats.sprits.repelPotion.destroy()
                          shopStats.texts.itemUpgradeText.setColor("#fff")
                          }
                        if(shopStats.checkList.itemBuy != true){
                        shopStats.checkList.itemBuy = true
                        shopStats.checkList.itemUpgrade = false
                        shopStats.texts.itemBuyText.setColor("#000000")
                          // right item menu buy
                          shopStats.texts.itemBuyMenuText = this.add.text(666, 220, "Buy:", headLines).setOrigin(0.5, 0.5).setDepth(3)
                          shopStats.texts.gold = this.add.text(456, 220, "Gold " + gameState.playerStats.gold, style).setOrigin(0, 0.5).setDepth(3)








                            //hp potion
                            shopStats.texts.hpPotion = this.add.text(526, 300, "HPPotion", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                            shopStats.texts.hpPotion.setInteractive()
                            shopStats.sprits.hpPotion = this.physics.add.sprite(466, 300, "hpPotion").setOrigin(0.5, 0.6).setDepth(3)

                              //hover pointer over 
                              shopStats.texts.hpPotion.on("pointerover", () =>{
                                shopStats.texts.hpPotion.setColor("#000000")
                                 //hover box
                                 shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                                 shopStats.menu.textMenu.isStroked = true
                                 shopStats.menu.textMenu.lineWidth = 8
                                 shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                                 //hover text
                                 shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Healing potion:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                                 shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Restoring " + gameState.hpPotion.hp + "HP", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.hpPotion.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Price " + gameState.hpPotion.price, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)

                              })
                                shopStats.texts.hpPotion.on("pointerout", () =>{
                                shopStats.texts.hpPotion.setColor("#fff")  
                                shopStats.texts.hpPotionText4.destroy()
                                shopStats.texts.hpPotionText3.destroy()
                                shopStats.texts.hpPotionText2.destroy()
                                shopStats.texts.hpPotionText.destroy()
                                shopStats.menu.textMenu.destroy()
                              })
                                //clicking hppotion
                                shopStats.texts.hpPotion.on("pointerdown", () =>{
                                  if(gameState.playerStats.gold >= gameState.hpPotion.price){
                                    gameState.playerStats.gold -= gameState.hpPotion.price
                                    shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                    gameState.hpPotion.price = Math.floor(gameState.hpPotion.price * 1.05)
                                    shopStats.texts.hpPotionText4.setText("Price " + gameState.hpPotion.price)
                                    gameState.hpPotion.amount += 1
                                    shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.hpPotion.amount)
                                  }else{
                                    alert("need more gold")
                                  }
                                })













                            //mppotion
                            shopStats.texts.mpPotion = this.add.text(726, 300, "MPPotion", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                            shopStats.texts.mpPotion.setInteractive()
                            shopStats.sprits.mpPotion = this.physics.add.sprite(666, 300, "mpPotion").setOrigin(0.5, 0.6).setDepth(3)
                                //hover pointer over 
                            shopStats.texts.mpPotion.on("pointerover", () =>{
                              shopStats.texts.mpPotion.setColor("#000000")
                               //hover box
                               shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                               shopStats.menu.textMenu.isStroked = true
                               shopStats.menu.textMenu.lineWidth = 8
                               shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                               //hover text
                               shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Mana potion:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                               shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Restoring " + gameState.mpPotion.mana + "MP", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.mpPotion.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Price " + gameState.mpPotion.price, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)

                            })
                              shopStats.texts.mpPotion.on("pointerout", () =>{
                              shopStats.texts.mpPotion.setColor("#fff")  
                              shopStats.texts.hpPotionText4.destroy()
                              shopStats.texts.hpPotionText3.destroy()
                              shopStats.texts.hpPotionText2.destroy()
                              shopStats.texts.hpPotionText.destroy()
                              shopStats.menu.textMenu.destroy()
                            })
                              //clicking mpPotion
                              shopStats.texts.mpPotion.on("pointerdown", () =>{
                                if(gameState.playerStats.gold >= gameState.mpPotion.price){
                                  gameState.playerStats.gold -= gameState.mpPotion.price
                                  shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                  gameState.mpPotion.price = Math.floor(gameState.mpPotion.price * 1.05)
                                  shopStats.texts.hpPotionText4.setText("Price " + gameState.mpPotion.price)
                                  gameState.mpPotion.amount += 1
                                  shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.mpPotion.amount)
                                }else{
                                  alert("need more gold")
                                }
                              })







                              //dmgBoost
                              shopStats.texts.dmgBoost = this.add.text(526, 420, "DmgBoost", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                              shopStats.texts.dmgBoost.setInteractive()
                              shopStats.sprits.dmgBoost = this.physics.add.sprite(460, 420, "dmgBoost").setOrigin(0.5, 0.6).setDepth(3)
                                  //hover pointer over 
                              shopStats.texts.dmgBoost.on("pointerover", () =>{
                                shopStats.texts.dmgBoost.setColor("#000000")
                                 //hover box
                                 shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                                 shopStats.menu.textMenu.isStroked = true
                                 shopStats.menu.textMenu.lineWidth = 8
                                 shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                                 //hover text
                                 shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Damage Boost:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                                 shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Giving " + gameState.dmgBoost.dmg + "X Dmg", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.dmgBoost.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Price " + gameState.dmgBoost.price, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
  
                              })
                                shopStats.texts.dmgBoost.on("pointerout", () =>{
                                shopStats.texts.dmgBoost.setColor("#fff")  
                                shopStats.texts.hpPotionText4.destroy()
                                shopStats.texts.hpPotionText3.destroy()
                                shopStats.texts.hpPotionText2.destroy()
                                shopStats.texts.hpPotionText.destroy()
                                shopStats.menu.textMenu.destroy()
                              })
                                //clicking dmgBoost
                                shopStats.texts.dmgBoost.on("pointerdown", () =>{
                                  if(gameState.playerStats.gold >= gameState.dmgBoost.price){
                                    gameState.playerStats.gold -= gameState.dmgBoost.price
                                    shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                    gameState.dmgBoost.price = Math.floor(gameState.dmgBoost.price * 1.05)
                                    shopStats.texts.hpPotionText4.setText("Price " + gameState.dmgBoost.price)
                                    gameState.dmgBoost.amount += 1
                                    shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.dmgBoost.amount)
                                  }else{
                                    alert("need more gold")
                                  }
                                })







                                //magicBoost
                              shopStats.texts.magicBoost = this.add.text(726, 420, "MagicBoost", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                              shopStats.texts.magicBoost.setInteractive()
                              shopStats.sprits.magicBoost = this.physics.add.sprite(656, 420, "magicBoost").setOrigin(0.5, 0.6).setDepth(3)
                                  //hover pointer over 
                              shopStats.texts.magicBoost.on("pointerover", () =>{
                                shopStats.texts.magicBoost.setColor("#000000")
                                 //hover box
                                 shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                                 shopStats.menu.textMenu.isStroked = true
                                 shopStats.menu.textMenu.lineWidth = 8
                                 shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                                 //hover text
                                 shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Magic Boost:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                                 shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Giving " + gameState.magicBoost.dmg + "X Magic", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.magicBoost.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Price " + gameState.magicBoost.price, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
  
                              })
                                shopStats.texts.magicBoost.on("pointerout", () =>{
                                shopStats.texts.magicBoost.setColor("#fff")  
                                shopStats.texts.hpPotionText4.destroy()
                                shopStats.texts.hpPotionText3.destroy()
                                shopStats.texts.hpPotionText2.destroy()
                                shopStats.texts.hpPotionText.destroy()
                                shopStats.menu.textMenu.destroy()
                              })
                                //clicking magicBoost
                                shopStats.texts.magicBoost.on("pointerdown", () =>{
                                  if(gameState.playerStats.gold >= gameState.magicBoost.price){
                                    gameState.playerStats.gold -= gameState.magicBoost.price
                                    shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                    gameState.magicBoost.price = Math.floor(gameState.magicBoost.price * 1.05)
                                    shopStats.texts.hpPotionText4.setText("Price " + gameState.magicBoost.price)
                                    gameState.magicBoost.amount += 1
                                    shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.magicBoost.amount)
                                  }else{
                                    alert("need more gold")
                                  }
                                })








                                //defenceBoost
                              shopStats.texts.defenceBoost = this.add.text(526, 540, "DefenceBoost", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                              shopStats.texts.defenceBoost.setInteractive()
                              shopStats.sprits.defenceBoost = this.physics.add.sprite(450, 540, "defenceBoost").setOrigin(0.5, 0.6).setDepth(3)
                                  //hover pointer over 
                              shopStats.texts.defenceBoost.on("pointerover", () =>{
                                shopStats.texts.defenceBoost.setColor("#000000")
                                 //hover box
                                 shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                                 shopStats.menu.textMenu.isStroked = true
                                 shopStats.menu.textMenu.lineWidth = 8
                                 shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                                 //hover text
                                 shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Defence Boost:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                                 shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Giving " + gameState.defenceBoost.defence + " Defence", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.defenceBoost.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Price " + gameState.defenceBoost.price, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
  
                              })
                                shopStats.texts.defenceBoost.on("pointerout", () =>{
                                shopStats.texts.defenceBoost.setColor("#fff")  
                                shopStats.texts.hpPotionText4.destroy()
                                shopStats.texts.hpPotionText3.destroy()
                                shopStats.texts.hpPotionText2.destroy()
                                shopStats.texts.hpPotionText.destroy()
                                shopStats.menu.textMenu.destroy()
                              })
                                //clicking defenceBoost
                                shopStats.texts.defenceBoost.on("pointerdown", () =>{
                                  if(gameState.playerStats.gold >= gameState.defenceBoost.price){
                                    gameState.playerStats.gold -= gameState.defenceBoost.price
                                    shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                    gameState.defenceBoost.price = Math.floor(gameState.defenceBoost.price * 1.05)
                                    shopStats.texts.hpPotionText4.setText("Price " + gameState.defenceBoost.price)
                                    gameState.defenceBoost.amount += 1
                                    shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.defenceBoost.amount)
                                  }else{
                                    alert("need more gold")
                                  }
                                })











                                //repelPotion
                              shopStats.texts.repelPotion = this.add.text(726, 540, "RepelPotion", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                              shopStats.texts.repelPotion.setInteractive()
                              shopStats.sprits.repelPotion = this.physics.add.sprite(650, 540, "repelPotion").setOrigin(0.5, 0.6).setDepth(3)
                                  //hover pointer over 
                              shopStats.texts.repelPotion.on("pointerover", () =>{
                                shopStats.texts.repelPotion.setColor("#000000")
                                 //hover box
                                 shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                                 shopStats.menu.textMenu.isStroked = true
                                 shopStats.menu.textMenu.lineWidth = 8
                                 shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                                 //hover text
                                 shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Repel Potion:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                                 shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Giving " + gameState.repelPotion.duration / 1000 + " Sec", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.repelPotion.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                                 shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Price " + gameState.repelPotion.price, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
  
                              })
                                shopStats.texts.repelPotion.on("pointerout", () =>{
                                shopStats.texts.repelPotion.setColor("#fff")  
                                shopStats.texts.hpPotionText4.destroy()
                                shopStats.texts.hpPotionText3.destroy()
                                shopStats.texts.hpPotionText2.destroy()
                                shopStats.texts.hpPotionText.destroy()
                                shopStats.menu.textMenu.destroy()
                              })
                                //clicking repelPotion
                                shopStats.texts.repelPotion.on("pointerdown", () =>{
                                  if(gameState.playerStats.gold >= gameState.repelPotion.price){
                                    gameState.playerStats.gold -= gameState.repelPotion.price
                                    shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                    gameState.repelPotion.price = Math.floor(gameState.repelPotion.price * 1.05)
                                    shopStats.texts.hpPotionText4.setText("Price " + gameState.repelPotion.price)
                                    gameState.repelPotion.amount += 1
                                    shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.repelPotion.amount)
                                  }else{
                                    alert("need more gold")
                                  }
                                })
                              }
                      })












                    //middle upgrade botten
                  shopStats.texts.itemUpgradeText = this.add.text(318, 550, "Upgrade", style).setOrigin(0.5,0.5)
                  shopStats.texts.itemUpgradeText.setInteractive()







                  //
                  shopStats.texts.itemUpgradeText.on("pointerdown", ()=>{
                    if(shopStats.checkList.itemBuy == true){
                    shopStats.texts.itemBuyMenuText.destroy()
                    shopStats.texts.gold.destroy()
                    shopStats.texts.hpPotion.destroy()
                    shopStats.sprits.hpPotion.destroy()
                    shopStats.texts.mpPotion.destroy()
                    shopStats.sprits.mpPotion.destroy()
                    shopStats.texts.dmgBoost.destroy()
                    shopStats.sprits.dmgBoost.destroy()
                    shopStats.texts.magicBoost.destroy()
                    shopStats.sprits.magicBoost.destroy()
                    shopStats.texts.defenceBoost.destroy()
                    shopStats.sprits.defenceBoost.destroy()
                    shopStats.texts.repelPotion.destroy()
                    shopStats.sprits.repelPotion.destroy()
                    shopStats.texts.itemBuyText.setColor("#fff")
                    }
                    if(shopStats.checkList.itemUpgrade != true){

                      shopStats.checkList.itemBuy = false
                      shopStats.checkList.itemUpgrade = true
                      shopStats.texts.itemUpgradeText.setColor("#000000")
                        // right item menu buy
                        shopStats.texts.itemBuyMenuText = this.add.text(666, 220, "   Upgrade:", headLines).setOrigin(0.5, 0.5).setDepth(3)
                        shopStats.texts.gold = this.add.text(456, 220, "Gold " + gameState.playerStats.gold, style).setOrigin(0, 0.5).setDepth(3)








                          //hp potion
                          shopStats.texts.hpPotion = this.add.text(526, 300, "HPPotion", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                          shopStats.texts.hpPotion.setInteractive()
                          shopStats.sprits.hpPotion = this.physics.add.sprite(466, 300, "hpPotion").setOrigin(0.5, 0.6).setDepth(3)

                            //hover pointer over 
                            shopStats.texts.hpPotion.on("pointerover", () =>{
                              shopStats.texts.hpPotion.setColor("#000000")
                               //hover box
                               shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                               shopStats.menu.textMenu.isStroked = true
                               shopStats.menu.textMenu.lineWidth = 8
                               shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                               //hover text
                               shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Healing potion:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                               shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Restoring " + gameState.hpPotion.hp + "HP", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.hpPotion.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Upgrade Price " + gameState.hpPotion.upgradePrice, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)

                            })
                              shopStats.texts.hpPotion.on("pointerout", () =>{
                              shopStats.texts.hpPotion.setColor("#fff")  
                              shopStats.texts.hpPotionText4.destroy()
                              shopStats.texts.hpPotionText3.destroy()
                              shopStats.texts.hpPotionText2.destroy()
                              shopStats.texts.hpPotionText.destroy()
                              shopStats.menu.textMenu.destroy()
                            })
                              //clicking hppotion
                              shopStats.texts.hpPotion.on("pointerdown", () =>{
                                if(gameState.playerStats.gold >= gameState.hpPotion.upgradePrice){
                                  gameState.playerStats.gold -= gameState.hpPotion.upgradePrice
                                  shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                  gameState.hpPotion.upgradePrice = Math.floor(gameState.hpPotion.upgradePrice * 1.5)
                                  shopStats.texts.hpPotionText4.setText("Upgrade Price " + gameState.hpPotion.upgradePrice)
                                  //gameState.hpPotion.amount += 1
                                 // shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.hpPotion.amount)
                                  gameState.hpPotion.hp = Math.floor(gameState.hpPotion.hp * 1.4)
                                  shopStats.texts.hpPotionText2.setText("Restoring " + gameState.hpPotion.hp + "HP")
                                }else{
                                  alert("need more gold")
                                }
                              })













                          //mppotion
                          shopStats.texts.mpPotion = this.add.text(726, 300, "MPPotion", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                          shopStats.texts.mpPotion.setInteractive()
                          shopStats.sprits.mpPotion = this.physics.add.sprite(666, 300, "mpPotion").setOrigin(0.5, 0.6).setDepth(3)
                              //hover pointer over 
                          shopStats.texts.mpPotion.on("pointerover", () =>{
                            shopStats.texts.mpPotion.setColor("#000000")
                             //hover box
                             shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                             shopStats.menu.textMenu.isStroked = true
                             shopStats.menu.textMenu.lineWidth = 8
                             shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                             //hover text
                             shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Mana potion:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                             shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Restoring " + gameState.mpPotion.mana + "MP", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                             shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.mpPotion.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                             shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Upgrade Price " + gameState.mpPotion.upgradePrice, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)

                          })
                            shopStats.texts.mpPotion.on("pointerout", () =>{
                            shopStats.texts.mpPotion.setColor("#fff")  
                            shopStats.texts.hpPotionText4.destroy()
                            shopStats.texts.hpPotionText3.destroy()
                            shopStats.texts.hpPotionText2.destroy()
                            shopStats.texts.hpPotionText.destroy()
                            shopStats.menu.textMenu.destroy()
                          })
                            //clicking mpPotion
                            shopStats.texts.mpPotion.on("pointerdown", () =>{
                              if(gameState.playerStats.gold >= gameState.mpPotion.upgradePrice){
                                gameState.playerStats.gold -= gameState.mpPotion.upgradePrice
                                shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                gameState.mpPotion.upgradePrice = Math.floor(gameState.mpPotion.upgradePrice * 1.5)
                                shopStats.texts.hpPotionText4.setText("Upgrade Price " + gameState.mpPotion.upgradePrice)
                                //gameState.mpPotion.amount += 1
                                //shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.mpPotion.amount)
                                gameState.mpPotion.mana = Math.floor(gameState.mpPotion.mana * 1.4)
                                  shopStats.texts.hpPotionText2.setText("Restoring " + gameState.mpPotion.mana + "MP")
                              }else{
                                alert("need more gold")
                              }
                            })







                            //dmgBoost
                            shopStats.texts.dmgBoost = this.add.text(526, 420, "DmgBoost", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                            shopStats.texts.dmgBoost.setInteractive()
                            shopStats.sprits.dmgBoost = this.physics.add.sprite(460, 420, "dmgBoost").setOrigin(0.5, 0.6).setDepth(3)
                                //hover pointer over 
                            shopStats.texts.dmgBoost.on("pointerover", () =>{
                              shopStats.texts.dmgBoost.setColor("#000000")
                               //hover box
                               shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                               shopStats.menu.textMenu.isStroked = true
                               shopStats.menu.textMenu.lineWidth = 8
                               shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                               //hover text
                               shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Damage Boost:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                               shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Giving " + gameState.dmgBoost.dmg + "X Dmg", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.dmgBoost.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Upgrade Price " + gameState.dmgBoost.upgradePrice, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)

                            })
                              shopStats.texts.dmgBoost.on("pointerout", () =>{
                              shopStats.texts.dmgBoost.setColor("#fff")  
                              shopStats.texts.hpPotionText4.destroy()
                              shopStats.texts.hpPotionText3.destroy()
                              shopStats.texts.hpPotionText2.destroy()
                              shopStats.texts.hpPotionText.destroy()
                              shopStats.menu.textMenu.destroy()
                            })
                              //clicking dmgBoost
                              shopStats.texts.dmgBoost.on("pointerdown", () =>{
                                if(gameState.playerStats.gold >= gameState.dmgBoost.upgradePrice){
                                  gameState.playerStats.gold -= gameState.dmgBoost.upgradePrice
                                  shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                  gameState.dmgBoost.upgradePrice = Math.floor(gameState.dmgBoost.upgradePrice * 1.5)
                                  shopStats.texts.hpPotionText4.setText("Upgrade Price " + gameState.dmgBoost.upgradePrice)
                                 // gameState.dmgBoost.amount += 1
                                  // shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.dmgBoost.amount)
                                  gameState.dmgBoost.dmg = gameState.dmgBoost.dmg + 0.2
                                  gameState.dmgBoost.dmg = parseFloat(gameState.dmgBoost.dmg.toFixed(2))
                                  shopStats.texts.hpPotionText2.setText("Giving " + gameState.dmgBoost.dmg + "X Dmg")
                                }else{
                                  alert("need more gold")
                                }
                              })







                              //magicBoost
                            shopStats.texts.magicBoost = this.add.text(726, 420, "MagicBoost", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                            shopStats.texts.magicBoost.setInteractive()
                            shopStats.sprits.magicBoost = this.physics.add.sprite(656, 420, "magicBoost").setOrigin(0.5, 0.6).setDepth(3)
                                //hover pointer over 
                            shopStats.texts.magicBoost.on("pointerover", () =>{
                              shopStats.texts.magicBoost.setColor("#000000")
                               //hover box
                               shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                               shopStats.menu.textMenu.isStroked = true
                               shopStats.menu.textMenu.lineWidth = 8
                               shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                               //hover text
                               shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Magic Boost:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                               shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Giving " + gameState.magicBoost.dmg + "X Magic", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.magicBoost.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Upgrade Price " + gameState.magicBoost.upgradePrice, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)

                            })
                              shopStats.texts.magicBoost.on("pointerout", () =>{
                              shopStats.texts.magicBoost.setColor("#fff")  
                              shopStats.texts.hpPotionText4.destroy()
                              shopStats.texts.hpPotionText3.destroy()
                              shopStats.texts.hpPotionText2.destroy()
                              shopStats.texts.hpPotionText.destroy()
                              shopStats.menu.textMenu.destroy()
                            })
                              //clicking magicBoost
                              shopStats.texts.magicBoost.on("pointerdown", () =>{
                                if(gameState.playerStats.gold >= gameState.magicBoost.upgradePrice){
                                  gameState.playerStats.gold -= gameState.magicBoost.upgradePrice
                                  shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                  gameState.magicBoost.upgradePrice = Math.floor(gameState.magicBoost.upgradePrice * 1.5)
                                  shopStats.texts.hpPotionText4.setText("Upgrade price " + gameState.magicBoost.upgradePrice)
                                  //gameState.magicBoost.amount += 1
                                  //shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.magicBoost.amount)
                                  gameState.magicBoost.dmg = gameState.magicBoost.dmg + 0.2
                                  gameState.magicBoost.dmg = parseFloat(gameState.magicBoost.dmg.toFixed(1))
                                  shopStats.texts.hpPotionText2.setText("Giving " + gameState.magicBoost.dmg + "X Magic")

                                }else{
                                  alert("need more gold")
                                }
                              })








                              //defenceBoost
                            shopStats.texts.defenceBoost = this.add.text(526, 540, "DefenceBoost", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                            shopStats.texts.defenceBoost.setInteractive()
                            shopStats.sprits.defenceBoost = this.physics.add.sprite(450, 540, "defenceBoost").setOrigin(0.5, 0.6).setDepth(3)
                                //hover pointer over 
                            shopStats.texts.defenceBoost.on("pointerover", () =>{
                              shopStats.texts.defenceBoost.setColor("#000000")
                               //hover box
                               shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                               shopStats.menu.textMenu.isStroked = true
                               shopStats.menu.textMenu.lineWidth = 8
                               shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                               //hover text
                               shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Defence Boost:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                               shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Giving " + gameState.defenceBoost.defence + " Defence", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.defenceBoost.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Upgrade Price " + gameState.defenceBoost.upgradePrice, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)

                            })
                              shopStats.texts.defenceBoost.on("pointerout", () =>{
                              shopStats.texts.defenceBoost.setColor("#fff")  
                              shopStats.texts.hpPotionText4.destroy()
                              shopStats.texts.hpPotionText3.destroy()
                              shopStats.texts.hpPotionText2.destroy()
                              shopStats.texts.hpPotionText.destroy()
                              shopStats.menu.textMenu.destroy()
                            })
                              //clicking defenceBoost
                              shopStats.texts.defenceBoost.on("pointerdown", () =>{
                                if(gameState.playerStats.gold >= gameState.defenceBoost.upgradePrice){
                                  gameState.playerStats.gold -= gameState.defenceBoost.upgradePrice
                                  shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                  gameState.defenceBoost.upgradePrice = Math.floor(gameState.defenceBoost.upgradePrice * 1.2)
                                  shopStats.texts.hpPotionText4.setText("Upgrade Price " + gameState.defenceBoost.upgradePrice)
                                 // gameState.defenceBoost.amount += 1
                                 // shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.defenceBoost.amount)
                                 gameState.defenceBoost.defence += 2
                                 shopStats.texts.hpPotionText2.setText("Giving " + gameState.defenceBoost.defence + " Defence")
                                }else{
                                  alert("need more gold")
                                }
                              })











                              //repelPotion
                            shopStats.texts.repelPotion = this.add.text(726, 540, "RepelPotion", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                            shopStats.texts.repelPotion.setInteractive()
                            shopStats.sprits.repelPotion = this.physics.add.sprite(650, 540, "repelPotion").setOrigin(0.5, 0.6).setDepth(3)
                                //hover pointer over 
                            shopStats.texts.repelPotion.on("pointerover", () =>{
                              shopStats.texts.repelPotion.setColor("#000000")
                               //hover box
                               shopStats.menu.textMenu =this.add.rectangle(834, 400, 200, 200, 0x518CF3).setOrigin(0, 0.2).setDepth(3)
                               shopStats.menu.textMenu.isStroked = true
                               shopStats.menu.textMenu.lineWidth = 8
                               shopStats.menu.textMenu.strokeColor = "0xFFFFFF"
                               //hover text
                               shopStats.texts.hpPotionText = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y, "Repel Potion:", {font: "20px Arial",color: "#000000", align: "center"}).setOrigin(0.5, 1).setDepth(3)
                               shopStats.texts.hpPotionText2 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 45, "Giving " + gameState.repelPotion.duration / 1000 + " Sec", {font: "18px Times New Roman", color: "#0BE900", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText3 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 90, "Amount in invintory " + gameState.repelPotion.amount, {font: "18px Times New Roman", color: "#000000", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)
                               shopStats.texts.hpPotionText4 = this.add.text(shopStats.menu.textMenu.x + 100,shopStats.menu.textMenu.y + 135, "Price " + gameState.repelPotion.price, {font: "18px Times New Roman", color: "#fff", align: "center"}).setOrigin(0.5, 0.5).setDepth(3)

                            })
                              shopStats.texts.repelPotion.on("pointerout", () =>{
                              shopStats.texts.repelPotion.setColor("#fff")  
                              shopStats.texts.hpPotionText4.destroy()
                              shopStats.texts.hpPotionText3.destroy()
                              shopStats.texts.hpPotionText2.destroy()
                              shopStats.texts.hpPotionText.destroy()
                              shopStats.menu.textMenu.destroy()
                            })
                              //clicking repelPotion
                              shopStats.texts.repelPotion.on("pointerdown", () =>{
                                if(gameState.playerStats.gold >= gameState.repelPotion.price){
                                  gameState.playerStats.gold -= gameState.repelPotion.price
                                  shopStats.texts.gold.setText("Gold " + gameState.playerStats.gold)
                                  gameState.repelPotion.price = Math.floor(gameState.repelPotion.price * 1.5)
                                  shopStats.texts.hpPotionText4.setText("Price " + gameState.repelPotion.price)
                                  //gameState.repelPotion.amount += 1
                                  //shopStats.texts.hpPotionText3.setText("Amount in invintory " + gameState.repelPotion.amount)
                                  gameState.repelPotion.duration += 2000
                                  shopStats.texts.hpPotionText2.setText("Giving " + gameState.repelPotion.duration / 1000 + " Sec")
                                }else{
                                  alert("need more gold")
                                }
                              })
                            }
                  })
                      //hover pointer over
                      shopStats.texts.itemUpgradeText.on("pointerover", () =>{
                        shopStats.texts.itemUpgradeText.setColor("#000000")
                      })
                      //hover pointer out
                      shopStats.texts.itemUpgradeText.on("pointerout", () =>{
                        if(shopStats.checkList.itemUpgrade != true){
                          shopStats.texts.itemUpgradeText.setColor("#fff")
                        }
                      })
                    }
            })

            




            //equipment text
            shopStats.texts.equipmentText = this.add.text(110, 400, "Equipment", style).setOrigin(0.5, 0.5)
            shopStats.texts.equipmentText.setInteractive()

            //pointer over equipment        
            shopStats.texts.equipmentText.on("pointerover", () =>{
              shopStats.texts.equipmentText.setColor("#000000")
            })
            //pointer out equipment
            shopStats.texts.equipmentText.on("pointerout", () =>{
              if(shopStats.checkList.equipmentClicked != true){
              shopStats.texts.equipmentText.setColor("#fff")
              }
            })

            



            //clicking equipment
            shopStats.texts.equipmentText.on("pointerdown", () =>{
              shopStats.checkList.itemBuy = false
              shopStats.checkList.itemUpgrade = false
              shopStats.texts.equipmentText.setColor("#000000")
              shopStats.texts.itemText.setColor("#fff")
              if(shopStats.checkList.equipmentClicked != true){
                shopStats.checkList.itemClicked = false
                shopStats.checkList.equipmentClicked = true
                




                  // middle equipment box
                    shopStats.texts.equipmentMenuText = this.add.text(318, 250, "Equipment:", headLines).setOrigin(0.5, 0.5)





                    //middle buy botten
                    shopStats.texts.equipmentBuyText = this.add.text(318, 400, "Buy", style).setOrigin(0.5, 0.5)
                    shopStats.texts.equipmentBuyText.setInteractive()


                      //hover over buy botten
                      shopStats.texts.equipmentBuyText.on("pointerover", () =>{
                        shopStats.texts.equipmentBuyText.setColor("#000000")
                      })


                      //hover out buy botten
                      shopStats.texts.equipmentBuyText.on("pointerout", () =>{
                        if(shopStats.checkList.equipmentBuyClicked != true){
                          shopStats.texts.equipmentBuyText.setColor("#fff")
                        }
                      })



                      //clicking buy botten
                      shopStats.texts.equipmentBuyText.on("pointerdown", () =>{
                        shopStats.texts.equipmentSellText.setColor("#fff")
                        if(shopStats.checkList.equipmentBuyClicked != true){
                        shopStats.checkList.equipmentBuyClicked = true
                        shopStats.checkList.equipmentSellClicked = false
                        }
                      })


















                    //middle sell botten
                    shopStats.texts.equipmentSellText = this.add.text(318, 550, "Sell", style).setOrigin(0.5,0.5)
                    shopStats.texts.equipmentSellText.setInteractive()



                    //hover over sell botten
                    shopStats.texts.equipmentSellText.on("pointerover", () =>{
                      shopStats.texts.equipmentSellText.setColor("#000000")
                    })



                    //hover out sell botten
                    shopStats.texts.equipmentSellText.on("pointerout", () =>{
                      if(shopStats.checkList.equipmentSellClicked != true){
                        shopStats.texts.equipmentSellText.setColor("#fff")
                      }
                    })

                      //clicking sell botten
                      shopStats.texts.equipmentSellText.on("pointerdown", () =>{
                      shopStats.texts.equipmentBuyText.setColor("#fff")
                        if(shopStats.checkList.equipmentSellClicked != true){
                          shopStats.checkList.equipmentBuyClicked = false
                          shopStats.checkList.equipmentSellClicked = true

                      

                            // sell equipment seleckter






                              //sell equipment extra box
                              shopStats.menu.sellMenu = this.add.rectangle(566, 400, 410, 410, 0x518CF3).setOrigin(0, 0.5).setDepth(3) 
                              shopStats.menu.sellMenu.isStroked = true
                              shopStats.menu.sellMenu.lineWidth = 8
                              shopStats.menu.sellMenu.strokeColor = "0xFFFFFF"





                              // sell equipment text
                              shopStats.texts.sellEquipmentText = this.add.text(500, 250, "Sell:", headLines).setOrigin(0.5, 0.5).setDepth(3)



                              //sell armor text
                              shopStats.texts.sellArmor = this.add.text(500, 350, "Armor", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                              shopStats.texts.sellArmor.setInteractive()



                                //hover over sell armor text
                                shopStats.texts.sellArmor.on("pointerover", ()=>{
                                  shopStats.texts.sellArmor.setColor("#000000")
                                })
                                //hover out sell armor text
                                shopStats.texts.sellArmor.on("pointerout", () =>{
                                  if(shopStats.checkList.sellArmorClicked != true){
                                    shopStats.texts.sellArmor.setColor("#fff")
                                  }
                                })
                                


                                //clicking sell armor text
                                shopStats.texts.sellArmor.on("pointerdown", () =>{
                                  if(shopStats.texts.sellArmor1){
                                    this.destroySellMenu()
                                    if(shopStats.texts.sellArmorHeadtext){
                                      shopStats.texts.sellArmorHeadtext.destroy()
                                    }
                                  }
                                  shopStats.texts.sellArmor.setColor("#000000")
                                  shopStats.texts.sellWeapon.setColor("#fff")
                                  shopStats.texts.sellAccessory.setColor("#fff")
                                  if(shopStats.checkList.sellArmorClicked != true){
                                    shopStats.checkList.sellArmorClicked = true
                                    shopStats.checkList.sellWeaponClicked = false
                                    shopStats.checkList.sellAccessoryClicked = false
                                  this.sellMenu(gameState.armor.armorArray, 2)
                                  
                                  //sell armor headline
                                  shopStats.texts.sellArmorHeadtext = this.add.text(822, 220, "Armor:", headLines).setDepth(3).setOrigin(0.5, 0.5)
                                  }
                                })
















                              //sell Weapon text
                              shopStats.texts.sellWeapon = this.add.text(500, 450, "Weapon",itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                              shopStats.texts.sellWeapon.setInteractive()


                                //hover over sell weapon text
                                shopStats.texts.sellWeapon.on("pointerover", () =>{
                                  shopStats.texts.sellWeapon.setColor("#000000")
                                })
                                //hover out sell weapon text
                                shopStats.texts.sellWeapon.on("pointerout", () =>{
                                  if(shopStats.checkList.sellWeaponClicked != true){
                                    shopStats.texts.sellWeapon.setColor("#fff")
                                  }
                                })


                                //clicking sell Weapon text
                                shopStats.texts.sellWeapon.on("pointerdown", () =>{
                                  console.log("test")
                                  if(shopStats.texts.sellArmor1){
                                    this.destroySellMenu()
                                    if(shopStats.texts.sellArmorHeadtext){
                                      shopStats.texts.sellArmorHeadtext.destroy()
                                    }
                                  }
                                  shopStats.texts.sellWeapon.setColor("#000000")
                                  shopStats.texts.sellArmor.setColor("#fff")
                                  shopStats.texts.sellAccessory.setColor("#fff")
                                
                                if(shopStats.checkList.sellWeaponClicked != true){
                                  shopStats.checkList.sellWeaponClicked = true
                                  shopStats.checkList.sellArmorClicked = false
                                  shopStats.checkList.sellAccessoryClicked = false
                                  this.sellMenu(gameState.weapon.weaponArray, 1)





                                  //sell weapon headline
                                  shopStats.texts.sellArmorHeadtext = this.add.text(822, 220, "Weapon:", headLines).setDepth(3).setOrigin(0.5, 0.5)
                                }
                              })


                              //sell accessory
                              shopStats.texts.sellAccessory = this.add.text(500, 550, "Accessory", itemStyle).setOrigin(0.5, 0.5).setDepth(3)
                              shopStats.texts.sellAccessory.setInteractive()



                                //hover over sell accessory text
                                shopStats.texts.sellAccessory.on("pointerover", () =>{
                                  shopStats.texts.sellAccessory.setColor("#000000")
                                })
                                //hover out sell accessory text
                                shopStats.texts.sellAccessory.on("pointerout", () =>{
                                  if(shopStats.checkList.sellAccessoryClicked != true){
                                    shopStats.texts.sellAccessory.setColor("#fff")
                                  }
                                })
                        }
                      })
                    
              }
            })






            //quit Text
            shopStats.texts.quitText = this.add.text(110, 550, "Close shop", style).setOrigin(0.5, 0.5)
            shopStats.texts.quitText.setInteractive()
            shopStats.texts.quitText.on("pointerover", () =>{
              shopStats.texts.quitText.setColor("#000000")
            })
            shopStats.texts.quitText.on("pointerout", () =>{
              shopStats.texts.quitText.setColor("#fff")
            })
      }





























      //making sell menu
      sellMenu(arr1, arr2){
        const itemStyle = {font: "20px Arial", fill: "#fff"}
        const style = {font: "25px Arial", fill: "#fff"}
        const headLines = {font: "30px TimesNewRoman", fill: "#fff"}

        //how much gold

        shopStats.texts.sellGold = this.add.text(672, 222, "Gold: " + gameState.playerStats.gold, headLines).setDepth(3).setOrigin(0.5, 0.5)


        //making sellarmor texts in your bag
        shopStats.texts.sellArmor1 = this.add.text(632, 300, "..............", itemStyle).setOrigin(0, 0.5).setDepth(3)
        shopStats.texts.sellArmor2 = this.add.text(822, 300, "..............", itemStyle).setOrigin(0, 0.5).setDepth(3)
        shopStats.texts.sellArmor3 = this.add.text(632, 390, "..............", itemStyle).setOrigin(0, 0.5).setDepth(3)
        shopStats.texts.sellArmor4 = this.add.text(822, 390, "..............", itemStyle).setOrigin(0, 0.5).setDepth(3)
        shopStats.texts.sellArmor5 = this.add.text(632, 480, "..............", itemStyle).setOrigin(0, 0.5).setDepth(3)
        shopStats.texts.sellArmor6 = this.add.text(822, 480, "..............", itemStyle).setOrigin(0, 0.5).setDepth(3)
        shopStats.texts.sellArmor7 = this.add.text(632, 570, "..............", itemStyle).setOrigin(0, 0.5).setDepth(3)
        shopStats.texts.sellArmor8 = this.add.text(822, 570, "..............", itemStyle).setOrigin(0, 0.5).setDepth(3)


        //making alle sellarmor texts interaktive
        shopStats.texts.sellArmor1.setInteractive()
        shopStats.texts.sellArmor2.setInteractive()
        shopStats.texts.sellArmor3.setInteractive()
        shopStats.texts.sellArmor4.setInteractive()
        shopStats.texts.sellArmor5.setInteractive()
        shopStats.texts.sellArmor6.setInteractive()
        shopStats.texts.sellArmor7.setInteractive()
        shopStats.texts.sellArmor8.setInteractive()





        //giving sell texts texts and making there functions
        for(let i = 0; i < arr1.length; i++){
          if(i == 0){
            if(arr2 == 1){
              gameState.extraSprits.armorSprite1 = this.physics.add.sprite(shopStats.texts.sellArmor1.x - 15, shopStats.texts.sellArmor1.y, arr1[i].sprite).setOrigin(0.5, 0.6).setScale(1).setDepth(3)
            }else if(arr2 == 2){
              gameState.extraSprits.armorSprite1 = this.physics.add.sprite(shopStats.texts.sellArmor1.x - 15, shopStats.texts.sellArmor1.y, "armor").setOrigin(0.5, 0.6).setScale(1).setFrame(arr1[i].frame).setDepth(3)
            }
            shopStats.texts.sellArmor1.setText(arr1[i].id)
            shopStats.texts.sellArmor1.on("pointerover", () =>{
              shopStats.texts.sellArmor1.setColor("#000000")
              this.hoverMenu(arr1[i])
            })
            shopStats.texts.sellArmor1.on("pointerout", () =>{
              shopStats.texts.sellArmor1.setColor("#fff")
              this.destroyHoverMenu()
            })
            shopStats.texts.sellArmor1.on("pointerdown", () =>{
              gameState.playerStats.gold += Math.floor(arr1[i].price / 1.5)
              this.destroySellMenu()
              this.destroyHoverMenu()
              arr1.splice(i, 1)
              this.sellMenu(arr1, arr2)

              
            })
          }
          if(i == 1){
            if(arr2 == 1){
              gameState.extraSprits.armorSprite2 = this.physics.add.sprite(shopStats.texts.sellArmor2.x - 15, shopStats.texts.sellArmor2.y, arr1[i].sprite).setOrigin(0.5, 0.6).setScale(1).setDepth(3)
            }else if(arr2 == 2){
              gameState.extraSprits.armorSprite2 = this.physics.add.sprite(shopStats.texts.sellArmor2.x - 15, shopStats.texts.sellArmor2.y, "armor").setOrigin(0.5, 0.6).setScale(1).setFrame(arr1[i].frame).setDepth(3)
            }
            shopStats.texts.sellArmor2.setText(arr1[i].id)
            shopStats.texts.sellArmor2.on("pointerover", () =>{
              shopStats.texts.sellArmor2.setColor("#000000")
              this.hoverMenu(arr1[i])
            })
            shopStats.texts.sellArmor2.on("pointerout", () =>{
              shopStats.texts.sellArmor2.setColor("#fff")
              this.destroyHoverMenu()
            })
            shopStats.texts.sellArmor2.on("pointerdown", () =>{
              gameState.playerStats.gold += Math.floor(arr1[i].price / 1.5)
              this.destroySellMenu()
              this.destroyHoverMenu()
              arr1.splice(i, 1)
              this.sellMenu(arr1, arr2)
              
            })
          }
          if(i == 2){
            if(arr2 == 1){
              gameState.extraSprits.armorSprite3 = this.physics.add.sprite(shopStats.texts.sellArmor3.x - 15, shopStats.texts.sellArmor3.y, arr1[i].sprite).setOrigin(0.5, 0.6).setScale(1).setDepth(3)
            }else if(arr2 == 2){
              gameState.extraSprits.armorSprite3 = this.physics.add.sprite(shopStats.texts.sellArmor3.x - 15, shopStats.texts.sellArmor3.y, "armor").setOrigin(0.5, 0.6).setScale(1).setFrame(arr1[i].frame).setDepth(3)
            }
            shopStats.texts.sellArmor3.setText(arr1[i].id)
            shopStats.texts.sellArmor3.on("pointerover", () =>{
              shopStats.texts.sellArmor3.setColor("#000000")
              this.hoverMenu(arr1[i])
            })
            shopStats.texts.sellArmor3.on("pointerout", () =>{
              shopStats.texts.sellArmor3.setColor("#fff")
              this.destroyHoverMenu()
            })
            shopStats.texts.sellArmor3.on("pointerdown", () =>{
              gameState.playerStats.gold += Math.floor(arr1[i].price / 1.5)
              this.destroySellMenu()
              this.destroyHoverMenu()
              arr1.splice(i, 1)
              this.sellMenu(arr1, arr2)
              
            })
          }
          if(i == 3){
            if(arr2 == 1){
              gameState.extraSprits.armorSprite4 = this.physics.add.sprite(shopStats.texts.sellArmor4.x - 15, shopStats.texts.sellArmor4.y, arr1[i].sprite).setOrigin(0.5, 0.6).setScale(1).setDepth(3)
            }else if(arr2 == 2){
              gameState.extraSprits.armorSprite4 = this.physics.add.sprite(shopStats.texts.sellArmor4.x - 15, shopStats.texts.sellArmor4.y, "armor").setOrigin(0.5, 0.6).setScale(1).setFrame(arr1[i].frame).setDepth(3)
            }
            shopStats.texts.sellArmor4.setText(arr1[i].id)
            shopStats.texts.sellArmor4.on("pointerover", () =>{
              shopStats.texts.sellArmor4.setColor("#000000")
              this.hoverMenu(arr1[i])
            })
            shopStats.texts.sellArmor4.on("pointerout", () =>{
              shopStats.texts.sellArmor4.setColor("#fff")
              this.destroyHoverMenu()
            })
            shopStats.texts.sellArmor4.on("pointerdown", () =>{
              gameState.playerStats.gold += Math.floor(arr1[i].price / 1.5)
              this.destroySellMenu()
              this.destroyHoverMenu()
              arr1.splice(i, 1)
              this.sellMenu(arr1, arr2)
              
            })
          }
          if(i == 4){
            if(arr2 == 1){
              gameState.extraSprits.armorSprite5 = this.physics.add.sprite(shopStats.texts.sellArmor5.x - 15, shopStats.texts.sellArmor5.y, arr1[i].sprite).setOrigin(0.5, 0.6).setScale(1).setDepth(3)
            }else if(arr2 == 2){
              gameState.extraSprits.armorSprite5 = this.physics.add.sprite(shopStats.texts.sellArmor5.x - 15, shopStats.texts.sellArmor5.y, "armor").setOrigin(0.5, 0.6).setScale(1).setFrame(arr1[i].frame).setDepth(3)
            }
            shopStats.texts.sellArmor5.setText(arr1[i].id)
            shopStats.texts.sellArmor5.on("pointerover", () =>{
              shopStats.texts.sellArmor5.setColor("#000000")
              this.hoverMenu(arr1[i])
            })
            shopStats.texts.sellArmor5.on("pointerout", () =>{
              shopStats.texts.sellArmor5.setColor("#fff")
              this.destroyHoverMenu()
            })
            shopStats.texts.sellArmor5.on("pointerdown", () =>{
              gameState.playerStats.gold += Math.floor(arr1[i].price / 1.5)
              this.destroySellMenu()
              this.destroyHoverMenu()
              arr1.splice(i, 1)
              this.sellMenu(arr1, arr2)
              
            })
          }
          if(i == 5){
            if(arr2 == 1){
              gameState.extraSprits.armorSprite6 = this.physics.add.sprite(shopStats.texts.sellArmor6.x - 15, shopStats.texts.sellArmor6.y, arr1[i].sprite).setOrigin(0.5, 0.6).setScale(1).setDepth(3)
            }else if(arr2 == 2){
              gameState.extraSprits.armorSprite6 = this.physics.add.sprite(shopStats.texts.sellArmor6.x - 15, shopStats.texts.sellArmor6.y, "armor").setOrigin(0.5, 0.6).setScale(1).setFrame(arr1[i].frame).setDepth(3)
            }
            shopStats.texts.sellArmor6.setText(arr1[i].id)
            shopStats.texts.sellArmor6.on("pointerover", () =>{
              shopStats.texts.sellArmor6.setColor("#000000")
              this.hoverMenu(arr1[i])
            })
            shopStats.texts.sellArmor6.on("pointerout", () =>{
              shopStats.texts.sellArmor6.setColor("#fff")
              this.destroyHoverMenu()
            })
            shopStats.texts.sellArmor6.on("pointerdown", () =>{
              gameState.playerStats.gold += Math.floor(arr1[i].price / 1.5)
              this.destroySellMenu()
              this.destroyHoverMenu()
              arr1.splice(i, 1)
              this.sellMenu(arr1, arr2)
              
            })
          }
          if(i == 6){
            if(arr2 == 1){
              gameState.extraSprits.armorSprite7 = this.physics.add.sprite(shopStats.texts.sellArmor7.x - 15, shopStats.texts.sellArmor7.y, arr1[i].sprite).setOrigin(0.5, 0.6).setScale(1).setDepth(3)
            }else if(arr2 == 2){
              gameState.extraSprits.armorSprite7 = this.physics.add.sprite(shopStats.texts.sellArmor7.x - 15, shopStats.texts.sellArmor7.y, "armor").setOrigin(0.5, 0.6).setScale(1).setFrame(arr1[i].frame).setDepth(3)
            }
            shopStats.texts.sellArmor7.setText(arr1[i].id)
            shopStats.texts.sellArmor7.on("pointerover", () =>{
              shopStats.texts.sellArmor7.setColor("#000000")
              this.hoverMenu(arr1[i])
            })
            shopStats.texts.sellArmor7.on("pointerout", () =>{
              shopStats.texts.sellArmor7.setColor("#fff")
              this.destroyHoverMenu()
            })
            shopStats.texts.sellArmor7.on("pointerdown", () =>{
              gameState.playerStats.gold += Math.floor(arr1[i].price / 1.5)
              this.destroySellMenu()
              this.destroyHoverMenu()
              arr1.splice(i, 1)
              this.sellMenu(arr1, arr2)
              
            })
          }
          if(i == 7){
            if(arr2 == 1){
              gameState.extraSprits.armorSprite8 = this.physics.add.sprite(shopStats.texts.sellArmor8.x - 15, shopStats.texts.sellArmor8.y, arr1[i].sprite).setOrigin(0.5, 0.6).setScale(1).setDepth(3)
            }else if(arr2 == 2){
              gameState.extraSprits.armorSprite8 = this.physics.add.sprite(shopStats.texts.sellArmor8.x - 15, shopStats.texts.sellArmor8.y, "armor").setOrigin(0.5, 0.6).setScale(1).setFrame(arr1[i].frame).setDepth(3)
            }
            shopStats.texts.sellArmor8.setText(arr1[i].id)
            shopStats.texts.sellArmor8.on("pointerover", () =>{
              shopStats.texts.sellArmor8.setColor("#000000")
              this.hoverMenu(arr1[i])
            })
            shopStats.texts.sellArmor8.on("pointerout", () =>{
              shopStats.texts.sellArmor8.setColor("#fff")
              this.destroyHoverMenu()
            })
            shopStats.texts.sellArmor8.on("pointerdown", () =>{
              gameState.playerStats.gold += Math.floor(arr1[i].price / 1.5)
              this.destroySellMenu()
              this.destroyHoverMenu()
              arr1.splice(i, 1)
              this.sellMenu(arr1, arr2)
              
            })
          }
        }
      }







      //making menu for hovering over sell items
      hoverMenu(target){
        gameState.texts.weapon.weapon1Text1 = this.add.text(1000, 500, target.id, {font: "25px Arial",color: target.color}).setDepth(4)
        gameState.texts.weapon.weapon1Text2 = this.add.text(1000, 535,target.deff + " defence", {font: "20px Times New Roman", color: "#ffffff"}).setDepth(4)
        gameState.texts.weapon.weapon1Text3 = this.add.text(1000, 570, "bonus Effect: " + target.bonus, {font: "20px Times New Roman", color: target.bonusColor}).setDepth(4)
        gameState.texts.weapon.weapon1Text4 = this.add.text(1000, 595, "Sell Price " + Math.floor(target.price / 1.5), {font: "20px Times New Roman", color: "#ffffff"}).setDepth(4)
        gameState.boxes.weapon1Box = this.add.rectangle(gameState.texts.weapon.weapon1Text1.x , gameState.texts.weapon.weapon1Text1.y , 200, 150, "0x518CF3").setOrigin(0.1,0.1).setDepth(3)
        gameState.boxes.weapon1Box.isStroked = true
        gameState.boxes.weapon1Box.lineWidth = 2
        gameState.boxes.weapon1Box.strokeColor = "0x000000"
      }





      //destroying hover menu for selling
      destroyHoverMenu(){
        if(gameState.texts.weapon.weapon1Text1){
          gameState.texts.weapon.weapon1Text1.destroy()
          gameState.texts.weapon.weapon1Text2.destroy()
          gameState.texts.weapon.weapon1Text3.destroy()
          gameState.boxes.weapon1Box.destroy()
          gameState.texts.weapon.weapon1Text4.destroy()
        }
      }






      //destroy sell menu
      destroySellMenu(){
        if(shopStats.texts.sellArmor1){
        shopStats.texts.sellArmor1.destroy()
        shopStats.texts.sellArmor2.destroy()
        shopStats.texts.sellArmor3.destroy()
        shopStats.texts.sellArmor4.destroy()
        shopStats.texts.sellArmor5.destroy()
        shopStats.texts.sellArmor6.destroy()
        shopStats.texts.sellArmor7.destroy()
        shopStats.texts.sellArmor8.destroy()
        shopStats.texts.sellGold.destroy()
        if(gameState.extraSprits.armorSprite8){
          gameState.extraSprits.armorSprite8.destroy()
        }
        if(gameState.extraSprits.armorSprite7){
          gameState.extraSprits.armorSprite7.destroy()
        }
        if(gameState.extraSprits.armorSprite6){
          gameState.extraSprits.armorSprite6.destroy()
        }
        if(gameState.extraSprits.armorSprite5){
          gameState.extraSprits.armorSprite5.destroy()
        }
        if(gameState.extraSprits.armorSprite4){
          gameState.extraSprits.armorSprite4.destroy()
        }
        if(gameState.extraSprits.armorSprite3){
          gameState.extraSprits.armorSprite3.destroy()
        }
        if(gameState.extraSprits.armorSprite2){
          gameState.extraSprits.armorSprite2.destroy()
        }
        if(gameState.extraSprits.armorSprite1){
          gameState.extraSprits.armorSprite1.destroy()
        }
        }
      }

}