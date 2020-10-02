var e,g,shooter,shooter1

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.



const {Engine} = Matter 





function setup() {
    createcanvas(400,400);
    e=Matter.Engine.create();
    g=Matter.bodies.rectangle(100,390,10,400)
}

function draw() {
background(0);
Matter.Engine.update(e);
}


function keyReleased() {
    // Call the shoot method for the cannon.
}