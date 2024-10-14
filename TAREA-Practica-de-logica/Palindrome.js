function isPalindrome(input) {
    let normalized = '';

    for (let char of input) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            normalized += char.toLowerCase(); 
        }
    }
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}

const userInput = prompt("Ingresa una palabra u oración:");
if (isPalindrome(userInput)) {
    console.log("la entrada es un palíndromo.");
} else {
    console.log("la entrada NO es un palíndromo.");
}

