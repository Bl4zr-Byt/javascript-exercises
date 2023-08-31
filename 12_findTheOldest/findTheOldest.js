const findTheOldest = function (peoplesArr) {
  let date = new Date().getFullYear();
  
  let oldest = peoplesArr.reduce((initial, current) => {

    if (!("yearOfDeath" in initial)) {
      initial.yearOfDeath = date;
    }

    currentAge = current.yearOfDeath - current.yearOfBirth;
    initialAge = initial.yearOfDeath - initial.yearOfBirth;

    if (initialAge > currentAge) return initial;
    else return current

  }, peoplesArr[0])

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
