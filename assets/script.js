// ---------------setup du canvas----------------------

const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

// pour indiquer que mon canvas va prendre l'entierté de la largeur de mon navigateur
canvas.width = innerWidth
// pour indiquer que mon canvas va prendre l'entierté de la hauteur de mon navigateur
canvas.height = innerHeight

console.log(c);

// ------------------Personnages--------------------------
// je fais d'abord une class avec les propriétés pour "dessiner/positionner" le personnage
// dans le constructeur ce sera la position de départ et la taille du personnage
const gravité = 0.5;
class Player {
    constructor(){
        // position
        this.position = {
            x: 100,
            y: 100
        }
        // vitesse
        this.velocity = {
            x:0,
            y:0
        }
        this.width = 30
        this.height = 30
    }
    //  cette fonction ne sert uniquement a dessiner
    draw(){
        // couleur du dessin que je réalise
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height
            )
    }

    // permet de mettre à jours le personnages lorsque l'on va réaliser des actions
    update(){
        this.draw()
        // création de la gravité
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravité
        else this.velocity.y = 0
        // this.position.x += this.velocity.x  
    }
}

const player = new Player();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

// fonction va qui permettre l'animation des actions en créant une loop
function animate(){
    requestAnimationFrame(animate)
    // clearrect va nettoyer le canvas
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
        // conditions pour les mouvements gauches et droits
    if (keys.right.pressed){
        player.velocity.x = 5
    } else if ( keys.left.pressed){
        player.velocity.x = -5
    } else player.velocity.x = 0
    
}


animate()

addEventListener('keydown', ({ keyCode }) => {
    
    // setup des boutons de directions sur le clavier
    switch(keyCode){
        case 81 : 
        console.log('left');
        keys.left.pressed = true
        break
        case 68 : 
        console.log('right');
        keys.right.pressed = true
        break
        case 90 : 
        console.log('up');
        // hauteur du saut
        player.velocity.y -= 10;
        break
        case 83 : 
        console.log('down');
        break
    }
    console.log(keys.right.pressed);
})
addEventListener('keyup', ({ keyCode }) => {

    // setup des boutons de directions sur le clavier
    switch(keyCode){
        case 81 : 
        console.log('left');
        keys.left.pressed = false;
        break
        case 68 : 
        console.log('right');
        keys.right.pressed = false;
        break
        case 90 : 
        console.log('up');
        break
        case 83 : 
        console.log('down');
        break
    }
    console.log(keys.right.pressed);
})