function newImage(image, bottom, left) { 
    let newImage = document.createElement('img')
    newImage.src = image
    newImage.style.position = 'fixed'
    newImage.style.left = left
    newImage.style.bottom = bottom
    document.body.append(newImage)
    return newImage
}

let greenCharacter = newImage('assets/green-character.gif', '100px', '100px' )
let pineTree = newImage('assets/pine-tree.png', '200px', '450px' )
let tree = newImage('assets/tree.png', '300px', '200px')
let pillar = newImage('assets/pillar.png', '100px', '350px')
let crate = newImage('assets/crate.png', '200px', '150px')
let well = newImage('assets/well.png', '425px', '500px')

function newItem(image, bottom, left) { 
    let newItem = newImage(image, bottom, left)
    newItem.addEventListener('dblclick', function(){
        newItem.remove()
    })
    return newItem   
} 

let sword = newItem('assets/sword.png', '405px', '500px')
let shield = newItem('assets/sheild.png', '185px', '165px')
let staff = newItem('assets/staff.png', '100px', '600px')

//let grass = newImage('assets/grass.png', 'window.innerWidth 100px', 'window.innerHeight')


