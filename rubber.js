class Rubber {
    constructor(x,y,r) {
      var options = {
         density:2,
         friction:1,
         restitution:0.5
      }
      this.body = Bodies.rectangle(x,y,r,options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, this.r,this.r);
    }
  }
  ;