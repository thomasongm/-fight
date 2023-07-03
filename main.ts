controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    assets.animation`myAnim0`,
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.player1.isPressed(ControllerButton.A)) {
        RandomValue2 = randint(-1, -5)
        statusbar2.value += RandomValue2
        StatusBar2Value += RandomValue2
    }
    if (controller.player2.isPressed(ControllerButton.A)) {
        RandomValue = randint(-1, -5)
        statusbar.value += RandomValue
        StatusBarValue += RandomValue
    }
    if (StatusBarValue < 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(22, 19)
        statusbar.value = 100
        StatusBarValue = 100
    }
    if (StatusBar2Value < 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(22, 19)
        statusbar2.value = 100
        StatusBar2Value = 100
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    assets.animation`myAnim`,
    200,
    false
    )
})
let RandomValue = 0
let RandomValue2 = 0
let StatusBar2Value = 0
let StatusBarValue = 0
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(35, 54)
controller.player1.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
statusbar.setColor(7, 2, 2)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(110, 56)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
statusbar2.setColor(7, 2, 2)
controller.player2.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
statusbar.value = 100
StatusBarValue = 100
statusbar2.value = 100
StatusBar2Value = 100
