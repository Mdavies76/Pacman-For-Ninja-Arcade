enum ActionKind {
    Walking,
    Idle,
    Jumping,
    pacmanRight,
    pacmanLeft,
    pacmanDown,
    pacmanUp
}
namespace SpriteKind {
    export const Map = SpriteKind.create()
}
// pacman eating dots
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    info.player1.changeScoreBy(1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction0 = 3
})
function respawn () {
    tiles.placeOnRandomTile(Fanstasma2, assets.tile`myTile1`)
    tiles.placeOnRandomTile(Fanstasma3, assets.tile`myTile1`)
    tiles.placeOnRandomTile(Fanstasma4, assets.tile`myTile1`)
    tiles.placeOnRandomTile(Fantasma1, assets.tile`myTile2`)
    timer.after(5000, function () {
        tiles.placeOnRandomTile(Fanstasma2, assets.tile`myTile2`)
    })
    timer.after(15000, function () {
        tiles.placeOnRandomTile(Fanstasma3, assets.tile`myTile2`)
    })
    timer.after(30000, function () {
        tiles.placeOnRandomTile(Fanstasma4, assets.tile`myTile2`)
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(30, 19))
})
// setting animation frames for pacman
function createAnimations () {
    pacmanRight = animation.createAnimation(ActionKind.pacmanRight, 200)
    pacmanRight.addAnimationFrame(img`
        ..................
        .....555555555....
        ....55555555555...
        ...5555555555555..
        ..555555555555555.
        .55555555555ff5555
        .55555555555ff5555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555.........
        .555555555........
        .5555555555.......
        .55555555555......
        ..55555555555.....
        ...55555555555....
        ....55555555555...
        .....5555555555...
        `)
    pacmanRight.addAnimationFrame(img`
        ..................
        .....555555555....
        ....55555555555...
        ...5555555555555..
        ..555555555555555.
        .55555555555ff5555
        .55555555555ff5555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        ..555555555555555.
        ...5555555555555..
        ....55555555555...
        .....555555555....
        `)
    animation.attachAnimation(PacMan, pacmanRight)
    pacmanDown = animation.createAnimation(ActionKind.pacmanDown, 200)
    pacmanDown.addAnimationFrame(img`
        ..................
        ....555555555.....
        ...55555555555....
        ..5555555555555...
        .555555555555555..
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        5555555.555555555.
        555555..555555555.
        55555...555555555.
        5555....555ff5555.
        555.....555ff5555.
        55......55555555..
        ........5555555...
        ........555555....
        ........55555.....
        `)
    pacmanDown.addAnimationFrame(img`
        ..................
        .....555555555....
        ....55555555555...
        ...5555555555555..
        ..555555555555555.
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555ff5555
        .55555555555ff5555
        ..555555555555555.
        ...5555555555555..
        ....55555555555...
        .....555555555....
        `)
    animation.attachAnimation(PacMan, pacmanDown)
    pacmanLeft = animation.createAnimation(ActionKind.pacmanLeft, 200)
    pacmanLeft.addAnimationFrame(img`
        ..................
        ....555555555.....
        ...55555555555....
        ..5555555555555...
        .555555555555555..
        5555ff55555555555.
        5555ff55555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        .........55555555.
        ........555555555.
        .......5555555555.
        ......55555555555.
        .....55555555555..
        ....55555555555...
        ...55555555555....
        ...5555555555.....
        `)
    pacmanLeft.addAnimationFrame(img`
        ..................
        ....555555555.....
        ...55555555555....
        ..5555555555555...
        .555555555555555..
        5555ff55555555555.
        5555ff55555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        .555555555555555..
        ..5555555555555...
        ...55555555555....
        ....555555555.....
        `)
    animation.attachAnimation(PacMan, pacmanLeft)
    pacmanUp = animation.createAnimation(ActionKind.pacmanUp, 200)
    pacmanUp.addAnimationFrame(img`
        .....55555........
        ....555555........
        ...5555555........
        ..55555555......55
        .5555ff555.....555
        .5555ff555....5555
        .555555555...55555
        .555555555..555555
        .555555555.5555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        .55555555555555555
        ..555555555555555.
        ...5555555555555..
        ....55555555555...
        .....555555555....
        ..................
        `)
    pacmanUp.addAnimationFrame(img`
        ....555555555.....
        ...55555555555....
        ..5555555555555...
        .555555555555555..
        5555ff55555555555.
        5555ff55555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        55555555555555555.
        .555555555555555..
        ..5555555555555...
        ...55555555555....
        ....555555555.....
        ..................
        `)
    animation.attachAnimation(PacMan, pacmanUp)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction0 = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(2, 19))
})
function lostLife () {
    respawn()
    info.changeLifeBy(-1)
    tiles.placeOnTile(PacMan, tiles.getTileLocation(16, 31))
    pause(2000)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction0 = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction0 = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    lostLife()
})
let direction4 = 0
let direction3 = 0
let direction2 = 0
let direction1 = 0
let pacmanUp: animation.Animation = null
let pacmanLeft: animation.Animation = null
let pacmanDown: animation.Animation = null
let pacmanRight: animation.Animation = null
let direction0 = 0
let Fanstasma4: Sprite = null
let Fanstasma3: Sprite = null
let Fanstasma2: Sprite = null
let Fantasma1: Sprite = null
let PacMan: Sprite = null
info.player1.setScore(0)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`pacMap`)
PacMan = sprites.create(img`
    ..................
    .....555555555....
    ....55555555555...
    ...5555555555555..
    ..555555555555555.
    .55555555555ff5555
    .55555555555ff5555
    .55555555555555555
    .55555555555555555
    .55555555555555555
    .55555555555555555
    .55555555555555555
    .55555555555555555
    .55555555555555555
    ..555555555555555.
    ...5555555555555..
    ....55555555555...
    .....555555555....
    `, SpriteKind.Player)
