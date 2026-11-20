# 📊 Student Profile & Score Analyzer

A command-line JavaScript application that manages student records and analyzes their scores. It is built with modern **ES6+** features and part of the [M-Elphast-Academy-Core](../README.md) learning projects.

## ✨ Features

- **Manage profiles:** add, update, remove, find and search students
- **Track scores:** add any number of scores to a student
- **Analyze performance:** averages, highest/lowest, letter grades, pass/fail status
- **Rank students** and list the top performers or those below the pass mark
- **Class statistics:** average, median, highest and lowest across all scores
- **Group students** by grade and compare average scores per course
- **Safe by design:** input validation, and no function mutates the original data

## 🧠 ES6+ Concepts Used

| Concept | Where to find it |
| ------- | ---------------- |
| **Arrow functions** | Every function in `src/` |
| **Destructuring** | `createStudent` in `models/student.js`, `getStudentSummary` in `services/analyzer.js`, `index.js` |
| **Spread operator (`...`)** | Copying arrays/objects in `studentService.js`, `Math.max(...scores)` in `analyzer.js` |
| **Rest parameters (`...args`)** | `sum`, `average`, `median` in `helpers.js`; `addScores` in `studentService.js`; `...extra` in `createStudent` |
| **ES modules (`import`/`export`)** | Every file, with `"type": "module"` in `package.json` |
| **Default parameters** | `round(value, decimals = 2)`, `getTopPerformers(students, count = 3)` |
| **Template literals** | Error messages and console output |
| **Array methods** | `map`, `filter`, `reduce`, `flatMap`, `find`, `sort`, `at` |
| **Nullish coalescing (`??`)** | `groupByGrade`, `getCourseAverages` |

## 🗂️ Project Structure

```
student-profile-score-analyzer/
├── package.json
├── README.md
├── src/
│   ├── index.js                  # entry point: runs a guided demo
│   ├── data/
│   │   └── students.js           # starter student data
│   ├── models/
│   │   └── student.js            # createStudent() with validation
│   ├── services/
│   │   ├── studentService.js     # add / update / remove / search students
│   │   └── analyzer.js           # averages, rankings, statistics, grouping
│   └── utils/
│       ├── helpers.js            # sum, average, median, grade helpers
│       └── format.js             # console output helpers
└── test/
    └── analyzer.test.js          # tests using Node's built-in test runner
```

## 🚀 Getting Started

**Requirements:** Node.js v18 or later. There are no dependencies to install.

```bash
cd student-profile-score-analyzer
npm start      # run the demo
npm test       # run the tests
```

## 🧪 Example Output

```
============================================================
  7. Top 3 Performers
============================================================
┌─────────┬──────┬───────────────┬────────────────────────┬─────────┐
│ (index) │ rank │ name          │ course                 │ average │
├─────────┼──────┼───────────────┼────────────────────────┼─────────┤
│ 0       │ 1    │ 'Yaw Asante'  │ 'Software Engineering' │ 89.75   │
│ 1       │ 2    │ 'Ama Boateng' │ 'Computer Science'     │ 88.5    │
│ 2       │ 3    │ 'Nana Adjei'  │ 'Computer Science'     │ 84      │
└─────────┴──────┴───────────────┴────────────────────────┴─────────┘
```

## 📖 API Reference

### Student service (`services/studentService.js`)

| Function | Description |
| -------- | ----------- |
| `addStudent(students, data)` | Returns a new list with the student added (id auto-generated) |
| `updateStudent(students, id, updates)` | Returns a new list with the student's fields updated |
| `removeStudent(students, id)` | Returns a new list without that student |
| `addScores(students, id, ...scores)` | Adds one or more scores to a student |
| `getStudentById(students, id)` | Finds one student |
| `searchStudents(students, query)` | Case-insensitive search by name or course |

### Analyzer (`services/analyzer.js`)

| Function | Description |
| -------- | ----------- |
| `getStudentSummary(student)` | Average, highest, lowest, grade and pass/fail status |
| `rankStudents(students)` | Students ordered by average, with rank numbers |
| `getTopPerformers(students, count = 3)` | Top N students |
| `getStrugglingStudents(students, passMark = 50)` | Students whose average is below the pass mark |
| `getClassStats(students)` | Class-wide average, median, highest and lowest |
| `groupByGrade(students)` | Student names grouped by letter grade |
| `getCourseAverages(students)` | Average score per course |

### Grading scale

| Average | Grade |
| ------- | ----- |
| 80 – 100 | A |
| 70 – 79 | B |
| 60 – 69 | C |
| 50 – 59 | D |
| below 50 | F |

The pass mark is **50**.

## 💡 Ideas to Extend

- Save and load students from a JSON file with `fs/promises`
- Add a simple menu using `readline` so users can type commands
- Add weighted scores (for example, exams count more than quizzes)
- Export a report to CSV

