input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    } else {
        game.removeLife(1)
    }
    if (true) {
    	
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setLife(3)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
})
