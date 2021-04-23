import go from "./go.js";

export default (f, ...fs) => (...as) => go(f(...as), ...fs);
