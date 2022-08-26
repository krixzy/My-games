class startScene extends Phaser.Scene {
    constructor(){
      super({ key:  'startScene' });
    }
    preload() {
      
      this.load.spritesheet("panBreathing", "sprits/pan breating.png", {frameWidth: 200, frameHeight: 354})
        this.load.image("drPan", "sprits/dr.pan.png")
        this.load.image("missEeg", "sprits/miss Eeghead.png")
        this.load.spritesheet("missEegHead", "sprits/miss breathing.png", {frameWidth: 73, frameHeight: 102})
        this.load.image("door", "sprits/door.png")
        this.load.image("key", "sprits/key.png")
        this.load.image("bullet", "sprits/bullet.png")
        this.load.image("iceNoSpike", "sprits/icenospike.png")
        this.load.image("iceNoBotSpike", "sprits/icenospikebot.png")
        this.load.image("iceNoTopSpike", "sprits/icenospiketop.png")
        this.load.image("iceAllSpike", "sprits/icespikeallaround.png")
        this.load.spritesheet("badGuyWalking", "sprits/badguymoving.png", {frameWidth: 95, frameHeight: 242})
        this.load.image("badGuy", "sprits/badGuy.png")
        this.load.image("waterDrop", "sprits/waterdrop.png")
        this.load.image("icePlatForm", "sprits/iceplatform.png")
        this.load.image("iceBlock", "sprits/iceblock.png")
        this.load.image("iceBackground", "sprits/icebackground.png")
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
    create() {

      gameState.kasse = this.add.rectangle(880, 415, 200, 80, 0x000000).setAlpha(0.8)
      gameState.kasse.isStroked = true
      gameState.kasse.lineWidth = 5
      gameState.kasse.strokeAlpha = 5
    gameState.kasse.strokeColor = "0xF78103"
    gameState.prinsesse = this.physics.add.sprite(1500, 600, "missEeg").setScale(1.8).setGravityY(-500)
  
    gameState.drPan = this.physics.add.sprite(1300, 520, "drPan").setScale(0.9).setGravityY(-500)
       gameState.overSkræft = this.add.text(850, 400, "Start",{ font: "bold 25px Arial", boundsAlignH: "center"})
       this.anims.create({
        key: "breathing",
        frames: this.anims.generateFrameNumbers("missEegHead", {start:0, end:2}), 
        frameRate: 3,
        reteat: -1
          })
       console.log("hej Hanne")
       gameState.player = this.physics.add.sprite(400, 350, "figur").setScale(2.5).setGravityY(-500)
       this.anims.create({
        key:"drPanB", 
        frames: this.anims.generateFrameNumbers("panBreathing", {start:0, end:3}),
        frameRate: 4, 
        reteat: -1
    })
       this.anims.create({
        key:"breath",
        frames: this.anims.generateFrameNumbers("breathing", {start:0, end: 3}),
        frameRate: 3,
        reteat: -1
    })
    //this.add.circle(200, 200, 100, 0xa82d62)  
    gameState.kasse.setInteractive()
    
gameState.kasse.on("pointerup", () =>{
    this.scene.stop("startScene")
    this.scene.start("Story")
})

    }
    update() {
      gameState.prinsesse.anims.play("breathing", true)
      gameState.drPan.anims.play("drPanB", true)
      gameState.player.anims.play("breath", true)
      gameState.kasse.on("pointerover", () =>{
        gameState.kasse.strokeColor = "0xFFFFFF"
      })
      gameState.kasse.on("pointerout", () =>{
gameState.kasse.strokeColor = "0xF78103"
      })
     
    
    

   
  }
  
}
