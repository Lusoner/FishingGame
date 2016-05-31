'use strict'
function Fish(images,type){
	Sprite.call(this,images['fish'+type]);
	
	this._size = [
		null,
		{w:37,h:55},
		{w:64,h:78},
		{w:56,h:72},
		{w:59,h:77},
		{w:122,h:107}
	];
	this.type=type;
	this.w = this._size[type].w;
	this.h = this._size[type].h;
	this.life=type;
	this.speed = 3;
	
}
Fish.prototype = new Sprite();
Fish.prototype.swimming = function(){
	if(this.life>0){
		this.sx+=this.w;
		if(this.sx>=this.w*4){
			this.sx = 0;
		}	
	}
	// else{
	// 	//如果死了，sx从
	// 	if(this.sx<this.w*5){
	// 		this.sx=this.w*5;
	// 	}
	// 	this.sx+=this.w;
	// 	if(this.sx>=this.w*8){
	// 		this.sx=this.w*5;
	// 	}
	// }
	
};
Fish.prototype.deaded=function(){

	if(this.sx<this.w*5){
		this.sx=this.w*5;
	}
	this.sx+=this.w;
	alert(1);
	if(this.sx>=this.w*8){
		this.sx=this.w*5;
	}	
}