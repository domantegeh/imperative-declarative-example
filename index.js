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

// reusable function
const newArray = ["Harry", "Ron", "Jeff", "Thomas"];
const newArray01 = newArray.map((name) => {
  return `${name}!`;
});
console.log(newArray01);

const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14];
const newTruthyArray = truthyArray.filter((item) => Boolean(item));
console.log(newTruthyArray);

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];
const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);
console.log(eligibleForScholarshipStudents);

const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);

const oddScore = students.some((student) => student.score % 2 != 0);
console.log(oddScore);

const findJames = students.find((student) => student.name === "James");
console.log(findJames);

const compareScore = (a, b) => {
  return a.score - b.score;
};
const sortScore = students.sort(compareScore);
console.log(sortScore);

const examPassed = students.every((student) => student.score >= 60);
console.log(examPassed);

let i = 1;
const studentsData = students.forEach((student) => {
  console.log(`${i} ${student.name}`);
  i++;
});
