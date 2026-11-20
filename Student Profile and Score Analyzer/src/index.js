// src/index.js
// Entry point: a guided demo of the Student Profile & Score Analyzer.
// Run it with:  npm start

import { initialStudents } from "./data/students.js";
import {
  addStudent,
  updateStudent,
  removeStudent,
  addScores,
  searchStudents,
  getStudentById,
} from "./services/studentService.js";
import {
  getStudentSummary,
  rankStudents,
  getTopPerformers,
  getStrugglingStudents,
  getClassStats,
  groupByGrade,
  getCourseAverages,
} from "./services/analyzer.js";
import { heading, printTable } from "./utils/format.js";

let students = [...initialStudents];

heading("1. All Student Profiles");
printTable(students.map(({ id, name, age, course, scores }) => ({ id, name, age, course, scores: scores.join(", ") })));

heading("2. Adding a New Student");
students = addStudent(students, {
  name: "Nana Adjei",
  age: 20,
  course: "Computer Science",
  scores: [83, 79, 90],
});
console.log(`Added: ${students.at(-1).name} (id ${students.at(-1).id})`);

heading("3. Adding Scores & Updating a Profile");
students = addScores(students, 6, 55, 61, 70); // rest parameter: any number of scores
students = updateStudent(students, 3, { course: "Software Engineering" });
const { name, course, scores } = getStudentById(students, 3); // destructuring
console.log(`${name} now studies ${course} with scores: ${scores}`);

heading("4. Searching");
console.log("Search 'software':", searchStudents(students, "software").map((s) => s.name));

heading("5. Individual Summaries");
printTable(students.map(getStudentSummary));

heading("6. Class Ranking");
printTable(rankStudents(students));

heading("7. Top 3 Performers");
printTable(getTopPerformers(students, 3));

heading("8. Students Below the Pass Mark");
const struggling = getStrugglingStudents(students);
struggling.length ? printTable(struggling) : console.log("Everyone is passing!");

heading("9. Class Statistics");
printTable([getClassStats(students)]);

heading("10. Grade Distribution");
console.log(groupByGrade(students));

heading("11. Average Score per Course");
printTable(getCourseAverages(students));

heading("12. Removing a Student");
students = removeStudent(students, 2);
console.log(`Students remaining: ${students.length}`);
