class Balle {
    constructor(x, y, radius, color) {
        // position
        this.x = x;
        this.y = y;
        // props
        this.radius = radius;
        this.color = color;
        // Gestion de la vitesse
        this.dx = (Math.random() - 0.5) * 4; 
        this.dy = (Math.random() - 0.5) * 4;
        // create
        this.element = document.createElement('div');
        this.element.className = 'circle';
        // taille
        this.element.style.width = `${this.radius * 2}px`;
        this.element.style.height = `${this.radius * 2}px`;
        // bg couleur
        this.element.style.backgroundColor = this.color;

        document.body.appendChild(this.element); 
    }

    move() {
        // gestion du mouvement
        this.x += this.dx;
        this.y += this.dy;
        // Mise à jour de la position de la balle
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }

    handleCollisionWithBorders(containerWidth, containerHeight) {
        // Partie maths facile / déjà vue
        if (this.x - this.radius <= 0 || this.x + this.radius >= containerWidth) {
            this.dx = -this.dx; 
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= containerHeight) {
            this.dy = -this.dy; 
        }
    }
    handleCollisionWithBalls(allBalls) {
        // Partie maths moins facile, mais aussi déjà vue
        for (const otherBall of allBalls) {
            if (otherBall !== this) {
                const dx = this.x - otherBall.x;
                const dy = this.y - otherBall.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.radius + otherBall.radius) {
                    /* le summum de la douleur des maths
                     * Les balles se touchent, changement de la direction des deux balles
                     * New methode à retenir atan2(x, y)
                     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
                     * The Math.atan2() static method returns the angle in the plane (in radians) 
                     * between the positive x-axis and the ray from (0, 0) to the point (x, y) */

                    const angle = Math.atan2(dy, dx);
                    const thisSpeed = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
                    const otherSpeed = Math.sqrt(otherBall.dx * otherBall.dx + otherBall.dy * otherBall.dy);

                    this.dx = thisSpeed * Math.cos(angle);
                    this.dy = thisSpeed * Math.sin(angle);
                    otherBall.dx = otherSpeed * Math.cos(angle + Math.PI);
                    otherBall.dy = otherSpeed * Math.sin(angle + Math.PI);
                }
            }
        }
    }
}

// Creation de nos balles POO
const balles = [];
balles.push(new Balle(50, 50, 35, 'blue'));
balles.push(new Balle(175, 100, 35, 'purple'));
balles.push(new Balle(200, 150, 35, 'white'));
balles.push(new Balle(125, 200, 35, 'pink'));
balles.push(new Balle(100, 250, 35, 'green'));

function animate() {
    requestAnimationFrame(animate);

    // Déplacement des balles
    for (const balle of balles) {
        balle.move();
    }
    // Collisions avec les bords du navigateur
    for (const balle of balles) {
        balle.handleCollisionWithBorders(window.innerWidth, window.innerHeight);
    }
    // Collision entre les balles
    for (const balle of balles) {
        balle.handleCollisionWithBalls(balles);
    }
}

// start the game !
animate();



