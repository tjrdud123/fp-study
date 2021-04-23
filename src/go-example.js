// go를 사용해서 읽기 쉬운 코드 만들기

import map from "./map.js";
import filter from "./filter.js";
import reduce from "./reduce.js";
import go from "./go.js";

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const res1 = reduce(
  (a, b) => a + b,
  map(
    (p) => p.price,
    filter((p) => p.price < 20000, products)
  )
);

const res2 = go(
    products,
    products => filter(p => p.price < 20000, products),
    products => map(p => p.price, products),
    prices => reduce((a, b) => a + b, prices)
)

console.log(res1, res2, res1 === res2);
