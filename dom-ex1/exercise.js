/* globel consle, alart, propt */
var myinput = document.getElementById("input");
var mybutton= document.getElementById("btn");
var output = document.createElement("output");
 function myText(){ 
    output.innerHTML=myinput.Value;
    
};
console.log(input);
console.log(output);
mybutton.addEventListener("click",myText );


 /*function creat_random (string_lenght) {
    p.innerHTML = input.value  
    var random_string = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i, i = 0; i < string_lenght; i++ ) {
        random_string += characters.charAt(Math.floor(Math.random() * characters.Length));
    }
  
}*/





/*var input = document.querySelector('input');
input.innerHTML
function creat_random (string_lenght) {
    var random_string = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i, i = 0; i < string_lenght; i++ ) {
        random_string += characters.charAt(Math.floor(Math.random() * characters.Length));
    }
    console.log(random_string);
    
 }
 creat_random()
 */
 

//var input = document.getElementById("random");
//var button = document.getElementById("btn");
//input.innerHTML= ;

 /*const random = (length = 8) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};
console.log(random()); // JgKGQEUx
console.log(random(12)); // ttwbeshkYzaX
console.log(random(20)); // zZN7uH9pPjhJf30QNus5

/*
function myFunction(){
var x = document.getElementsByTagName("input")[0].value;
document.getElementsByTagName("p")[0].innerHTML= x;
}
*/