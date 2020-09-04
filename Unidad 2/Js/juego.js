const matrix = [
	[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
	[1, 0, 0, 0, 1, 2, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
	[1, 0, 1, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 1],
	[1, 1, 0, 0, 1, 2, 1, 0, 0, 1, 0, 1, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1],
	[1, 1, 1, 0, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2, 0, 1],
	[1, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, 1],
	[1, 1, 0, 1, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 2, 1, 2, 1, 1, 2, 0, 1, 0, 1, 1, 0, 1, 2, 0, 1],
	[1, 0, 0, 1, 0, 2, 1, 0, 0, 1, 0, 1, 0, 1, 2, 2, 2, 0, 1, 2, 1, 1, 0, 0, 0, 0, 1, 2, 1, 1],
	[1, 0, 1, 1, 1, 2, 1, 1, 0, 1, 0, 1, 1, 1, 2, 1, 2, 1, 1, 2, 0, 0, 0, 1, 1, 1, 0, 2, 0, 1],
	[1, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 2, 1, 1],
	[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 0, 1, 2, 2, 2, 2, 1, 1, 0, 1, 2, 0, 1],
	[1, 1, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 0, 1, 2, 1, 1],
	[1, 0, 0, 1, 0, 2, 1, 0, 1, 0, 1, 1, 2, 1, 1, 1, 2, 1, 0, 0, 0, 1, 2, 0, 1, 0, 1, 2, 0, 1],
	[1, 1, 0, 1, 1, 2, 1, 0, 1, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 1, 1, 1, 2, 1, 1, 0, 1, 2, 1, 1],
	[1, 1, 0, 1, 0, 2, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 2, 1, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1],
	[1, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 1, 1, 2, 1, 1, 0, 1, 2, 1, 1],
	[1, 0, 1, 1, 0, 2, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 2, 0, 0, 0, 0, 1, 2, 1, 1, 0, 1, 2, 1, 1],
	[1, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 1, 2, 1, 1, 1, 0, 1, 2, 0, 1, 0, 1, 2, 0, 1],
	[1, 0, 0, 0, 1, 2, 1, 0, 1, 0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 1, 0, 2, 1, 1],
	[1, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
	[1, 1, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1],
	[1, 1, 0, 1, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 2, 0, 0, 1],
	[1, 0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1],
	[1, 0, 1, 1, 0, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1],
	[1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0, 1],
	[1, 1, 0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 1, 1],
	[1, 1, 0, 1, 0, 2, 1, 2, 1, 2, 2, 2, 2, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2, 1, 1, 1],
	[1, 1, 0, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0, 2, 2, 2, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
	[1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 0, 1, 0, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1],
	[1, 2, 1, 0, 0, 0, 1, 2, 2, 1, 2, 1, 2, 1, 2, 0, 1, 1, 2, 0, 1, 2, 1, 0, 1, 2, 2, 2, 1, 1],
	[1, 2, 1, 1, 0, 1, 1, 2, 1, 0, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 0, 1, 2, 1, 2, 0, 1],
	[1, 2, 1, 0, 0, 0, 0, 2, 0, 1, 2, 1, 0, 1, 0, 1, 2, 2, 2, 1, 0, 2, 2, 2, 1, 2, 1, 2, 1, 1],
	[1, 2, 1, 1, 0, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 1, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1],
	[1, 2, 0, 1, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 0, 1],
	[1, 2, 1, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1],
	[1, 2, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1],
	[1, 2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 2, 1, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 1, 0, 1, 1],
	[1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 1, 2, 1, 1, 1, 2, 1, 0, 1, 1, 2, 1, 0, 0, 1],
	[1, 2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 1, 1],
	[1, 2, 1, 0, 0, 1, 0, 0, 0, 1, 2, 2, 2, 1, 0, 1, 2, 1, 0, 0, 2, 1, 1, 1, 1, 2, 1, 0, 0, 1],
	[1, 2, 1, 0, 1, 1, 0, 1, 1, 1, 2, 1, 2, 0, 1, 0, 2, 1, 0, 1, 2, 1, 2, 2, 2, 2, 1, 0, 1, 1],
	[1, 2, 1, 0, 1, 1, 0, 0, 0, 1, 2, 1, 2, 1, 1, 2, 2, 1, 0, 1, 2, 2, 2, 1, 1, 2, 1, 0, 1, 1],
	[1, 2, 1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1],
	[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 2, 1],
	[1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
];
var map = [];
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var player = null,pX = 100, pY=0,wallX=0,wallY=0,standing=null,walking = null, borderImg=null,wallImg = null,grassImg=null;
//Init player img

function loadRes(){
standing = new Image();
borderImg = new Image();
grassImg = new Image();
wallImg = new Image();
borderImg.src = "assets/laberinto/border.jpg";
wallImg.src = "assets/laberinto/wall.jpg";
grassImg.src = "assets/laberinto/grass.jpg";

}
//standing.src = "assets/laberinto/stand.gif";

//player = new Chunk(standing,100,100,40,56,false);

function Chunk(img,x,y,w,h,isWall){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isWall = isWall;

    this.render = function(context){
        if(this.img!=null)
            context.drawImage(this.img,this.x,this.y,this.w,this.h);
        else
            context.fillRect(this.x, this.y, this.w, this.h);
    }

    this.collide = function(chunk){
        return (this.isWall)? (this.x < chunk.x + chunk.w &&
			this.x + this.w > chunk.x &&
			this.y < chunk.y + chunk.h &&
			this.y + this.h > chunk.y):false;
    }
}
/*function Player(img,x,y,w,h,moving){
	this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
	this.render = function(context){
        if(this.img!=null)
            context.drawImage(this.img,this.x,this.y,this.w,this.h);
        else
            context.fillRect(this.x, this.y, this.w, this.h);
    }

    this.collide = function(chunk){
        return (this.isWall)? (this.x < chunk.x + chunk.w &&
			this.x + this.w > chunk.x &&
			this.y < chunk.y + chunk.h &&
			this.y + this.h > chunk.y):false;
    }
}*/
window.requestAnimationFrame = (function() {
	return window.requestAnimationFrame||
	window.mozRequestAnimationFrame||
	window.webkitRequestAnimationFrame ||
	function(callback) {
			window.setTimeout(callback, 17);
		};
}());
function run() {
	window.requestAnimationFrame(run);
	renderMap(context,map);
}

function renderPlayer(context,player){
    player.render(context);
}
function move(player){
	/*window.addEventListener("keypress",function(e){
		if(e.key == 'w'||e.key == 'W')
			return null;
	});*/
	
}
function checkPath(player,map){
    for (let i = 0; i < 50; i++) 
		for (let j = 0; j < 30; j++)
			return player.collide(map[i][j]); 
}

function renderMap(context,map){
	for (let i = 0; i < 50; i++) 
		for (let j = 0; j < 30; j++) 
			map[i][j].render(context);
}
function createMap(map){
	for (let i = 0; i < 50; i++) 
		map[i] = new Array(30);	
}
function fillMap(map){
	let x=0,y=0,side=19;
    for (let i = 0; i < 50; i++) {
		x=0;
        for (let j = 0; j < 30; j++) {
			if(((i==0 || i == 49) || (j==0||j == 29)) && matrix[i][j]!=2)
				map[i][j] = new Chunk(borderImg,x,y,side,side,true);
			else if(matrix[i][j]==1)
				map[i][j]= new Chunk(wallImg,x,y,side,side,true);
			else
				map[i][j] = new Chunk(grassImg,x,y,side,side,false);

			x+=side;	
        }
		y+=side;
	}
}
function init(){
	loadRes();
	createMap(map);
	fillMap(map);
	//console.log(map[0][0])
	run();
	//player.render(context);
}
window.addEventListener("keypress",function(e){
	//if(e.key == 'w'||e.key == 'W')

});


