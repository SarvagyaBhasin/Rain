class Raindrop {
    constructor( ) {
          this.x = random(0,width);
      this.y = random (-200,50);
      this.speed = random (2,8);
     
      
    }
    fall() {
      this.y = this.y + this.speed;
      this.speed = this.speed + 0.5 ;
      if (this.y > height){
        this.y = random (-100,0);
        this.speed = random (2,12);
      }
    }
    display(){
      stroke("red");
      line(this.x,this.y, this.x, this.y + 10);
    }
  };