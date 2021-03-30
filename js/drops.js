class Drops {
    constructor(x, y) {
        var options = {

        }
        this.radius = 7;
        this.rain = Matter.body.circle(x, y, this.radius, options);
        World.add(world, this.rain);
    }
    displayDrop() {
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
    update() {
        var randomX = random(0, 600);
        var randomY = random(0, 500);
        if(this.rain.y > height) {
            Matter.body.position(randomX, randomY);
        }
    }
}