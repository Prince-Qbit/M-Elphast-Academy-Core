// src/services/analyzer.js
// Functions that analyze student scores.

import { average, median, getGrade, PASS_MARK } from "../utils/helpers.js";

/** Average score for one student (0 if they have no scores). */
export const getStudentAverage = ({ scores }) => average(...scores);

/** A short summary for one student, built with destructuring + spread. */
export const getStudentSummary = (student) => {
  const { name, course, scores } = student;
  if (scores.length === 0) {
    return { name, course, average: 0, highest: 0, lowest: 0, grade: "N/A", status: "No scores" };
  }
  const avg = getStudentAverage(student);
  return {
    name,
    course,
    average: avg,
    highest: Math.max(...scores),
    lowest: Math.min(...scores),
    grade: getGrade(avg),
    status: avg >= PASS_MARK ? "Pass" : "Fail",
  };
};

/** Rank students from highest to lowest average (students with no scores are skipped). */
export const rankStudents = (students) =>
  students
    .filter(({ scores }) => scores.length > 0)
    .map(({ name, course, ...rest }) => ({ name, course, average: getStudentAverage(rest) }))
    .sort((a, b) => b.average - a.average)
    .map((student, index) => ({ rank: index + 1, ...student }));

/** The top N students (default 3). */
export const getTopPerformers = (students, count = 3) =>
  rankStudents(students).slice(0, count);

/** Students whose average is below the pass mark. */
export const getStrugglingStudents = (students, passMark = PASS_MARK) =>
  rankStudents(students).filter(({ average }) => average < passMark);

/** Class-wide statistics across every score of every student. */
export const getClassStats = (students) => {
  const allScores = students.flatMap(({ scores }) => scores);
  if (allScores.length === 0) {
    return { students: students.length, totalScores: 0, average: 0, median: 0, highest: 0, lowest: 0 };
  }
  return {
    students: students.length,
    totalScores: allScores.length,
    average: average(...allScores),
    median: median(...allScores),
    highest: Math.max(...allScores),
    lowest: Math.min(...allScores),
  };
};

/** Group student names by letter grade, e.g. { A: ["Ama"], B: ["Abena"] }. */
export const groupByGrade = (students) =>
  students
    .filter(({ scores }) => scores.length > 0)
    .reduce((groups, student) => {
      const grade = getGrade(getStudentAverage(student));
      return { ...groups, [grade]: [...(groups[grade] ?? []), student.name] };
    }, {});

/** Average score per course. */
export const getCourseAverages = (students) => {
  const byCourse = students.reduce((groups, { course, scores }) => ({
    ...groups,
    [course]: [...(groups[course] ?? []), ...scores],
  }), {});

  return Object.entries(byCourse).map(([course, scores]) => ({
    course,
    average: average(...scores),
  }));
};
