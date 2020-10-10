
class Food {
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock = 0;
        this.lastFed;
    }
    bedroom(){
      background(bedroomimg,displayWidth,displayHeight);
    }
    garden(){
      background(gardenimg,500,200);
    }
    washroom(){
      background(washroomimg,550,500);
    }
    getFoodStock(){
        return this.foodStock;
    }
    updateFoodStock(x){
        this.foodStock = x;
    }
    deductFoodStock(){
       if(this.foodStock > 0){
           this.foodStock = this.foodStock - 1;
       }
       
    }
    getFedTime(lastFed){
     this.lastfed = lastFed;
    }
    display(){
        var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}


