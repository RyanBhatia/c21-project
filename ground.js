class Ground
{
    constructor(x,y,w,h){
        var opt = {
            isStatic : true
        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h, opt)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push()
        rectMode(CENTER)
        strokeWeight(4)
        fill('yellow')
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}