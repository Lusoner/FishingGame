'use strict'
function Sprite(img){
	this.img = img;	
	this.sx = 0;
	this.sy = 0;
	this.x = 0;
	this.y = 0;
	this.w = 0;
	this.h = 0;
	this.r = 0;
	this.speed = 0;
	this.life=0;
}
Sprite.prototype.move=function(){
	var speedX = Math.sin(d2a(this.r))*this.speed;
	var speedY = -Math.cos(d2a(this.r))*this.speed;
	
	this.x+=speedX;
	this.y+=speedY;
};
Sprite.prototype.dead=function(){
	this.speed=0;
}
Sprite.prototype.collTest=function(obj,type){
	//this<->obj
	var x1 = this.x;
	var y1 = this.y;
	var x2 = obj.x;
	var y2 = obj.y;
	
	var x = x2-x1;
	var y = y2-y1;
	
	var c = Math.sqrt(x*x+y*y);
	if(type=='fish'){
		if(c<30){
			return true;
		}else{
			return false;
		}
	}
	if(type='shark'){
		if(c<100){
			return true;
		}else{
			return false;
		}			
	}
	
};
Sprite.prototype.draw=function(gd){
	gd.save();
	gd.beginPath();
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.r));
	gd.drawImage(
		this.img,
		this.sx,this.sy,this.w,this.h,
		-this.w/2,-this.h/2,this.w,this.h
	);
	gd.restore();
};