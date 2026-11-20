// src/utils/format.js
// Tiny helpers for printing readable output in the terminal.

export const heading = (title) => {
  console.log(`\n${"=".repeat(60)}\n  ${title}\n${"=".repeat(60)}`);
};

export const printTable = (rows) => console.table(rows);
