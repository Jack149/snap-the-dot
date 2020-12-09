def on_button_pressed_a():
    basic.show_number(game.score())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if sprite.get(LedSpriteProperty.X) == 3:
        basic.show_leds("""
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            """)
        game.add_score(1)
    elif sprite.get(LedSpriteProperty.X) != 3:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        game.remove_life(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

sprite: game.LedSprite = None
sprite = game.create_sprite(2, 2)
game.set_life(5)
game.set_score(0)

def on_forever():
    sprite.move(1)
    sprite.if_on_edge_bounce()
    basic.pause(100)
basic.forever(on_forever)
