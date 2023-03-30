document.getElementById('t').innerHTML = 'This is <u>heading</u>';

/*

3 way to declare a varieble

1. var
2. let
3. const


*/

var x1 = 12; // Declaration
var x1 = 34; // Re-declaration ALLOWED
x1=55;       // Re-assignment ALLOWED

document.write(x1);
document.write('<br>');

let y1 = 12; // Declaration
// let y1 = 34; // Re-declaration NOT ALLOWED
y1=67;       // Re-assignment ALLOWED

document.write(y1);
document.write('<br>');

document.write('This is \"Ravin\"');

document.write('<br>');



const a1 = 12; // Declaration
//const a1 = 34; // Re-declaration NOT ALLOWED
//a1=67;       // Re-assignment ALLOWED

document.write(a1);