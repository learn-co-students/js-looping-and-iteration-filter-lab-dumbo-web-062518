
function findMatching(arr, name){
  return arr.filter(function(element){return element.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(arr, search){
  return arr.filter(function(element) {return element.slice(0, search.length) === search})
}

function matchName(arr, search){

  return arr.filter(function(element) {return element.name === search})

}
