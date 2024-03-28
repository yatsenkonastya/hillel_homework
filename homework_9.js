//Завдання 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr){
    arr.sort(() => Math.random() - 0.5);
};
myBlend(arr);
console.log(arr);

//Завдання 2
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function findValueByKey(obj, value) {
    return Object.entries(obj)
    .reduce((param, [key, val]) => {
        if (val === value) {
            param.push(key);
        }
        return  param;
    }, []);
}

 
final_answer = findValueByKey(company, 'Велика Компанія');
console.log(final_answer);


  