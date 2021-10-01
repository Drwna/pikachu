import string from "./css"

let n = 1
// demo.innerText = string.substring(0, n)
// demo2.innerHTML = string.substring(0, n)
// console.log(n)
let time = 50
const run = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substring(0, n)
    demo2.innerHTML = string.substring(0, n)
    demo.scrollTop = demo.scrollHeight
    // console.log(string.substring(0, n))
}
let id = setInterval(() => {
    run()
}, time);

btnPause.onclick = () => {
    window.clearInterval(id)
}

btnPlay.onclick = () => {
    id = setInterval(() => {
        run()
    },time)
}


btnSlow.onclick = () => {
    window.clearInterval(id)
    time = 150
    id = setInterval(() => {
        run()
    },time)
    console.log(time)
}

btnNormal.onclick = () =>{
    window.clearInterval(id)
    time = 50
    id = setInterval(() =>{
        run()
    },time)
    console.log(time)
}

btnFast.onclick = () => {
    window.clearInterval(id)
    time = 0
    id = setInterval(() => {
        run()
    })
    console.log(time)
}



dev















