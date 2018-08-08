// Code your solution in this file
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, string) => {
  const new_array = []
  for (let i=0; i<drivers.length; i++) {
    if(drivers[i].toUpperCase() === string.toUpperCase())
    new_array.push(drivers[i])
  }
  return new_array
}

const fuzzyMatch = (drivers, string) => {
  const new_array = []
  for (let i=0; i<drivers.length; i++) {
    if (drivers[i].startsWith(string)) {
      new_array.push(drivers[i])
    }
  }
  return new_array
}

const matchName = (drivers, name) => {
  const new_array = []
  for (driver in drivers) {
    if(drivers[driver].name === name) {
      new_array.push(
        drivers[driver]
      )
    }
  }
  console.log(new_array);
  return new_array
}
