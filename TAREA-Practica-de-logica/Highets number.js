let highestNumber = -Infinity; 

for (let i = 0; i < 10; i++) {
    const number = parseFloat(prompt(`Ingresa un número ${i + 1}:`)); 

    // Check if the input is a valid number
    if (!isNaN(number) && number > highestNumber) {
        highestNumber = number; // 
    }
}

console.log(`El número más grande que ingresaste es: ${highestNumber}`);
