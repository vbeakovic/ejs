

exports.phi = function(table) {
  return (table [3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}


function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

exports.tableFor = function(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
