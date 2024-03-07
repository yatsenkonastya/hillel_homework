//Завдання №1 перший варіант
/*let rows = 5;
let result = "";
 
for (let i = 1; i <= rows; i++) {
   for (let num = 1; num <= i; num++) {
      result += "*";
   }
   result += "\n";
}
console.log(result);
*/

//Завдання №1 другий варіант
let rows = 5;
let symbol = '*';
function drawTriangle(rows,sym){
for (let i = 0; i < rows; i++){
    for (let x = 0; x <= i; x++){
        console.log(symbol);
        
    }
    console.log("\n");
    }
}
console.log(drawTriangle(rows,symbol));

//Завдання №2
/*function summa(n) {
  let summ = 0;
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 1)
    summ += i;
  }
  return summ;
}

console.log( summa(100) );
*/


//Завдання №3
/*function pow(x, y) {
    var result = x;
  
    for (var i = 1; i < y; i++) {
      result *= x;
    }
  
    return result;
  }
  var x = 2;
  var y = 4;
  
  if(y<=1) {
    console.log('Будь ласка введіть степінь більше одиниці');
  } else {
    console.log(pow(x,y));
  }
  */