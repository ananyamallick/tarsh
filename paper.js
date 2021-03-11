class paper{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x=x;
		this.y=y;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        push();
        ImageMode(CENTER)
        image(this.image, 0, 0 ,this.radius)
        pop();
      }
}