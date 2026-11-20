// src/services/studentService.js
// CRUD-style operations on a list of students.
// Every function returns a NEW array instead of changing the old one (immutability).

import { createStudent } from "../models/student.js";

const nextId = (students) =>
  students.reduce((max, { id }) => Math.max(max, id), 0) + 1;

/** Find one student by id (undefined if not found). */
export const getStudentById = (students, id) =>
  students.find((student) => student.id === id);

/** Add a student. The id is generated automatically. */
export const addStudent = (students, studentData) => [
  ...students,
  createStudent({ ...studentData, id: nextId(students) }),
];

/** Update fields on an existing student. */
export const updateStudent = (students, id, updates) => {
  if (!getStudentById(students, id)) {
    throw new Error(`No student found with id ${id}.`);
  }
  return students.map((student) =>
    student.id === id ? createStudent({ ...student, ...updates, id }) : student
  );
};

/** Remove a student by id. */
export const removeStudent = (students, id) => {
  if (!getStudentById(students, id)) {
    throw new Error(`No student found with id ${id}.`);
  }
  return students.filter((student) => student.id !== id);
};

/** Add one or more new scores. `...newScores` is a REST parameter. */
export const addScores = (students, id, ...newScores) => {
  const student = getStudentById(students, id);
  if (!student) throw new Error(`No student found with id ${id}.`);
  return updateStudent(students, id, { scores: [...student.scores, ...newScores] });
};

/** Search by name or course (case-insensitive). */
export const searchStudents = (students, query) => {
  const term = query.trim().toLowerCase();
  return students.filter(
    ({ name, course }) =>
      name.toLowerCase().includes(term) || course.toLowerCase().includes(term)
  );
};
