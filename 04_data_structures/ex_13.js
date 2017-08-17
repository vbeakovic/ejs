function range(start, end, step) {
  var arr = [];
  if (start < end && (step > 0 || step == undefined)) {
    var iterStep = step == undefined ? 1 : step;
    for (var i = start; i < end + 1; i+= iterStep) {
    arr.push(i);
    }
  } else if (start > end && (step < 0 || step == undefined)) {
      console.log('I am here!');
      var iterStep = step == undefined ? -1 : step;
      console.log(iterStep);
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



console.log(range(2, 5, 2));
