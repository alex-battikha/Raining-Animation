class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true,
            // restitution: 0.8
        }
        this.radius = 50;
        this.umbrella = Bodies.circle(x, y, 50, options);
    }
    displayUmbrella() {
        ellipseMode(CENTER);
        ellipse()
    }
}