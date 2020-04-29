class drop {
    constructor(x,y) {
      var options = {
          'isStatic': false
      }
      this.body = Bodies.rectangle(x,y,3,10,options);
      this.width = 3;
      this.height = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      
            fill("blue");
        
      rect(pos.x, pos.y, this.width, this.height);
    }
  };