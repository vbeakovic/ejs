var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

var descriptions = {
  work: "Went to work",
  "touched tree": "Touched tree"
};

var anObject = {left: 1, right: 2};
console.log(anObject);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

var journal = [
  { events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false},
  { events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
  { events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true},    
]
