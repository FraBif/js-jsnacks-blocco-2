const randomNumber = Math.floor(Math.random() * 100) +1
console.log(randomNumber)

let userNumber = parseInt(prompt("Indovina a che numero sto pensando"))


while (userNumber != randomNumber) {

    if (userNumber < randomNumber) {
        alert("Il tuo numero è minore del mio")
        parseInt(prompt("Indovina a che numero sto pensando"))
        
     } else if (userNumber > randomNumber) {
         alert("Il tuo numero è maggiore del mio")
         parseInt(prompt("Indovina a che numero sto pensando"))
     
         
        } else {
            console.log("Hai indovinato!")
        }
     


}





