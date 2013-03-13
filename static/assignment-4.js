// Assignment-4.js 
// Ch.4 exercises 4.1-4.5

// Exercise 4.1
// Output: A table of the numbers 5 to 15 and thier squares and cubes, using alert

alert('The following page contains a table of numbers 5-15 and both their sqaures/cubes');

document.write('<h1>Exercise 4.1</h1>');
document.write('<table border="1">'); {
	// For headers in table
	document.write('<tr><th>Number</th><th>Squared</th><th>Cubed</th></tr>'); 

	// For loop to get numbers 5-15 and both their sqaures/cubes
	var square, cube;
	for (i = 5; i<16; i++) {
		square = i * i;
		cube = square * i;
		// For rows in table
		document.write('<tr><td>' + i + '</td><td>' + square + '</td><td>' + cube + '</td></tr>');
	}
document.write('</table><br />');

}

// Exercise 4.2
// Output: The first 20 Fibonacci numbers. You must use document.write to produce the output.

document.write('<h1>Exercise 4.2</h1>');
document.write('<p>First 20 Fibonacci Numbers<p>');
document.write('<table border="1">'); {
	// For headers in table
	document.write('<tr><th>Number</th><th>Fibonacci Number</th></tr>'); 
		document.write('<tr><td>0</td><td>0</td></tr>');
		document.write('<tr><td>1</td><td>1</td></tr>');
	// For loop to get numbers 5-15 and both their sqaures/cubes
	var F0 = 0, F1 = 1, Fn;
	for (i = 2; i<=20; i++) {
		Fn = F0 + F1;
			// For rows in table
			document.write('<tr><td>' + i + '</td><td>' + Fn+ '</td></tr>');
			F0 = F1;
			F1 = Fn;
	}
document.write('</table><br />');

}

// Exercise 4.3
// Input: Three numbers, using prompt to get each one
// Output: The largest of the three numbers.
document.write('<h1>Exercise 4.3</h1>');

var number1 = prompt('Enter a number', ''); 
var number2 = prompt('Enter a second number', ''); 
var number3 = prompt('Enter a third number', ''); 
value1 = parseFloat(number1); 
value2 = parseFloat(number2); 
value3 = parseFloat(number3); 
MaxVal = Math.max(value1, value2, value3); 

document.write('The maximum number you have entered is: ' + MaxVal + '<br />');

// Exercise 4.4
// Modify exercise 4.2 to use prompt to input a number n that is the number of
// the Fibonacci number required as output.
document.write('<h1>Exercise 4.4</h1>');

document.write('<table border="1">'); {
	var f1 = 0, f2 = 1, fn;
	number = prompt('How many fibonacci sequence numbers would you like to see? (2-20)', '');

	if (number >= 2 && number <= 20) {
	   	document.write('First ' + number + ' fibonacci sequence numbers <br /><br />');
		// For headers in table
		document.write('<tr><th>Number</th><th>Fibonacci Number</th></tr>'); 
			document.write('<tr><td>0</td><td>0</td></tr>');
			document.write('<tr><td>1</td><td>1</td></tr>');

		for (i = 2; i <= number; i++)  {
        	fn = f1 + f2;
        	document.write('<tr><td>' + i + '</td><td>' + fn + '</td></tr>');
        	f1 = f2;
        	f2 = fn; 
      	}
   	}
	else
   		document.write("Error - number not in the range 2-20");

document.write('</table><br />');
}

// Exercise 4.5
// Input: A text string, using promt.
// Output: Either "Valid Name" or "Invalid Name", depending on whether the input 
// names fit the required format which is,
// Last name, first name, middle intial
// where neither of the names can have more than 15 characters. 
document.write('<h1>Exercise 4.5</h1>');

var msg = prompt('Please enter your Last Name, First Name and Middle Initial', '');


if (msg.match(/^[A-Z][a-z]{1,14}, [A-Z][a-z]{1,14}, [A-Z]\.?$/)) {
    document.write('<p>Valid Entry!<p>');
    alert('Valid');
}
else {
	document.write('<p>Invalid Entry<p>');
    alert('InValid');
	
}
