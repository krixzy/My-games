// variables
let underGroundBattleGroundMap
let underGroundBattleGroundMapTileset
let hpText
let enemy1Tween
let enemy2Tween
let enemy3Tween
let playerAttackText
let playerAttack
let playerTurn = true
let movingArray
let enemy1turn = false
let enemy2turn = false
let enemy3turn = false
let nameText 
let manaText
let itemMenuOpen
let itemMenuText

//loading this sceen to the next
class underGroundBattleGround extends Phaser.Scene{
    constructor(){
        super({key: "underGroundBattleGround"})
    }






      



    preload(){

       
        
        //spell and attackeffect
        this.load.spritesheet("attackEffeckt", "\\effeckts/attackanamation.png", {frameWidth:64, frameHeight:32})

        //enemyLoading
       // this.load.spritesheet("enemy1", "\\sprits/char/Enemy/Enemy 15-1.png", {frameWidth:32, frameHeight:32})
        //this.load.spritesheet("enemy2", "\\sprits/char/Enemy/Enemy 16-1.png", {frameWidth:32, frameHeight:32})
        this.load.spritesheet("mrSkull", "\\sprits/char/Enemy/Enemy 06-1.png", {frameWidth:32, frameHeight:32})
        this.load.spritesheet("blackSkeleton", "\\sprits/char/Enemy/Enemy 05-1.png", {frameWidth:32, frameHeight:32})
        this.load.spritesheet("skeletonSheld", "\\sprits/char/Enemy/Enemy 04-1.png", {frameWidth:32, frameHeight:32})

    //playerloading
this.load.spritesheet("mainChar", "\\sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})
this.load.spritesheet("mainShadow", "\\sprits/char/Shadow/Shadow 1.png", {frameWidth: 32, frameHeight: 32})

        //load map
this.load.image("tiles", "\\tiles.png")
this.load.tilemapTiledJSON("underGroundBattleGroundMap", "\\maps/undergroundbattleground.json")
    }



















    create(){
           
        //making menu
            //attackMenu
        let attackMenu = this.add.rectangle(250, 750, 200, 300, 0x518CF3).setDepth(2)
        attackMenu.isStroked = true
        attackMenu.strokeColor = "0xFFFFFF"
        //attackMenu.alpha = 0.9
        attackMenu.lineWidth = 8
        playerAttackText = this.add.text(250, 650,"ATTACK", {fontSize: 22, fontFamily: "Arial", fontStyle:"bold"}).setDepth(2).setOrigin(0.5)

            //magicMenu
        let magicMenu = this.add.rectangle(608, 750, 500, 300, 0x518CF3).setDepth(2).setOrigin(0.5,0.5)
        magicMenu.isStroked = true
        magicMenu.lineWidth = 8
        //magicMenu.alpha = 0.9
        magicMenu.strokeColor = "0xFFFFFF"
        let magicMenuText = this.add.text(250, 750,"MAGIC", {fontSize: 22, fontFamily: "Arial", fontStyle:"bold"}).setDepth(2).setOrigin(0.5)
       
       
         //itemMenu
        itemMenuText = this.add.text(250, 850,"ITEM", {fontSize: 22, fontFamily: "Arial", fontStyle:"bold"}).setDepth(2).setOrigin(0.5)
        
        //hovering over
            //setting text aktive
        magicMenuText.setInteractive()
        itemMenuText.setInteractive()
        playerAttackText.setInteractive()
                // hovering over change color
                gameState.cursors = this.input.keyboard.createCursorKeys()
                magicMenuText.on("pointerover", () =>{
                     magicMenuText.setColor("0x000000")
                  })
                  magicMenuText.on("pointerout", () =>{
                      magicMenuText.setColor("#FFFFFF")
                  })
                  itemMenuText.on("pointerover", () =>{
                      itemMenuText.setColor("#000000")
                  })
                  itemMenuText.on("pointerout", () =>{
                      if(itemMenuOpen != true){
                      itemMenuText.setColor("#FFFFFF")
                      }
                  })
                  playerAttackText.on("pointerover", () =>{
                      playerAttackText.setColor("#000000")
                  })
                  playerAttackText.on("pointerout", () =>{
                      if(playerAttack != true)
                      playerAttackText.setColor("#FFFFFF")
                  })

         //clicking and using attack
                  playerAttackText.on("pointerdown", () =>{
                      if(playerTurn){
                      playerAttack = true
                      itemMenuOpen = false
                      itemMenuText.setColor("#FFFFFF")
                      }
                  })



            //clicking items
            itemMenuText.on("pointerdown", () =>{
                if(playerTurn){
                    if(itemMenuOpen != true){
                   itemMenuOpen = true
                   playerAttack = false
                   playerAttackText.setColor("#FFFFFF")
                    let menuStyle = {font: "25px Arial", fill: "#fff", align:"center"}
                let itemStyle = {font: "20px Arial", fill: "#fff", align:"center"}
                let itemStyle0 = {font: "20px Arial", fill: "#D1D1D1", align: "center"}
                gameState.texts.item = this.add.text(608, 610,"Items",menuStyle).setOrigin(0.5,0).setDepth(3)

                //hpPotion 
                if (gameState.hpPotion.amount == 0){
                gameState.texts.hpPotion = this.add.text(483, 660, "HPPotion " + gameState.hpPotion.amount,itemStyle0).setOrigin(0.5,0).setDepth(3)
                }else{
                    gameState.texts.hpPotion = this.add.text(483, 660, "HPPotion " + gameState.hpPotion.amount,itemStyle).setOrigin(0.5,0).setDepth(3) 
                }
                gameState.texts.hpPotion.setInteractive()
                gameState.extraSprits.hpPotion = this.physics.add.sprite(410, 660, "hpPotion").setScale(1.5).setOrigin(1,0.3).setDepth(3)

                //mpPotion
                if(gameState.mpPotion.amount == 0){
                gameState.texts.mpPotion = this.add.text(733, 660, "MPPotion " + gameState.mpPotion.amount,itemStyle0).setOrigin(0.5, 0).setDepth(3)
                }else{
                    gameState.texts.mpPotion = this.add.text(733, 660, "MPPotion " + gameState.mpPotion.amount,itemStyle).setOrigin(0.5, 0).setDepth(3)
                }
                gameState.texts.mpPotion.setInteractive()
                gameState.extraSprits.mpPotion = this.physics.add.sprite(660, 660, "mpPotion").setScale(1.5).setOrigin(1,0.3).setDepth(3)

                //dmgBoost
                if(gameState.dmgBoost.amount == 0){
                gameState.texts.dmgPotion = this.add.text(483, 750, "DmgBoost " + gameState.dmgBoost.amount,itemStyle0).setOrigin(0.5,0).setDepth(3)
                }
                else{
                    gameState.texts.dmgPotion = this.add.text(483, 750, "DmgBoost " + gameState.dmgBoost.amount,itemStyle).setOrigin(0.5,0).setDepth(3)
                }
                gameState.texts.dmgPotion.setInteractive()
               gameState.extraSprits.dmgBoost = this.physics.add.sprite(410, 750, "dmgBoost").setScale(1).setOrigin(1,0.3).setDepth(3)

                //magicBooost
                if(gameState.magicBoost.amount == 0){
                gameState.texts.magicPotion = this.add.text(733, 750, "MagicBoost "  + gameState.magicBoost.amount,itemStyle0).setOrigin(0.5,0).setDepth(3)
                }else{
                    gameState.texts.magicPotion = this.add.text(733, 750, "MagicBoost " + gameState.magicBoost.amount,itemStyle).setOrigin(0.5,0).setDepth(3)
                }
                gameState.texts.magicPotion.setInteractive()
                gameState.extraSprits.magicBoost = this.physics.add.sprite(660, 750, "magicBoost").setScale(1).setOrigin(1,0.3).setDepth(3)

                //defenceBooost
                if(gameState.defenceBoost.amount == 0){
                gameState.texts.defencePotion = this.add.text(483, 840, "DefenceBoost " + gameState.defenceBoost.amount, itemStyle0).setOrigin(0.5,0).setDepth(3)
                }else{
                    gameState.texts.defencePotion = this.add.text(483, 840, "DefenceBoost " + gameState.defenceBoost.amount, itemStyle).setOrigin(0.5,0).setDepth(3)
                }
                gameState.texts.defencePotion.setInteractive()
                gameState.extraSprits.defencePotion = this.physics.add.sprite(410, 840, "defenceBoost").setOrigin(1, 0.3).setScale(1).setDepth(3)

                //repelPotion
                if(gameState.repelPotion.amount == 0){
                gameState.texts.repelPotion = this.add.text(733,840,"RepelPotion " + gameState.repelPotion.amount,itemStyle0).setOrigin(0.5,0).setDepth(3)
                }else{
                    gameState.texts.repelPotion = this.add.text(733,840,"RepelPotion " + gameState.repelPotion.amount,itemStyle).setOrigin(0.5,0).setDepth(3)
                }
                gameState.texts.repelPotion.setInteractive()
                gameState.extraSprits.repelPotion = this.physics.add.sprite(660, 840, "repelPotion").setOrigin(1,0.3).setScale(1.5).setDepth(3)
                




                
                //item pointerover



                    //hpPotion
                    gameState.texts.hpPotion.on("pointerover", () =>{
                        gameState.texts.hpPotion.setColor("#000000")
                        gameState.texts.combatPotionText = this.add.text(900, 700, "Healing potion:" , {font: "25px Arial",color: "#000000"}).setDepth(4)
                        gameState.texts.combatPotionText2 = this.add.text(900, 750, "Restoring: "+ gameState.hpPotion.hp + "HP", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(4)
                        gameState.texts.combatPotionBox = this.add.rectangle(gameState.texts.combatPotionText.x , gameState.texts.combatPotionText.y , 200, 100, 0x518CF3).setOrigin(0.1,0.1).setDepth(3)
                        gameState.texts.combatPotionBox.isStroked = true
                        gameState.texts.combatPotionBox.lineWidth = 2
                        gameState.texts.combatPotionBox.strokeColor = "0x000000"
                     
    
                     })
                     gameState.texts.hpPotion.on("pointerout", () =>{
                         if(gameState.hpPotion.amount == 0){
                             gameState.texts.hpPotion.setColor("#D1D1D1")
                         }else{
                     gameState.texts.hpPotion.setColor("#FFFFFF")
                         }
                     gameState.texts.combatPotionBox.destroy()
                     gameState.texts.combatPotionText.destroy()
                     gameState.texts.combatPotionText2.destroy()
                    })
    
    
    
    
                        //mpPotion
                        gameState.texts.mpPotion.on("pointerover", () =>{
                            gameState.texts.mpPotion.setColor("#000000")
                            gameState.texts.combatPotionText = this.add.text(900, 700, "Mana potion:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                            gameState.texts.combatPotionText2 = this.add.text(900, 750, "Restoring: "+ gameState.mpPotion.mana + "MP", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                            gameState.texts.combatPotionBox = this.add.rectangle(gameState.texts.combatPotionText.x , gameState.texts.combatPotionText.y , 200, 100, 0x518CF3).setOrigin(0.1,0.1)
                            gameState.texts.combatPotionBox.isStroked = true
                            gameState.texts.combatPotionBox.lineWidth = 2
                            gameState.texts.combatPotionBox.strokeColor = "0x000000"
                         
        
                         })
                         gameState.texts.mpPotion.on("pointerout", () =>{
                             if(gameState.mpPotion.amount == 0){
                                 gameState.texts.mpPotion.setColor("#D1D1D1")
                             }else{
                         gameState.texts.mpPotion.setColor("#FFFFFF")
                             }
                             gameState.texts.combatPotionText.destroy()
                         gameState.texts.combatPotionBox.destroy()
                         gameState.texts.combatPotionText2.destroy()
                        })
    
    
    
                        //dmgBoost
                        gameState.texts.dmgPotion.on("pointerover", () =>{
                            gameState.texts.dmgPotion.setColor("#000000")
                            gameState.texts.combatPotionText = this.add.text(900, 700, "Damage boost:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                            gameState.texts.combatPotionText2 = this.add.text(900, 750, "Give: "+ gameState.dmgBoost.dmg + "* damage", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                            gameState.texts.combatPotionBox = this.add.rectangle(gameState.texts.combatPotionText.x , gameState.texts.combatPotionText.y , 200, 100, 0x518CF3).setOrigin(0.1,0.1)
                            gameState.texts.combatPotionBox.isStroked = true
                            gameState.texts.combatPotionBox.lineWidth = 2
                            gameState.texts.combatPotionBox.strokeColor = "0x000000"
                         
        
                         })
                         gameState.texts.dmgPotion.on("pointerout", () =>{
                             if(gameState.dmgBoost.amount == 0){
                                 gameState.texts.dmgPotion.setColor("#D1D1D1")
                             }else{
                         gameState.texts.dmgPotion.setColor("#FFFFFF")
                             }
                             gameState.texts.combatPotionText.destroy()
                         gameState.texts.combatPotionBox.destroy()
                         gameState.texts.combatPotionText2.destroy()
                        })
    
    
    
                        
    
    
                        //magicBoost
                        gameState.texts.magicPotion.on("pointerover", () =>{
                            gameState.texts.magicPotion.setColor("#000000")
                            gameState.texts.combatPotionText = this.add.text(900, 700, "Magic boost:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                            gameState.texts.combatPotionText2 = this.add.text(900, 750, "Give: "+ gameState.magicBoost.dmg + "* magic", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                            gameState.texts.combatPotionBox = this.add.rectangle(gameState.texts.combatPotionText.x , gameState.texts.combatPotionText.y , 200, 100, 0x518CF3).setOrigin(0.1,0.1)
                            gameState.texts.combatPotionBox.isStroked = true
                            gameState.texts.combatPotionBox.lineWidth = 2
                            gameState.texts.combatPotionBox.strokeColor = "0x000000"
                         
        
                         })
                         gameState.texts.magicPotion.on("pointerout", () =>{
                             if(gameState.magicBoost.amount == 0){
                                 gameState.texts.magicPotion.setColor("#D1D1D1")
                             }else{
                         gameState.texts.magicPotion.setColor("#FFFFFF")
                             }
                             gameState.texts.combatPotionText.destroy()
                         gameState.texts.combatPotionBox.destroy()
                         gameState.texts.combatPotionText2.destroy()
                        })
    
    
    
    
    
    
    
                        //defenceboost
                        gameState.texts.defencePotion.on("pointerover", () =>{
                            gameState.texts.defencePotion.setColor("#000000")
                            gameState.texts.combatPotionText = this.add.text(900, 700, "Defence boost:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                            gameState.texts.combatPotionText2 = this.add.text(900, 750, "Give: "+ gameState.defenceBoost.defence + " defence", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                           gameState.texts.combatPotionBox = this.add.rectangle(gameState.texts.combatPotionText.x , gameState.texts.combatPotionText.y , 200, 100, 0x518CF3).setOrigin(0.1,0.1)
                           gameState.texts.combatPotionBox.isStroked = true
                           gameState.texts.combatPotionBox.lineWidth = 2
                           gameState.texts.combatPotionBox.strokeColor = "0x000000"
                         
        
                         })
                         gameState.texts.defencePotion.on("pointerout", () =>{
                             if(gameState.defenceBoost.amount == 0){
                                 gameState.texts.defencePotion.setColor("#D1D1D1")
                             }else{
                         gameState.texts.defencePotion.setColor("#FFFFFF")
                             }
                             gameState.texts.combatPotionText.destroy()
                        gameState.texts.combatPotionBox.destroy()
                         gameState.texts.combatPotionText2.destroy()
                        })
    
    
    
    
    
    
    
                        //repelpotion
                        gameState.texts.repelPotion.on("pointerover", () =>{
                            gameState.texts.repelPotion.setColor("#000000")
                            gameState.texts.combatPotionText = this.add.text(900, 700, "Repel potion:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                            gameState.texts.combatPotionText2 = this.add.text(900, 740, "Repel enemies: \n"+ gameState.repelPotion.duration / 1000 + " Seconds", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                            gameState.texts.combatPotionBox = this.add.rectangle(gameState.texts.combatPotionText.x , gameState.texts.combatPotionText.y , 200, 100, 0x518CF3).setOrigin(0.1,0.1)
                            gameState.texts.combatPotionBox.isStroked = true
                            gameState.texts.combatPotionBox.lineWidth = 2
                            gameState.texts.combatPotionBox.strokeColor = "0x000000"
                         
        
                         })
                         gameState.texts.repelPotion.on("pointerout", () =>{
                             if(gameState.repelPotion.amount == 0){
                                 gameState.texts.repelPotion.setColor("#D1D1D1")
                             }else{
                         gameState.texts.repelPotion.setColor("#FFFFFF")
                             }
                             gameState.texts.combatPotionText.destroy()
                         gameState.texts.combatPotionBox.destroy()
                         gameState.texts.combatPotionText2.destroy()
                        })










                         //item pointer click





                        //hpPotion
                       
                        gameState.texts.hpPotion.on("pointerdown", () =>{
                            if(gameState.hpPotion.amount < 1){
                               // console.log("test")
                            }else{
                            if(gameState.playerStats.maxHp <= gameState.playerStats.hp){
                                alert("you are at full HP")
                            }else if(gameState.playerStats.maxHp < gameState.playerStats.hp + gameState.hpPotion.hp){
                               gameState.playerStats.hp = gameState.playerStats.maxHp
                              hpText.setText("HP " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp)
                               gameState.hpPotion.amount -= 1
                               if(gameState.hpPotion.amount  == 0){
                                   gameState.texts.hpPotion.setText("HPPotion " + gameState.hpPotion.amount)
                                   gameState.texts.hpPotion.setTexture(itemStyle0)
                               }else{
                                   gameState.texts.hpPotion.setText("HPPotion " + gameState.hpPotion.amount)
                               }
                               playerTurn = false
                               enemy1turn = true
                               enemy2turn = true
                               enemy3turn = true
          
                               this.nextturn()
                            }else{
                                gameState.playerStats.hp += gameState.hpPotion.hp
                                hpText.setText("HP " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp)
                                gameState.hpPotion.amount -= 1
                                if(gameState.hpPotion.amount  == 0){
                                    gameState.texts.hpPotion.setText("HPPotion " + gameState.hpPotion.amount)
                                   
                                }else{
                                    gameState.texts.hpPotion.setText("HPPotion " + gameState.hpPotion.amount)
                                }
                                playerTurn = false
                               enemy1turn = true
                               enemy2turn = true
                               enemy3turn = true
          
                               this.nextturn()
                            }
                        }
                        })
                        //mpPotion

                        gameState.texts.mpPotion.on("pointerdown", () =>{
                            if(gameState.mpPotion.amount < 1){
                               // console.log("test")
                            }else{
                            if(gameState.playerStats.maxMana <= gameState.playerStats.mana){
                                alert("you are at full Mana")
                            }else if(gameState.playerStats.maxMana < gameState.playerStats.mana + gameState.mpPotion.mana){
                               gameState.playerStats.mana = gameState.playerStats.maxMana
                               manaText.setText("MP " + gameState.playerStats.mana + "/" + gameState.playerStats.maxMana)
                               gameState.mpPotion.amount -= 1
                               if(gameState.mpPotion.amount  == 0){
                                   gameState.texts.mpPotion.setText("MPPotion " + gameState.mpPotion.amount)
                                   gameState.texts.mpPotion.setTexture(itemStyle0)
                               }else{
                                   gameState.texts.mpPotion.setText("MPPotion " + gameState.mpPotion.amount)
                               }
                               playerTurn = false
                               enemy1turn = true
                               enemy2turn = true
                               enemy3turn = true
          
                               this.nextturn()
                            }else{
                                gameState.playerStats.mana += gameState.mpPotion.mana
                                manaText.setText("MP " + gameState.playerStats.mana + "/" + gameState.playerStats.maxMana)
                                gameState.mpPotion.amount -= 1
                                if(gameState.mpPotion.amount  == 0){
                                    gameState.texts.mpPotion.setText("MPPotion " + gameState.mpPotion.amount)
                                   
                                }else{
                                    gameState.texts.mpPotion.setText("MPPotion " + gameState.mpPotion.amount)
                                }
                                playerTurn = false
                               enemy1turn = true
                               enemy2turn = true
                               enemy3turn = true
          
                               this.nextturn()
                            }
                        }
                        
                        })


                        //dmgBuff
                        gameState.texts.dmgPotion.on  ("pointerdown", () =>{
                            if(gameState.dmgBoostAktive == true && gameState.dmgBoost.amount > 0){
                                alert("allready aktive")
                            }
                            else if(gameState.dmgBoost.amount > 0){
                                gameState.dmgBoostAktive = true
                                console.log(gameState.dmgBoostAktive)
                                gameState.buffs.dmgBuff = this.physics.add.sprite(gameState.player.x, gameState.player.y, "buff").setFrame(276).setScale(0.7).setDepth(2).setOrigin(1.5, 4.6)
                                movingArray.push(gameState.buffs.dmgBuff)
                                gameState.dmgBoost.amount -= 1
                                gameState.texts.dmgPotion.setText("DmgBoost "  + gameState.dmgBoost.amount)
                                playerTurn = false
                               enemy1turn = true
                               enemy2turn = true
                               enemy3turn = true
          
                               this.nextturn()
                            }
                        })


                        //magicBuff
                        gameState.texts.magicPotion.on  ("pointerdown", () =>{
                             if(gameState.magicBoost.amount > 0){
                              alert("cant use that here")
                            }
                        })

                        //defenceBuff
                        gameState.texts.defencePotion.on  ("pointerdown", () =>{
                            if(gameState.defenceBoostAktive == true && gameState.defenceBoost.amount > 0){
                                alert("allready aktive")
                            }
                            else if(gameState.defenceBoost.amount > 0){
                                gameState.defenceBoostAktive = true
                                gameState.buffs.defenceBuff = this.physics.add.sprite(gameState.player.x, gameState.player.y, "buff").setFrame(243).setOrigin(-0.5, 4.6).setScale(0.7).setDepth(2)
                                movingArray.push(gameState.buffs.defenceBuff)
                                gameState.defenceBoost.amount -= 1
                                gameState.texts.defencePotion.setText("defenceBoost "  + gameState.defenceBoost.amount)
                                playerTurn = false
                               enemy1turn = true
                               enemy2turn = true
                               enemy3turn = true
          
                               this.nextturn()

                            }

                        })
                        gameState.texts.repelPotion.on  ("pointerdown", () =>{
                            if(gameState.repelPotion.amount > 0){
                                alert("cant use that here")
                            }
                            
                            //console.log(gameState.timeEvent.elapsed)

                        })
                    }
                    }
    
            })
         

                  //generate the enemys
        this.generateEnemys()
        gameState.pause = false
       
        //creating map
        underGroundBattleGroundMap = this.add.tilemap("underGroundBattleGroundMap")
        underGroundBattleGroundMapTileset = underGroundBattleGroundMap.addTilesetImage("tiles")
        
        //background
        underGroundBattleGroundMap.createLayer("background", underGroundBattleGroundMapTileset, 200, 50)
        
        //player creation

gameState.player = this.physics.add.sprite(300, 450, "mainChar").setDepth(1).setScale(1.5).setFrame(6)
nameText = this.add.text(gameState.player.x, gameState.player.y, gameState.playerName,{fontSize: "18px", fontFamily: "Arial", align: "center"}).setDepth(1).setOrigin(0.4, 4)
hpText = this.add.text(gameState.player.x, gameState.player.y, "HP " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setDepth(1).setOrigin(0.5, 3.5)
manaText = this.add.text(gameState.player.x, gameState.player.y, "MP " + gameState.playerStats.mana + "/" + gameState.playerStats.maxMana, {fontSize:"15px", fontFamily: "Arial", align: "center"}).setDepth(1).setOrigin(0.5, 2.5)
gameState.playerShadow = this.physics.add.sprite(gameState.player.x, gameState.player.y + 3, "mainShadow") .setScale(1.5)
gameState.player.setCollideWorldBounds(true)
gameState.player.setSize(20, 20)    
gameState.player.setInteractive()
gameState.animationSpirte = this.physics.add.sprite(gameState.player.x, gameState.player.y, "attackEffeckt").setFrame(5).setScale(1.5).setDepth(1)
movingArray = [gameState.player, gameState.playerShadow, hpText, manaText, nameText]
manaText.setInteractive()
nameText.setInteractive()

 //presprits for buffs
 if(gameState.dmgBoostAktive == true){
    gameState.buffs.dmgBuff = this.physics.add.sprite(gameState.player.x, gameState.player.y, "buff").setFrame(276).setScale(0.7).setDepth(2).setOrigin(1.5, 4.6)
    movingArray.push(gameState.buffs.dmgBuff)
}
if(gameState.defenceBoostAktive == true){
    gameState.buffs.defenceBuff = this.physics.add.sprite(gameState.player.x, gameState.player.y, "buff").setFrame(243).setOrigin(-0.5, 4.6).setScale(0.7).setDepth(2)
    movingArray.push(gameState.buffs.defenceBuff)
}
if(gameState.magicBoostAktive == true){
    gameState.buffs.magicBuff = this.physics.add.sprite(gameState.player.x, gameState.player.y, "buff").setFrame(244).setOrigin(0.5, 4.6).setDepth(2).setScale(0.7)
    movingArray.push(gameState.buffs.magicBuff)
}

      
    //animations
    this.anims.create({
        key: "meleAttack",
        frames: this.anims.generateFrameNumbers("attackEffeckt", {start:0, end: 5}),
        frameRate:10, 
      })
      console.log(gameState.killed)
      
      
    }

    






















    update(){
        if(gameState.dmgBoostAktive == false && gameState.buffs.dmgBuff){
            gameState.buffs.dmgBuff.destroy()
        }
        if(gameState.defenceBoostAktive == false && gameState.buffs.defenceBuff){
            gameState.buffs.defenceBuff.destroy()
        }
        if(playerTurn == false && gameState.texts.hpPotion || playerAttack == true && gameState.texts.hpPotion){
            gameState.texts.item.destroy()
    gameState.texts.hpPotion.destroy()
    gameState.texts.mpPotion.destroy()
    gameState.texts.dmgPotion.destroy()
    gameState.texts.magicPotion.destroy()
    gameState.texts.defencePotion.destroy()
    gameState.texts.repelPotion.destroy()
    gameState.extraSprits.hpPotion.destroy()
    gameState.extraSprits.mpPotion.destroy()
    gameState.extraSprits.dmgBoost.destroy()
    gameState.extraSprits.magicBoost.destroy()
    gameState.extraSprits.defencePotion.destroy()
    gameState.extraSprits.repelPotion.destroy()
    if(gameState.texts.combatPotionBox){
        gameState.texts.combatPotionBox.destroy()
        gameState.texts.combatPotionText.destroy()
        gameState.texts.combatPotionText2.destroy()
    }
        }
        
        
            //attacking enemy1 target
            gameState.enemy1.on("pointerdown", () =>{
                if(playerAttack === true){
playerAttack = false
gameState.checkList.isAttacking = true
playerAttackText.setColor("#FFFFFF")
this.playerAttack(gameState.enemy1, gameState.container1Hp)


            }
        })
        //attacking enemy2 target
        if(gameState.enemy2){
        gameState.enemy2.on("pointerdown", () =>{
            if(playerAttack === true){
playerAttack = false
gameState.checkList.isAttacking = true
playerAttackText.setColor("#FFFFFF")
this.playerAttack(gameState.enemy2, gameState.container2Hp)

        }
    })
}

    //attacking enemy3 target
    if(gameState.enemy3){
    gameState.enemy3.on("pointerdown", () =>{
        if(playerAttack === true){
playerAttack = false
gameState.checkList.isAttacking = true
playerAttackText.setColor("#FFFFFF")
this.playerAttack(gameState.enemy3, gameState.container3Hp)

    }
})
    }

    }











                                                //ENEMY 












    // generating enemys
    generateEnemys(){ 
        let randomGene
        if(gameState.playerStats.level < 2){
             randomGene = Math.floor(Math.random() * 1)
        }else if(gameState.playerStats.level < 3){
             randomGene = Math.floor(Math.random() * 2)
        }else{
         randomGene = Math.floor(Math.random() * 3)
        }
        let enemyArray = ["mrSkull", "blackSkeleton", "skeletonSheld"]
        for(let i = 0; i <= randomGene; i++){
            let shadow = this.add.sprite(1, 4, "mainShadow").setScale(1.5)
            let randomEnemy = Math.floor(Math.random() * 3)
            let enemySprite = this.add.sprite(0, 0, enemyArray[randomEnemy]).setScale(1.5).setDepth(1).setFrame(3)
            gameState.killed.push(enemyArray[randomEnemy])
            if(i === 0){
                this.enemy1(enemySprite, shadow, enemyArray[randomEnemy])
            }else if(i === 1){
                this.enemy2(enemySprite, shadow, enemyArray[randomEnemy])
            }else if(i === 2 ){
                this.enemy3(enemySprite, shadow, enemyArray[randomEnemy])
            }
            
        }

    }




// generating enemy1
    enemy1(arg1, arg2, arg3){
        let hp 
        if (arg3 == gameState.mrSkull.id){
            gameState.container1Hp  = gameState.mrSkull.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container1Hp + "/" + gameState.mrSkull.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)
        }else if (arg3 == gameState.blackSkeleton.id){
            gameState.container1Hp = gameState.blackSkeleton.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container1Hp + "/" + gameState.blackSkeleton.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)

        }else if (arg3 == gameState.skeletonSheld.id){
            gameState.container1Hp = gameState.skeletonSheld.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container1Hp + "/" + gameState.skeletonSheld.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)
        }
        gameState.enemy1Alive  = true
gameState.enemy1 = this.add.container(1300, 450).setDepth(1).setSize(32, 32)
gameState.enemy1.add(arg1)
gameState.enemy1.add(arg2)
gameState.enemy1.add(hp)
gameState.enemy1.add(this.add.sprite(0, 0,"attackEffeckt").setFrame(5).setDepth(2).setScale(1.5))
gameState.enemy1.add(this.add.text(5, -40, arg3, {fontSize: "18px", fontFamily:"Arial", align:"center",}).setDepth(1).setOrigin(0.6,1))
//console.log(gameState.enemy1.list[2])
//gameState.enemy1.list[2]

 // enemy1 attacking 
 enemy1Tween = this.tweens.add({
    targets:gameState.enemy1,
    ease: "Linear",
    x: 300 + 50,
    yoyo:true,
    duration:1000,
   paused:true,
   onYoyo: ()=>{
     enemy1Tween.pause()
     gameState.animationSpirte.flipX = true
     gameState.animationSpirte.anims.play("meleAttack", true)
     
     gameState.animationSpirte.once("animationcomplete", () =>{
         hpText.setText("HP" + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp)    

         //floating text 
         let flotText = this.add.text(gameState.player.x, gameState.player.y, gameState.enemyDamage, {fontSize: 25, color: "#F20000",fontFamily: "Arial"}).setDepth(1)
         this.tweens.add({
             targets: flotText,
             y: gameState.player.y - 60,
             duration: 1500,
             onComplete:() =>{
                 flotText.destroy()
             }
         })

         //player getting attacked
         this.tweens.add({
            targets: movingArray,
            ease: "linear",
            x: gameState.player.x - 15,
            duration: 50, 
            yoyo: true,
            repeat: 1,
            onComplete:() =>{
enemy1Tween.resume()
            }
         })
        
     })
   },
   onComplete: () =>{
       enemy1turn = false
       this.nextturn()
   }
  
})
gameState.enemy1.setInteractive()

    }

    //generating enemy2
    enemy2(arg1, arg2, arg3){
        let hp
        if (arg3 == gameState.mrSkull.id){
            gameState.container2Hp  = gameState.mrSkull.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container2Hp + "/" + gameState.mrSkull.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)
        }else if (arg3 == gameState.blackSkeleton.id){
            gameState.container2Hp = gameState.blackSkeleton.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container2Hp + "/" + gameState.blackSkeleton.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)

        }else if (arg3 == gameState.skeletonSheld.id){
            gameState.container2Hp = gameState.skeletonSheld.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container2Hp + "/" + gameState.skeletonSheld.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)
        }
        gameState.enemy2Alive  = true
        gameState.enemy2 = this.add.container(1300, 200).setDepth(1).setSize(32, 32)
        gameState.enemy2.add(arg1)
        gameState.enemy2.add(arg2)
        gameState.enemy2.add(hp)
        gameState.enemy2.add(this.add.sprite(0, 0,"attackEffeckt").setFrame(5).setDepth(2).setScale(1.5))
        gameState.enemy2.add(this.add.text(5, -40, arg3, {fontSize: "18px", fontFamily:"Arial", align:"center",}).setDepth(1).setOrigin(0.6,1))

        //enemy2 attacking
        enemy2Tween = this.tweens.add({
            targets:gameState.enemy2,
            ease: "Linear",
            x: 300 + 50,
            y: 450,
            yoyo:true,
            duration:1000,
           paused:true,
           onYoyo: ()=>{
               
             enemy2Tween.pause()
            
             gameState.animationSpirte.flipX = true
             gameState.animationSpirte.anims.play("meleAttack", true)
             gameState.animationSpirte.once("animationcomplete", () =>{
                 
                 hpText.setText("HP" + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp)
                 //floating text
                 let flotText = this.add.text(gameState.player.x, gameState.player.y, gameState.enemyDamage, {fontSize: 25, color: "#F20000",fontFamily: "Arial"}).setDepth(1)
                 this.tweens.add({
                     targets: flotText,
                     y: gameState.player.y - 60,
                     duration: 1500,
                     onComplete:() =>{
                         flotText.destroy()
                     }
                 })
                 //player attacked animation

                 this.tweens.add({
                    targets: movingArray,
                    ease: "linear",
                    x: gameState.player.x - 15,
                    duration: 50, 
                    yoyo: true,
                    repeat: 1,
                    onComplete:() =>{
        enemy2Tween.resume()
                    }
                 })
                
             })
           },
           onComplete: () =>{
               enemy2turn = false
               this.nextturn()
           }
          
        })
        gameState.enemy2.setInteractive()
    }

    //generating enemy3
    enemy3(arg1, arg2, arg3){
          let hp
        if (arg3 == gameState.mrSkull.id){
            gameState.container3Hp  = gameState.mrSkull.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container3Hp + "/" + gameState.mrSkull.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)
        }else if (arg3 == gameState.blackSkeleton.id){
            gameState.container3Hp = gameState.blackSkeleton.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container3Hp + "/" + gameState.blackSkeleton.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)

        }else if (arg3 == gameState.skeletonSheld.id){
            gameState.container3Hp = gameState.skeletonSheld.maxHp
             hp = this.add.text(0, -25, "HP " + gameState.container3Hp + "/" + gameState.skeletonSheld.maxHp, {fontSize: "15px", fontFamily: "Arial", align: "center"}).setOrigin(0.6,1)
        }
       gameState.enemy3Alive = true
        gameState.enemy3 = this.add.container(1300, 700).setDepth(1).setSize(32, 32)
        gameState.enemy3.add(arg1)
        gameState.enemy3.add(arg2)
        gameState.enemy3.add(hp)
        gameState.enemy3.add(this.add.sprite(0, 0,"attackEffeckt").setFrame(5).setDepth(2).setScale(1.5))
        gameState.enemy3.add(this.add.text(5, -40, arg3, {fontSize: "18px", fontFamily:"Arial", align:"center",}).setDepth(1).setOrigin(0.6,1))
       // gameState.enemy3.add(gameState.container3Hp)
       
//enemy3 attacking
  enemy3Tween = this.tweens.add({
    targets:gameState.enemy3,
    ease: "Linear",
    x: 300 + 50,
    y: 450,
    yoyo:true,
    duration:1000,
    repeat:0,
   paused:true,
   onYoyo: ()=>{
    enemy3Tween.pause()
    
    
     gameState.animationSpirte.flipX = true
     gameState.animationSpirte.anims.play("meleAttack", true)
   
     gameState.animationSpirte.once("animationcomplete", () =>{
        hpText.setText("HP " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp)

        //floating text
         let flotText = this.add.text(gameState.player.x, gameState.player.y, gameState.enemyDamage , {fontSize: 25, color: "#F20000",fontFamily: "Arial"}).setDepth(1)
         this.tweens.add({
             targets: flotText,
             y: gameState.player.y - 60,
             duration: 1500,
             onComplete:() =>{
                 flotText.destroy()
             }
         })
         // player attacked animation
         this.tweens.add({
            targets: movingArray,
            ease: "linear",
            x: gameState.player.x - 15,
            duration: 50, 
            yoyo: true,
            repeat: 1,
            onComplete:() =>{

              
enemy3Tween.resume()
            }
         })
        
     })
   },
   onComplete: () =>{
       enemy3turn = false
       this.nextturn()
   }
  
})
        gameState.enemy3.setInteractive()
    }
    //attack function
    enemyAttack(arg3, attacking){
        
        if(arg3.list[0].texture.key == gameState.mrSkull.id){
            if(gameState.mrSkull.dmg >= gameState.playerStats.defence){
                if(gameState.defenceBoostAktive == true){
                    let newDefence = gameState.playerStats.defence + gameState.defenceBoost.defence
                    gameState.enemyDamage = gameState.mrSkull.dmg - newDefence
                    if(gameState.enemyDamage < 0){
                        gameState.enemyDamage = 0
                    }
                }else{
            gameState.enemyDamage = gameState.mrSkull.dmg - gameState.playerStats.defence
                }
            }
            else{
                gameState.enemyDamage = 0
            }
          }else if(arg3.list[0].texture.key == gameState.skeletonSheld.id){
              if (gameState.skeletonSheld.dmg >= gameState.playerStats.defence){
                if(gameState.defenceBoostAktive == true){
                    let newDefence = gameState.playerStats.defence + gameState.defenceBoost.defence
                    gameState.enemyDamage = gameState.skeletonSheld.dmg - newDefence
                    if(gameState.enemyDamage < 0){
                        gameState.enemyDamage = 0
                    }
                }else{
            gameState.enemyDamage= gameState.skeletonSheld.dmg - gameState.playerStats.defence
                }
              }else{
                  gameState.enemyDamage = 0
              }
          }else if (arg3.list[0].texture.key == gameState.blackSkeleton.id){
              
              if(gameState.blackSkeleton.dmg  >= gameState.playerStats.defence){
                if(gameState.defenceBoostAktive == true){
                    let newDefence = gameState.playerStats.defence + gameState.defenceBoost.defence
                    gameState.enemyDamage = gameState.blackSkeleton.dmg - newDefence
                    console.log(gameState.enemyDamage)
                    if(gameState.enemyDamage < 0){
                        gameState.enemyDamage = 0
                    }
                }else{
            gameState.enemyDamage = gameState.blackSkeleton.dmg - gameState.playerStats.defence
            console.log(gameState.enemyDamage)
                }
              }else{
                  gameState.enemyDamage = 0
              }
    }
    gameState.playerStats.hp = gameState.playerStats.hp - gameState.enemyDamage 
        attacking.play()
    }

















