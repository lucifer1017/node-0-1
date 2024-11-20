
console.log("hey");
const pr = new Promise((res, rej) => {
    setTimeout(() => {
        res("thrd");
    }, 3000);
})
setTimeout(() => {
    console.log("fst");
}, 3000);
const f = async () => {
    console.log("hell");
    const data = await pr;
    console.log(data);
}
f();
setTimeout(() => {
    console.log("second");
}, 3000);

console.log("completed");

// hey hell completed  second thrd fst