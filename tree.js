class Tree{
    constructor(x,y,width,height){
    
        var options= {
            isStatic:true
        };

        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        this.image=loadImage("tree.png");
        World.add(world,this.body);

    }

    display(){

        var  treepos=this.body.position
        push();
        fill("lightgrey");
        noStroke();
        pop();
    }
}