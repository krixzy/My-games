
let playerStats

class menu extends Phaser.Scene{
    constructor(){
        super({key: "menu"})
    }
    preload(){


        //buff loading
        this.load.spritesheet("buff", "sprits/bufficons/buff.png", {frameWidth: 32, frameHeight: 32})



        //player loading
        this.load.spritesheet("mainChar", "sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})


        //armor loading

        this.load.spritesheet("armor", "sprits/equipment/armor.png", {frameWidth: 32, frameHeight: 32})


        //weapon loading

        this.load.image("rustySword", "sprits/equipment/weapons/rustysword.png")
        this.load.image("ironSword", "sprits/equipment/weapons/ironSword.png")
        this.load.image("blankWeapon", "sprits/equipment/weapons/blankweapon.png")


        //accessory loading

        this.load.image("copperRing", "sprits/equipment/accessory/copperRing.png")
        this.load.image("silverRing", "sprits/equipment/accessory/silverRing.png")



        //potion loading
        this.load.image("hpPotion", "sprits/consumables/HPPotion.png")
        this.load.image("mpPotion", "sprits/consumables/MPPotion.png")
        this.load.image("dmgBoost", "sprits/consumables/DMGBoost.png")
        this.load.image("magicBoost", "sprits/consumables/MAGICBoost.png")
        this.load.image("defenceBoost", "sprits/consumables/DEFENCEBoost.png")
        this.load.image("repelPotion", "sprits/consumables/REPELPotion.png")
    }






















    create(){


        //test
       
        console.log(gameState.curentPosition)

        gameState.armor.armorArray.push(gameState.armor.woodSheld)
                gameState.armor.armorArray.push(gameState.armor.woodSheld)
                gameState.armor.armorArray.push(gameState.armor.hardWoodSheld)
                gameState.armor.armorArray.push(gameState.armor.woodSheld)
                gameState.armor.armorArray.push(gameState.armor.woodSheld)
                gameState.armor.armorArray.push(gameState.armor.hardWoodSheld)
                gameState.armor.armorArray.push(gameState.armor.woodSheld)
                gameState.armor.armorArray.push(gameState.armor.woodSheld)
        gameState.weapon.weaponArray.push(gameState.weapon.rustySword)
        gameState.weapon.weaponArray.push(gameState.weapon.rustySword)
        gameState.weapon.weaponArray.push(gameState.weapon.ironSword)
        gameState.weapon.weaponArray.push(gameState.weapon.rustySword)
        gameState.weapon.weaponArray.push(gameState.weapon.rustySword)
        gameState.weapon.weaponArray.push(gameState.weapon.ironSword)
        gameState.weapon.weaponArray.push(gameState.weapon.rustySword)
        gameState.weapon.weaponArray.push(gameState.weapon.rustySword)
        gameState.accessory.accessoryArray.push(gameState.accessory.copperRing)
        gameState.accessory.accessoryArray.push(gameState.accessory.silverRing)
        gameState.accessory.accessoryArray.push(gameState.accessory.copperRing)
        gameState.accessory.accessoryArray.push(gameState.accessory.copperRing)
        gameState.accessory.accessoryArray.push(gameState.accessory.silverRing)
        gameState.accessory.accessoryArray.push(gameState.accessory.copperRing)
        gameState.accessory.accessoryArray.push(gameState.accessory.silverRing)
        gameState.accessory.accessoryArray.push(gameState.accessory.copperRing)
        //this.physics.add.sprite(500, 500, gameState.weapon.weaponArray[0].sprite).setScale(1.8).setDepth(4)



        //right top side box
        let charBox = this.add.rectangle(1050, 185, 1380, 350, 0x518CF3)
            charBox.isStroked = true
            charBox.lineWidth = 8
            charBox.strokeColor = "0xFFFFFF"





            //inside right top side box
                //player sprit
                this.physics.add.sprite(600, 170, "mainChar").setScale(3)
                
            //player Stats
            
            let style = {font: "35px Arial", fill: "#fff", align:"left", lineSpacing: 25}
            let playerStatsText = this.add.text(750, 70,   gameState.playerName + "\nLV:  " + gameState.playerStats.level + "\nHP:  " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp + "\nMP:  " + gameState.playerStats.mana + "/" + gameState.playerStats.maxMana,{font:"35px Arial", lineSpacing: "12"})
                playerStats = this.add.text(1050, 100, "Damage: " + gameState.playerStats.dmg + "\nMagic: " + gameState.playerStats.magic + "\nDefence: " + gameState.playerStats.defence, style )
            let playerGoldText = this.add.text ( 1400, 100, "gold " + gameState.playerStats.gold + "\ncurentXP: " + gameState.playerStats.curentXp + "\nXPforlevel: " + gameState.playerStats.xpForLevel, style)


            //aktive repelpotion
            if(gameState.repelPotionAktive == true){
                gameState.texts.repelTimer = this.add.text(600, 90, "Repel time left: " + Math.floor(gameState.repelTimer / 1000) + " sec", {font: "20px Arial"}).setOrigin(0.5, 0.5)
            }

            //aktive dmgboost
            if(gameState.dmgBoostAktive == true){
                gameState.buffs.dmgBuff = this.physics.add.sprite(565, 250, "buff").setFrame(276).setAlpha(0.7)
            }

            //aktive magicboost
            if(gameState.magicBoostAktive == true){
                gameState.buffs.magicBuff = this.physics.add.sprite(600, 250, "buff").setFrame(244).setAlpha(0.7)
            }

            //aktive defenceboost
            if(gameState.defenceBoostAktive == true){
                gameState.buffs.defenceBuff = this.physics.add.sprite(635, 250, "buff").setFrame(243).setAlpha(0.7)
            }
    
     
           
           


























        //left side box
       let sideBar = this.add.rectangle(175, 450, 335, 880, 0x518CF3)
       sideBar.isStroked = true
        sideBar.lineWidth = 8
        sideBar.strokeColor = "0xFFFFFF"



        //items
        gameState.menuItems.items = this.add.text(170, 80, "Items", style).setOrigin(0.5,0)
        gameState.menuItems.items.setInteractive()
        gameState.menuItems.items.on("pointerover", ()=>{
            gameState.menuItems.items.setColor("#000000")
            })
            gameState.menuItems.items.on("pointerout", () =>{
                if(gameState.checkList.items != true){
                gameState.menuItems.items.setColor("#FFFFFF")
                }
            })



        //Equipment
        gameState.menuItems.equipment = this.add.text(170, 215, "Equipment", style).setOrigin(0.5,0)
        gameState.menuItems.equipment.setInteractive()
      
        gameState.menuItems.equipment.on("pointerover", ()=>{
            gameState.menuItems.equipment.setColor("#000000")
            })
        
            gameState.menuItems.equipment.on("pointerout", () =>{
                if(gameState.checkList.equipment != true){
                gameState.menuItems.equipment.setColor("#FFFFFF")
                }
            })



        //Talent
        gameState.menuItems.talent = this.add.text(170, 350,"Talent", style).setOrigin(0.5,0)
        gameState.menuItems.talent.setInteractive()
        gameState.menuItems.talent.on("pointerover", ()=>{
            gameState.menuItems.talent.setColor("#000000")
            })
            gameState.menuItems.talent.on("pointerout", () =>{
                gameState.menuItems.talent.setColor("#FFFFFF")
            })
        



        //Save
        gameState.menuItems.save = this.add.text(170, 485, "Save", style).setOrigin(0.5,0)
        gameState.menuItems.save.setInteractive()
        gameState.menuItems.save.on("pointerover", ()=>{
            gameState.menuItems.save.setColor("#000000")
            })
            gameState.menuItems.save.on("pointerout", () =>{
                gameState.menuItems.save.setColor("#FFFFFF")
            })



        //option
        gameState.menuItems.option = this.add.text(170, 620, "Option", style).setOrigin(0.5,0)
        gameState.menuItems.option.setInteractive()
        gameState.menuItems.option.on("pointerover", ()=>{
            gameState.menuItems.option.setColor("#000000")
            })
            gameState.menuItems.option.on("pointerout", () =>{
                gameState.menuItems.option.setColor("#FFFFFF")
            })



        //exit
        gameState.menuItems.exit = this.add.text( 170, 755, "Exit", style).setOrigin(0.5,0)
        gameState.menuItems.exit.setInteractive()
        gameState.menuItems.exit.on("pointerover", ()=>{
            gameState.menuItems.exit.setColor("#000000")
            })
            gameState.menuItems.exit.on("pointerout", () =>{
                gameState.menuItems.exit.setColor("#FFFFFF")
            })
            gameState.menuItems.exit.on("pointerdown", () =>{
                gameState.checkList.items = false
                gameState.checkList.talent = false
                gameState.checkList.option = false
                gameState.checkList.equipment = false
                this.scene.stop("menu")
                this.scene.start(gameState.curentPosition.scene)
            })




            



























        //right bottom side box
        let bottomBox = this.add.rectangle(1050, 633, 1380, 515, 0x518CF3)
        bottomBox.isStroked = true
        bottomBox.lineWidth = 8
        bottomBox.strokeColor = "0xFFFFFF"






            //items menu
            gameState.menuItems.items.on("pointerdown", () =>{
                // check all other false
                gameState.checkList.equipment = false
                gameState.checkList.talent = false
                gameState.checkList.option = false
                gameState.checkList.weaponClicked = false
                gameState.checkList.armorClicked = false
                gameState.checkList.accessoryClicked = false

                //changing menu colors
                gameState.menuItems.equipment.setColor("#fff")
                //make the menu
                if(gameState.checkList.items == false){




                gameState.checkList.items = true
                let menuStyle = {font: "40px Arial", fill: "#fff", align:"center"}
                let itemStyle = {font: "20px Arial", fill: "#fff", align:"center"}
                let itemStyle0 = {font: "20px Arial", fill: "#D1D1D1", align: "center"}
                gameState.texts.item = this.add.text(1050, 400,"Items",menuStyle).setOrigin(0.5,0)

                //hpPotion 
                if (gameState.hpPotion.amount == 0){
                gameState.texts.hpPotion = this.add.text(750, 500, "HPPotion " + gameState.hpPotion.amount,itemStyle0).setOrigin(0.5,0)
                }else{
                    gameState.texts.hpPotion = this.add.text(750, 500, "HPPotion " + gameState.hpPotion.amount,itemStyle).setOrigin(0.5,0)    
                }
                gameState.texts.hpPotion.setInteractive()
                gameState.extraSprits.hpPotion = this.physics.add.sprite(695, 495, "hpPotion").setScale(2).setOrigin(1,0.3)

                //mpPotion
                if(gameState.mpPotion.amount == 0){
                gameState.texts.mpPotion = this.add.text(1350, 500, "MPPotion " + gameState.mpPotion.amount,itemStyle0).setOrigin(0.5, 0)
                }else{
                    gameState.texts.mpPotion = this.add.text(1350, 500, "MPPotion " + gameState.mpPotion.amount,itemStyle).setOrigin(0.5, 0)
                }
                gameState.texts.mpPotion.setInteractive()
                gameState.extraSprits.mpPotion = this.physics.add.sprite(1290, 495, "mpPotion").setScale(2).setOrigin(1,0.3)

                //dmgBoost
                if(gameState.dmgBoost.amount == 0){
                gameState.texts.dmgPotion = this.add.text(750, 600, "DmgBoost " + gameState.dmgBoost.amount,itemStyle0).setOrigin(0.5,0)
                }
                else{
                    gameState.texts.dmgPotion = this.add.text(750, 600, "DmgBoost " + gameState.dmgBoost.amount,itemStyle).setOrigin(0.5,0)
                }
                gameState.texts.dmgPotion.setInteractive()
               gameState.extraSprits.dmgBoost = this.physics.add.sprite(680, 600, "dmgBoost").setScale(1.5).setOrigin(1,0.3)

                //magicBooost
                if(gameState.magicBoost.amount == 0){
                gameState.texts.magicPotion = this.add.text(1350, 600, "MagicBoost "  + gameState.magicBoost.amount,itemStyle0).setOrigin(0.5,0)
                }else{
                    gameState.texts.magicPotion = this.add.text(1350, 600, "MagicBoost " + gameState.magicBoost.amount,itemStyle).setOrigin(0.5,0)
                }
                gameState.texts.magicPotion.setInteractive()
                gameState.extraSprits.magicBoost = this.physics.add.sprite(1275, 600, "magicBoost").setScale(1.5).setOrigin(1,0.3)

                //defenceBooost
                if(gameState.defenceBoost.amount == 0){
                gameState.texts.defencePotion = this.add.text(750, 700, "DefenceBoost " + gameState.defenceBoost.amount, itemStyle0).setOrigin(0.5,0)
                }else{
                    gameState.texts.defencePotion = this.add.text(750, 700, "DefenceBoost " + gameState.defenceBoost.amount, itemStyle).setOrigin(0.5,0)
                }
                gameState.texts.defencePotion.setInteractive()
                gameState.extraSprits.defencePotion = this.physics.add.sprite(660, 700, "defenceBoost").setOrigin(1, 0.3).setScale(1.5)

                //repelPotion
                if(gameState.repelPotion.amount == 0){
                gameState.texts.repelPotion = this.add.text(1350,700,"RepelPotion " + gameState.repelPotion.amount,itemStyle0).setOrigin(0.5,0)
                }else{
                    gameState.texts.repelPotion = this.add.text(1350,700,"RepelPotion " + gameState.repelPotion.amount,itemStyle).setOrigin(0.5,0)
                }
                gameState.texts.repelPotion.setInteractive()
                gameState.extraSprits.repelPotion = this.physics.add.sprite(1280, 695, "repelPotion").setOrigin(1,0.3).setScale(2)
                     
                
                }












                //item pointerover



                    //hpPotion
                gameState.texts.hpPotion.on("pointerover", () =>{
                    gameState.texts.hpPotion.setColor("#000000")
                    gameState.texts.hpPotionText = this.add.text(840, 510, "Healing potion:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                    gameState.texts.hpPotionText2 = this.add.text(840, 560, "Restoring: "+ gameState.hpPotion.hp + "HP", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                    gameState.texts.hpPotionTextBox = this.add.rectangle(gameState.texts.hpPotionText.x , gameState.texts.hpPotionText.y , 200, 100, 0x518CF3, {align: "center"}).setOrigin(0.1,0.1)
                    gameState.texts.hpPotionTextBox.isStroked = true
                    gameState.texts.hpPotionTextBox.lineWidth = 2
                    gameState.texts.hpPotionTextBox.strokeColor = "0x000000"
                 

                 })
                 gameState.texts.hpPotion.on("pointerout", () =>{
                     if(gameState.hpPotion.amount == 0){
                         gameState.texts.hpPotion.setColor("#D1D1D1")
                     }else{
                 gameState.texts.hpPotion.setColor("#FFFFFF")
                     }
                 gameState.texts.hpPotionText.destroy()
                 gameState.texts.hpPotionTextBox.destroy()
                 gameState.texts.hpPotionText2.destroy()
                })




                    //mpPotion
                    gameState.texts.mpPotion.on("pointerover", () =>{
                        gameState.texts.mpPotion.setColor("#000000")
                        gameState.texts.mpPotionText = this.add.text(1440, 510, "Mana potion:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                        gameState.texts.mpPotionText2 = this.add.text(1440, 560, "Restoring: "+ gameState.mpPotion.mana + "MP", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                        gameState.texts.mpPotionTextBox = this.add.rectangle(gameState.texts.mpPotionText.x , gameState.texts.mpPotionText.y , 200, 100, 0x518CF3, {align: "center"}).setOrigin(0.1,0.1)
                        gameState.texts.mpPotionTextBox.isStroked = true
                        gameState.texts.mpPotionTextBox.lineWidth = 2
                        gameState.texts.mpPotionTextBox.strokeColor = "0x000000"
                     
    
                     })
                     gameState.texts.mpPotion.on("pointerout", () =>{
                         if(gameState.mpPotion.amount == 0){
                             gameState.texts.mpPotion.setColor("#D1D1D1")
                         }else{
                     gameState.texts.mpPotion.setColor("#FFFFFF")
                         }
                     gameState.texts.mpPotionText.destroy()
                     gameState.texts.mpPotionTextBox.destroy()
                     gameState.texts.mpPotionText2.destroy()
                    })



                    //dmgBoost
                    gameState.texts.dmgPotion.on("pointerover", () =>{
                        gameState.texts.dmgPotion.setColor("#000000")
                        gameState.texts.dmgPotionText = this.add.text(840, 610, "Damage boost:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                        gameState.texts.dmgPotionText2 = this.add.text(840, 660, "Give: "+ gameState.dmgBoost.dmg + "* damage", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                        gameState.texts.dmgPotionTextBox = this.add.rectangle(gameState.texts.dmgPotionText.x , gameState.texts.dmgPotionText.y , 200, 100, 0x518CF3, {align: "center"}).setOrigin(0.1,0.1)
                        gameState.texts.dmgPotionTextBox.isStroked = true
                        gameState.texts.dmgPotionTextBox.lineWidth = 2
                        gameState.texts.dmgPotionTextBox.strokeColor = "0x000000"
                     
    
                     })
                     gameState.texts.dmgPotion.on("pointerout", () =>{
                         if(gameState.dmgBoost.amount == 0){
                             gameState.texts.dmgPotion.setColor("#D1D1D1")
                         }else{
                     gameState.texts.dmgPotion.setColor("#FFFFFF")
                         }
                     gameState.texts.dmgPotionText.destroy()
                     gameState.texts.dmgPotionTextBox.destroy()
                     gameState.texts.dmgPotionText2.destroy()
                    })



                    


                    //magicBoost
                    gameState.texts.magicPotion.on("pointerover", () =>{
                        gameState.texts.magicPotion.setColor("#000000")
                        gameState.texts.magicPotionText = this.add.text(1440, 610, "Magic boost:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                        gameState.texts.magicPotionText2 = this.add.text(1440, 660, "Give: "+ gameState.magicBoost.dmg + "* magic", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                        gameState.texts.magicPotionTextBox = this.add.rectangle(gameState.texts.magicPotionText.x , gameState.texts.magicPotionText.y , 200, 100, 0x518CF3, {align: "center"}).setOrigin(0.1,0.1)
                        gameState.texts.magicPotionTextBox.isStroked = true
                        gameState.texts.magicPotionTextBox.lineWidth = 2
                        gameState.texts.magicPotionTextBox.strokeColor = "0x000000"
                     
    
                     })
                     gameState.texts.magicPotion.on("pointerout", () =>{
                         if(gameState.magicBoost.amount == 0){
                             gameState.texts.magicPotion.setColor("#D1D1D1")
                         }else{
                     gameState.texts.magicPotion.setColor("#FFFFFF")
                         }
                     gameState.texts.magicPotionText.destroy()
                     gameState.texts.magicPotionTextBox.destroy()
                     gameState.texts.magicPotionText2.destroy()
                    })







                    //defenceboost
                    gameState.texts.defencePotion.on("pointerover", () =>{
                        gameState.texts.defencePotion.setColor("#000000")
                        gameState.texts.defencePotionText = this.add.text(850, 710, "Defence boost:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                        gameState.texts.defencePotionText2 = this.add.text(850, 760, "Give: "+ gameState.defenceBoost.defence + " defence", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                        gameState.texts.defencePotionTextBox = this.add.rectangle(gameState.texts.defencePotionText.x , gameState.texts.defencePotionText.y , 200, 100, 0x518CF3, {align: "center"}).setOrigin(0.1,0.1)
                        gameState.texts.defencePotionTextBox.isStroked = true
                        gameState.texts.defencePotionTextBox.lineWidth = 2
                        gameState.texts.defencePotionTextBox.strokeColor = "0x000000"
                     
    
                     })
                     gameState.texts.defencePotion.on("pointerout", () =>{
                         if(gameState.defenceBoost.amount == 0){
                             gameState.texts.defencePotion.setColor("#D1D1D1")
                         }else{
                     gameState.texts.defencePotion.setColor("#FFFFFF")
                         }
                     gameState.texts.defencePotionText.destroy()
                     gameState.texts.defencePotionTextBox.destroy()
                     gameState.texts.defencePotionText2.destroy()
                    })







                    //repelpotion
                    gameState.texts.repelPotion.on("pointerover", () =>{
                        gameState.texts.repelPotion.setColor("#000000")
                        gameState.texts.repelPotionText = this.add.text(1445, 710, "Repel potion:" , {font: "25px Arial",color: "#000000"}).setDepth(1)
                        gameState.texts.repelPotionText2 = this.add.text(1445, 750, "Repel enemies: \n"+ gameState.repelPotion.duration / 1000 + " Seconds", {font: "20px Times New Roman", color: "#0BE900"}).setDepth(1)
                        gameState.texts.repelPotionTextBox = this.add.rectangle(gameState.texts.repelPotionText.x , gameState.texts.repelPotionText.y , 200, 100, 0x518CF3, {align: "center"}).setOrigin(0.1,0.1)
                        gameState.texts.repelPotionTextBox.isStroked = true
                        gameState.texts.repelPotionTextBox.lineWidth = 2
                        gameState.texts.repelPotionTextBox.strokeColor = "0x000000"
                     
    
                     })
                     gameState.texts.repelPotion.on("pointerout", () =>{
                         if(gameState.repelPotion.amount == 0){
                             gameState.texts.repelPotion.setColor("#D1D1D1")
                         }else{
                     gameState.texts.repelPotion.setColor("#FFFFFF")
                         }
                     gameState.texts.repelPotionText.destroy()
                     gameState.texts.repelPotionTextBox.destroy()
                     gameState.texts.repelPotionText2.destroy()
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
                               playerStatsText.setText(gameState.playerName + "\nLV:  " + gameState.playerStats.level + "\nHP:  " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp + "\nMP:  " + gameState.playerStats.mana + "/" + gameState.playerStats.maxMana)
                               gameState.hpPotion.amount -= 1
                               if(gameState.hpPotion.amount  == 0){
                                   gameState.texts.hpPotion.setText("HPPotion " + gameState.hpPotion.amount)
                                   gameState.texts.hpPotion.setTexture(itemStyle0)
                               }else{
                                   gameState.texts.hpPotion.setText("HPPotion " + gameState.hpPotion.amount)
                               }
                            }else{
                                gameState.playerStats.hp += gameState.hpPotion.hp
                                playerStatsText.setText(gameState.playerName + "\nLV:  " + gameState.playerStats.level + "\nHP:  " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp + "\nMP:  " + gameState.playerStats.mana + "/" + gameState.playerStats.maxMana)
                                gameState.hpPotion.amount -= 1
                                if(gameState.hpPotion.amount  == 0){
                                    gameState.texts.hpPotion.setText("HPPotion " + gameState.hpPotion.amount)
                                   
                                }else{
                                    gameState.texts.hpPotion.setText("HPPotion " + gameState.hpPotion.amount)
                                }
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
                               playerStatsText.setText(gameState.playerName + "\nLV:  " + gameState.playerStats.level + "\nHP:  " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp + "\nMP:  " + gameState.playerStats.mana + "/" + gameState.playerStats.maxMana)
                               gameState.mpPotion.amount -= 1
                               if(gameState.mpPotion.amount  == 0){
                                   gameState.texts.mpPotion.setText("MPPotion " + gameState.mpPotion.amount)
                                   gameState.texts.mpPotion.setTexture(itemStyle0)
                               }else{
                                   gameState.texts.mpPotion.setText("MPPotion " + gameState.mpPotion.amount)
                               }
                            }else{
                                gameState.playerStats.mana += gameState.mpPotion.mana
                                playerStatsText.setText(gameState.playerName + "\nLV:  " + gameState.playerStats.level + "\nHP:  " + gameState.playerStats.hp + "/" + gameState.playerStats.maxHp + "\nMP:  " + gameState.playerStats.mana + "/" + gameState.playerStats.maxMana)
                                gameState.mpPotion.amount -= 1
                                if(gameState.mpPotion.amount  == 0){
                                    gameState.texts.mpPotion.setText("MPPotion " + gameState.mpPotion.amount)
                                   
                                }else{
                                    gameState.texts.mpPotion.setText("MPPotion " + gameState.mpPotion.amount)
                                }
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
                                gameState.buffs.dmgBuff = this.physics.add.sprite(565, 250, "buff").setFrame(276).setAlpha(0.7)
                                gameState.dmgBoost.amount -= 1
                                gameState.texts.dmgPotion.setText("DmgBoost "  + gameState.dmgBoost.amount)
                            }
                        })


                        //magicBuff
                        gameState.texts.magicPotion.on  ("pointerdown", () =>{
                            if(gameState.magicBoostAktive == true && gameState.magicBoost.amount > 0){
                                alert("allready aktive")
                            }
                            else if(gameState.magicBoost.amount > 0){
                                gameState.magicBoostAktive = true
                                console.log(gameState.magicBoostAktive)
                                gameState.buffs.magicBuff = this.physics.add.sprite(600, 250, "buff").setFrame(244).setAlpha(0.7)
                                gameState.magicBoost.amount -= 1
                                gameState.texts.magicPotion.setText("magicBoost "  + gameState.magicBoost.amount)
                            }
                        })

                        //defenceBuff
                        gameState.texts.defencePotion.on  ("pointerdown", () =>{
                            if(gameState.defenceBoostAktive == true && gameState.defenceBoost.amount > 0){
                                alert("allready aktive")
                            }
                            else if(gameState.defenceBoost.amount > 0){
                                gameState.defenceBoostAktive = true
                                console.log(gameState.defenceBoostAktive)
                                gameState.buffs.defenceBuff = this.physics.add.sprite(635, 250, "buff").setFrame(243).setAlpha(0.7)
                                gameState.defenceBoost.amount -= 1
                                gameState.texts.defencePotion.setText("defenceBoost "  + gameState.defenceBoost.amount)
                            }

                        })
                        gameState.texts.repelPotion.on  ("pointerdown", () =>{
                            if(gameState.repelPotionAktive == true && gameState.repelPotion.amount > 0){
                                alert("allready aktive")
                            }
                            else if(gameState.repelPotion.amount > 0){
                                gameState.repelPotionAktive = true
                                console.log(gameState.repelPotionAktive)
                                gameState.repelPotion.amount -= 1
                                gameState.texts.repelPotion.setText("RepelPotion "  + gameState.repelPotion.amount)
                                gameState.repelTimer = gameState.repelPotion.duration
                                gameState.texts.repelTimer = this.add.text(600, 90, "Repel time left: " + Math.floor(gameState.repelTimer / 1000) + " sec", {font: "20px Arial"}).setOrigin(0.5, 0.5)
                            }
                            
                            //console.log(gameState.timeEvent.elapsed)

                        })
                })

               
                
               






                    


















            //equipment menu
            gameState.menuItems.equipment.on("pointerdown", () =>{
                
                //checking all false
                gameState.checkList.items = false
                gameState.checkList.talent = false
                gameState.checkList.option = false



                //change menu colors
                gameState.menuItems.items.setColor("#FFFFFF")
                
                //making the menu
                if (gameState.checkList.equipment == false){
                gameState.checkList.equipment = true
                gameState.texts.equipment = this.add.text(1050, 400,"Equipment", {font: "35px Arial"}).setOrigin(0.5,0)


                //making invintory box
                gameState.boxes.armorbox = this.add.rectangle(900, 450, 750, 410, 0x518CF3).setOrigin(0, 0)
                gameState.boxes.armorbox.isStroked = true
                gameState.boxes.armorbox.strokeColor = 0x000000
                gameState.boxes.armorbox.lineWidth = 4

                gameState.texts.inventory = this.add.text(1280, 460, "inventory",{font:"30px Arial"}).setOrigin(0.5,0)


                    //left side equiped
                    gameState.texts.equipped = this.add.text(600, 460, "Current equipped", {font: "30px Arial"})
                        //armor
                    gameState.texts.equippedArmor = this.add.text(740, 540, "Armor", {font: "25px Times New Roman"})
                    gameState.extraSprits.equippedArmor = this.physics.add.sprite(gameState.texts.equippedArmor.x - 10, gameState.texts.equippedArmor.y, "armor").setScale(2).setFrame(gameState.extraSprits.frames.armorFrame).setOrigin(1,0.3)
                    gameState.texts.equippedArmor.setInteractive()
                        //weapon
                    gameState.texts.equippedweapon = this.add.text(740, 650, "Weapon",{font: "25px Times New Roman"})
                    gameState.extraSprits.equippedWeapon = this.physics.add.sprite(gameState.texts.equippedweapon.x - 10, gameState.texts.equippedweapon.y, gameState.extraSprits.frames.weaponSprite).setScale(1.8).setOrigin(1,0.3)
                    gameState.texts.equippedweapon.setInteractive()
                        //accessory
                    gameState.texts.equippedAccessory = this.add.text(740, 760, "Accessory", {font:"25px Times New Roman"})
                    gameState.extraSprits.equippedAccessory = this.physics.add.sprite(gameState.texts.equippedAccessory.x - 10, gameState.texts.equippedAccessory.y, gameState.extraSprits.frames.accessorySprite).setScale(1.8).setOrigin(1,0.3)
                    gameState.texts.equippedAccessory.setInteractive()



                    

                        //hover over
                        gameState.texts.equippedArmor.on("pointerover", () =>{
                            gameState.texts.equippedArmor.setColor("#000000")
                        })
                        gameState.texts.equippedweapon.on("pointerover", () =>{
                            gameState.texts.equippedweapon.setColor("#000000")
                        })
                        gameState.texts.equippedAccessory.on("pointerover", () =>{
                            gameState.texts.equippedAccessory.setColor("#000000")
                        })

                        //hover out
                        gameState.texts.equippedArmor.on("pointerout", ()=>{
                         if(gameState.checkList.armorClicked != true){
                            gameState.texts.equippedArmor.setColor("#fff")
                         }
                        })
                        gameState.texts.equippedweapon.on("pointerout", () =>{
                            if(gameState.checkList.weaponClicked != true){
                                gameState.texts.equippedweapon.setColor("#fff")
                            }
                        })
                        gameState.texts.equippedAccessory.on("pointerout", () =>{
                            if(gameState.checkList.accessoryClicked != true){
                                gameState.texts.equippedAccessory.setColor("#fff")
                            }
                        })
                    }
                        //right side equiped

                        //armor click
                        gameState.texts.equippedArmor.on("pointerdown", () =>{
                        

                            if(gameState.checkList.armorClicked != true){

                            //checklist
                            gameState.checkList.armorClicked = true
                            gameState.checkList.weaponClicked = false
                            gameState.checkList.accessoryClicked = false

                            //changecolor 
                            gameState.texts.equippedweapon.setColor("#fff")
                            gameState.texts.equippedAccessory.setColor("#fff")
                            
                                //textStyle
                                let armorStyle = {font: "25px Times New Roman", color: "#ffffff", tint: "0xffffff"}
                                let armorStyleEquiped = {font: "bold 30px Times New Roman", tint: "0x000000"}
                                //text in box

                                if(gameState.checkList.armor.armorText1 != true){
                                gameState.texts.armorText1 = this.add.text(1050, 540, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.armorText1 = this.add.text(1050, 540, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.armorText1.setInteractive()
                            if(gameState.checkList.armor.armorText2 != true){
                                gameState.texts.armorText2 = this.add.text(1460, 540, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.armorText2 = this.add.text(1460, 540, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.armorText2.setInteractive()
                            if(gameState.checkList.armor.armorText3 != true){
                                gameState.texts.armorText3 = this.add.text(1050, 640, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.armorText3 = this.add.text(1050, 640, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.armorText3.setInteractive()
                            if(gameState.checkList.armor.armorText4 != true){
                                gameState.texts.armorText4 = this.add.text(1460, 640, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.armorText4 = this.add.text(1460, 640, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.armorText4.setInteractive()
                            if(gameState.checkList.armor.armorText5 != true){
                                gameState.texts.armorText5 = this.add.text(1050, 740, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.armorText5 = this.add.text(1050, 740, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.armorText5.setInteractive()
                            if(gameState.checkList.armor.armorText6 != true){
                                gameState.texts.armorText6 = this.add.text(1460, 740, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.armorText6 = this.add.text(1460, 740, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.armorText6.setInteractive()
                            if(gameState.checkList.armor.armorText7 != true){
                                gameState.texts.armorText7 = this.add.text(1050, 840, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.armorText7 = this.add.text(1050, 840, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.armorText7.setInteractive()
                            if(gameState.checkList.armor.armorText8 != true){
                                gameState.texts.armorText8 = this.add.text(1460, 840, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.armorText8 = this.add.text(1460, 840, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.armorText8.setInteractive()









                            //setting armor names and sprits
                              for(let i = 0; i < gameState.armor.armorArray.length; i++){
                        if(i == 0){
                            gameState.texts.armorText1.setText(gameState.armor.armorArray[i].id)
                            gameState.texts.armorText1.setColor(gameState.armor.armorArray[i].color)
                            gameState.extraSprits.armorSprite1 = this.physics.add.sprite(950, 540, "armor").setOrigin(0.5, 0.6).setScale(2).setFrame(gameState.armor.armorArray[i].frame)
                        }else if(i == 1){
                            gameState.texts.armorText2.setText(gameState.armor.armorArray[i].id)
                            gameState.texts.armorText2.setColor(gameState.armor.armorArray[i].color)
                            gameState.extraSprits.armorSprite2 = this.physics.add.sprite(1360, 540, "armor").setOrigin(0.5, 0.6).setScale(2).setFrame(gameState.armor.armorArray[i].frame)
                        }else if(i == 2){
                            gameState.texts.armorText3.setText(gameState.armor.armorArray[i].id)
                            gameState.texts.armorText3.setColor(gameState.armor.armorArray[i].color)
                            gameState.extraSprits.armorSprite3 = this.physics.add.sprite(950, 640, "armor").setOrigin(0.5, 0.6).setScale(2).setFrame(gameState.armor.armorArray[i].frame)
                        }else if(i == 3){
                            gameState.texts.armorText4.setText(gameState.armor.armorArray[i].id)
                            gameState.texts.armorText4.setColor(gameState.armor.armorArray[i].color)
                            gameState.extraSprits.armorSprite4 = this.physics.add.sprite(1360, 640, "armor").setOrigin(0.5, 0.6).setScale(2).setFrame(gameState.armor.armorArray[i].frame)
                        }else if(i == 4){
                            gameState.texts.armorText5.setText(gameState.armor.armorArray[i].id)
                            gameState.texts.armorText5.setColor(gameState.armor.armorArray[i].color)
                            gameState.extraSprits.armorSprite5 = this.physics.add.sprite(950, 740, "armor").setOrigin(0.5, 0.6).setScale(2).setFrame(gameState.armor.armorArray[i].frame)
                        }else if(i == 5){
                            gameState.texts.armorText6.setText(gameState.armor.armorArray[i].id)
                            gameState.texts.armorText6.setColor(gameState.armor.armorArray[i].color)
                            gameState.extraSprits.armorSprite6 = this.physics.add.sprite(1360, 740, "armor").setOrigin(0.5, 0.6).setScale(2).setFrame(gameState.armor.armorArray[i].frame)
                        }else if(i == 6){
                            gameState.texts.armorText7.setText(gameState.armor.armorArray[i].id)
                            gameState.texts.armorText7.setColor(gameState.armor.armorArray[i].color)
                            gameState.extraSprits.armorSprite7 = this.physics.add.sprite(950, 840, "armor").setOrigin(0.5, 0.6).setScale(2).setFrame(gameState.armor.armorArray[i].frame)
                        }else if(i == 7){
                            gameState.texts.armorText8.setText(gameState.armor.armorArray[i].id)
                            gameState.texts.armorText8.setColor(gameState.armor.armorArray[i].color)
                            gameState.extraSprits.armorSprite8 = this.physics.add.sprite(1360, 840, "armor").setOrigin(0.5, 0.6).setScale(2).setFrame(gameState.armor.armorArray[i].frame)
                        }

                    }

                        //hover over armor
                        gameState.texts.armorText1.on("pointerover", () =>{
                            if(gameState.extraSprits.armorSprite1){
                                this.armorText(gameState.armor.armorArray[0], gameState.texts.armorText1)
                           
                            }    
                        })
                        gameState.texts.armorText2.on("pointerover", () =>{
                            if(gameState.extraSprits.armorSprite2){
                                this.armorText(gameState.armor.armorArray[1], gameState.texts.armorText2)
                           
                            }         
                        })
                        gameState.texts.armorText3.on("pointerover", () =>{
                            if(gameState.extraSprits.armorSprite3){
                                this.armorText(gameState.armor.armorArray[2], gameState.texts.armorText3)
                           
                            }       
                        })
                        gameState.texts.armorText4.on("pointerover", () =>{
                            if(gameState.extraSprits.armorSprite4){
                                this.armorText(gameState.armor.armorArray[3], gameState.texts.armorText4)
                           
                            }    
                        })
                        gameState.texts.armorText5.on("pointerover", () =>{
                            if(gameState.extraSprits.armorSprite5){
                                this.armorText(gameState.armor.armorArray[4], gameState.texts.armorText5)
                           
                            }         
                        })
                        gameState.texts.armorText6.on("pointerover", () =>{
                            if(gameState.extraSprits.armorSprite6){
                                this.armorText(gameState.armor.armorArray[5], gameState.texts.armorText6)
                           
                            }       
                        })
                        gameState.texts.armorText7.on("pointerover", () =>{
                            if(gameState.extraSprits.armorSprite7){
                                this.armorText(gameState.armor.armorArray[6], gameState.texts.armorText7)
                           
                            }    
                        })
                        gameState.texts.armorText8.on("pointerover", () =>{
                            if(gameState.extraSprits.armorSprite8){
                                this.armorText(gameState.armor.armorArray[7], gameState.texts.armorText8)
                           
                            }         
                        })





                        //remove mouse from armor
                        gameState.texts.armorText1.on("pointerout", () =>{
                            this.armorTextRemove(gameState.texts.armorText1, gameState.checkList.armor.armorText1)
                        })
                        gameState.texts.armorText2.on("pointerout", () =>{
                            this.armorTextRemove(gameState.texts.armorText2, gameState.checkList.armor.armorText2)
                        })
                        gameState.texts.armorText3.on("pointerout", () =>{
                            this.armorTextRemove(gameState.texts.armorText3, gameState.checkList.armor.armorText3)
                        })
                        gameState.texts.armorText4.on("pointerout", () =>{
                            this.armorTextRemove(gameState.texts.armorText4, gameState.checkList.armor.armorText4)
                        })
                        gameState.texts.armorText5.on("pointerout", () =>{
                            this.armorTextRemove(gameState.texts.armorText5, gameState.checkList.armor.armorText5)
                        })
                        gameState.texts.armorText6.on("pointerout", () =>{
                            this.armorTextRemove(gameState.texts.armorText6, gameState.checkList.armor.armorText6)
                        })
                        gameState.texts.armorText7.on("pointerout", () =>{
                            this.armorTextRemove(gameState.texts.armorText7, gameState.checkList.armor.armorText7)
                        })
                        gameState.texts.armorText8.on("pointerout", () =>{
                            this.armorTextRemove(gameState.texts.armorText8 ,gameState.checkList.armor.armorText8)
                        })









                        //clicking armor item
                        gameState.texts.armorText1.on("pointerdown", () =>{
                            this.equippedArmorChange(gameState.armor.armorArray[0])
                            gameState.checkList.armor.armorText1 = true
                            gameState.texts.armorText1.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedArmor.setFrame(gameState.armor.armorArray[0].frame)
                            gameState.extraSprits.frames.armorFrame = gameState.armor.armorArray[0].frame
                            gameState.checkList.isArmorEquiped = true
                           
                        })
                        gameState.texts.armorText2.on("pointerdown", () =>{
                            this.equippedArmorChange(gameState.armor.armorArray[1])
                            gameState.checkList.armor.armorText2 = true
                            gameState.texts.armorText2.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedArmor.setFrame(gameState.armor.armorArray[1].frame)
                            gameState.extraSprits.frames.armorFrame = gameState.armor.armorArray[1].frame
                            gameState.checkList.isArmorEquiped = true
                          
                            })
                        gameState.texts.armorText3.on("pointerdown", () =>{
                            this.equippedArmorChange(gameState.armor.armorArray[2])
                            gameState.checkList.armor.armorText3 = true
                            gameState.texts.armorText3.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedArmor.setFrame(gameState.armor.armorArray[2].frame)
                            gameState.extraSprits.frames.armorFrame = gameState.armor.armorArray[2].frame
                            gameState.checkList.isArmorEquiped = true
                            
                            })
                         gameState.texts.armorText4.on("pointerdown", () =>{
                            this.equippedArmorChange(gameState.armor.armorArray[3])
                            gameState.checkList.armor.armorText4 = true
                            gameState.texts.armorText4.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedArmor.setFrame(gameState.armor.armorArray[3].frame)
                            gameState.extraSprits.frames.armorFrame = gameState.armor.armorArray[3].frame
                            gameState.checkList.isArmorEquiped = true
                           
                            })
                        gameState.texts.armorText5.on("pointerdown", () =>{
                            this.equippedArmorChange(gameState.armor.armorArray[4])
                            gameState.checkList.armor.armorText5 = true
                            gameState.texts.armorText5.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedArmor.setFrame(gameState.armor.armorArray[4].frame)
                            gameState.extraSprits.frames.armorFrame = gameState.armor.armorArray[4].frame
                            gameState.checkList.isArmorEquiped = true
                            
                            })
                         gameState.texts.armorText6.on("pointerdown", () =>{
                            this.equippedArmorChange(gameState.armor.armorArray[5])
                            gameState.checkList.armor.armorText6 = true
                            gameState.texts.armorText6.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedArmor.setFrame(gameState.armor.armorArray[5].frame)
                            gameState.extraSprits.frames.armorFrame = gameState.armor.armorArray[5].frame
                            gameState.checkList.isArmorEquiped = true
                            
                            })
                         gameState.texts.armorText7.on("pointerdown", () =>{
                            this.equippedArmorChange(gameState.armor.armorArray[6])
                            gameState.checkList.armor.armorText7 = true
                            gameState.texts.armorText7.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedArmor.setFrame(gameState.armor.armorArray[6].frame)
                            gameState.extraSprits.frames.armorFrame = gameState.armor.armorArray[6].frame
                            gameState.checkList.isArmorEquiped = true
                            
                            })
                         gameState.texts.armorText8.on("pointerdown", () =>{
                            this.equippedArmorChange(gameState.armor.armorArray[7])
                            gameState.checkList.armor.armorText8 = true
                            gameState.texts.armorText8.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedArmor.setFrame(gameState.armor.armorArray[7].frame)
                            gameState.extraSprits.frames.armorFrame = gameState.armor.armorArray[7].frame
                            gameState.checkList.isArmorEquiped = true
                           
                            })

                        }





                    })



                            
                    //weapon clicked
                        gameState.texts.equippedweapon.on("pointerdown", () =>{

                            if(gameState.checkList.weaponClicked != true){

                            //check list
                            gameState.checkList.weaponClicked = true
                            gameState.checkList.armorClicked = false
                            gameState.checkList.accessoryClicked = false

                            //change color
                            gameState.texts.equippedArmor.setColor("#ffffff")
                            gameState.texts.equippedAccessory.setColor("#ffffff")



                            //textStyle
                            let armorStyle = {font: "25px Times New Roman", color: "#ffffff", tint: "0xffffff"}
                            let armorStyleEquiped = {font: "bold 30px Times New Roman", tint: "0x000000"}



                            //text in box
                            if(gameState.checkList.weapon.weaponText1 != true){
                            gameState.texts.weaponText1 = this.add.text(1050, 540, "............", armorStyle).setOrigin(0.3, 1)
                            }else{
                            gameState.texts.weaponText1 = this.add.text(1050, 540, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                            }
                        gameState.texts.weaponText1.setInteractive()
                        if(gameState.checkList.weapon.weaponText2 != true){
                            gameState.texts.weaponText2 = this.add.text(1460, 540, "............", armorStyle).setOrigin(0.3, 1)
                            }else{
                            gameState.texts.weaponText2 = this.add.text(1460, 540, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                            }
                        gameState.texts.weaponText2.setInteractive()
                        if(gameState.checkList.weapon.weaponText3 != true){
                            gameState.texts.weaponText3 = this.add.text(1050, 640, "............", armorStyle).setOrigin(0.3, 1)
                            }else{
                            gameState.texts.weaponText3 = this.add.text(1050, 640, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                            }
                        gameState.texts.weaponText3.setInteractive()
                        if(gameState.checkList.weapon.weaponText4 != true){
                            gameState.texts.weaponText4 = this.add.text(1460, 640, "............", armorStyle).setOrigin(0.3, 1)
                            }else{
                            gameState.texts.weaponText4 = this.add.text(1460, 640, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                            }
                        gameState.texts.weaponText4.setInteractive()
                        if(gameState.checkList.weapon.weaponText5 != true){
                            gameState.texts.weaponText5 = this.add.text(1050, 740, "............", armorStyle).setOrigin(0.3, 1)
                            }else{
                            gameState.texts.weaponText5 = this.add.text(1050, 740, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                            }
                        gameState.texts.weaponText5.setInteractive()
                        if(gameState.checkList.weapon.weaponText6 != true){
                            gameState.texts.weaponText6 = this.add.text(1460, 740, "............", armorStyle).setOrigin(0.3, 1)
                            }else{
                            gameState.texts.weaponText6 = this.add.text(1460, 740, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                            }
                        gameState.texts.weaponText6.setInteractive()
                        if(gameState.checkList.armor.weaponText7 != true){
                            gameState.texts.weaponText7 = this.add.text(1050, 840, "............", armorStyle).setOrigin(0.3, 1)
                            }else{
                            gameState.texts.weaponText7 = this.add.text(1050, 840, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                            }
                        gameState.texts.weaponText7.setInteractive()
                        if(gameState.checkList.weapon.weaponText8 != true){
                            gameState.texts.weaponText8 = this.add.text(1460, 840, "............", armorStyle).setOrigin(0.3, 1)
                            }else{
                            gameState.texts.weaponText8 = this.add.text(1460, 840, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                            }
                        gameState.texts.weaponText8.setInteractive()




                        //setting weapon names and sprits
                        for(let i = 0; i < gameState.weapon.weaponArray.length; i++){
                            if(i == 0){
                                gameState.texts.weaponText1.setText(gameState.weapon.weaponArray[i].id)
                                gameState.texts.weaponText1.setColor(gameState.weapon.weaponArray[i].color)
                                gameState.extraSprits.weaponSprite1 = this.physics.add.sprite(950, 540, gameState.weapon.weaponArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 1){
                                gameState.texts.weaponText2.setText(gameState.weapon.weaponArray[i].id)
                                gameState.texts.weaponText2.setColor(gameState.weapon.weaponArray[i].color)
                                gameState.extraSprits.weaponSprite2 = this.physics.add.sprite(1360, 540, gameState.weapon.weaponArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 2){
                                gameState.texts.weaponText3.setText(gameState.weapon.weaponArray[i].id)
                                gameState.texts.weaponText3.setColor(gameState.weapon.weaponArray[i].color)
                                gameState.extraSprits.weaponSprite3 = this.physics.add.sprite(950, 640, gameState.weapon.weaponArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 3){
                                gameState.texts.weaponText4.setText(gameState.weapon.weaponArray[i].id)
                                gameState.texts.weaponText4.setColor(gameState.weapon.weaponArray[i].color)
                                gameState.extraSprits.weaponSprite4 = this.physics.add.sprite(1360, 640, gameState.weapon.weaponArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 4){
                                gameState.texts.weaponText5.setText(gameState.weapon.weaponArray[i].id)
                                gameState.texts.weaponText5.setColor(gameState.weapon.weaponArray[i].color)
                                gameState.extraSprits.weaponSprite5 = this.physics.add.sprite(950, 740, gameState.weapon.weaponArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 5){
                                gameState.texts.weaponText6.setText(gameState.weapon.weaponArray[i].id)
                                gameState.texts.weaponText6.setColor(gameState.weapon.weaponArray[i].color)
                                gameState.extraSprits.weaponSprite6 = this.physics.add.sprite(1360, 740, gameState.weapon.weaponArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 6){
                                gameState.texts.weaponText7.setText(gameState.weapon.weaponArray[i].id)
                                gameState.texts.weaponText7.setColor(gameState.weapon.weaponArray[i].color)
                                gameState.extraSprits.weaponSprite7 = this.physics.add.sprite(950, 840, gameState.weapon.weaponArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 7){
                                gameState.texts.weaponText8.setText(gameState.weapon.weaponArray[i].id)
                                gameState.texts.weaponText8.setColor(gameState.weapon.weaponArray[i].color)
                                gameState.extraSprits.weaponSprite8 = this.physics.add.sprite(1360, 840, gameState.weapon.weaponArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                                
                        }
                    }



                        //hover over weapon
                        gameState.texts.weaponText1.on("pointerover", () =>{
                            if(gameState.extraSprits.weaponSprite1){
                                this.weaponText(gameState.weapon.weaponArray[0], gameState.texts.weaponText1)
                           
                            }    
                        })
                        gameState.texts.weaponText2.on("pointerover", () =>{
                            if(gameState.extraSprits.weaponSprite2){
                                this.weaponText(gameState.weapon.weaponArray[1], gameState.texts.weaponText2)
                           
                            }         
                        })
                        gameState.texts.weaponText3.on("pointerover", () =>{
                            if(gameState.extraSprits.weaponSprite3){
                                this.weaponText(gameState.weapon.weaponArray[2], gameState.texts.weaponText3)
                           
                            }       
                        })
                        gameState.texts.weaponText4.on("pointerover", () =>{
                            if(gameState.extraSprits.weaponSprite4){
                                this.weaponText(gameState.weapon.weaponArray[3], gameState.texts.weaponText4)
                           
                            }    
                        })
                        gameState.texts.weaponText5.on("pointerover", () =>{
                            if(gameState.extraSprits.weaponSprite5){
                                this.weaponText(gameState.weapon.weaponArray[4], gameState.texts.weaponText5)
                           
                            }         
                        })
                        gameState.texts.weaponText6.on("pointerover", () =>{
                            if(gameState.extraSprits.weaponSprite6){
                                this.weaponText(gameState.weapon.weaponArray[5], gameState.texts.weaponText6)
                           
                            }       
                        })
                        gameState.texts.weaponText7.on("pointerover", () =>{
                            if(gameState.extraSprits.weaponSprite7){
                                this.weaponText(gameState.weapon.weaponArray[6], gameState.texts.weaponText7)
                           
                            }    
                        })
                        gameState.texts.weaponText8.on("pointerover", () =>{
                            if(gameState.extraSprits.weaponSprite8){
                                this.weaponText(gameState.weapon.weaponArray[7], gameState.texts.weaponText8)
                           
                            }         
                        })




                        //remove mouse from weapon
                        gameState.texts.weaponText1.on("pointerout", () =>{
                            this.weaponTextRemove(gameState.texts.weaponText1, gameState.checkList.weapon.weaponText1)
                        })
                        gameState.texts.weaponText2.on("pointerout", () =>{
                            this.weaponTextRemove(gameState.texts.weaponText2, gameState.checkList.weapon.weaponText2)
                        })
                        gameState.texts.weaponText3.on("pointerout", () =>{
                            this.weaponTextRemove(gameState.texts.weaponText3, gameState.checkList.weapon.weaponText3)
                        })
                        gameState.texts.weaponText4.on("pointerout", () =>{
                            this.weaponTextRemove(gameState.texts.weaponText4, gameState.checkList.weapon.weaponText4)
                        })
                        gameState.texts.weaponText5.on("pointerout", () =>{
                            this.weaponTextRemove(gameState.texts.weaponText5, gameState.checkList.weapon.weaponText5)
                        })
                        gameState.texts.weaponText6.on("pointerout", () =>{
                            this.weaponTextRemove(gameState.texts.weaponText6, gameState.checkList.weapon.weaponText6)
                        })
                        gameState.texts.weaponText7.on("pointerout", () =>{
                            this.weaponTextRemove(gameState.texts.weaponText7, gameState.checkList.weapon.weaponText7)
                        })
                        gameState.texts.weaponText8.on("pointerout", () =>{
                            this.weaponTextRemove(gameState.texts.weaponText8 ,gameState.checkList.weapon.weaponText8)
                        })







                         //clicking weapon item
                         gameState.texts.weaponText1.on("pointerdown", () =>{
                            this.equippedWeaponChange(gameState.weapon.weaponArray[0])
                            gameState.checkList.weapon.weaponText1 = true
                            gameState.texts.weaponText1.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedWeapon.setTexture(gameState.weapon.weaponArray[0].sprite)
                            gameState.extraSprits.frames.weaponSprite = gameState.weapon.weaponArray[0].sprite
                            gameState.checkList.isWeaponEquiped = true
                        })
                        gameState.texts.weaponText2.on("pointerdown", () =>{
                            this.equippedWeaponChange(gameState.weapon.weaponArray[1])
                            gameState.checkList.weapon.weaponText2 = true
                            gameState.texts.weaponText2.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedWeapon.setTexture(gameState.weapon.weaponArray[1].sprite)
                            gameState.extraSprits.frames.weaponSprite = gameState.weapon.weaponArray[1].sprite
                            gameState.checkList.isWeaponEquiped = true
                            })
                            gameState.texts.weaponText3.on("pointerdown", () =>{
                            this.equippedWeaponChange(gameState.weapon.weaponArray[2])
                            gameState.checkList.weapon.weaponText3 = true
                            gameState.texts.weaponText3.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedWeapon.setTexture(gameState.weapon.weaponArray[2].sprite)
                            gameState.extraSprits.frames.weaponSprite = gameState.weapon.weaponArray[2].sprite
                            gameState.checkList.isWeaponEquiped = true
                            })
                            gameState.texts.weaponText4.on("pointerdown", () =>{
                            this.equippedWeaponChange(gameState.weapon.weaponArray[3])
                            gameState.checkList.weapon.weaponText4 = true
                            gameState.texts.weaponText4.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedWeapon.setTexture(gameState.weapon.weaponArray[3].sprite)
                            gameState.extraSprits.frames.weaponSprite = gameState.weapon.weaponArray[3].sprite
                            gameState.checkList.isWeaponEquiped = true
                            })
                            gameState.texts.weaponText5.on("pointerdown", () =>{
                            this.equippedWeaponChange(gameState.weapon.weaponArray[4])
                            gameState.checkList.weapon.weaponText5 = true
                            gameState.texts.weaponText5.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedWeapon.setTexture(gameState.weapon.weaponArray[4].sprite)
                            gameState.extraSprits.frames.weaponSprite = gameState.weapon.weaponArray[4].sprite
                            gameState.checkList.isWeaponEquiped = true
                            })
                            gameState.texts.weaponText6.on("pointerdown", () =>{
                            this.equippedWeaponChange(gameState.weapon.weaponArray[5])
                            gameState.checkList.weapon.weaponText6 = true
                            gameState.texts.weaponText6.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedWeapon.setTexture(gameState.weapon.weaponArray[5].sprite)
                            gameState.extraSprits.frames.weaponSprite = gameState.weapon.weaponArray[5].sprite
                            gameState.checkList.isWeaponEquiped = true
                            })
                            gameState.texts.weaponText7.on("pointerdown", () =>{
                            this.equippedWeaponChange(gameState.weapon.weaponArray[6])
                            gameState.checkList.weapon.weaponText7 = true
                            gameState.texts.weaponText7.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedWeapon.setTexture(gameState.weapon.weaponArray[6].sprite)
                            gameState.extraSprits.frames.weaponSprite = gameState.weapon.weaponArray[6].sprite
                            gameState.checkList.isWeaponEquiped = true
                            })
                            gameState.texts.weaponText8.on("pointerdown", () =>{
                            this.equippedWeaponChange(gameState.weapon.weaponArray[7])
                            gameState.checkList.weapon.weaponText8 = true
                            gameState.texts.weaponText8.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedWeapon.setTexture(gameState.weapon.weaponArray[7].sprite)
                            gameState.extraSprits.frames.weaponSprite = gameState.weapon.weaponArray[7].sprite
                            gameState.checkList.isWeaponEquiped = true
                            })
                            }
                        








                       
                        
                       
                        })

                         //clicking Accessory
                         gameState.texts.equippedAccessory.on("pointerdown", () =>{
                            if(gameState.checkList.accessoryClicked != true){


                                
                                //check list
                            gameState.checkList.weaponClicked = false
                            gameState.checkList.armorClicked = false
                            gameState.checkList.accessoryClicked = true



                                //change color
                                gameState.texts.equippedArmor.setColor("#ffffff")
                                gameState.texts.equippedweapon.setColor("#ffffff")



                                //textStyle
                                let armorStyle = {font: "25px Times New Roman", color: "#ffffff", tint: "0xffffff"}
                                let armorStyleEquiped = {font: "bold 30px Times New Roman", tint: "0x000000"}


                                //text in box
                            if(gameState.checkList.accessory.accessoryText1 != true){
                                gameState.texts.accessoryText1 = this.add.text(1050, 540, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.accessoryText1 = this.add.text(1050, 540, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.accessoryText1.setInteractive()
                            if(gameState.checkList.accessory.accessoryText2 != true){
                                gameState.texts.accessoryText2 = this.add.text(1460, 540, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.accessoryText2 = this.add.text(1460, 540, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.accessoryText2.setInteractive()
                            if(gameState.checkList.accessory.accessoryText3 != true){
                                gameState.texts.accessoryText3 = this.add.text(1050, 640, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.accessoryText3 = this.add.text(1050, 640, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.accessoryText3.setInteractive()
                            if(gameState.checkList.accessory.accessoryText4 != true){
                                gameState.texts.accessoryText4 = this.add.text(1460, 640, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.accessoryText4 = this.add.text(1460, 640, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.accessoryText4.setInteractive()
                            if(gameState.checkList.accessory.accessoryText5 != true){
                                gameState.texts.accessoryText5 = this.add.text(1050, 740, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.accessoryText5 = this.add.text(1050, 740, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.accessoryText5.setInteractive()
                            if(gameState.checkList.accessory.accessoryText6 != true){
                                gameState.texts.accessoryText6 = this.add.text(1460, 740, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.accessoryText6 = this.add.text(1460, 740, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.accessoryText6.setInteractive()
                            if(gameState.checkList.armor.accessoryText7 != true){
                                gameState.texts.accessoryText7 = this.add.text(1050, 840, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.accessoryText7 = this.add.text(1050, 840, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.accessoryText7.setInteractive()
                            if(gameState.checkList.accessory.accessoryText8 != true){
                                gameState.texts.accessoryText8 = this.add.text(1460, 840, "............", armorStyle).setOrigin(0.3, 1)
                                }else{
                                gameState.texts.accessoryText8 = this.add.text(1460, 840, "............", armorStyleEquiped).setOrigin(0.3, 1).setTint("#000000")
                                }
                            gameState.texts.accessoryText8.setInteractive()



                            //setting accessory names and sprits
                        for(let i = 0; i < gameState.accessory.accessoryArray.length; i++){
                            console.log(gameState.accessory.accessoryArray[i].sprite)
                            if(i == 0){
                                gameState.texts.accessoryText1.setText(gameState.accessory.accessoryArray[i].id)
                                gameState.texts.accessoryText1.setColor(gameState.accessory.accessoryArray[i].color)
                                gameState.extraSprits.accessorySprite1 = this.physics.add.sprite(950, 540, gameState.accessory.accessoryArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 1){
                                gameState.texts.accessoryText2.setText(gameState.accessory.accessoryArray[i].id)
                                gameState.texts.accessoryText2.setColor(gameState.accessory.accessoryArray[i].color)
                                gameState.extraSprits.accessorySprite2 = this.physics.add.sprite(1360, 540, gameState.accessory.accessoryArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 2){
                                gameState.texts.accessoryText3.setText(gameState.accessory.accessoryArray[i].id)
                                gameState.texts.accessoryText3.setColor(gameState.accessory.accessoryArray[i].color)
                                gameState.extraSprits.accessorySprite3 = this.physics.add.sprite(950, 640, gameState.accessory.accessoryArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 3){
                                gameState.texts.accessoryText4.setText(gameState.accessory.accessoryArray[i].id)
                                gameState.texts.accessoryText4.setColor(gameState.accessory.accessoryArray[i].color)
                                gameState.extraSprits.accessorySprite4 = this.physics.add.sprite(1360, 640, gameState.accessory.accessoryArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 4){
                                gameState.texts.accessoryText5.setText(gameState.accessory.accessoryArray[i].id)
                                gameState.texts.accessoryText5.setColor(gameState.accessory.accessoryArray[i].color)
                                gameState.extraSprits.accessorySprite5 = this.physics.add.sprite(950, 740, gameState.accessory.accessoryArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 5){
                                gameState.texts.accessoryText6.setText(gameState.accessory.accessoryArray[i].id)
                                gameState.texts.accessoryText6.setColor(gameState.accessory.accessoryArray[i].color)
                                gameState.extraSprits.accessorySprite6 = this.physics.add.sprite(1360, 740, gameState.accessory.accessoryArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 6){
                                gameState.texts.accessoryText7.setText(gameState.accessory.accessoryArray[i].id)
                                gameState.texts.accessoryText7.setColor(gameState.accessory.accessoryArray[i].color)
                                gameState.extraSprits.accessorySprite7 = this.physics.add.sprite(950, 840, gameState.accessory.accessoryArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                            }else if(i == 7){
                                gameState.texts.accessoryText8.setText(gameState.accessory.accessoryArray[i].id)
                                gameState.texts.accessoryText8.setColor(gameState.accessory.accessoryArray[i].color)
                                gameState.extraSprits.accessorySprite8 = this.physics.add.sprite(1360, 840, gameState.accessory.accessoryArray[i].sprite).setOrigin(0.5, 0.6).setScale(1.8)
                                
                        }
                    }




                        //hover over accessory
                        gameState.texts.accessoryText1.on("pointerover", () =>{
                            if(gameState.extraSprits.accessorySprite1){
                                this.accessoryText(gameState.accessory.accessoryArray[0], gameState.texts.accessoryText1)
                           
                            }    
                        })
                        gameState.texts.accessoryText2.on("pointerover", () =>{
                            if(gameState.extraSprits.accessorySprite2){
                                this.accessoryText(gameState.accessory.accessoryArray[1], gameState.texts.accessoryText2)
                           
                            }         
                        })
                        gameState.texts.accessoryText3.on("pointerover", () =>{
                            if(gameState.extraSprits.accessorySprite3){
                                this.accessoryText(gameState.accessory.accessoryArray[2], gameState.texts.accessoryText3)
                           
                            }       
                        })
                        gameState.texts.accessoryText4.on("pointerover", () =>{
                            if(gameState.extraSprits.accessorySprite4){
                                this.accessoryText(gameState.accessory.accessoryArray[3], gameState.texts.accessoryText4)
                           
                            }    
                        })
                        gameState.texts.accessoryText5.on("pointerover", () =>{
                            if(gameState.extraSprits.accessorySprite5){
                                this.accessoryText(gameState.accessory.accessoryArray[4], gameState.texts.accessoryText5)
                           
                            }         
                        })
                        gameState.texts.accessoryText6.on("pointerover", () =>{
                            if(gameState.extraSprits.accessorySprite6){
                                this.accessoryText(gameState.accessory.accessoryArray[5], gameState.texts.accessoryText6)
                           
                            }       
                        })
                        gameState.texts.accessoryText7.on("pointerover", () =>{
                            if(gameState.extraSprits.accessorySprite7){
                                this.accessoryText(gameState.accessory.accessoryArray[6], gameState.texts.accessoryText7)
                           
                            }    
                        })
                        gameState.texts.accessoryText8.on("pointerover", () =>{
                            if(gameState.extraSprits.accessorySprite8){
                                this.accessoryText(gameState.accessory.accessoryArray[7], gameState.texts.accessoryText8)
                           
                            }         
                        })




                        //remove mouse from accessory
                        gameState.texts.accessoryText1.on("pointerout", () =>{
                            this.accessoryTextRemove(gameState.texts.accessoryText1, gameState.checkList.accessory.accessoryText1)
                        })
                        gameState.texts.accessoryText2.on("pointerout", () =>{
                            this.accessoryTextRemove(gameState.texts.accessoryText2, gameState.checkList.accessory.accessoryText2)
                        })
                        gameState.texts.accessoryText3.on("pointerout", () =>{
                            this.accessoryTextRemove(gameState.texts.accessoryText3, gameState.checkList.accessory.accessoryText3)
                        })
                        gameState.texts.accessoryText4.on("pointerout", () =>{
                            this.accessoryTextRemove(gameState.texts.accessoryText4, gameState.checkList.accessory.accessoryText4)
                        })
                        gameState.texts.accessoryText5.on("pointerout", () =>{
                            this.accessoryTextRemove(gameState.texts.accessoryText5, gameState.checkList.accessory.accessoryText5)
                        })
                        gameState.texts.accessoryText6.on("pointerout", () =>{
                            this.accessoryTextRemove(gameState.texts.accessoryText6, gameState.checkList.accessory.accessoryText6)
                        })
                        gameState.texts.accessoryText7.on("pointerout", () =>{
                            this.accessoryTextRemove(gameState.texts.accessoryText7, gameState.checkList.accessory.accessoryText7)
                        })
                        gameState.texts.accessoryText8.on("pointerout", () =>{
                            this.accessoryTextRemove(gameState.texts.accessoryText8 ,gameState.checkList.accessory.accessoryText8)
                        })




                        //clicking accessory item
                        gameState.texts.accessoryText1.on("pointerdown", () =>{
                            this.equippedAccessoryChange(gameState.accessory.accessoryArray[0])
                            gameState.checkList.accessory.accessoryText1 = true
                            gameState.texts.accessoryText1.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedAccessory.setTexture(gameState.accessory.accessoryArray[0].sprite)
                            gameState.extraSprits.frames.accessorySprite = gameState.accessory.accessoryArray[0].sprite
                            gameState.checkList.isAccessoryEquiped = true
                        })
                        gameState.texts.accessoryText2.on("pointerdown", () =>{
                            this.equippedAccessoryChange(gameState.accessory.accessoryArray[1])
                            gameState.checkList.accessory.accessoryText2 = true
                            gameState.texts.accessoryText2.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedAccessory.setTexture(gameState.accessory.accessoryArray[1].sprite)
                            gameState.extraSprits.frames.accessorySprite = gameState.accessory.accessoryArray[1].sprite
                            gameState.checkList.isAccessoryEquiped = true
                            
                            })
                            gameState.texts.accessoryText3.on("pointerdown", () =>{
                            this.equippedAccessoryChange(gameState.accessory.accessoryArray[2])
                            gameState.checkList.accessory.accessoryText3 = true
                            gameState.texts.accessoryText3.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedAccessory.setTexture(gameState.accessory.accessoryArray[2].sprite)
                            gameState.extraSprits.frames.accessorySprite = gameState.accessory.accessoryArray[2].sprite
                            gameState.checkList.isAccessoryEquiped = true
                            
                            })
                            gameState.texts.accessoryText4.on("pointerdown", () =>{
                            this.equippedAccessoryChange(gameState.accessory.accessoryArray[3])
                            gameState.checkList.accessory.accessoryText4 = true
                            gameState.texts.accessoryText4.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedAccessory.setTexture(gameState.accessory.accessoryArray[3].sprite)
                            gameState.extraSprits.frames.accessorySprite = gameState.accessory.accessoryArray[3].sprite
                            gameState.checkList.isAccessoryEquiped = true
                           
                            })
                            gameState.texts.accessoryText5.on("pointerdown", () =>{
                            this.equippedAccessoryChange(gameState.accessory.accessoryArray[4])
                            gameState.checkList.accessory.accessoryText5 = true
                            gameState.texts.accessoryText5.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedAccessory.setTexture(gameState.accessory.accessoryArray[4].sprite)
                            gameState.extraSprits.frames.accessorySprite = gameState.accessory.accessoryArray[4].sprite
                            gameState.checkList.isAccessoryEquiped = true
                            
                            })
                            gameState.texts.accessoryText6.on("pointerdown", () =>{
                            this.equippedAccessoryChange(gameState.accessory.accessoryArray[5])
                            gameState.checkList.accessory.accessoryText6 = true
                            gameState.texts.accessoryText6.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedAccessory.setTexture(gameState.accessory.accessoryArray[5].sprite)
                            gameState.extraSprits.frames.accessorySprite = gameState.accessory.accessoryArray[5].sprite
                            gameState.checkList.isAccessoryEquiped = true
                            
                            })
                            gameState.texts.accessoryText7.on("pointerdown", () =>{
                            this.equippedAccessoryChange(gameState.accessory.accessoryArray[6])
                            gameState.checkList.accessory.accessoryText7 = true
                            gameState.texts.accessoryText7.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedAccessory.setTexture(gameState.accessory.accessoryArray[6].sprite)
                            gameState.extraSprits.frames.accessorySprite = gameState.accessory.accessoryArray[6].sprite
                            gameState.checkList.isAccessoryEquiped = true
                            
                            })
                            gameState.texts.accessoryText8.on("pointerdown", () =>{
                            this.equippedAccessoryChange(gameState.accessory.accessoryArray[7])
                            gameState.checkList.accessory.accessoryText8 = true
                            gameState.texts.accessoryText8.setFont("bold 30px Times New Roman").setTint("0x000000")
                            gameState.extraSprits.equippedAccessory.setTexture(gameState.accessory.accessoryArray[7].sprite)
                            gameState.extraSprits.frames.accessorySprite = gameState.accessory.accessoryArray[7].sprite
                            gameState.checkList.isAccessoryEquiped = true
                            
                            })
                            
                            

                            }
                            
                        })

            //exit





                            
                       
                  
                
            })
            gameState.cursors = this.input.keyboard.createCursorKeys()
          
        
    }


















    update(){

        //destroy armor
        if(gameState.checkList.armorClicked != true && gameState.texts.armorText1){
            gameState.texts.armorText1.destroy()
            gameState.texts.armorText2.destroy()
            gameState.texts.armorText3.destroy()
            gameState.texts.armorText4.destroy()
            gameState.texts.armorText5.destroy()
            gameState.texts.armorText6.destroy()
            gameState.texts.armorText7.destroy()
            gameState.texts.armorText8.destroy()
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

        }//destroy weapon
        if(gameState.checkList.weaponClicked != true && gameState.texts.weaponText1){
            gameState.texts.weaponText1.destroy()
            gameState.texts.weaponText2.destroy()
            gameState.texts.weaponText3.destroy()
            gameState.texts.weaponText4.destroy()
            gameState.texts.weaponText5.destroy()
            gameState.texts.weaponText6.destroy()
            gameState.texts.weaponText7.destroy()
            gameState.texts.weaponText8.destroy()
            if(gameState.extraSprits.weaponSprite8){
            gameState.extraSprits.weaponSprite8.destroy()
            }
            if(gameState.extraSprits.weaponSprite7){
            gameState.extraSprits.weaponSprite7.destroy()
            }
            if(gameState.extraSprits.weaponSprite6){
            gameState.extraSprits.weaponSprite6.destroy()
            }
            if(gameState.extraSprits.weaponSprite5){
            gameState.extraSprits.weaponSprite5.destroy()
            }
            if(gameState.extraSprits.weaponSprite4){
            gameState.extraSprits.weaponSprite4.destroy()
            }
            if(gameState.extraSprits.weaponSprite3){
            gameState.extraSprits.weaponSprite3.destroy()
            }
            if(gameState.extraSprits.weaponSprite2){
            gameState.extraSprits.weaponSprite2.destroy()
            }
            if(gameState.extraSprits.weaponSprite1){
            gameState.extraSprits.weaponSprite1.destroy()
            }

        }


        //destroy accessory
        if(gameState.checkList.accessoryClicked != true && gameState.texts.accessoryText1){
            gameState.texts.accessoryText1.destroy()
            gameState.texts.accessoryText2.destroy()
            gameState.texts.accessoryText3.destroy()
            gameState.texts.accessoryText4.destroy()
            gameState.texts.accessoryText5.destroy()
            gameState.texts.accessoryText6.destroy()
            gameState.texts.accessoryText7.destroy()
            gameState.texts.accessoryText8.destroy()
            if(gameState.extraSprits.accessorySprite8){
            gameState.extraSprits.accessorySprite8.destroy()
            }
            if(gameState.extraSprits.accessorySprite7){
            gameState.extraSprits.accessorySprite7.destroy()
            }
            if(gameState.extraSprits.accessorySprite6){
            gameState.extraSprits.accessorySprite6.destroy()
            }
            if(gameState.extraSprits.accessorySprite5){
            gameState.extraSprits.accessorySprite5.destroy()
            }
            if(gameState.extraSprits.accessorySprite4){
            gameState.extraSprits.accessorySprite4.destroy()
            }
            if(gameState.extraSprits.accessorySprite3){
            gameState.extraSprits.accessorySprite3.destroy()
            }
            if(gameState.extraSprits.accessorySprite2){
            gameState.extraSprits.accessorySprite2.destroy()
            }
            if(gameState.extraSprits.accessorySprite1){
            gameState.extraSprits.accessorySprite1.destroy()
            }

        }

        if(gameState.cursors.space.isDown){
           // console.log(this.input.mousePointer.x, this.input.mousePointer.y)
            console.log(gameState.playerStats.magic)
        }
   //destroying item menu
if(gameState.checkList.items == false && gameState.texts.item){
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
    gameState.extraSprits.defencePotion.destroy(
    gameState.extraSprits.repelPotion.destroy()
    )
//console.log("test1234")
}



//destroying equipment menu

if(gameState.checkList.equipment == false && gameState.texts.equipment){
    gameState.texts.equipment.destroy()
    gameState.boxes.armorbox.destroy()
    gameState.texts.equippedweapon.destroy()
    gameState.texts.equippedAccessory.destroy()
    gameState.texts.equippedArmor.destroy()
    gameState.texts.equipped.destroy()
    gameState.texts.inventory.destroy()
    gameState.extraSprits.equippedArmor.destroy()
    gameState.extraSprits.equippedWeapon.destroy()
    gameState.extraSprits.equippedAccessory.destroy()
}












    }




    armorText(target, cordi){
        cordi.setTint("0x000000")
        gameState.texts.armor.armor1Text1 = this.add.text(cordi.x + 100, cordi.y - 40, target.id, {font: "25px Arial",color: target.color}).setDepth(2)
        gameState.texts.armor.armor1Text2 = this.add.text(cordi.x + 100, cordi.y - 10,target.deff + " Defence", {font: "20px Times New Roman", color: "#ffffff"}).setDepth(2)
        gameState.texts.armor.armor1Text3 = this.add.text(cordi.x + 100, cordi.y + 20, "bonus Effect: " + target.bonus, {font: "20px Times New Roman", color: target.bonusColor}).setDepth(2)
        gameState.boxes.armor1Box = this.add.rectangle(gameState.texts.armor.armor1Text1.x , gameState.texts.armor.armor1Text1.y , 200, 110, "0x518CF3").setOrigin(0.1,0.1).setDepth(1)
        gameState.boxes.armor1Box.isStroked = true
        gameState.boxes.armor1Box.lineWidth = 2
        gameState.boxes.armor1Box.strokeColor = "0x000000"
    }


    armorTextRemove(cordi, check){
        if(check != true){
            cordi.setTint("0xffffff")
        }
        if(gameState.boxes.armor1Box){
        gameState.boxes.armor1Box.destroy()
        gameState.texts.armor.armor1Text1.destroy()
        gameState.texts.armor.armor1Text2.destroy()
        gameState.texts.armor.armor1Text3.destroy()
        }

    }




    weaponText(target, cordi){
        cordi.setTint("0x000000")
        gameState.texts.weapon.weapon1Text1 = this.add.text(cordi.x + 100, cordi.y - 40, target.id, {font: "25px Arial",color: target.color}).setDepth(2)
        gameState.texts.weapon.weapon1Text2 = this.add.text(cordi.x + 100, cordi.y - 10,target.dmg + " damage", {font: "20px Times New Roman", color: "#ffffff"}).setDepth(2)
        gameState.texts.weapon.weapon1Text3 = this.add.text(cordi.x + 100, cordi.y + 20, "bonus Effect: " + target.bonus, {font: "20px Times New Roman", color: target.bonusColor}).setDepth(2)
        gameState.boxes.weapon1Box = this.add.rectangle(gameState.texts.weapon.weapon1Text1.x , gameState.texts.weapon.weapon1Text1.y , 200, 110, "0x518CF3").setOrigin(0.1,0.1).setDepth(1)
        gameState.boxes.weapon1Box.isStroked = true
        gameState.boxes.weapon1Box.lineWidth = 2
        gameState.boxes.weapon1Box.strokeColor = "0x000000"
    }


    weaponTextRemove(cordi, check){
        if(gameState.boxes.weapon1Box){
        if(check != true){
            cordi.setTint("0xffffff")
        }
        gameState.boxes.weapon1Box.destroy()
        gameState.texts.weapon.weapon1Text1.destroy()
        gameState.texts.weapon.weapon1Text2.destroy()
        gameState.texts.weapon.weapon1Text3.destroy()
    }

    }
    accessoryText(target, cordi){
        cordi.setTint("0x000000")
        gameState.texts.accessory.accessory1Text1 = this.add.text(cordi.x + 100, cordi.y - 40, target.id, {font: "25px Arial",color: target.color}).setDepth(2)
        gameState.texts.accessory.accessory1Text2 = this.add.text(cordi.x + 100, cordi.y - 10,target.magic + " magic", {font: "20px Times New Roman", color: "#ffffff"}).setDepth(2)
        gameState.texts.accessory.accessory1Text3 = this.add.text(cordi.x + 100, cordi.y + 20, "bonus Effect: " + target.bonus, {font: "20px Times New Roman", color: target.bonusColor}).setDepth(2)
        gameState.boxes.accessory1Box = this.add.rectangle(gameState.texts.accessory.accessory1Text1.x , gameState.texts.accessory.accessory1Text1.y , 200, 110, "0x518CF3").setOrigin(0.1,0.1).setDepth(1)
        gameState.boxes.accessory1Box.isStroked = true
        gameState.boxes.accessory1Box.lineWidth = 2
        gameState.boxes.accessory1Box.strokeColor = "0x000000"
    }



    accessoryTextRemove(cordi, check){
        if(gameState.boxes.accessory1Box){
        if(check != true){
            cordi.setTint("0xffffff")
        }
        gameState.boxes.accessory1Box.destroy()
        gameState.texts.accessory.accessory1Text1.destroy()
        gameState.texts.accessory.accessory1Text2.destroy()
        gameState.texts.accessory.accessory1Text3.destroy()
    }

    }

    









    equippedArmorChange(arg){


        if(gameState.armorEquipedStats.deff > 0){
            gameState.playerStats.defence -= gameState.armorEquipedStats.deff
        }
        gameState.armorEquipedStats = arg
        gameState.playerStats.defence += gameState.armorEquipedStats.deff
        playerStats.setText("Damage: " + gameState.playerStats.dmg + "\nMagic: " + gameState.playerStats.magic + "\nDefence: " + gameState.playerStats.defence)
        let armorFont = "25px Times New Roman"
        let armorTint = "0xffffff"
        let armorEquipedFont = "bold 30px Times New Roman"
        gameState.checkList.armor.armorText1 = false
        gameState.checkList.armor.armorText2 = false
        gameState.checkList.armor.armorText3 = false
        gameState.checkList.armor.armorText4 = false
        gameState.checkList.armor.armorText5 = false
        gameState.checkList.armor.armorText6 = false
        gameState.checkList.armor.armorText7 = false
        gameState.checkList.armor.armorText8 = false

        if(gameState.checkList.armor.armorText1 != true){
            gameState.texts.armorText1.setTint(armorTint)
            gameState.texts.armorText1.setFont(armorFont)
        }
        if(gameState.checkList.armor.armorText2 != true){
            gameState.texts.armorText2.setTint(armorTint)
            gameState.texts.armorText2.setFont(armorFont)
        }
        if(gameState.checkList.armor.armorText3 != true){
            gameState.texts.armorText3.setTint(armorTint)
            gameState.texts.armorText3.setFont(armorFont)
        }
        if(gameState.checkList.armor.armorText4 != true){
            gameState.texts.armorText4.setTint(armorTint)
            gameState.texts.armorText4.setFont(armorFont)
        }
        if(gameState.checkList.armor.armorText5 != true){
            gameState.texts.armorText5.setTint(armorTint)
            gameState.texts.armorText5.setFont(armorFont)
        }
        if(gameState.checkList.armor.armorText6 != true){
            gameState.texts.armorText6.setTint(armorTint)
            gameState.texts.armorText6.setFont(armorFont)
        }
        if(gameState.checkList.armor.armorText7 != true){
            gameState.texts.armorText7.setTint(armorTint)
            gameState.texts.armorText7.setFont(armorFont)
        }
        if(gameState.checkList.armor.armorText8 != true){
            gameState.texts.armorText8.setTint(armorTint)
            gameState.texts.armorText8.setFont(armorFont)
        }    
    }








    equippedWeaponChange(arg){
        if(gameState.weaponEquipedStats.dmg > 0){
            
            gameState.playerStats.dmg -= gameState.weaponEquipedStats.dmg
           
        }
        gameState.weaponEquipedStats = arg
        gameState.playerStats.dmg += gameState.weaponEquipedStats.dmg
        playerStats.setText("Damage: " + gameState.playerStats.dmg + "\nMagic: " + gameState.playerStats.magic + "\nDefence: " + gameState.playerStats.defence)
        let weaponFont = "25px Times New Roman"
        let weaponTint = "0xffffff"
        let weaponEquipedFont = "bold 30px Times New Roman"
       
        gameState.checkList.weapon.weaponText1 = false
        
        gameState.checkList.weapon.weaponText2 = false
        gameState.checkList.weapon.weaponText3 = false
        gameState.checkList.weapon.weaponText4 = false
        gameState.checkList.weapon.weaponText5 = false
        gameState.checkList.weapon.weaponText6 = false
        gameState.checkList.weapon.weaponText7 = false
        gameState.checkList.weapon.weaponText8 = false

        if(gameState.checkList.weapon.weaponText1 != true){
            gameState.texts.weaponText1.setTint(weaponTint)
            gameState.texts.weaponText1.setFont(weaponFont)
        }
        if(gameState.checkList.weapon.weaponText2 != true){
            gameState.texts.weaponText2.setTint(weaponTint)
            gameState.texts.weaponText2.setFont(weaponFont)
        }
        if(gameState.checkList.weapon.weaponText3 != true){
            gameState.texts.weaponText3.setTint(weaponTint)
            gameState.texts.weaponText3.setFont(weaponFont)
        }
        if(gameState.checkList.weapon.weaponText4 != true){
            gameState.texts.weaponText4.setTint(weaponTint)
            gameState.texts.weaponText4.setFont(weaponFont)
        }
        if(gameState.checkList.weapon.weaponText5 != true){
            gameState.texts.weaponText5.setTint(weaponTint)
            gameState.texts.weaponText5.setFont(weaponFont)
        }
        if(gameState.checkList.weapon.weaponText6 != true){
            gameState.texts.weaponText6.setTint(weaponTint)
            gameState.texts.weaponText6.setFont(weaponFont)
        }
        if(gameState.checkList.weapon.weaponText7 != true){
            gameState.texts.weaponText7.setTint(weaponTint)
            gameState.texts.weaponText7.setFont(weaponFont)
        }
        if(gameState.checkList.weapon.weaponText8 != true){
            gameState.texts.weaponText8.setTint(weaponTint)
            gameState.texts.weaponText8.setFont(weaponFont)
        }    
    }


    equippedAccessoryChange(arg){
        if(gameState.accessoryEquipedStats.magic > 0){
            console.log("testing")
            gameState.playerStats.magic -= gameState.accessoryEquipedStats.magic
        }
        gameState.accessoryEquipedStats = arg
        gameState.playerStats.magic += gameState.accessoryEquipedStats.magic
        playerStats.setText("Damage: " + gameState.playerStats.dmg + "\nMagic: " + gameState.playerStats.magic + "\nDefence: " + gameState.playerStats.defence)
        let accessoryFont = "25px Times New Roman"
        let accessoryTint = "0xffffff"
        let accessoryEquipedFont = "bold 30px Times New Roman"
       
        gameState.checkList.accessory.accessoryText1 = false
        
        gameState.checkList.accessory.accessoryText2 = false
        gameState.checkList.accessory.accessoryText3 = false
        gameState.checkList.accessory.accessoryText4 = false
        gameState.checkList.accessory.accessoryText5 = false
        gameState.checkList.accessory.accessoryText6 = false
        gameState.checkList.accessory.accessoryText7 = false
        gameState.checkList.accessory.accessoryText8 = false

        if(gameState.checkList.accessory.accessoryText1 != true){
            gameState.texts.accessoryText1.setTint(accessoryTint)
            gameState.texts.accessoryText1.setFont(accessoryFont)
        }
        if(gameState.checkList.accessory.accessoryText2 != true){
            gameState.texts.accessoryText2.setTint(accessoryTint)
            gameState.texts.accessoryText2.setFont(accessoryFont)
        }
        if(gameState.checkList.accessory.accessoryText3 != true){
            gameState.texts.accessoryText3.setTint(accessoryTint)
            gameState.texts.accessoryText3.setFont(accessoryFont)
        }
        if(gameState.checkList.accessory.accessoryText4 != true){
            gameState.texts.accessoryText4.setTint(accessoryTint)
            gameState.texts.accessoryText4.setFont(accessoryFont)
        }
        if(gameState.checkList.accessory.accessoryText5 != true){
            gameState.texts.accessoryText5.setTint(accessoryTint)
            gameState.texts.accessoryText5.setFont(accessoryFont)
        }
        if(gameState.checkList.accessory.accessoryText6 != true){
            gameState.texts.accessoryText6.setTint(accessoryTint)
            gameState.texts.accessoryText6.setFont(accessoryFont)
        }
        if(gameState.checkList.accessory.accessoryText7 != true){
            gameState.texts.accessoryText7.setTint(accessoryTint)
            gameState.texts.accessoryText7.setFont(accessoryFont)
        }
        if(gameState.checkList.accessory.accessoryText8 != true){
            gameState.texts.accessoryText8.setTint(accessoryTint)
            gameState.texts.accessoryText8.setFont(accessoryFont)
        }    
    }
}






 