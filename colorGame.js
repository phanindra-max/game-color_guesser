var num = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	setupMode();
	setupSquares();	
	resetter();
}

function setupMode() {
	for(var i = 0; i < modeButton.length; i++){
			modeButton[i].addEventListener("click", function () {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ?	num = 3: num = 6;
			resetter();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "CORRECT!!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "PLAY AGAIN?"

			} else {
				messageDisplay.textContent = "TRY SOMETHING ELSE";
				this.style.background = "#232323";
			}
		});
	}
}

function resetter() {
	colors = generator(num);
	pickedColor = randColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";  
		}		
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
		resetter();
});

colorDisplay.textContent = pickedColor;

function changeColor(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function randColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generator(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		randomizer();
		arr.push(randomizer())
    }
    return arr;
}

function randomizer() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}