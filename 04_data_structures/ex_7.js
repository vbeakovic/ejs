const journal = require('./jacques_journal.js');
const auxFunction = require('./ex_5.js');
const myFunctions = require('./ex_5_1.js');

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = myFunctions.phi(myFunctions.tableFor(event, journal));
    }
  }
  return phis
}
var correlations = gatherCorrelations(journal);
console.log(correlations.pizza);

for (var event in correlations) {
  console.log(event + ': ' + correlations[event]);
}

console.log("------");

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ': ' + correlation);
}

for (var i = 0; i < journal.length; i++) {
  var entry = journal[i];
  if (auxFunction.hasEvent('peanuts', entry) && !auxFunction.hasEvent('brushed teeth', entry))
    entry.events.push('peanut teeth');
}
console.log("------");
console.log(myFunctions.phi(myFunctions.tableFor('peanut teeth', journal)));
