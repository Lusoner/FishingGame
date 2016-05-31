'use strict'
//增加一个count变量，增加一个count方法，每次碰撞检测成功后调用count方法，绘制钱数

function Count(images,type){
	Sprite.call(this,images);

	this.w = 39.6;
	this.h = 49;
	this.sx=this.w*type;
	
	
}
Count.prototype = new Sprite();
Count.prototype.draw=function(gd){
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