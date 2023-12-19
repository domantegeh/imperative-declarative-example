// imperative
const names = ["Harry", "Ron", "Jeff", "Thomas"];
const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

// declarative
const names1 = ["Harry", "Ron", "Jeff", "Thomas"];
const newNamesWithExcMark1 = names.map((name) => `${name}!`);
console.log(newNamesWithExcMark1);
