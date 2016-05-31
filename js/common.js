'use strict'
function loadImage(json,fn){
	var count = 0;
	var total = 0;
	var aImage = {};
	for(var name in json){
		total++;
		var oImg = new Image();
		oImg.src = json[name];
		aImage[name] = oImg;
		oImg.onload=function(){
			count++;
			if(count==total){
				fn&&fn(aImage);
			}
		};
	}
}

function d2a(n){
	return n*Math.PI/180;
}

function a2d(n){
	return n*180/Math.PI;
}

function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}








