fizzbuzz1();
fizzbuzz2();

function fizzbuzz1() {
	let  output_element = document.getElementById("fizzbuzz1");
	
	let outp = "";
	for(let n = 1; n <= 100; n++){
		switch(0){
			case n%15:
				outp = "FizzBuzz";
				break;
			case n%3:
				outp = "Fizz";
				break;
			case n%5:
				outp = "Buzz";
				break;
			default:
				outp = "" + n;
		}
		
		
		console.log(outp);
		let p =document.createElement("p");
		p.innerHTML = "<p>" + outp + "</p>";
		output_element.appendChild(p);
	}
	
	
}

function fizzbuzz2() {
	let  output_element = document.getElementById("fizzbuzz2");
	
	for(let n = 1; n <= 100; n++){
		let outp = "";
		
		if( !(n%3))outp = outp + "Fizz";
		if( !(n%5))outp = outp + "Buzz";
		if(!outp)outp = "" + n;
		
		console.log(outp);
		let p =document.createElement("p");
		p.innerHTML = "<p>" + outp + "</p>";
		output_element.appendChild(p);
	}	
	
	
}