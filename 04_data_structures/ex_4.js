var journal = [];

function addEntry(events, didITurnIntoASquirell) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirell
  });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], false);
console.log(journal);
