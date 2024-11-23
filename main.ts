function getButton(): number {
    while (true) {
        if (input.buttonIsPressed(Button.B)) {
            return 3
        } else if (input.logoIsPressed()) {
            return 1
        } else if (input.buttonIsPressed(Button.A)) {
            return 2
        } else if (input.isGesture(Gesture.Shake)) {
            return 0
        }
        
    }
    return -1
}

function Show(num: number) {
    if (num == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (num == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (num == 3) {
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

function GAMEMME() {
    let direction2: number;
    
    direction = 0
    score = 0
    time = 1000
    hp = 3
    while (hp > 0) {
        direction2 = 0
        direction = randint(0, 2)
        if (direction2 == 0) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.pause(time)
            if (input.logoIsPressed()) {
                time += -50
                score += 1
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                hp += -1
                time += -50
            }
            
        }
        
        if (direction == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.pause(time)
            if (input.buttonIsPressed(Button.A)) {
                time += -50
                score += 1
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                hp += -1
                time += -50
            }
            
        }
        
        if (direction == 2) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.pause(time)
            if (input.buttonIsPressed(Button.B)) {
                time += -50
                score += 1
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                hp += -1
                time += -50
            }
            
        }
        
    }
    basic.showNumber(score)
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
    basic.showNumber(score)
})
