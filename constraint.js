class constraintStone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 80,
            stiffness: 1
        }

        this.constraint = Constraint.create (options);
        this.pointB = pointB
       World.add(world, this.constraint);
    }

    attach(body){
        this.constraintStone.bodyA = body;
    }

    fly(){
        this.constraintStone.bodyA = null;
    }

    display(){
        strokeWeight (1)
        stroke ("white")
        var pointA = this.constraint.bodyA.position
        var pointB = this.pointB
        line(a.x, a.y, b.x, b.y);
    }
}