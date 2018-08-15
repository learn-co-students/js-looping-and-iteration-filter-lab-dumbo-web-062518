// Code your solution in this file
function findMatching(collection, name) {
  const matches = collection.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });
  return matches;
}

function fuzzyMatch(collection, query) {
  const searchLength = query.length;
  const matches = collection.filter(function (driver) {
    return ((driver.toLowerCase().slice(0,query.length)) === query.toLowerCase()) });
  return matches;
  }

function matchName(collection, query) {
  const matches = collection.filter(
    function (driver) {
      return (driver.name === query)
    }
  )
  return matches
}
