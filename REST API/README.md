# 🚀 REST API with Express

A RESTful API that supports full **CRUD** (Create, Read, Update, Delete) operations, built with **Express** and **MongoDB**. Part of [M-Elphast-Academy-Core](../README.md), the main repository of Elphast Academy.


## ✨ Features

- **Full CRUD:** create, list, fetch, update and delete tasks
- **MongoDB persistence** using Mongoose models
- **Schema validation:** required fields, enums and length limits
- **Proper HTTP status codes** (`200`, `201`, `204`, `400`, `404`, `500`)
- **Centralized error handling** with consistent JSON error responses
- **Environment-based configuration** with `dotenv`


## 🧰 Tech Stack

| Tool | Purpose |
| ---- | ------- |
| **Node.js 18+** | JavaScript runtime |
| **Express** | Web framework and routing |
| **MongoDB** | NoSQL database |
| **Mongoose** | Schemas, models and validation |
| **dotenv** | Loads environment variables |


## 🧠 Concepts Practiced

| Concept | Where to find it |
| ------- | ---------------- |
| **REST principles** (resources, verbs, status codes) | `routes/task.routes.js` |
| **Routing with `express.Router()`** | `routes/task.routes.js` |
| **Controllers (separation of concerns)** | `controllers/task.controller.js` |
| **Mongoose schemas and validation** | `models/task.model.js` |
| **Middleware** (JSON parsing, 404, errors) | `app.js`, `middleware/` |
| **Async/await with error handling** | `controllers/task.controller.js` |
| **Environment variables** | `config/db.js`, `.env.example` |


## 🗂️ Project Structure

```
rest-api-express/
├── package.json
├── .env.example                  # template for your environment variables
├── README.md
└── src/
    ├── server.js                 # entry point: connects to DB, starts server
    ├── app.js                    # Express app and middleware setup
    ├── config/
    │   └── db.js                 # MongoDB connection
    ├── models/
    │   └── task.model.js         # Mongoose schema and model
    ├── controllers/
    │   └── task.controller.js    # CRUD logic
    ├── routes/
    │   └── task.routes.js        # endpoint definitions
    └── middleware/
        ├── notFound.js           # 404 handler
        └── errorHandler.js       # central error handler
```


## 🚀 Getting Started

**Requirements:** [Node.js 18+](https://nodejs.org), [Git](https://git-scm.com), and a MongoDB database ([MongoDB Atlas](https://www.mongodb.com/atlas) free tier or a local [MongoDB Community Server](https://www.mongodb.com/try/download/community)).

### 1. Clone and install

```bash
git clone https://github.com/Prince-Qbit/M-Elphast-Academy-Core.git
cd M-Elphast-Academy-Core/rest-api-express
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your values:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/elphast_tasks
```

For Atlas, use your connection string instead:
`mongodb+srv://<user>:<password>@<cluster>.mongodb.net/elphast_tasks`

> ⚠️ **Never commit your `.env` file.** It is already excluded by the root `.gitignore`. Only `.env.example` is committed.

### 3. Run the server

```bash
npm run dev    # auto-restarts on file changes
npm start      # normal start
```

The API runs at `http://localhost:5000`.


## ⚙️ Environment Variables

| Variable | Description | Example |
| -------- | ----------- | ------- |
| `PORT` | Port the server listens on | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/elphast_tasks` |


## 📖 API Reference

**Base URL:** `http://localhost:5000/api`

| Method | Endpoint | Description | Success |
| ------ | -------- | ----------- | ------- |
| `GET` | `/health` | Check that the API is running | `200` |
| `POST` | `/tasks` | Create a new task | `201` |
| `GET` | `/tasks` | Get all tasks | `200` |
| `GET` | `/tasks/:id` | Get one task by ID | `200` |
| `PUT` | `/tasks/:id` | Update a task | `200` |
| `DELETE` | `/tasks/:id` | Delete a task | `200` |

### Task model

| Field | Type | Rules |
| ----- | ---- | ----- |
| `title` | String | Required, max 100 characters |
| `description` | String | Optional |
| `status` | String | `pending`, `in-progress` or `completed` (default: `pending`) |
| `createdAt` | Date | Added automatically |
| `updatedAt` | Date | Added automatically |

### Example: create a task

**Request**
```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Finish REST API project",
  "description": "Build CRUD endpoints with Express and MongoDB",
  "status": "in-progress"
}
```

**Response `201 Created`**
```json
{
  "success": true,
  "data": {
    "_id": "665f1c2e8b1a4c0012ab34cd",
    "title": "Finish REST API project",
    "description": "Build CRUD endpoints with Express and MongoDB",
    "status": "in-progress",
    "createdAt": "2025-06-04T10:15:30.000Z",
    "updatedAt": "2025-06-04T10:15:30.000Z"
  }
}
```

### Example: error response

**Request:** `GET /api/tasks/123` (invalid ID)

**Response `400 Bad Request`**
```json
{
  "success": false,
  "message": "Invalid task ID"
}
```

### Status codes used

| Code | Meaning |
| ---- | ------- |
| `200` | OK |
| `201` | Created |
| `400` | Bad request (validation error or invalid ID) |
| `404` | Resource or route not found |
| `500` | Internal server error |


## 🧪 Testing the API

**With cURL**
```bash
# Create
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Express","status":"pending"}'

# Read all
curl http://localhost:5000/api/tasks

# Read one
curl http://localhost:5000/api/tasks/<id>

# Update
curl -X PUT http://localhost:5000/api/tasks/<id> \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

# Delete
curl -X DELETE http://localhost:5000/api/tasks/<id>
```

**With a GUI:** import the endpoints into [Postman](https://www.postman.com), [Insomnia](https://insomnia.rest) or the VS Code **Thunder Client** extension.


## 🛠️ Troubleshooting

| Problem | Fix |
| ------- | --- |
| `MongooseServerSelectionError` | Check that MongoDB is running, or that your Atlas IP is whitelisted (**Network Access**) |
| `Authentication failed` | Check the username and password in `MONGODB_URI` (URL-encode special characters) |
| `EADDRINUSE` | Another app is using the port. Change `PORT` in `.env` |
| `Cannot find module` | Run `npm install` inside `rest-api-express/` |
| `req.body` is `undefined` | Make sure `app.use(express.json())` comes before your routes |


## 💡 Ideas to Extend

- Add **pagination, filtering and sorting** (`/tasks?status=pending&page=2`)
- Add **input validation** with `express-validator` or `zod`
- Add **authentication** with JWT and user-owned tasks
- Add **automated tests** with Jest and Supertest
- Add **API documentation** with Swagger / OpenAPI
- Add **rate limiting** and security headers with `helmet`
- **Deploy** to Render or Railway with MongoDB Atlas