// src/utils/helpers.js
// Small, reusable math helpers. All are arrow functions and use rest parameters
// so they can be called like: average(80, 90, 70)  or  average(...scoresArray)

export const PASS_MARK = 50;

/** Add up any number of values. `...numbers` is a REST parameter. */
export const sum = (...numbers) => numbers.reduce((total, n) => total + n, 0);

/** Round to a given number of decimal places (default 2). */
export const round = (value, decimals = 2) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

/** Average of any number of values. Returns 0 when nothing is passed in. */
export const average = (...numbers) =>
  numbers.length === 0 ? 0 : round(sum(...numbers) / numbers.length);

/** Median (middle value) of any number of values. */
export const median = (...numbers) => {
  if (numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b); // spread = copy, don't mutate input
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? round((sorted[mid - 1] + sorted[mid]) / 2)
    : sorted[mid];
};

/** Convert a numeric score (0-100) into a letter grade. */
export const getGrade = (score) => {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
};

/** A valid score is a finite number between 0 and 100 inclusive. */
export const isValidScore = (score) =>
  Number.isFinite(score) && score >= 0 && score <= 100;
