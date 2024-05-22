// number
let x = 1

// string
let y = "hallo world"

// boolean
let b = true
let c = false
if (b != c) console.log("b!=c")
if (2 == 3) console.log("if")
console.log(2 == 2, 2 == 3, 5 > 3, x == 1)
let username = "Liam"
if (username == "Liam-1") console.log("yes")
else console.log("no")

// undefined 
let u
console.log(u)

// Array
let arr = [1, 2, 3, "boy", true, false, undefined]
console.log(arr)

// object
let o = {
    name: "Tim",
    age: 28,
    gender: "man",
    isStudent: true,
    say: function () {
        console.log("Hi")
    }
}
console.log(o)
o.say()
console.error("sss")