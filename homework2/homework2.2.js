const inc = (n) => n + 1;

const a = 5;
const b = inc(a);

console.dir({a, b});

let obj = {
    n: 10
};

const inc2 = (obj) => obj.n + 1;

console.dir(inc2(obj));