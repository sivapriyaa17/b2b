# Architecture Overview

# Tech Stack

- Frontend: Next.js
- Backend: Express + Knex.js
- DB: PostgreSQL
- Auth: JWT tokens API Token

# Authentication Flow

1. User registers/logs in with email & password.
2. Backend validates and returns a JWT.
3. Frontend stores token in localStorage and sends it in `Authorization` headers.

# API Design

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | /auth/register       | Register new company         |
| POST   | /auth/login          | Login with email/password    |
| GET    | /companies/search    | Search companies             |
| GET    | /companies/:id       | Get single company profile   |
| POST   | /tenders             | Create tender (auth required)|
| GET    | /tenders             | List all tenders             |

# File Storage

for testing purpose Company Logos are not uploaded.But given as img option.

# Migrations 
1. for comapnies and tenders files are included under backend/migrations folder
2. npm run migrate
