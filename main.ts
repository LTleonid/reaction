function getButton(): number {
    while (true) {
        if (input.buttonIsPressed(Button.B)) {
            music.play(music.stringPlayable("E ", 500), music.PlaybackMode.UntilDone)
            return 3
        } else if (input.logoIsPressed()) {
            music.play(music.stringPlayable("C ", 500), music.PlaybackMode.UntilDone)
            return 1
        } else if (input.buttonIsPressed(Button.A)) {
            music.play(music.stringPlayable("D ", 500), music.PlaybackMode.UntilDone)
            return 2
        } else if (input.isGesture(Gesture.Shake)) {
            music.play(music.stringPlayable("B ", 500), music.PlaybackMode.UntilDone)
            return 0
        }
        
    }
    return -1
}

function Show(num: number) {
    if (num == 0) {
        music.play(music.stringPlayable("B ", 500), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            `)
    } else if (num == 1) {
        music.play(music.stringPlayable("C ", 500), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (num == 2) {
        music.play(music.stringPlayable("D ", 500), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (num == 3) {
        music.play(music.stringPlayable("E ", 500), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showString("ERRRRRR")
    }
    
}

let State = 0
let hp = 0
let time = 1000
let direction = 0
let score = 0
let list2 : number[] = []
score = 0
basic.forever(function on_forever() {
    let value: number;
    
    while (State == 0) {
        list2.push(randint(0, 3))
        for (value = 0; value < list2.length; value++) {
            Show(list2[value])
            basic.pause(time)
            basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
        }
        basic.clearScreen()
        for (value = 0; value < list2.length; value++) {
            if (getButton() == list2[value]) {
                basic.showLeds(`
                            . . . . .
                            . . . . #
                            . . . # .
                            # . # . .
                            . # . . .
                            `)
                basic.clearScreen()
            } else {
                State = -1
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . #
                    `)
                break
            }
            
        }
        score += 1
        if (time > 100) {
            time -= 50
        }
        
        basic.pause(100)
    }
    while (!input.isGesture(Gesture.Shake)) {
        basic.showNumber(score)
    }
    State = 0
    music.play(music.stringPlayable("A B C D ", 500), music.PlaybackMode.UntilDone)
    score = 0
    for (let i = 0; i < list2.length + 1; i++) {
        _py.py_array_pop(list2)
    }
})
