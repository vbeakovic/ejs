function noArguments() {
}

noArguments(1, 2, 3);
function threeArguments() {}
threeArguments();


function argumentCounter() {
  console.log('You gave me ', arguments.length, ' arguments');
}


argumentCounter('Straw man', 'Tautology', 'Ad hominem');
