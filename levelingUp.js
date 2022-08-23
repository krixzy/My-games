
class levlingUpScene extends Phaser.Scene{
    constructor(){
        super({key: "levlingUpScene"})
    }
    preload(){
        // loading blanck sprite
        this.load.spritesheet("blanckSprit", "\\effeckts/attackanamation.png", {frameWidth: 64, frameHeight: 32})



        //leveling effect
        this.load.spritesheet("levlingUp", "\\effeckts/leveleffect.png", {frameWidth:32, frameHeight:32})

//playerloading
this.load.spritesheet("mainChar", "\\sprits/char/Male/Male1.png", {frameWidth: 32, frameHeight: 32})
this.load.spritesheet("mainShadow", "\\sprits/char/Shadow/Shadow 1.png", {frameWidth: 32, frameHeight: 32})
    }
    create(){
//this.add.circle(200, 200, 200, 200, 0xAAAAAA)
console.log(gameState.player)

//creating player
gameState.player = this.physics.add.sprite(900, 450, "mainChar").setScale(1.5).setFrame(0)
gameState.playerShadow = this.physics.add.sprite(gameState.player.x, gameState.player.y + 3, "mainShadow") .setScale(1.5)

//creating starsprit
gameState.extraSprits.starSprit = this.add.sprite(gameState.player.x, gameState.player.y + 20, "blanckSprit").setScale(2).setFrame(5)


// creating menu
let menu = this.add.rectangle(900, 730, 700, 300, 0x518CF3)
menu.isStroked = true
menu.lineWidth = 8
menu.strokeColor = "0xFFFFFF"


//creating xp gain
let kill1 = 0
let kill2 = 0
let kill3 = 0
//creating gold gain
let gold1 = 0
let gold2 = 0
let gold3 = 0
//creating text
gameState.texts.killText1 = this.add.text(600, 620, "", {fontSize: "25px",fontFamily: "Arial"})
gameState.texts.killText2 = this.add.text(600, 710, "", {fontSize: "25px",fontFamily: "Arial"})
gameState.texts.killText3 = this.add.text(600, 800, "", {fontSize: "25px", fontFamily: "Arial"})


//text for each kill
for(let i = 0; i<gameState.killed.length; i++){
    if(i == 0){
        console.log(gameState.player.y)
        if(gameState.killed[i] == gameState.mrSkull.id){
            gold1 = gameState.mrSkull.gold
kill1 = gameState.mrSkull.xp
gameState.texts.killText1.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill1 + " xp and " + gold1 + " gold")
        }else if(gameState.killed[i] == gameState.blackSkeleton.id){
            kill1 = gameState.blackSkeleton.xp
            gold1 = gameState.blackSkeleton.gold
            gameState.texts.killText1.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill1 + " xp and " + gold1 + " gold")
        }else if(gameState.killed[i] == gameState.skeletonSheld.id){
            kill1 = gameState.skeletonSheld.xp
            gold1 = gameState.skeletonSheld.gold
            gameState.texts.killText1.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill1 + " xp and " + gold1 + " gold")
        }
    }else if(i == 1){
        if(gameState.killed[i] == gameState.mrSkull.id){
kill2 = gameState.mrSkull.xp
gold2 = gameState.mrSkull.gold
gameState.texts.killText2.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill2 + " xp and " + gold2 + " gold")
        }else if(gameState.killed[i] == gameState.blackSkeleton.id){
            kill2 = gameState.blackSkeleton.xp
            gold2 = gameState.blackSkeleton.gold
            gameState.texts.killText2.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill2 + " xp and " + gold2 + " gold")
        }else if(gameState.killed[i] == gameState.skeletonSheld.id){
            kill2 = gameState.skeletonSheld.xp
            gold2 = gameState.skeletonSheld.gold
            gameState.texts.killText2.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill2 + " xp and " + gold2 + " gold")
        }
    }else if(i == 2){
        if(gameState.killed[i] == gameState.mrSkull.id){
kill3 = gameState.mrSkull.xp
gold3 = gameState.mrSkull.gold
gameState.texts.killText3.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill3 + " xp and " + gold3 + " gold")
        }else if(gameState.killed[i] == gameState.blackSkeleton.id){
            kill3 = gameState.blackSkeleton.xp
            gold3 = gameState.blackSkeleton.gold
            gameState.texts.killText3.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill3 + " xp and " + gold3 + " gold")
        }else if(gameState.killed[i] == gameState.skeletonSheld.id){
            kill3 = gameState.skeletonSheld.xp
            gold3 = gameState.skeletonSheld.gold
            gameState.texts.killText3.setText(gameState.playerName +" have killed " + gameState.killed[i] + " ganing "+ kill3 + " xp and " + gold3 + " gold")
        }
}
    }
    //levling up
    gameState.cursors = this.input.keyboard.createCursorKeys()
    //gaining xp
    gameState.playerStats.curentXp += kill1 + kill2 + kill3
    //gaining gold
    gameState.playerStats.gold += gold1 + gold2 + gold3
    
    //resetting array of ennemys
    gameState.killed = []
        
       

    //animations
    this.anims.create({
        key: "levelUp",
        frames: this.anims.generateFrameNames("levlingUp", {start: 3, end: 0}),
        frameRate: 5,
        repeat: -1
    })
       
    
 
    
}
    update(){
        if(Phaser.Input.Keyboard.JustDown(gameState.cursors.space)){
        if(gameState.playerStats.curentXp >= gameState.playerStats.xpForLevel){
            this.levelUp()
           
        }else if(gameState.playerStats.curentXp < gameState.playerStats.xpForLevel && gameState.checkList.nextScene == false){
            gameState.playerStats.mana = gameState.playerStats.maxMana
            this.xpNeed()

        }else{
            gameState.playerStats.mana = gameState.playerStats.maxMana
            gameState.checkList.nextScene = false
            this.scene.stop("levlingUpScene")
            this.scene.start("underGround")
        }
    }
}
levelUp(){
    console.log(gameState.player.y)
    this.tweens.add({
        targets: gameState.extraSprits.starSprit,
        y: 400,
        duration: 2000,
        onComplete:() =>{
           // gameState.extraSprits.starSprit.destroy()
        }

    })
    gameState.extraSprits.starSprit.anims.play("levelUp", true)
    gameState.texts.killText1.destroy()
    gameState.texts.killText2.destroy()
    gameState.texts.killText3.destroy()

gameState.checkList.nextScene = true
    for(let i = 0; i< 3; i++){

        if(gameState.playerStats.curentXp >= gameState.playerStats.xpForLevel){
            gameState.playerStats.level ++
            gameState.playerStats.xpForLevel = gameState.playerStats.xpForLevel * 1.20 + 100
            this.add.text(600, 620, gameState.playerName + " just leveled up and is now level " + gameState.playerStats.level, {fontSize: "25px", fontFamily:"Arial"})
            gameState.playerStats.dmg += 5
            gameState.playerStats.magic += 5
            gameState.playerStats.maxHp += 15
            gameState.playerStats.defence += 1
            gameState.playerStats.maxMana += 10
            gameState.playerStats.mana = gameState.playerStats.maxMana
            gameState.playerStats.hp = gameState.playerStats.maxHp
        }
        }
}
xpNeed(){
    let xpForLevel = gameState.playerStats.xpForLevel - gameState.playerStats.curentXp 
    gameState.texts.killText1.destroy()
    gameState.texts.killText2.destroy()
    gameState.texts.killText3.destroy()
this.add.text(600, 620, gameState.playerName + " need " + xpForLevel + " for next level", {fontFamily: "Arial", fontSize: "25px"})
gameState.checkList.nextScene = true
}
}
