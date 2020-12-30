class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.rubbadImg=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            image(this.sling1,200,20);
            image(this.sling2,170,20);
            strokeWeight(8);
            stroke("#2C1407");
            if(pointA.x<160||pointA.x>230){
                strokeWeight(5);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+5);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+5);
            image(this.rubbadImg,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(8);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.rubbadImg,pointA.x-30,pointA.y-10,15,30);
            }
        }
    }
    
}