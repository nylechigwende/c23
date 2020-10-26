class Ground{
    constructor(x,y,width,height){
        var ground_option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,ground_option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        fill("brown")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}