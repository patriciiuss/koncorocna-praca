input.onButtonPressed(Button.A, function () {
    kroky = 0
    basic.showNumber(0)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(kroky)
    basic.pause(1000)
    basic.clearScreen()
})
let kroky = 0
kroky = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        kroky += 1
        if (kroky == 20) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (kroky == 40) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (kroky == 60) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (kroky == 80) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (kroky == 100) {
            for (let index = 0; index < 3; index++) {
                music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            }
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(1000)
            basic.showString("ODDYCHNI SI")
        }
        basic.pause(100)
    }
})