                                        //PLAYER



















playerAttack(target, hpContainer){
    let targetDeff = ""
    let targetMaxHp = ""
    playerTurn = false
    //chosing targets deffence
    if(target.list[0].texture.key == gameState.mrSkull.id){
      targetDeff = gameState.mrSkull.defence
      targetMaxHp = gameState.mrSkull.maxHp
    }else if(target.list[0].texture.key == gameState.skeletonSheld.id){
        targetDeff = gameState.skeletonSheld.defence
        targetMaxHp = gameState.skeletonSheld.maxHp
    }else if (target.list[0].texture.key == gameState.blackSkeleton.id){
        targetDeff = gameState.blackSkeleton.defence
        targetMaxHp = gameState.blackSkeleton.maxHp
      
    }
    //chosing target to damage
    let damage = 0
    if(gameState.dmgBoostAktive == true){
    damage = gameState.playerStats.dmg * gameState.dmgBoost.dmg - targetDeff
    }else{
    damage = gameState.playerStats.dmg - targetDeff 
    }
    if(target == gameState.enemy1){
       gameState.container1Hp -= damage
       hpContainer = gameState.container1Hp
    }else if (target == gameState.enemy2){
        gameState.container2Hp -= damage
        hpContainer = gameState.container2Hp
    }else if(target == gameState.enemy3){
        gameState.container3Hp -= damage
        hpContainer = gameState.container3Hp
    }
    
    
    //let movingArray = [gameState.player, gameState.playerShadow, hpText ]
   let playerTween = this.tweens.add({
       targets: movingArray,
       ease: "Linear",
       x: target.x - 50,
       y: target.y,
       yoyo: true, 
       duration: 1000, 
       onYoyo: () =>{
           playerTween.pause()
           target.list[3].anims.play("meleAttack", true)
           target.list[3].once("animationcomplete", () =>{
               let flotText = this.add.text(target.x, target.y, damage, {fontSize: 25, color: "#F20000",fontFamily: "Arial"}).setDepth(3)
               target.list[2].setText("HP " + hpContainer + "/" + targetMaxHp)
             this.tweens.add({
                 targets:flotText,
                 ease:"linear",
                 y:target.y - 40,
                 duration: 1000,
                 onComplete: () =>{
                     flotText.destroy()
                     
                 }
             })
              this.tweens.add({
                  targets: target,
                ease: "linear",
                x: target.x + 15,
                duration: 50, 
                yoyo: true,
                repeat: 1,
                onComplete: () =>{
                    
                    
                    
                    playerTween.resume()
                    if(gameState.container1Hp <= 0){
                        gameState.enemy1Alive = false
                        gameState.enemy1.destroy()
                    }
                    if(gameState.enemy2){
                    if(gameState.container2Hp <= 0){
                        gameState.enemy2Alive = false
                        gameState.enemy2.destroy()
                    }
                }else{
                    gameState.enemy2Alive = false
                }
                if(gameState.enemy3){
                    if(gameState.container3Hp <= 0){
                        gameState.enemy3Alive = false
                        gameState.enemy3.destroy()
                    }
                }else{
                    gameState.enemy3Alive = false
                }
                }
               })
             
            

           })
           
        
       },
       onComplete: () =>{
           
           enemy1turn = true
           enemy2turn = true
           enemy3turn = true
           gameState.dmgBoostAktive = false
           this.nextturn()
           if( gameState.enemy2Alive == false && gameState.enemy1Alive == false && gameState.enemy3Alive == false){
            this.time.addEvent({
                delay: 500,
                callback: () =>{
                    this.scene.stop("underGroundBattleGround")
                    this.scene.start("levlingUpScene")
                }
            })

           }
           
           
           
       }
   })
  
}
nextturn(){
    if(itemMenuOpen){
        itemMenuOpen = false
        itemMenuText.setColor("#FFFFFF")
    }
    if(playerTurn == false){
        if(enemy1turn == true && gameState.enemy1Alive == true){
            
            this.enemyAttack(gameState.enemy1, enemy1Tween)
        }else if(enemy2turn == true && gameState.enemy2Alive == true){
            this.enemyAttack(gameState.enemy2, enemy2Tween)
        }else if(enemy3turn == true && gameState.enemy3Alive == true){
            this.enemyAttack(gameState.enemy3, enemy3Tween)
        }else{
            if(gameState.defenceBoostAktive = true){
                gameState.defenceBoostAktive = false
            }
            playerTurn = true
        }

    }
}

}