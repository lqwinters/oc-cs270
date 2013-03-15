// Assignment-5.js 
// Ch.4 exercises 4.6-4.10

// Exercise 4.6
// Input: A line of text, using prompt.
// Output: The words of the input text, in alphabetical order.
document.write('<h1>Exercise 4.6</h1>');

var line = prompt('Please enter a line of text', '');
var lineArr = line.split(' ');
var alpha = lineArr.sort()

document.write('<p>Below displays the words from the line of text entered in alphabetical order.</p><br />')
document.write(alpha + '<br />');

// Exercise 4.7
// Modify exercise 4.6 to get a second input from the user, which is either
// "assending" or "decending".
document.write('<h1>Exercise 4.7</h1>');

var line2 = prompt('Please enter a second line of text', '');
var l2Arr = line2.split(' ');
var decend = l2Arr.reverse();

document.write('<p>Below displays the words from the line of text entered in decending order.</p><br />')
document.write(decend + '<br />');

// Exercise 4.8
// Function: no_zeros
// Parameter: An array of numbers
// Result: The given array must be modified to remove all zero values
// Returns: true if given array inlcuded zero valse; false otherwise
document.write('<h1>Exercise 4.8</h1>');
