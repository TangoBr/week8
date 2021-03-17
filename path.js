const path = require(`path`);
const myPath = path.join(__dirname, `some_folder`, `Hello.txt`);
const pathObject = path.parse(myPath);
console.log(pathObject)