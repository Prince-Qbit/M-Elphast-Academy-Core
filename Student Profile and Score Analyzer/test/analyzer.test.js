// test/analyzer.test.js
// Run with:  npm test   (uses Node's built-in test runner, no installs needed)

import { test } from "node:test";
import assert from "node:assert/strict";

import { average, median, getGrade } from "../src/utils/helpers.js";
import { createStudent } from "../src/models/student.js";
import {
  addStudent,
  addScores,
  updateStudent,
  removeStudent,
  searchStudents,
} from "../src/services/studentService.js";
import {
  getStudentSummary,
  rankStudents,
  getClassStats,
  groupByGrade,
} from "../src/services/analyzer.js";

const sample = [
  { id: 1, name: "Ama", age: 19, course: "CS", scores: [90, 80] },
  { id: 2, name: "Kofi", age: 21, course: "IT", scores: [40, 50] },
  { id: 3, name: "Yaw", age: 22, course: "CS", scores: [] },
];

test("average, median and grade helpers", () => {
  assert.equal(average(80, 90, 70), 80);
  assert.equal(average(), 0);
  assert.equal(median(1, 3, 2), 2);
  assert.equal(median(1, 2, 3, 4), 2.5);
  assert.equal(getGrade(85), "A");
  assert.equal(getGrade(49), "F");
});

test("createStudent validates input and keeps extra fields", () => {
  const student = createStudent({ id: 1, name: " Ama ", age: 19, course: "CS", city: "Accra" });
  assert.equal(student.name, "Ama");
  assert.equal(student.city, "Accra");
  assert.deepEqual(student.scores, []);
  assert.throws(() => createStudent({ id: 1, name: "", age: 19, course: "CS" }), /name is required/);
  assert.throws(() => createStudent({ id: 1, name: "A", age: 19, course: "CS", scores: [101] }), /Invalid scores/);
});

test("service functions never mutate the original array", () => {
  const added = addStudent(sample, { name: "Esi", age: 20, course: "IT", scores: [60] });
  assert.equal(added.length, 4);
  assert.equal(sample.length, 3);
  assert.equal(added.at(-1).id, 4);

  const scored = addScores(sample, 3, 70, 80);
  assert.deepEqual(scored[2].scores, [70, 80]);
  assert.deepEqual(sample[2].scores, []);

  assert.equal(updateStudent(sample, 1, { course: "SE" })[0].course, "SE");
  assert.equal(removeStudent(sample, 1).length, 2);
  assert.throws(() => removeStudent(sample, 99), /No student found/);
});

test("searchStudents matches name or course", () => {
  assert.deepEqual(searchStudents(sample, "cs").map((s) => s.name), ["Ama", "Yaw"]);
  assert.deepEqual(searchStudents(sample, "kofi").map((s) => s.name), ["Kofi"]);
});

test("analyzer functions", () => {
  assert.equal(getStudentSummary(sample[0]).grade, "A");
  assert.equal(getStudentSummary(sample[1]).status, "Fail");
  assert.equal(getStudentSummary(sample[2]).status, "No scores");

  const ranking = rankStudents(sample);
  assert.deepEqual(ranking.map((r) => r.name), ["Ama", "Kofi"]);
  assert.equal(ranking[0].rank, 1);

  const stats = getClassStats(sample);
  assert.equal(stats.totalScores, 4);
  assert.equal(stats.average, 65);
  assert.equal(stats.highest, 90);
  assert.equal(stats.lowest, 40);

  assert.deepEqual(groupByGrade(sample), { A: ["Ama"], F: ["Kofi"] });
});
