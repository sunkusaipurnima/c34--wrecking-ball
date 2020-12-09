class Wall{
    constructor(x,y){
        var options={
            restitution:1.0,
            friction:1.0,
            density:1.0

        }
        this.y=y;
        this.x= x;
        
        this.wall=[];
        for(var y=this.y;y>=100;y-=50){   
           // console.log(y);     
            for(var x=this.x;x<=850;x+=50){
               // console.log(x);
                this.brick= Bodies.rectangle(x,y,50,50,options);
                World.add(ourWorld,this.brick);
                this.wall.push(this.brick)
               // console.log(this.wall)
            }
        }
        
      
    }
    display(){
        push();
        fill(200,0,0);
        stroke("blue");
        strokeWeight(4)
        rectMode(CENTER);
        for(var i=0;i<this.wall.length;i++){
           
           rect(this.wall[i].position.x,this.wall[i].position.y,50,50);
        }  
        pop();
    }
}