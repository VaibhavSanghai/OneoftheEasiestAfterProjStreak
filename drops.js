class Drops {
    constructor(x, y, radius) {
        var options = {
            friction: 0.1
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius; 

        World.add(world, this.body); 
    }

    spawnRain() {
    if (this.body.position.y > height) {
        Matter.Body.setPosition(this.body, {x: random(0, 1600), y: random(0, 400)}); 
      }
    }

    display() {
        var pos = this.body.position; 

        push(); 
        translate(pos.x, pos.y);
        fill("blue"); 
        ellipseMode(RADIUS); 
        ellipse(0, 0, this.radius, this.radius); 
        pop(); 
    }
}