PacMan.setScale(1.75, ScaleAnchor.Middle)
tiles.placeOnTile(PacMan, tiles.getTileLocation(16, 32))
scene.cameraFollowSprite(PacMan)
controller.moveSprite(PacMan, 120, 120)
createAnimations()
Fantasma1 = sprites.create(img`
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 f f 3 3 3 3 3 3 f f 3 3 3 
    3 3 3 f f 3 3 3 3 3 3 f f 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 f f f 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . 3 3 3 . 3 3 3 . 3 3 3 . 3 3 
    3 . . 3 . . . 3 . . . 3 . . . 3 
    `, SpriteKind.Enemy)
Fantasma1.setScale(1.5, ScaleAnchor.Top)
Fantasma1.setBounceOnWall(true)
Fantasma1.setVelocity(30, 0)
Fanstasma2 = sprites.create(img`
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    4 4 4 f f 4 4 4 4 4 4 f f 4 4 4 
    4 4 4 f f 4 4 4 4 4 4 f f 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 f f f 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 . 4 4 4 . 4 4 4 . 4 4 4 . 4 4 
    4 . . 4 . . . 4 . . . 4 . . . 4 
    `, SpriteKind.Enemy)
Fanstasma2.setScale(1.5, ScaleAnchor.Bottom)
Fanstasma2.setVelocity(40, 0)
Fanstasma2.setBounceOnWall(true)
Fanstasma3 = sprites.create(img`
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 f f 7 7 7 7 7 7 f f 7 7 7 
    7 7 7 f f 7 7 7 7 7 7 f f 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f f 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 . 7 7 7 . 7 7 7 . 7 7 7 . 7 7 
    7 . . 7 . . . 7 . . . 7 . . . 7 
    `, SpriteKind.Enemy)
