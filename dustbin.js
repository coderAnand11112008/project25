class dustbin
{
	constructor(x,y)
	{
		var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, options);
				
		this.image = loadImage("dustbingreen.png");

	}
	display(){
 	this.body.position.x = mouseX;
    this.body.position.y = mouseY;
	}

}