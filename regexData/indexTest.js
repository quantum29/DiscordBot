const getData = require('./data')
const {appendData,deleteData} = require('./modifyData')
const printData = require('./printData')

console.log('Initial value of myData:', getData);

printData();

appendData(55,3);

printData();
deleteData(55);
printData();

console.log('New value of myData:', getData);
