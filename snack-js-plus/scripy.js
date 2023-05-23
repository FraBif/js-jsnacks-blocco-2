function createLi () {
   let liElement = document.createElement("li")
   document.getElementById("lista").appendChild(liElement)
   liElement.appendChild("Giorgio") 
   return liElement

}

for (let index = 0; index < 10; index++) {
    createLi;
    
}