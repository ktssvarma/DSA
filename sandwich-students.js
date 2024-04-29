var countStudents = function (students, sandwiches) {
  const reccur = () => {
    if (students[0] == sandwiches[0] && students.length != 0) {
      students.splice(0, 1);
      sandwiches.splice(0, 1);
      return reccur();
    } else if (
      !students.includes(sandwiches[0]) ||
      students.length == 0 ||
      sandwiches.length == 0
    ) {
      return students.length;
    } else {
      students.push(students[0]);
      students.splice(0, 1);
      return reccur();
    }
  };
  console.log(reccur());
//   return reccur();
};

console.time("Exe Time");
countStudents([1, 1, 0, 0], [0, 1, 0, 1]);
countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]);
countStudents(
  [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0]
);
countStudents(
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]
);
console.timeEnd("Exe Time");
