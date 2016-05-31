'use strict'
function Coin(images,type){
	Sprite.call(this,images['coinAni'+type]);
	

	this.w = 60;
	this.h = 60;
	
}
Coin.prototype = new Sprite();
Coin.prototype.show = function(){

		this.sy+=this.h;
		if(this.sy>=this.h*10){
			this.sy = 0;
		}	
	
};