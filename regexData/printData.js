let myData = require('./data');

const printData = () => {
  console.log("print was called")
  console.log(myData)
  console.log("print terminated")
}

module.exports = printData;