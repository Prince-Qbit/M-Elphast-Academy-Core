// src/models/student.js
import { isValidScore } from "../utils/helpers.js";

/**
 * Build a validated student object.
 *
 * - Destructuring pulls the known fields out of the input object.
 * - `scores = []` is a default value used when no scores are given.
 * - `...extra` collects any additional fields (email, city, etc.) using REST.
 * - `[...scores]` and `...extra` in the return use SPREAD to copy data, so the
 *   original input is never mutated.
 */
export const createStudent = ({
  id,
  name,
  age,
  course,
  scores = [],
  ...extra
}) => {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Student name is required.");
  }
  if (!Number.isInteger(age) || age < 1) {
    throw new Error(`Invalid age for ${name}: age must be a positive whole number.`);
  }
  if (typeof course !== "string" || course.trim() === "") {
    throw new Error(`Course is required for ${name}.`);
  }
  if (!Array.isArray(scores) || !scores.every(isValidScore)) {
    throw new Error(`Invalid scores for ${name}: scores must be numbers from 0 to 100.`);
  }

  return { id, name: name.trim(), age, course: course.trim(), scores: [...scores], ...extra };
};
