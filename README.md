# 🛡️ Shmira Manager

**Mission Management System for Soldiers and Commanders**  
Backend project built with NestJS, using JWT-based authentication and role-based access control.

---

## 📘 Project Description

Shmira Manager is a mission management system that handles user authentication and task assignments between two roles: **Soldiers** and **Commanders**.  
It includes a PostgreSQL database managed with Sequelize ORM and secured with JWT and Guards.

---

## 🚀 Features

- User registration and login with JWT
- Role-based access control (Soldier / Commander)
- Task assignment and management
- Guard-based route protection
- Sequelize ORM with PostgreSQL (via NeonDB)
- Unit tests for key modules

---

## 👤 User Roles & Permissions

| Action                 | Soldier | Commander |
|------------------------|:-------:|:---------:|
| Register               | ✅      | ✅        |
| Authenticate (JWT)     | ✅      | ✅        |
| Create Mission         | ❌      | ✅        |
| Edit Mission           | ❌      | ✅        |
| Delete Mission         | ❌      | ✅        |
| View Own Missions      | ✅      | ✅        |
| View All Missions      | ❌      | ✅        |

---

## 🔒 Guards

- `AuthGuard` – Validates JWT token.
- `CommanderGuard` – Ensures the user has a "commander" role.

---

## 🗃️ Database Schema

### `Users` Table

| Field     | Type     | Description                |
|-----------|----------|----------------------------|
| user_id   | integer  | Primary Key, auto-increment |
| user_name | string   | Username                   |
| password  | string   | Encrypted (bcrypt) password|
| role      | enum     | Either `soldier` or `commander` |

### `Tasks` Table

| Field     | Type     | Description                |
|-----------|----------|----------------------------|
| id        | integer  | Primary Key, auto-increment |
| content   | string   | Task content               |
| startTime | string   | Task start time            |
| endTime   | string   | Task end time              |
| userId    | integer  | Foreign key to `Users`     |

### `General` Table (Join/Relation Table)

| Field     | Type     | Description                        |
|-----------|----------|------------------------------------|
| id        | integer  | Primary Key                        |
| startTime | string   | Task start time                    |
| endTime   | string   | Task end time                      |
| userId    | integer  | FK to `Users` table (soldier only) |
| taskId    | integer  | FK to `Tasks` table                |

---

## ⚙️ Tech Stack

- **NestJS** – Backend framework
- **Sequelize** – ORM for PostgreSQL
- **PostgreSQL** – Cloud database via NeonDB
- **JWT** – Authentication
- **Bcrypt** – Password encryption
- **Guards** – Route protection

---

## 🧾 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shmira-manager.git
cd shmira-manager




Install dependencies
npm install

###Configure environment variables
Create a .env file in the root directory and set the following:
DB_HOST=your-db-host
DB_PORT=5432
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
JWT_SECRET=your-secret-key

Start the server
npm run start

API Routes
Note: Use Postman or Swagger to interact with these endpoints.
| Method | Endpoint                    | Access Level   | Description              |
| ------ | --------------------------- | -------------- | ------------------------ |
| POST   | `/users/signup`             | Public         | Register and receive JWT |
| POST   | `/task/create`              | Commander Only | Create a new task        |
| GET    | `/task/my-missions/:userId` | Authenticated  | View user's missions     |
| PATCH  | `/task/:id`                 | Commander Only | Edit a specific task     |
| DELETE | `/task/:id`                 | Commander Only | Delete a specific task   |


🧪 Testing Coverage
Unit tests available for:
UsersController & UsersService
TaskController & TaskService
GeneralController & GeneralService
AppController
AuthGuard

Run tests with:
npm run test


Folder Structure
src/
│
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── entities/users.entity.ts
│
├── task/
│   ├── task.controller.ts
│   ├── task.service.ts
│   └── entities/task.entity.ts
│
├── general/
│   ├── general.controller.ts
│   ├── general.service.ts
│   └── entities/general.entity.ts
│
├── guards/
│   ├── auth.guard.ts
│   └── commander.guard.ts
│
└── app.module.ts


👨‍💻 Author
Developed by Inon Guetta for educational and backend training purposes.
Feel free to fork or contribute!



