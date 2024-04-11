// Assignment # 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, modelName, ...additionalInfo) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...additionalInfo)
    };
    return carInfo;
}
;
let myCarDetails = storeCarInfo('Toyota', 'Corolla', { color: 'black' }, { year: 2022 }, { features: ['Navigation', 'Power window'] });
console.log(myCarDetails);
export {};
// function carMan (manufacturer: string, model: number, arbitrary: number){
//     let carObject = {man: manufacturer, mod: model, arb: arbitrary}
//     return carObject
// }
// console.log(carMan('toyota', 2022, color: 'gold'));
