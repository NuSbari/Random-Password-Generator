const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

const firstPasswordEl = document.getElementById("first_password");
const secondPasswordEl = document.getElementById("second_password");
const passwordLengthEl = document.getElementById("password_length");
const LOCAL_STORAGE_KEY = "savedInput";

function generatePassword() {
    const passwordLength = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;
    let firstPassword = "";
    let secondPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        firstPassword += characters[Math.floor(Math.random() * characters.length)];
        secondPassword += characters[Math.floor(Math.random() * characters.length)];
    }

    firstPasswordEl.textContent = passwordLength == 0 ? "Empty password" : firstPassword;
    secondPasswordEl.textContent = passwordLength == 0 ? "Empty password" : secondPassword;

    console.log("click");
}

function copyToClipboard(element) {
    document.execCommand("copy");
    element.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", element.textContent);
            console.log(event.clipboardData.getData("text"));
        }
        alert("Text copied to clipboard!");
    });
}

firstPasswordEl.onclick = () => copyToClipboard(firstPasswordEl);
secondPasswordEl.onclick = () => copyToClipboard(secondPasswordEl);

passwordLengthEl.addEventListener("input", function() {
    localStorage.setItem(LOCAL_STORAGE_KEY, passwordLengthEl.value);
});

console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
