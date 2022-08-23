

class gamescene extends Phaser.Scene{
 constructor(){
     super({key: "gamescene"})
 }
 preload(){

 }
 create(){

    
if(gameState.rounds == 0){
if(gameState.difficulty == 0){
    
gameState.enemySpeed = 10000
gameState.plusNumber = 3
gameState.extraNumbers = 3
}else if(gameState.difficulty == 1){
    gameState.enemySpeed = 10000
    gameState.plusNumber= 5
    gameState.extraNumbers = 8
}else if(gameState.difficulty == 2){
    gameState.enemySpeed = 8000
    gameState.plusNumber = 15
    gameState.extraNumbers = 12
}else if(gameState.difficulty == 3){
    gameState.enemySpeed = 6000
    gameState.plusNumber = 30
    gameState.extraNumbers = 15
}else if(gameState.difficulty == 4){
    gameState.enemySpeed = 4000
    gameState.plusNumber = 80
    gameState.extraNumbers = 20
}

}







//sounds
gameState.winSound = this.sound.add("win", {volume: 0.2})
gameState.jumpSound = this.sound.add("jump")
gameState.music = this.sound.add("music", {volume: 0.5, loop: true})
gameState.music.play()
gameState.failSound = this.sound.add("fail", {volume: 0.6})
gameState.runSound = this.sound.add("run", {volume: 0.4})
gameState.walkSound = this.sound.add("walk", {volume: 0.4})












   //adding background
   gameState.backGround = this.add.image(0, 0, "background").setOrigin(0, 0)
   gameState.backGround2 = this.add.image(1920, 0, "background").setOrigin(0, 0)
   gameState.backGround3 = this.add.image(3840, 0, "background").setOrigin(0, 0)
   gameState.backGround4 = this.add.image(5760, 0, "background").setOrigin(0, 0)
   this.cameras.main.setBackgroundColor(0xffffff)

   




//laver bunden
gameState.ground = this.physics.add.sprite(3000, 900, "bund").setOrigin(0.5, 0.1).setGravityY(-800)
gameState.ground.body.immovable = true







//laver platforme
this.platforms()
 this.tal()







  //laver player
 
gameState.player = this.physics.add.sprite(500, 870, "figur").setScale(0.5)
gameState.player.body.collideWorldBounds = true
gameState.player.setInteractive();
//console.log(gameState.player)







        //laver modstander

gameState.enemy = this.physics.add.sprite(500, 200, "enemy").setScale(0.15).setGravityY(-800)



this.enemyMove()



//laver collider




        //collider med modstander
this.physics.add.collider(gameState.player, gameState.enemy, () =>{
    gameState.numbersArray = []
gameState.platformArray = []
gameState.platformAmount = []
gameState.music.stop()
gameState.failSound.play()
     this.physics.pause()
     this.add.text(gameState.player.body.x, gameState.player.body.y - 10, "you lose", gameState.headerStyle)
this.cameras.main.shake(2000, .01, false, (arr1, arr2)=>{
if(arr2 > .8){
    this.scene.stop("gamescene")
    this.scene.start("gameoverscene")
}
})
}) 















            //collider med bunden
this.physics.add.collider(gameState.player, gameState.ground, () =>{
   gameState.jumps = 2
})





                //collider med platforme
this.physics.add.collider(gameState.player, gameState.platforms, () =>{
    gameState.jumps = 2
})






            //collider med forkertnummer
this.physics.add.collider(gameState.textGroup, gameState.player, () =>{
    gameState.numbersArray = []
gameState.platformArray = []
gameState.platformAmount = []
gameState.music.stop()
gameState.failSound.play({rate: 0.8})
     this.physics.pause()
     this.add.text(gameState.player.body.x, gameState.player.body.y - 10, "you lose", gameState.headerStyle)
this.cameras.main.shake(2000, .01, false, (arr1, arr2)=>{
if(arr2 > .8){
    this.scene.stop("gamescene")
    this.scene.start("gameoverscene")
}
})
})







            //collieder med winnernummeret
this.physics.add.collider(gameState.player, gameState.winNumber, (arg1, arg2) =>{
this.physics.pause()
//this.add.text(gameState.player.x, gameState.player.y - 10, "YOU WIN", gameState.textStyle)
gameState.numbersArray = []
gameState.platformArray = []
gameState.platformAmount = []


if(gameState.extraNumbers < 20){
    gameState.extraNumbers += 1
}
if(gameState.difficulty == 0){
    gameState.plusNumber += 1
    gameState.points ++
}else if(gameState.difficulty == 1){
    console.log("test")
    gameState.plusNumber += 2
    gameState.points += 2
}else if(gameState.difficulty == 2){
    gameState.plusNumber += 3
    gameState.points +=5
}else if(gameState.difficulty == 3){
    gameState.plusNumber += 10
    gameState.points += 10
}else if(gameState.difficulty == 4){
    if(gameState.enemySpeed < 2000){
    gameState.enemySpeed = 2000
    }
    gameState.plusNumber += 20
    gameState.points += 25
}
gameState.rounds += 1
gameState.enemyTween.stop()

gameState.music.stop()
gameState.winSound.play({rate: 1.55})
this.add.text(gameState.player.body.x, gameState.player.body.y - 20, "YOU WIN", gameState.headerStyle)
this.cameras.main.zoomTo(3, 3000)
this.cameras.main.shake(4000, 0, false, (arr1, arr2) =>{
    if(arr2 > 0.8){
        gameState.winSound.stop()
      this.scene.restart()
    }
})



//this.scene.restart()


})


console.log(gameState.enemyTween)



//adding camara
this.physics.world.setBounds(0, 0, 6000, 900)
this.cameras.main.setBounds(0, 0, 6000, 900)
this.cameras.main.startFollow(gameState.player, true)










//laver controls
gameState.cursors = this.input.keyboard.createCursorKeys()


//gameState.player.setTexture("jump")




//laver animationer

        //runing

        this.anims.create({
            key:"walking",
            frames: this.anims.generateFrameNumbers("løb", {start:0, end: 17}),
            frameRate: 25,
           // reteat: -1
        })


this.anims.create({
    key:"running",
    frames: this.anims.generateFrameNumbers("løb", {start:0, end: 17}),
    frameRate: 35,
   // reteat: -1
})
        //standing
this.anims.create({
    key: "stand",
    frames: this.anims.generateFrameNumbers("figur", {start:0, end:11}),
    frameRate: 10
})

        //blinking
this.anims.create({
    key: "blink",
    frames: this.anims.generateFrameNames("blink", {start:0, end: 10}),
    frameRate: 60
})



//laver physics

this.physics.add.existing(gameState.winNumber, 1)


//lavert tweens







console.log(gameState.enemySpeed)





 }





