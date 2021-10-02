import string from "./dynamicCSS.js"

const player = {
    id: undefined,
    n: 1,
    time: 100,
    ui: {
        codeDemo: document.querySelector('#codeDemo'),
        demo: document.querySelector('#demo')
    },
    init: () => {
        player.ui.codeDemo.innerText = string.substring(0, player.n)
        player.ui.demo.innerHTML = string.substring(0, player.n)
        player.bindEvents()
        player.play()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnReplay': 'replay',
        '#btnReturn': 'return'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    return: () => {
        location.href = 'index.html'
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.codeDemo.innerText = string.substring(0, player.n)
        player.ui.demo.innerHTML = string.substring(0, player.n)
        player.ui.codeDemo.scrollTop = player.ui.codeDemo.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 200
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 80
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    replay: () => {
        player.ui.codeDemo.innerText = ''
        player.ui.demo.innerHTML = ''
        player.n = 0
        player.init()
    }
}
player.init()