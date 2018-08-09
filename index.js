function findMatching(drivers, name){
  const newDrivers = drivers.filter( driver => driver.toLowerCase() === name.toLowerCase());
  return newDrivers
}

function fuzzyMatch(drivers, lettersString){
  return newDrivers2 = drivers.filter(driver => driver.startsWith(lettersString))
}

function matchName(drivers, name){
  return newDrivers3 = drivers.filter(driver => driver.name === name)
}
