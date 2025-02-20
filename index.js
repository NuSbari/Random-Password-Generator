const characters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

let firstPasswordEl = document.getElementById("first_password");
let secondPasswordEl = document.getElementById("second_password");
const passwordLengthEl = document.getElementById("password_length");


function generatePassword() {
    let firstPassword = "";
    let secondPassword = "";
    for (let i = 0; i < localStorage.getItem("savedInput"); i++) {
        let firstPasswordCharacter = Math.floor(Math.random() * characters.length)
        firstPassword += characters[firstPasswordCharacter]
        let secondPasswordCharacter = Math.floor(Math.random() * characters.length)
        secondPassword += characters[secondPasswordCharacter]
    }
    if (localStorage.getItem("savedInput") == 0) {
        firstPasswordEl.textContent = "Empty password"
        secondPasswordEl.textContent = "Empty password"
    } else {
        firstPasswordEl.textContent = firstPassword
        secondPasswordEl.textContent = secondPassword
    }
    console.log("click")
}

firstPasswordEl.onclick = function() {
    document.execCommand("copy")
}

firstPasswordEl.addEventListener("copy", function(event) {
    event.preventDefault()
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", firstPasswordEl.textContent)
        console.log(event.clipboardData.getData("text"))
    }
    // confirmCopyEl.textContent = "Text copied to clipboard!"
    alert("Text copied to clipboard!")
})

secondPasswordEl.onclick = function() {
    document.execCommand("copy")
}

secondPasswordEl.addEventListener("copy", function(event) {
    event.preventDefault()
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", secondPasswordEl.textContent)
        console.log(event.clipboardData.getData("text"))
    }
    // confirmCopyEl.textContent = "Text copied to clipboard!"
    alert("Text copied to clipboard!")
})

passwordLengthEl.addEventListener("input", function() {
    localStorage.setItem("savedInput", passwordLengthEl.value);
});

console.log(localStorage.getItem("savedInput"))