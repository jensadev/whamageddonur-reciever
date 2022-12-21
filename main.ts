radio.setGroup(666)
input.onButtonPressed(Button.A, function () {
    melody.forEach(part => {
        if (part.r) {
            music.rest(part.d)
        } else {
            music.playTone(part.n, part.d)
        }
    })

})

input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
})

// radio.sendNumber(0)
radio.onReceivedValue(function (name: string, value: number) {
    basic.pause(1000);
    melody.forEach(part => {
        if (part.r) {
            music.rest(part.d)
        } else {
            music.playTone(part.n, part.d)
        }
    })
})

music.setVolume(100)

let bpm = 106
let w = bpm * 18
let h = w / 2
let q = w / 4
let e = w / 8
let sx = w / 16
// music.setTempo(106)

let melody = [
    { r: false, n: Note.D, d: e },
    { r: false, n: Note.A, d: e },
    { r: false, n: Note.C, d: e },
    { r: false, n: Note.A, d: e },

    { r: false, n: Note.D, d: e },
    { r: false, n: Note.A, d: e },
    { r: false, n: Note.C, d: e },
    { r: false, n: Note.A, d: e },

    { r: false, n: Note.D, d: e },
    { r: false, n: Note.A, d: e },
    { r: false, n: Note.C, d: e },
    { r: false, n: Note.A, d: e },

    { r: false, n: Note.D, d: e },
    { r: false, n: Note.A, d: e },
    { r: false, n: Note.C, d: e },
    { r: false, n: Note.A, d: e },

    { r: false, n: Note.E, d: e },
    { r: false, n: Note.C, d: e },
    { r: false, n: Note.Bb, d: e },
    { r: false, n: Note.C, d: e },
    
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.C, d: e },
    { r: false, n: Note.Bb, d: e },
    { r: false, n: Note.C, d: e },
    
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.C, d: e },
    { r: false, n: Note.Bb, d: e },
    { r: false, n: Note.C, d: e },

    { r: false, n: Note.E, d: e },
    { r: false, n: Note.C, d: e },
    { r: false, n: Note.Bb, d: e },
    { r: false, n: Note.C, d: e },

    { r: false, n: Note.E, d: e },
    { r: false, n: Note.Bb, d: e },
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.Bb, d: e },
    
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.Bb, d: e },
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.Bb, d: e },
    
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.Bb, d: e },
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.Bb, d: e },

    { r: false, n: Note.E, d: e },
    { r: false, n: Note.Bb, d: e },
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.Bb, d: e },

    { r: false, n: Note.A, d: e },
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.A, d: e },
    { r: false, n: Note.E, d: e },

    { r: false, n: Note.A, d: e },
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.A, d: e },
    { r: false, n: Note.E, d: e },

    { r: false, n: Note.A, d: e },
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.A, d: e },
    { r: false, n: Note.E, d: e },
    { r: false, n: Note.A, d: h },
];

basic.forever(function () {

})
