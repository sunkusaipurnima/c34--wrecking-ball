const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
const Mouse= Matter.Mouse;
const MouseConstraint= Matter.MouseConstraint;

var ourEngine,ourWorld;
var ground;
var boxes=[];
var canvas,ourMouse,ourMouseConstraint;


function setup(){
    canvas=createCanvas(1200,700);

    ourEngine= Engine.create();
    ourWorld= ourEngine.world;

    ground= new Ground(width/2,height-10,width,20);
    wall = new Wall(700,600);
    ball = new Ball(300,500,70);
    console.log(ball.body)
    rope= new Rope(ball.body,{x:300,y:60});

    ourMouse= Mouse.create(canvas.elt);
    ourMouse.pixelRation= pixelDensity();

    var options= {
        mouse:ourMouse
    }

    ourMouseConstraint= MouseConstraint.create(ourEngine,options);
    World.add(ourWorld,ourMouseConstraint)
    
}

function draw(){
    background(220);

    text(mouseX+","+mouseY,mouseX,mouseY);

    Engine.update(ourEngine);

    ground.display();
    wall.display();
    ball.display();
    rope.display();


}