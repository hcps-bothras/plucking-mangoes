class blueprint{
    constructor(x,y,radius){
        var options = {
            isStatic: false, 
            restitution: 0, 
            friction: 1,
            density: 1.2
        }
    this.body = Bodies.cirle(x,y,radius,options);
    this.x = x;
    this.y = y;
    this.radius = radius;
    
    this.image = loadImage("stone.png")
    }

    display(){
        var angle = this.body.angle;
        imageMode(RADIUS);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image, this.x, this.y, this.radius); 
        pop();
        
        
    }
}