const fs= require("fs");
// This is my .JSON parser module.
// I dont know if it is even usefull in real dev environments // 
 const JSONDataParser = function (json){
    const jsonData = fs.readFileSync(json)
    const parsedJson = JSON.parse(jsonData)
    return parsedJson;
}


module.exports = {JSONDataParser,};