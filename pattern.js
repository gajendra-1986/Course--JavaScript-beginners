/*function pattern(a){
    var str = "";
    for(var i=1;i<=5;i++){
        for(var j=1;j<=i;j++){
            str += "*";
        
        }
        str += "\n";
    }
    return str;
}
console.log(pattern(5));*/
/*  
    *
   **
  ***
 ****
***** 
 
i=0, s=4, *=1
i=1, s=3, *=2
i=2, s=2, *=3
i=3, s=1, *=4
i=4, s=0, *=5
*/
function pattern1(a) {

    let str = "";
    for (let i = 0; i < a; i++) {
        for (let j = a; j > 0; j--) {
            str += " ";
        }
        for (let j = 1; j <= a; j++) {
            str += "*";
        }

        str += "\n";
    }
    return str;
}
console.log(pattern1(5));