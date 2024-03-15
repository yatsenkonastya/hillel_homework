// Завдання №1
/*function isNaN_f(number) {
	if (typeof number === 'number') {
		console.log("Value" + " " + number + " " + "is False");
	} else {
        console.log("Value"+ " " + number + " " + "is True")
    }
}

isNaN_f(2);
isNaN_f('str');
isNaN_f(null);
isNaN_f(undefined);
*/

//Завдання №2
/*function pad(text, symbol, symbol_value, boolean) {
    text = 'abcde';
    symbol = '+';
    symbol_value = 6;
    boolean = true;

    while (text.length <= symbol_value) {
        if(boolean===true) {
            true_value = symbol + text;
            console.log(true_value);
            break;
        } else {
            false_value = text + symbol;
            console.log(false_value);
        }
    }
}
pad();
*/



// Завдання №3
  /*function getRandomNumber(min, max, cycles_number, paired_numbers, unpaired_numbers) {
    min = Math.ceil(100);
    max = Math.floor(1000);
    cycles_number = 25;
    paired_numbers = 0;
    unpaired_numbers = 0;
    for( i = 1; i <= cycles_number; i++) {
        let result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(result);
        if ( i % 2===0 ) {
            paired_numbers++;
        } else {
            unpaired_numbers++;
        }
    
    }
    console.log('Кількість парних чисел =' + paired_numbers);
    console.log('Кількість непарних чисел =' + unpaired_numbers);
    console.log('Співвідношення парних чисел до непарних =' + ' ' + paired_numbers/cycles_number*100 + ":" + unpaired_numbers/cycles_number*100)
  }
  console.log('Було згенеровано 25 випадкових чисел:')
  getRandomNumber();
  */

 

