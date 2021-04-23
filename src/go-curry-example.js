const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
    let res = [];
    for(const a of iter) {
        res.push(f(a));
    }
    return res;
});

const filter = curry((f, iter) => {
    let res = [];
    for(const a of iter) {
        if(f(a)) res.push(a);
    }
    return res;
});

const reduce = curry((f, acc, iter) => {
    if(!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const a of iter) {
        acc = f(acc, a);
    }
    return acc;
});

const go = (...args) => reduce((a, f) => f(a), args);

const products = [
	{ name: "반팔티", price: 15000 },
	{ name: "긴팔티", price: 20000 },
	{ name: "핸드폰케이스", price: 15000 },
	{ name: "후드티", price: 30000 },
	{ name: "바지", price: 25000 }
];

const res1 = go(
    products,
    products => filter(p => p.price < 20000, products),
    products => map(p => p.price, products),
    prices => reduce((acc, cur) => acc + cur, prices)
);

const res2 = go(
    products,
    filter(p => p.price < 20000),
    map(p => p.price),
    reduce((acc, cur) => acc + cur)
);

console.log(res1, res2, res1 === res2);