Fanstasma3.setScale(1.5, ScaleAnchor.Top)
Fanstasma3.setVelocity(50, 0)
Fanstasma3.setBounceOnWall(true)
Fanstasma4 = sprites.create(img`
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 f f 2 2 2 2 2 2 f f 2 2 2 
    2 2 2 f f 2 2 2 2 2 2 f f 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 
    2 . . 2 . . . 2 . . . 2 . . . 2 
    `, SpriteKind.Enemy)
Fanstasma4.setScale(1.5, ScaleAnchor.Top)
Fanstasma4.setVelocity(60, 0)
Fanstasma4.setBounceOnWall(true)
respawn()
// choosing which animation set to use based on pacman's movement direction
forever(function () {
    if (direction0 == 0) {
        animation.setAction(PacMan, ActionKind.pacmanRight)
    } else if (direction0 == 1) {
        animation.setAction(PacMan, ActionKind.pacmanDown)
    } else if (direction0 == 2) {
        animation.setAction(PacMan, ActionKind.pacmanLeft)
    } else {
        animation.setAction(PacMan, ActionKind.pacmanUp)
    }
})
forever(function () {
    if (Fantasma1.isHittingTile(CollisionDirection.Right) || Fantasma1.isHittingTile(CollisionDirection.Left) || (Fantasma1.isHittingTile(CollisionDirection.Top) || Fantasma1.isHittingTile(CollisionDirection.Bottom))) {
        direction1 = randint(0, 3)
    }
    if (direction1 == 0) {
        Fantasma1.setVelocity(0, -30)
    } else if (direction1 == 1) {
        Fantasma1.setVelocity(0, 30)
    } else if (direction1 == 2) {
        Fantasma1.setVelocity(-30, 0)
    } else if (direction1 == 3) {
        Fantasma1.setVelocity(30, 0)
    }
})
forever(function () {
    if (Fanstasma2.isHittingTile(CollisionDirection.Right) || Fanstasma2.isHittingTile(CollisionDirection.Left) || (Fanstasma2.isHittingTile(CollisionDirection.Top) || Fanstasma2.isHittingTile(CollisionDirection.Bottom))) {
        direction2 = randint(0, 3)
    }
    if (direction2 == 0) {
        Fanstasma2.setVelocity(0, -40)
    } else if (direction2 == 1) {
        Fanstasma2.setVelocity(0, 40)
    } else if (direction2 == 2) {
        Fanstasma2.setVelocity(-40, 0)
    } else if (direction2 == 3) {
        Fanstasma2.setVelocity(40, 0)
    }
})
forever(function () {
    if (Fanstasma3.isHittingTile(CollisionDirection.Right) || Fanstasma3.isHittingTile(CollisionDirection.Left) || (Fanstasma3.isHittingTile(CollisionDirection.Top) || Fanstasma3.isHittingTile(CollisionDirection.Bottom))) {
        direction3 = randint(0, 3)
    }
    if (direction3 == 0) {
        Fanstasma3.setVelocity(0, -50)
    } else if (direction3 == 1) {
        Fanstasma3.setVelocity(0, 50)
    } else if (direction3 == 2) {
        Fanstasma3.setVelocity(-50, 0)
    } else if (direction3 == 3) {
        Fanstasma3.setVelocity(50, 0)
    }
})
forever(function () {
    if (Fanstasma4.isHittingTile(CollisionDirection.Right) || Fanstasma4.isHittingTile(CollisionDirection.Left) || (Fanstasma4.isHittingTile(CollisionDirection.Top) || Fanstasma4.isHittingTile(CollisionDirection.Bottom))) {
        direction4 = randint(0, 3)
    }
    if (direction4 == 0) {
        Fanstasma4.setVelocity(0, -60)
    } else if (direction4 == 1) {
        Fanstasma4.setVelocity(0, 60)
    } else if (direction4 == 2) {
        Fanstasma4.setVelocity(-60, 0)
    } else if (direction4 == 3) {
        Fanstasma4.setVelocity(60, 0)
    }
})
