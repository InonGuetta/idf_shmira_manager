🛡️ Shmira Manager – Mission Management System for Soldiers and Commanders
📘 Project Description
Shmira Manager is a mission management system built using NestJS.
It handles authentication, role-based access control, and task assignment between two user roles: Soldiers and Commanders.

🚀 Core Features
✅ User registration and JWT-based authentication

👤 Two roles: soldier and commander

🪖 Soldiers can:

Register themselves

View only their own assigned missions

🧑‍✈️ Commanders can:

Register themselves

Create missions for soldiers

Edit and delete missions

View all missions

🔒 Route protection with Guards:

AuthGuard: Validates JWT token

CommanderGuard: Ensures the user is a commander

🗃️ Database Structure
Users Table:
Field	Type	Description
user_id	integer	Unique user ID
user_name	string	Username
password	string	Encrypted password (bcrypt)
role	enum	soldier or commander

Tasks Table:
Field	Type	Description
id	integer	Unique task ID
content	string	Task content
startTime	string	Task start time
endTime	string	Task end time
userId	integer	ID of the soldier assigned

General Table (Relations):
Field	Type	Description
id	integer	Unique ID
startTime	string	Start time
endTime	string	End time
userId	integer	Refers to Users table
taskId	integer	Refers to Tasks table

🔐 Permissions Matrix
Action	Soldier	Commander
Register	✅	✅
Authenticate (JWT)	✅	✅
Create Mission	❌	✅
Delete Mission	❌	✅
Edit Mission	❌	✅
View All Missions	❌	✅
View Own Missions	✅ (self only)	✅

🧪 Testing Coverage
Unit tests are provided for:

UsersController & UsersService

TaskController & TaskService

GeneralController & GeneralService

AppController

AuthGuard

⚙️ Tech Stack
NestJS – Backend framework

Sequelize – ORM for PostgreSQL

PostgreSQL (via NeonDB) – Cloud-hosted database

JWT – Authentication mechanism

Bcrypt – Password encryption

Guards – Access control (Auth & Role-based)

🧾 Getting Started
Clone the Repository

bash
Copy
Edit
git clone <repo-url>
Install Dependencies

bash
Copy
Edit
npm install
Start the Server

bash
Copy
Edit
npm run start
Base API URL

arduino
Copy
Edit
http://localhost:3000/
📂 Example API Routes
Method	Endpoint	Access Level	Description
POST	/users/signup	Public	Register a user and receive JWT
POST	/task/create	Commander Only	Create a new task
GET	/task/my-missions/:userId	Authenticated	View missions for a specific user
PATCH	/task/:id	Commander Only	Edit a specific task
DELETE	/task/:id	Commander Only	Delete a specific task

📁 Folder Structure Snapshots
users module structure:
Complete project structure:
🔮 Future Improvements
Add login route (token-based login)

Build a Frontend interface

Implement integration tests

Add analytics and reporting tools

Docker support for containerized deployment

👨‍💻 Author
This project was developed for educational and backend practice purposes by Inon Guetta, using NestJS and PostgreSQL.
