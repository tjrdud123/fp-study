import reduce from "./reduce.js";

export default (...args) => reduce((a, f) => f(a), args);
