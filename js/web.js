'use strict'
function Web(img,type){
	Sprite.call(this,img);

	this._size = [
		null,
		{sx:332,sy:372,w:90,h:90},
		{sx:13,sy:412,w:110,h:110},
		{sx:175,sy:369,w:130,h:128},
		{sx:252,sy:195,w:135,h:148},
		{sx:0,sy:243,w:164,h:158},
		{sx:241,sy:0,w:183,h:183},
		{sx:19,sy:20,w:203,h:204}
	];
	this.sx = this._size[type].sx;
	this.sy = this._size[type].sy;	
	this.w = this._size[type].w;
	this.h = this._size[type].h;

}
Web.prototype = new Sprite();
Web.prototype.catch=function(obj){
	this.x=obj.x;
	this.y=obj.y;
}