document.write('<p>Hello again, from a linked script.</p>');

alert('Hello, outside the page!');

var thursday = confirm('Today is Thursday.');
document.write('<p>Is today Thursday? ' + thursday + '</p>');

var whoami = prompt('What is your name?', '');
if (whoami == null || whoami == '')
	document.write('<p>Hello, whoever you are!</p>');
else { 
	document.write('<p>Hello ' + whoami + '.</p>');
	document.write('<p>Your name is ' + whoami.length + ' characters long.</p>');
}

function findClassname() {
	var classname = 'CS 270';
	do {
		classname = prompt('What class is this?', classname);
	} while(classname == null || classname === '');

	switch(classname) {
		case 'CS 140':
			document.write('<p>Welcome to CS I.</p>');
			break;
		case 'CS 240':
			document.write('<p>Welcome to CS II.</p>');	
			break;
		case 'cs 270':
		case 'CS 270':
		case 'cs270':
		case 'CS270':
			document.write('<p>Welcome to Software Engineering.</p>');
			break;
		default:
			document.write('<p>Welcome to class.</p>');
	}

	if (classname == 'CS 140') {
		document.write('<p>Welcome to CS I.</p>');
	} else if(classname == 'CS 240') {
		document.write('<p>Welcome to CS II.</p>');	
	} else if(classname == 'CS 270') {
		document.write('<p>Welcome to Software Engineering.</p>');
	} else {
		document.write('<p>Welcome to class.</p>');
	}
}

findClassname();

function show_for() {
	// i++ is eqaul to i += 1
	for(i = 0; i < 10; i++) {
		document.write(i + '<br>');
	}
}

function make_car(make, model) {
	var my_car = new Object();

	my_car.make = make;
	my_car.model = model;

	return my_car;
}

function display_car(car) {
	document.write('Make: ' + car['make'] + ' Model: ' + car.model + '<br>');
}

var jet = make_car('Volkswager', 'Jetta');
var andreas = make_car('Lincoln', 'MKZ');
var lumi = {make: 'Chevrolet', model: 'Lumina'};

display_car(jet);
display_car(andreas);
display_car(lumi);


