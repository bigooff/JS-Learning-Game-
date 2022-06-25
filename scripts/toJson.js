const fs= require("fs");
// This is my json stringifier module.
// I dont know if it is even usefull in real dev environments // 
 const toJSON= function (object){
    const jsonData = JSON.stringify(object)
    return jsonData;
}


module.exports = {toJSON,};