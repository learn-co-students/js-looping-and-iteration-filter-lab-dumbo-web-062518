// Code your solution in this file
function findMatching(collection, keyword) {
  return collection.filter(item => item.toLowerCase() === keyword.toLowerCase())
}

function fuzzyMatch(collection, keyword) {
  return collection.filter(item => item.slice(0, keyword.length) === keyword)
}

function matchName(collection, keyword) {
  return collection.filter(item => item.name === keyword)
}
