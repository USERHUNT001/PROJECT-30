class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.v=255; 
      
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<5){
        push();
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.V = this.V-5;
        pop();
      }
      
    }
}