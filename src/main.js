import pipe from "./pipe.js";

const f = pipe(
    (a, b) => a + b,
    a => a + 10,
    a => a + 100);

console.log(f(1, 2));