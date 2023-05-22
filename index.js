document.getElementById('container').style.background='silver'
document.getElementById('title').style.color='green'
document.getElementById('fruit').style.textTransform='uppercase'
document.getElementById('veg').style.textTransform='uppercase'
let addedFruit=document.createElement('li')
addedFruit.innerHTML='Plums'
document.getElementById('fruList').appendChild(addedFruit)

let addedVegetable=document.createElement('li')
addedVegetable.innerHTML='Okra'
document.getElementById('vegList').appendChild(addedVegetable)