                                                            //update










 update(arr1, arr2){

gameState.math.x = this.cameras.main.scrollX + 10
gameState.pointsText.x = this.cameras.main.scrollX + 700

   // this.platforms()
    //playermovement
if(gameState.cursors.left.isDown && gameState.cursors.shift.isDown){
    gameState.player.setVelocityX(-450)
    gameState.player.flipX = true
    gameState.walkSound.stop()
    if( gameState.player.body.velocity.y == 0){
    gameState.player.anims.play("running", true).setBodySize(75, 80, true)
    if(gameState.runSound.isPlaying != true){
    gameState.runSound.play({rate:0.75, loop: true})
    }
    
    }

}else if(gameState.cursors.right.isDown && gameState.cursors.shift.isDown){
    gameState.player.setVelocityX(450)
    gameState.player.flipX = false
    gameState.walkSound.stop()
    if(gameState.player.body.velocity.y == 0){
    gameState.player.anims.play("running", true).setBodySize(75, 80, true)
    if(gameState.runSound.isPlaying != true){
        gameState.runSound.play({rate:0.75, loop: true})
        }
    }
}else if(gameState.cursors.left.isDown ){
    gameState.player.setVelocityX(-250)
    gameState.player.flipX = true
    gameState.runSound.stop()
    if( gameState.player.body.velocity.y == 0){
    gameState.player.anims.play("walking", true).setBodySize(75, 80, true)
    if(gameState.walkSound.isPlaying != true){
        gameState.walkSound.play({rate:0.6, loop: true})
        }
    }
}else if(gameState.cursors.right.isDown){
    gameState.player.setVelocityX(250)
    gameState.player.flipX = false
    gameState.runSound.stop()
    if(gameState.player.body.velocity.y == 0){
    gameState.player.anims.play("walking", true).setBodySize(75, 80, true)
    if(gameState.walkSound.isPlaying != true){
        gameState.walkSound.play({rate:0.6, loop: true})
        }
    }
}else{
    gameState.player.setVelocityX(0)
    gameState.runSound.stop()
   gameState.walkSound.stop()
}
if(Phaser.Input.Keyboard.JustDown(gameState.cursors.space) && gameState.jumps > 0){
    gameState.player.setVelocityY(-600)
    gameState.player.setTexture("jump").setBodySize(75, 80, true).setFrame(0)
    gameState.player.anims.stop("stand")
    gameState.onGround = false
    gameState.jumpSound.play(gameState.config)
    gameState.runSound.stop()
    gameState.walkSound.stop()
    gameState.jumps --
   console.log(gameState.extraJump)
}

if(gameState.player.body.velocity.y == 0 && gameState.player.body.velocity.x == 0){

    gameState.player.anims.play("stand", true).setBodySize(75, 80, true)
}
if(gameState.player.body.velocity.y > 25){
   // console.log(gameState.player.body.velocity.y)
    gameState.player.setTexture("jump").setBodySize(75, 80, true).setFrame(1)
   gameState.runSound.stop()

}


if(gameState.cursors.down.isDown && gameState.player.body.y < 840){
    gameState.player.body.checkCollision.down = false
}else{
    gameState.player.body.checkCollision.down = true
}


 }




























