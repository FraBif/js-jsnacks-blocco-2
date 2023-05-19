
const numbers = []

let sum = 0
while (sum < 50) {
    const userNumbers = prompt("Inserisci un numero")
    numbers.push(userNumbers)

    sum = sum + parseInt(userNumbers)

}

console.log(numbers)