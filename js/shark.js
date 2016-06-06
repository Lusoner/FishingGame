'use strict'
function Shark(images,type){
	Sprite.call(this,images['shark'+type]);
	
	this._size = [
		null,
		{w:270,h:509},
		{w:273,h:516},
	];
	this.type=type;
	this.w = this._size[type].w;
	this.h = this._size[type].h;
	this.life=type*4;
	this.speed = 1;
	
}
Shark.prototype = new Sprite();
Shark.prototype.swimming = function(){
	if(this.life>0){
		this.sx+=this.w;
		if(this.sx>=this.w*8){
			this.sx = 0;
		}	
	}
	
};
Shark.prototype.deaded=function(){

	if(this.sx<this.w*9){
		this.sx=this.w*9;
	}
	this.sx+=this.w;
	if(this.sx>=this.w*12){
		this.sx=this.w*9;
	}	
}