// use current year if the yearOfDeath is undefined
const getAge = (birth, death) => (death ?? new Date().getFullYear()) - birth;

const findTheOldest = function (people) {
  let oldest = [];

  for (person of people) {
    if (!person.yearOfBirth) continue;

    const age = getAge(person.yearOfBirth, person.yearOfDeath);

    if (!oldest.length) oldest.push(person.name, age)
    if (age > oldest.at(-1)) oldest = [person.name, age];
  }
  return people.find(person => person.name === oldest.at(0))
};

// Do not edit below this line
module.exports = findTheOldest;
