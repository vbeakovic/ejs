function min(x, y) {
  return x < y ? x : y;
}
console.log(min(0, 10));
console.log(min(0, -10));

function isEven(number) {
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else if (number < 0) {
    return isEven(-number);
  } else {
    return isEven(number - 2);
  }
}

console.log(isEven(-1));
