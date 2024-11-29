def getButton():
    while True:
        if input.button_is_pressed(Button.B):
            music.play(music.string_playable("E ", 500),
                                                                    music.PlaybackMode.UNTIL_DONE)
            return 3
        elif input.logo_is_pressed():
            music.play(music.string_playable("C ", 500),
                                                    music.PlaybackMode.UNTIL_DONE)
            return 1
        elif input.button_is_pressed(Button.A):
            music.play(music.string_playable("D ", 500),
                                                            music.PlaybackMode.UNTIL_DONE)
            return 2
        elif input.is_gesture(Gesture.SHAKE):
            music.play(music.string_playable("B ", 500),
                                            music.PlaybackMode.UNTIL_DONE)
            return 0
    return -1
def Show(num: number):
    if num == 0:
        music.play(music.string_playable("B ", 500),
                                music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            . . . . .
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            """)
            
    elif num == 1:
        music.play(music.string_playable("C ", 500),
                                        music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    elif num == 2:
        music.play(music.string_playable("D ", 500),
                                                music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    elif num == 3:
        music.play(music.string_playable("E ", 500),
                                                        music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    else:
        basic.show_string("ERRRRRR")
        
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
    while(not(input.is_gesture(Gesture.SHAKE))):
        basic.show_number(score)
    
    State = 0
    music.play(music.string_playable("A B C D ", 500), music.PlaybackMode.UNTIL_DONE)
    score = 0
    for i in range (list2.length +1) :
        list2.pop()
basic.forever(on_forever)