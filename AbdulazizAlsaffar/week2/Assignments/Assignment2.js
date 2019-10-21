let streetNumber = [34578,57843,98712,21906];
let streetName = ['Dolphin Street','King fahad Street','GBR Street','Abdulaziz Street','King khalid Street'];
let cityName = ['Wonka','Riyadh','Dubai','kuwait','Dammam'];
let stateName = ['NY','RIY','DUB','USA','KWT'];
let zipCode = [44506,65656,98721,65092,32045];

let sNum = streetNumber[Math.floor(Math.random() * streetNumber.length)];
let sName = streetName[Math.floor(Math.random() * streetName.length)];
let cName = cityName[Math.floor(Math.random() * cityName.length)];
let stName = stateName[Math.floor(Math.random() * stateName.length)];
let ZC = zipCode[Math.floor(Math.random() * zipCode.length)];

console.log(sNum+' '+sName+', '+cName+' '+stName+', '+ZC);