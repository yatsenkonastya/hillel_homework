let value = 'hour';
let number = 10;

switch (value) {
    case 'kilogram':
        console.log(number + ' ' + "кілограмів дорівнює" + ' '  + number*1000 + ' ' + "грамів");
        break;
    case 'hour':
        console.log(number + ' ' + "годин дорівнює" + ' '  + number*60 + ' ' + "хвилин");
        break;
    case 'kilometr':
        console.log(number + ' ' + "кілометрів дорівнює" + ' '  + number*1000 + ' ' + "метрів");
        break;
    default:
        console.log("Ви ввели величину, котрої не існує в системі")
}