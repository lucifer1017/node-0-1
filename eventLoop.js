const fs = require('fs');
const a = 100;
console.log("start");
setImmediate(() => console.log("setImd exp"));

fs.readFile('./file.txt', "utf-8", (err, data) => console.log(data));

setTimeout(() => {
    console.log("timeout exp");
}, 0);

console.log("the end", a);

//start the end 100 timeout exp data imdexp