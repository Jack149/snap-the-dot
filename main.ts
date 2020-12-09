input.onButtonPressed(Button.A, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 3) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        game.addScore(1)
    } else if (sprite.get(LedSpriteProperty.X) != 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        game.removeLife(1)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setLife(5)
game.setScore(0)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
})
