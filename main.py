def getButton():
    while True:
        if input.button_is_pressed(Button.B):
            return 3
        elif input.logo_is_pressed():
            return 1
        elif input.button_is_pressed(Button.A):
            return 2
        elif input.is_gesture(Gesture.SHAKE):
            return 0
    return -1
def Show(num: number):
    if num == 0:
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """)
    elif num == 1:
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    elif num == 2:
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    elif num == 3:
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    else:
        basic.show_string("ERRRRRR")
def GAMEMME():
    global direction, score, time, hp
    direction = 0
    score = 0
    time = 1000
    hp = 3
    while hp > 0:
        direction2 = 0
        direction = randint(0, 2)
        if direction2 == 0:
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
            basic.pause(time)
            if input.logo_is_pressed():
                time += -50
                score += 1
                basic.show_leds("""
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    """)
            else:
                hp += -1
                time += -50
        if direction == 1:
            basic.show_leds("""
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                """)
            basic.pause(time)
            if input.button_is_pressed(Button.A):
                time += -50
                score += 1
                basic.show_leds("""
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    """)
            else:
                hp += -1
                time += -50
        if direction == 2:
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
            basic.pause(time)
            if input.button_is_pressed(Button.B):
                time += -50
                score += 1
                basic.show_leds("""
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    """)
            else:
                hp += -1
                time += -50
    basic.show_number(score)
State = 0
hp = 0
time = 1000
direction = 0
score = 0
list2: List[number] = []
score = 0

def on_forever():
    global score, State, time
    while State == 0:
        list2.append(randint(0, 3))
        for value in range(list2.length):
            Show(list2[value])
            basic.pause(time)
            basic.show_leds("""
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            """)


        basic.clear_screen()

        for value in range(list2.length):
            if getButton() == list2[value]:
                basic.show_leds("""
                            . . . . .
                            . . . . #
                            . . . # .
                            # . # . .
                            . # . . .
                            """)
                basic.clear_screen()
            else:
                State = -1
                basic.show_leds("""
                    # . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . #
                    """)
                break
        score += 1
        if time > 100:
            time -= 50
        
        
        
        basic.pause(100)
    basic.show_number(score)
basic.forever(on_forever)