                                //platformgenerator

 platforms(){
     let mathX = 0
     let mathY = 0
     let mathX2 = 0
     let mathY2 = 0
     let check1 = false
     let check2 = false
     let check3 = false
     
   gameState.platforms = this.physics.add.staticGroup()
   gameState.platforms.create(500, 700, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)
   gameState.platforms.create(5500, 700, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)
   
   for(let i = 0; i < 1000; i++){
    let randomX = Math.floor(Math.random() * 6000)
    let randomY = Math.floor(Math.random()* 850)
   
    if(randomY < 200){
        randomY += 150
    }
    check1 = false
    check2 = false
    check3 = true
    
    
    for(let y = 0; y < gameState.platforms.children.entries.length; y++){
        //console.log(randomX - gameState.platforms.children.entries[y].body.x)
        if(randomX < gameState.platforms.children.entries[y].body.x){
          mathX =  gameState.platforms.children.entries[y].body.x - randomX
        }else{
         mathX =    randomX - gameState.platforms.children.entries[y].body.x
        }
        if(randomY < gameState.platforms.children.entries[y].body.y){
         mathY = gameState.platforms.children.entries[y].body.y - randomY
        }else{
            mathY = randomY - gameState.platforms.children.entries[y].body.y
        }
       // console.log(mathY)
       // console.log(mathX)
        if(mathX < 500){
         check1 = true   
         //console.log("test1")
            
            // gameState.platforms.create(randomX, randomY, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)
           
        }
        if(mathX < 300  || mathY > 150){
            //console.log(randomX - gameState.platforms.children.entries[y].body.x)
            check2 = true
            
        }
        if(mathY > 150 && mathY < 250){
            check3 = false
           for(let c = 0; c < gameState.platforms.children.entries.length; c++){
                if(randomX < gameState.platforms.children.entries[c].body.x){
                    mathX2 =  gameState.platforms.children.entries[c].body.x - randomX
                  }else{
                   mathX2 =    randomX - gameState.platforms.children.entries[c].body.x
                  }
                  if(randomY < gameState.platforms.children.entries[c].body.y){
                   mathY2 = gameState.platforms.children.entries[c].body.y - randomY
                  }else{
                      mathY2 = randomY - gameState.platforms.children.entries[c].body.y
                  }
           if(mathX2 < 300){
               if(mathY2 < 100)
               check3 = true
           }       
            }
            if(check3 == false){
                gameState.platforms.create(randomX, randomY, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)  
            }
        }
      
        
    }
  if(check1 == true && check2 == false ){
    
    gameState.platforms.create(randomX, randomY, "grass").setScale(0.3).setBodySize(155, 40).setOffset(179,45)
  }
 
   }
   for(let i = 0; i < gameState.platforms.children.entries.length; i++){
   gameState.platforms.children.entries[i].body.checkCollision.down = false
   gameState.platforms.children.entries[i].body.checkCollision.left = false
   gameState.platforms.children.entries[i].body.checkCollision.right = false
   }
}























