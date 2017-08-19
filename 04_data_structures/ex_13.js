function range(start, end, step) {
  var arr = [];
  if (start < end && (step > 0 || step == undefined)) {
    var iterStep = step == undefined ? 1 : step;
    for (var i = start; i < end + 1; i+= iterStep) {
    arr.push(i);
    }
  } else if (start > end && (step < 0 || step == undefined)) {
      var iterStep = step == undefined ? -1 : step;
      for (var i = end; i < start + 1 ; i = i - iterStep) {
        arr.unshift(i);
    }
  } else {
    return console.log('Please check the function parameters');
  }
    return arr;
}

function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum(range(1, 10)));


function reverseArray(arr) {
  var auxArr = [];
  for (var i = 0; i < arr.length; i++) {
    auxArr[i] = arr[arr.length - i - 1];
  }
  return auxArr;
}
console.log(reverseArray(["A", "B", "C"]));
