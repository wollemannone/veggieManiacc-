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

background(100,50,80);

for (var i = x0; i < width; i += 100) {

	fill(100,50,100);
	noStroke();
	rect(i, 70, 50, height-100);
}

// var vegName = veg.vegetable_cooking_times[0].name; //holding name of veg

for (var i= 0; i <veg.vegetable_cooking_times.length ; i++) { // objects in dataset

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
			stroke(217,50,70);
			strokeWeight(3);
			line(x0, range+ p,x0 + x1, range+ p);

			stroke(217,70,70);
			strokeWeight(5);
			line(x0+ x1, range + p,x0+ x1+ dur, range+ p);

			
			noStroke();
			// textStyle(LIGHT);
			textSize(15);
			fill(0);
			textAlign(RIGHT);
			text(t,x0 -10,range);
			

		



			


			

		// console.log(step);
		// console.log(veg.vegetable_cooking_times.length);
}

fill(0);
textSize(10);
text("min", x0-10, 67);

// fill(45,30,100);
textSize(30);
textAlign(LEFT);
text("steaming times of all the veggies", 200,40);

for (var i= 0; i <= 60; i+=10) {
	
	noStroke();
	textSize(10);
	text(i,x0 + i*10,67);

	

}

	stroke(217,50,70);
	strokeWeight(3);
	line(width-70,height-20,width, height-20 );

	stroke(217,70,70);
	strokeWeight(5);
	line(width-70,height-10,width, height-10);

	noStroke();
	textSize(10);
	textAlign(RIGHT);
	text("minimum steaming time",width-75,height-18);
	text("time to pull them out",width-75,height-7);
}

function draw(){


}



