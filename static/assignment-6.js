// Assignment-6.js
// Excercise 5.1 from chapeter 5. Modify the radio_click.html example
// to have five buttons, labeled red, blue, green, yellow and orange.
// The event handlers for these buttons must produce messages stating
// the chosen favorite color. The event handler must be implemented as 
// a function whose name must be assigned to the onclick attribute of the
// radio button elements. The chosen color must be sent to the event handler
// as a parameter.


// The event handler for a radio button collection

function colorChoice (color) {

// Produce an alert message about the chosen color

  switch (color) {
    case 150: 
      alert("Your favorite color is Red!");
      break;
    case 160: 
      alert("Your favorite color is Blue!");
      break; 
    case 170:
      alert("Your favorite color is Green!");
      break;    
    case 180:
      alert("Your favorite color is Yellow!");
      break;
    case 190:
      alert("Your favorite color is Orange!");
      break; 
    default:
      alert("Error in JavaScript function colorChoice");
      break;
  }
}