var myarray = ["m", "p", 9, 6, 0 , "a"];
var array2 = ["c", "n", 9, 8, 1 , "c", 9];
var num = 0;
var leter= 0;
function getArray(array) {
    num = 0;
    leter= 0;
    array.forEach( function(item) {
        if (typeof item === "number"){
        num = num +1 ;
        } else {
            leter = leter + 1;
        }
        });  
console.log("There are " + array.length +" elements in your array.");
console.log("There are " + num +" numbers");
console.log("There are " + leter +" letters");
}


getArray(myarray);
getArray(array2);

