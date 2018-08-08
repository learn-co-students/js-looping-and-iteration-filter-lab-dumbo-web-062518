// Code your solution in this file

const findMatching = (drivers, name) => {
  return drivers.filter(driverName =>
    driverName.toUpperCase() === name.toUpperCase()
  )
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driverName =>
    driverName.startsWith(string)
  )
}

const matchName = (drivers, name) => {
  return drivers.filter(driverName =>
    driverName.name === name
  )
}
