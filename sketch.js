var veg = 0;
var canvas = 0;

function preload(){
veg = loadJSON("vegetables.json");

}

function setup(){

colorMode(HSB,360,100,100,100);
var canvas = createCanvas (800,1000);
canvas.parent('sketch');
var x0 = 200;

background(0);

for (var i = x0; i < width; i += 100) {

	fill(0,0,8);
	rect(i, 0, 50, height);
}

// var vegName = veg.vegetable_cooking_times[0].name; //holding name of veg

for (var i = 0; i <veg.vegetable_cooking_times.length ; i++) { // objects in dataset

	var obj = veg.vegetable_cooking_times[i];
	var t = obj.vegetable;				//title of vegetable

		
		var arr_string = obj.steamed.split(" to "); // erstellt array aus obj. teilt den sting in zwei werte bei "to"
		var number_one = parseInt(arr_string[0]); 
		var number_two = parseInt(arr_string[1]);

		// console.log(obj.steamed);
		// console.log(t);
		// console.log(number_one);
		

		
		var step = (height-100)/veg.vegetable_cooking_times.length;
		var range = i*step+90;		//Zeilenverteilung im Canvas

		var p = -5;		// Position of the lines
		var x1 = map(number_one,0,60,0, width - x0);
		var x2 = map(number_two,0,60,0,width - x0); 	//mappe die zeitwerte auf die Canvasbreite
		var dur = x2-x1;
		var dur2 = (x1+x2)/2;
		var col = map(dur2,0,517,20,0);
// console.log(x1);
// console.log(x2);
// console.log(dur2);
			
			stroke(120,70,30,100);
			strokeWeight(5);
			line(x0+ x1, range + p,x0+ x1+ dur, range+ p);

			stroke(120,70,70,100);
			strokeWeight(5);
			line(x0, range+ p,x0 + x1, range+ p);

			noStroke();
			textStyle(BOLD);
			textSize(20);
			fill(255,0,100);
			textAlign(RIGHT);
			text(t,x0 -10,range);

		



			


			

		// console.log(step);
		// console.log(veg.vegetable_cooking_times.length);
}




// console.log (vegName);


}

function draw(){

textSize(30);
textAlign(LEFT);
text("steaming times of all the veggies", 200,50);

}



