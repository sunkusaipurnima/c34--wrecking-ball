class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB:pointB,
            stiffness:1.0,
            length:500

        }

        this.rope= Constraint.create(options);
        World.add(ourWorld,this.rope);
        this.pointB=pointB;
    }

    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.pointB;

        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}