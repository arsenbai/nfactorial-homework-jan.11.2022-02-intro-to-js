
// *********** Создать свой Ресторан используя: ***********


// 1. Переменные - let, const
const restaurantName = 'McDonald\'s';
let workersList = ["Samat", "John"];
workersList.push("Erbol"); // add new worker Erbol

console.log("List of workers:", workersList);

// 2. Типы данных - string, number, boolean, 
// null, undefined 

let averageWorkersAge = 25; // number
let isOpen = true; // boolean
let variableWithNull = null; // null
let variableWithUndefinedDataType; // undefined


// 3. Объекты - создание, добавление 
// и удаление свойства (через прямые скобки тоже)

let menuObj = new Object(); // создание объекта menu

menuObj.numberOfPages = 9; // добавление свойства
menuObj.menuPeriod = "December 2022";

menuObj["list of beverages"] = []; // добавление свойства (через прямые скобки)

menuObj["list of beverages"].push(
    "ALOE VERA DRINK", 
    "Fruit Milk",
    "SPARKLING WATER",
    "Apple fresh",
    "Red wine",
    "Beer"
    );

menuObj.salads = [
    'Jerk chicken salad',
    'Prawn, mango & avocado salad',
    'Thai beef salad',
    'Haloumi, pomegranate and rocket salad',
    'Crunchy Asian salad',
    'Quinoa salad with beetroot, pumpkin & persian feta',
    'Roasted pumpkin and quinoa salad',
    'Ripper Thai beef noodle salad'
];

console.log(menuObj);

delete menuObj.salads; // удаление свойства

delete menuObj["list of beverages"]; // удаление свойства (через прямые скобки)
delete menuObj["numberOfPages"]; // удаление свойства (через прямые скобки)

console.log(menuObj);



// *********** Работа с объектами ***********

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// 1. Создайте пустой объект `vehicle`.
let vehicle = {};

// 2. Добавьте свойство `brandName` со значением `BMW`
// (либо любая ваша любимая марка).
vehicle.brandName = "BMW";

// 3. Добавьте свойство `model` со значением `X5`
// (либо любая ваша любимая модель).
vehicle.model = "X5";

// 4. Измените значение свойства `model` на `M1`.
vehicle.model = "M1";

// 5. Удалите свойство `model` из объекта.
delete vehicle.model;


console.log(vehicle);




// *********** ### Работа с перебором свойств в объектах ***********

// 1. Создайте объект `salaries`, 
// где ключом(свойстовом) является имя, 
// a значением зарплата.

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130,
}

// 1. С помощью `for .. in`  просуммируйте 
// все значения и выведите в консоли.

let resultOfSum = 0;

for (let person in salaries) {
    resultOfSum += salaries[person];
}

console.log("Sum of all salaries =", resultOfSum);