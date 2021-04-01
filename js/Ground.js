class Ground{
constructor(){
    var options={
        isStatic:true
    }
    this.ground=Bodies.rectangle(500,400,900,20,options);
   World.add(world,this.ground);
}   
display(){
    fill(255,0,255);
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,900,20)
} 
}