            //tilfældige tal generator


tal(){
let randomNumber1 = Math.floor(Math.random() * gameState.plusNumber)
let randomNumber2 = Math.floor(Math.random() * gameState.plusNumber)
gameState.math = this.add.text(100, 30,"Hvad er:  " +  randomNumber1 + " + "+ randomNumber2, gameState.headerStyle)
gameState.pointsText = this.add.text(200, 30, "Points:" + gameState.points, gameState.headerStyle)
gameState.trueNumber = randomNumber1 + randomNumber2
let randomPlatform = Math.floor(Math.random() *gameState.platforms.children.entries.length)
gameState.winNumber = this.add.text(gameState.platforms.children.entries[randomPlatform].body.x + 80, gameState.platforms.children.entries[randomPlatform].body.y - 25, gameState.trueNumber, {fill: "0x000000", font: "bold 17px Arial"}).setOrigin(0.5, 0)
gameState.numbersArray.push(gameState.trueNumber)
gameState.platformArray.push(randomPlatform)





gameState.textGroup = this.physics.add.group()



for(let i = 0; i <gameState.platforms.children.entries.length; i++){
    gameState.platformAmount.push(i)
} 

gameState.platformAmount.splice(gameState.platformAmount.indexOf(randomPlatform), 1)










for(let i = 0; i <gameState.extraNumbers; i++){
gameState.randomNumber1 = Math.floor(Math.random() * gameState.plusNumber)
gameState.randomNumber2 = Math.floor(Math.random() * gameState.plusNumber)



gameState.randomPlatform = gameState.platformAmount[Math.floor(Math.random() * gameState.platformAmount.length)]







gameState.randomNumber = gameState.randomNumber1 + gameState.randomNumber2
gameState.checkList.checkSameNumber = false

gameState.numbersArray.forEach((arr1) =>{
   
if(gameState.randomNumber == arr1){
    gameState.checkList.checkSameNumber = true

}
})
if(gameState.checkList.checkSameNumber == false){

    gameState.platformAmount.splice(gameState.platformAmount.indexOf(gameState.randomPlatform), 1)
    gameState.numbersArray.push(gameState.randomNumber)
    gameState.textGroup.defaults.setAllowGravity = false
    gameState.textGroup.add(this.add.text(gameState.platforms.children.entries[gameState.randomPlatform].body.x + 80,gameState.platforms.children.entries[gameState.randomPlatform].body.y - 25, gameState.randomNumber, {fill: "0x000000", font: "bold 17px Arial"})).setOrigin(0.5, 0)
    
    
}else{

    i -= 1
}

}
}
enemyMove(){
    gameState.enemyTween = this.tweens.add({
        targets:gameState.enemy,
        x: gameState.player.body.x,
        y: gameState.player.body.y,
        duration: gameState.enemySpeed, 
        onComplete: () =>{
            
            this.enemyMove()
            if(gameState.difficulty == 1){
                if(gameState.enemySpeed > 4000){
                    gameState.enemySpeed -= 500
                    }
}else if(gameState.difficulty == 2){
    if(gameState.enemySpeed > 2000){
        gameState.enemySpeed -= 500
        }
}else if(gameState.difficulty == 3){
    if(gameState.enemySpeed > 1000){
        gameState.enemySpeed -= 500
        }
}else if(gameState.difficulty == 4){
    if(gameState.enemySpeed > 500){
        gameState.enemySpeed -= 500
        }else if(gameState.difficulty == 0){
            if(gameState.enemySpeed >  6000){
                gameState.enemySpeed -= 500
                }
        }
}
           
        }
    })
}





}