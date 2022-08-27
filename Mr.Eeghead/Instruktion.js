class Instruktion extends Phaser.Scene {
    constructor(){
      super({ key:  'Instruktion' });
    }
    preload() {
      this.load.image("heart", "sprits/heart.png")
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

      console.log("test1234")
      this.add.sprite(950, 420, "heart").setScale(1.3)
      this.add.sprite(950, 405, "heart").setScale(1.6)
      this.add.sprite(950, 385, "heart").setScale(2.5)
      this.add.sprite(950, 350, "heart").setScale(5)
      this.add.text(815, 100, "THE END ", {fill: "0x000000", font: "bold 70px Arial", boundsAlignH: "center"})
      gameState.player = this.physics.add.sprite(900, 540, "figur").setGravityY(-500).setScale(2)
      gameState.prinsesse = this.physics.add.sprite(1000, 537, "missEeg").setScale(2).setGravityY(-500)
      
      
   
    }
    update() {

    }
  }
