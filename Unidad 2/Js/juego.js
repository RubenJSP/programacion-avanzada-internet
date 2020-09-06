const matrix = [
	[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 0, 0, 0, 1, 2, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[1, 0, 1, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 2, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
	[1, 1, 1, 0, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
	[1, 1, 0, 1, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
	[1, 0, 0, 1, 0, 2, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
	[1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
	[1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
	[1, 1, 0, 0, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1],
	[1, 0, 0, 1, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
	[1, 1, 0, 0, 1, 0, 0, 0, 2, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
	[1, 1, 0, 1, 0, 1, 1, 1, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
	[1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 2, 1, 2, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
	[1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 2, 1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
	[1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 2, 2, 2, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 2, 1, 2, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
	[1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
	[1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 2, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
	[1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 2, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
	[1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
	[1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 2, 2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
	[1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
	[1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 2, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
	[1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
	[1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 2, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
	[1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 2, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2, 2, 1, 0, 1, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 2, 1, 0, 0, 1],
	[1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 0, 0, 1, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1, 1, 1, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1],
	[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 2, 1, 0, 1, 2, 2, 2, 2, 2, 1, 0, 1, 1, 2, 1, 1, 1, 1],
	[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 1, 2, 1, 1, 0, 1, 1, 1, 2, 2, 2, 0, 0, 0, 1],
	[1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 0, 1, 2, 1, 0, 1, 0, 0, 2, 2, 1, 1, 1, 0, 1, 1],
	[1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 2, 2, 2, 1, 0, 1, 2, 0, 1, 0, 1, 2, 2, 1, 1, 0, 0, 0, 1, 1],
	[1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 2, 1, 1, 0, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1, 1, 0, 1, 1],
	[1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 2, 0, 0, 1, 2, 1, 1, 1, 0, 1, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 0, 1, 2, 2, 1, 1, 0, 1, 2, 2, 1, 2, 2, 2, 1, 1, 1, 1],
	[1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 2, 1, 1, 2, 2, 1, 1, 1, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 2, 1],
	[1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
];
var map = [];
var map2 = [];
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
context.scale(4, 4);
var miniMap = document.getElementById('miniMap');
var miniMapContext = miniMap.getContext('2d');
miniMapContext.scale(1, 1);
var player = null,
	pX = 99,
	pY = 101,
	pointX = 0,
	pointY = 0,
	pH = 14,
	pW = 10,
	playerStep = 9.5,
	help = false,
	gameOver = false,
	miniMapVisible = true,
	wallX = 0,
	wallY = 0,
	playerImg = null,
	borderImg = null,
	helpImg = null,
	wallImg = null,
	grassImg = null,
	background = null;

//Cargar imágenes
playerImg = new Image();
borderImg = new Image();
grassImg = new Image();
wallImg = new Image();
helpImg = new Image();
background = new Image();
playerImg.src = "assets/laberinto/player.png";
borderImg.src = "assets/laberinto/border.jpg";
wallImg.src = "assets/laberinto/wall.jpg";
grassImg.src = "assets/laberinto/grass.jpg";
helpImg.src = "assets/laberinto/help.jpg";
background.src = "assets/laberinto/background.jpg";
//Clase de los bloques
function Chunk(img, x, y, w, h, isWall) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.isWall = isWall;

	this.render = function(context) {
		if (this.img != null)
			context.drawImage(this.img, this.x, this.y, this.w, this.h);
		else
			context.fillRect(this.x, this.y, this.w, this.h);
	}

	this.collide = function(chunk) {
		//Hay colisión siempre y cuando se trate de un muro y no del suelo "isWall"
		return (isWall) ? (this.x < chunk.x + chunk.w &&
			this.x + this.w > chunk.x &&
			this.y < chunk.y + chunk.h &&
			this.y + this.h > chunk.y) : false;
	}

}

window.requestAnimationFrame = (function() {
	return window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 17);
		};
}());
//Reinicia el juego
function reset() {
	fillMap(map, 0, 99, 19);
	fillMap(map2, 0, 0, 10);
	help = false;
	pointX = 0;
	pointY = 0;
	gameOver = false;
}

//Crea la matriz de bloques
function createMap(map) {
	for (let i = 0; i < 50; i++)
		map[i] = new Array(30);
}
//Llena el mapa con bloques 
function fillMap(map, x, y, size) {
	for (let i = 0; i < 50; i++) {
		x = 0;
		for (let j = 0; j < 30; j++) {
			//Crea los bordes del mapa exceptuando el inicio y el fin del camino													
			if (((i == 0 || i == 49) || (j == 0 || j == 29)) && matrix[i][j] != 2)
				map[i][j] = new Chunk(borderImg, x, y, size, size, true);
			else if (matrix[i][j] == 1)
				map[i][j] = new Chunk(grassImg, x, y, size, size, true); //Crea los muros internos
			else
				map[i][j] = new Chunk(wallImg, x, y, size, size, false); //Crea los bloques el "suelo"
			x += size;
		}
		y += size;
	}
}

//Verifica si el jugador colisiona con algun bloque
function checkPath(player) {
	for (let i = 0; i < 50; i++)
		for (let j = 0; j < 30; j++)
			if (map[i][j].collide(player))
				return true;
	return false;
}

//Pinta el mapa
function renderMap(context, map) {
	for (let i = 0; i < 50; i++)
		for (let j = 0; j < 30; j++) {
			map[i][j].render(context);
		}

}
//Pinta al jugador
function renderPlayer(context, player) {
	player.render(context);
}

//Si el jugador gana
function win(context) {
	if (map[49][29].x == 114 && map[49][29].y == 99) {
		context.font = "16px Arial";
		context.fillStyle = "rgba(0,0,0,0.45)";
		context.fillRect(0, 0, 209, 228);
		context.fillStyle = "#FFF";
		context.fillText("¡GANASTE :D!", 48, 99);
		context.font = "8px Arial";
		context.fillText("'P' para continuar", 70, 110);
		gameOver = true;
	}

}
//Muestra al jugador y su posición en el minimpa
function renderminiMapPos(context, player) {
	context.font = "16px Arial";
	context.fillStyle = "#F00";
	context.fillText("x", pointX + player.x - 47.3, pointY + player.y - 91);
}
//Funcion para pintar imágenes
function run() {
	window.requestAnimationFrame(run);
	context.drawImage(background, 0, 0, 209, 228);
	renderMap(context, map);
	renderMap(miniMapContext, map2);
	renderminiMapPos(miniMapContext, player);
	renderPlayer(context, player);
	win(context);
}

//Mueve el mapa
function moveMap(offset, key, map) {
	for (let i = 0; i < 50; i++)
		for (let j = 0; j < 30; j++) {
			switch (key) {
				case "W":
					map[i][j].y += offset;
					break;
				case "A":
					map[i][j].x += offset;
					break;
				case "S":
					map[i][j].y -= offset;
					break;
				case "D":
					map[i][j].x -= offset;
					break;
				default:
					break;
			}
		}
}
//Mueve al jugador y verifica colisiones con el mapa
function movePlayer(player, key) {
	switch (key) {
		case 'W':
			if (++map[0][0].y <= 99) {
				player.y -= playerStep;
				if (!checkPath(player)) {
					moveMap(playerStep, key.toUpperCase(), map);
					pointY -= 5;
				}
				player.y += playerStep;
			}
			map[0][0].y--;
			break;
		case 'A':
			player.x -= playerStep;
			if (!checkPath(player)) {
				moveMap(playerStep, key.toUpperCase(), map);
				pointX -= 5;
			}
			player.x += playerStep;
			break;
		case 'S':
			if (map[49][29].y++ > 99) {
				player.y += playerStep;
				if (!checkPath(player)) {
					moveMap(playerStep, key.toUpperCase(), map);
					pointY += 5;
				}
				player.y -= playerStep;
			}
			map[49][29].y--;
			break;
		case 'D':
			player.x += playerStep;
			if (!checkPath(player)) {
				moveMap(playerStep, key.toUpperCase(), map);
				pointX += 5;
			}
			player.x -= playerStep;
			break;
		default:
			break;
	}
	win(context);
}
//Muestra el camino al final del mapa
function showHelp(map) {
	for (let i = 0; i < 50; i++)
		for (let j = 0; j < 30; j++)
			if (matrix[i][j] == 2)
				if (!help)
					map[i][j].img = wallImg;
				else
					map[i][j].img = helpImg;
}
//Eventos del teclado
window.addEventListener("keypress", function(e) {
	//Activar ayuda, el camino será marcado
	if (e.key.toUpperCase() == 'H' && !gameOver) {
		help = !help;
		showHelp(map);
		showHelp(map2);
	}
	if(e.key.toUpperCase() == 'M' && !gameOver){
		if(miniMapVisible)
			miniMap.style.display = "none";
		else
			miniMap.style.display = "block";
		
		miniMapVisible = !miniMapVisible;
	}
	//El jugador puede jugar de nuevo (reinicia el mapa)
	if (e.key.toUpperCase() == 'P' && gameOver)
		reset();

	//No puedes moverte si la ayuda está activa o el juego ha  terminado
	if (!gameOver && !help)
		movePlayer(player, e.key.toUpperCase());
});
//Inicializa el juego
function init() {
	//Inicializar jugador
	player = new Chunk(playerImg, pX, pY, pW, pH, false);
	createMap(map);
	createMap(map2);
	fillMap(map, 0, 99, 19);
	fillMap(map2, 0, 0, 10);
	run();
}