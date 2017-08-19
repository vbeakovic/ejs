const ANCESTRY_FILE = require("./ancestry.js");
var ancestry = JSON.parse(ANCESTRY_FILE);

var min = ancestry[0];
for (var i = 0; i < ancestry.length; i++) {
  var cur = ancestry[i];
  if (cur.born < min.born)
    min = cur;
}
console.log(min);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));
