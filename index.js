// // Code your solution in this file
//
// function findMatching(drivers, name){
//   // newDrivers = []
//   // for (const val of arr){
//   //   if (drivers[val] === name)
//   //     newArr.push(drivers[val]);
//   // } else {
//   //   return newArr = [];
//   // }
//   // return newArr;
// };

function findMatching(drivers, name){
	return drivers.filter(function(driver){
		return driver.toLowerCase() === name.toLowerCase()
	})
}

function fuzzyMatch(drivers, name){
	return drivers.filter((driver) => {
		return driver.startsWith(name)
	})
}

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name;
  })
}
