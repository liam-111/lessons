function getBubls() {
    return document.querySelectorAll(".buble")
}
function randominzer() {
    const bubls = getBubls()
    console.log(bubls)
    bubls.forEach(function (b) {
        console.log(b)
        b.style.left = Math.round(Math.random() * 800)+"px"
        b.style.top = Math.round(Math.random() * 800)+"px"
    })
}
setInterval(function () {
    randominzer()
}, 700)