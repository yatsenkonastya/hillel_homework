//Завдання 1
/*
var normal_country_weather = {
    UK: "windy",
    Spain: "sunny",
    India: "rainy",
}
function getInfo() {
  return this;
}
console.log(getInfo.call(normal_country_weather));
normal_country_weather.Ukraine = "military";
console.log(getInfo.call(normal_country_weather));
*/

//Завдання 2

function price(services) {

    let sum = 0;
    for (let general_price of Object.values(services)) {
      sum += Number(general_price);
    }
  
    return sum; 
  }

function max_price(services) {
    let maximum = 0;
    for (let max_price of Object.values(services)) {
        maximum = Math.max(null, max_price);
    }
    return maximum;
}  

function min_price(services) {
  let minimum = 0;
    for (let min_price of Object.values(services)) {
        minimum = Math.min(null, min_price);
    }
    return minimum;
} 

  
  let services = {
  "стрижка": "60 грн".split(' ')[0],

	"гоління": "80 грн".split(' ')[0],

	"Миття голови": "100 грн".split(' ')[0],
  };
  services['Розбити скло'] = "200 грн".split(' ')[0],
  
  console.log("Загальна вартість наданих послуг становить" + " " + price(services) + " " + "гривень" );
  console.log("Максимальна вартість послуги серед наданих становить" + " " + max_price(services) + " " + "гривень");
  console.log("Мінімальна вартість послуги серед наданих становить" + " " + min_price(services) + " " + "гривень");
  




