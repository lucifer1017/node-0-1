const fs = require('fs');
const a = 100;
console.log("start");
setImmediate(() => console.log("setImd exp"));
Promise.resolve("Promise").then(console.log);
fs.readFile('./file.txt', "utf-8", (err, data) => console.log(data));
process.nextTick(() => {
    Promise.resolve("next tick Promise").then(console.log);
    console.log("next tick")
})

setTimeout(() => {
    console.log("timeout exp");
}, 0);

console.log("the end", a);

//start the end 100 next tick next tick promise promise promise timeout imd