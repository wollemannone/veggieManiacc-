
var veg = 0;
var canvas = 0;

function preload(){
veg = loadJSON("vegetables.json");

}

function setup(){

colorMode(HSB,360,100,100,100);
var canvas = createCanvas (800,1000);
canvas.parent('sketch');

background(0);

// var vegName = veg.vegetable_cooking_times[0].name; //holding name of veg

for (var i = 0; i <veg.vegetable_cooking_times.length ; i++) { // objects in dataset

	var obj = veg.vegetable_cooking_times[i];
	var t = obj.vegetable;				//title of vegetable

		
		var arr_string = obj.steamed.split(" to "); // erstellt array aus obj. teilt den sting in zwei werte bei "to"
		var number_one = parseInt(arr_string[0]); 
		var number_two = parseInt(arr_string[1]);

		// console.log(obj.steamed);
		console.log(t);
		// console.log(number_one);
		// console.log(number_two);

		var x0 = 180;
		var step = height/veg.vegetable_cooking_times.length;
		var range = i*step+10;		//Zeilenverteilung im Canvas
		var x1 = map(number_one,0,60,0, width - x0);
		var x2 = map(number_two,0,60,0,width - x0); 	//mappe die zeitwerte auf die Canvasbreite
		var dur = x2-x1;
		var col = map(dur,0,30,0,70);
console.log(x1);
console.log(x2);


			fill(255,0,100);
			textAlign(RIGHT);
			text(t,200,range);

			fill(112,100,col,80);
			noStroke();
			rect(x0+ x1, range- 5, dur, 5);
			

		// console.log(step);
		// console.log(veg.vegetable_cooking_times.length);
}




// console.log (vegName);


}

function draw(){

// text("veggie 4 real",200,100);


}



