'use strict'
function Bullet(img,type){
	Sprite.call(this,img);
	
	
	this._size = [
		null,
		{sx:86,sy:0,w:24,h:26},
		{sx:61,sy:0,w:25,h:29},
		{sx:32,sy:35,w:27,h:31},
		{sx:30,sy:82,w:29,h:33},
		{sx:0,sy:82,w:30,h:34},
		{sx:30,sy:0,w:31,h:35},
		{sx:0,sy:44,w:32,h:38}
	];
	
	this.sx = this._size[type].sx;
	this.sy = this._size[type].sy;
	this.w = this._size[type].w;
	this.h = this._size[type].h;
	this.speed = 6;
}
Bullet.prototype = new Sprite();