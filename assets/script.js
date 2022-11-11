// ---------------setup du canvas----------------------

const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

// pour indiquer que mon canvas va prendre l'entierté de la largeur de mon navigateur
canvas.width = window.innerWidth
// pour indiquer que mon canvas va prendre l'entierté de la hauteur de mon navigateur
canvas.height = window.innerHeight

console.log(c);

// ------------------Personnages--------------------------
// je fais d'abord une class avec les propriétés pour "dessiner/positionner" le personnage
// dans le constructeur ce sera la position de départ et la taille du personnage
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
            y:1
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
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
            this.draw()
           
    }
}

const player = new Player();
player.update();