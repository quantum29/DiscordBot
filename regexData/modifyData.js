const myData = require('./data');

function appendData(newData,severity) {
  switch(severity)
  {
    case 1: myData.severity_1.push(newData);
    break;
    case 2: myData.severity_2.push(newData);
    break;
    case 3: myData.severity_3.push(newData);
    break;
  }
}

function deleteData(data){
  myData.severity_1 = myData.severity_1.filter((regex)=>{
    return (regex!=data)
  })
  myData.severity_2 = myData.severity_2.filter((regex)=>{
    return (regex!=data)
  })
  myData.severity_3 = myData.severity_3.filter((regex)=>{
    return (regex!=data)
  })
}
module.exports = {
  appendData,
  deleteData
};
