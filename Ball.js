class Ball {
    constructor(x,y,radius) {
      var options = {
          
        'restitution':0.8,
        'friction':0,
        'density':1.2,
        isStatic:false
      }
      this.x=x;
      this.y=y;
      this.radius = radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      
    
     
      World.add(world, this.body);
      
    }
    display(){
  
     fill("blue");
     ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius); 


 
      

      
      
    }
  }