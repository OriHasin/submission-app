# Submission Service

A full-stack service for submit user form & view historical submitted users including real-time updates.  
Built with NestJS, React + Vite, Nginx, Docker, and PostgreSQL.


## 🚀 From Python to JavaScript!

Coming from a heavy Python & Backend background, I had zero experience with JavaScript and Frontend development. This project was my deep-dive into React, NestJS, and full-stack development.  
✨ **Focus on REAL learning — not just on providing an app.**


## 🎯 Our GOAL

Dive & Learn **FAST BUT DEEP** to deliver a robust Submission Service.


## 📚 Topics Covered In Learning:

 - JavaScript Basics (JS Async Programming, ES6 Modules, etc.)
 - NestJS Framework (TypeScript based)
 - React Frontend Development
 - Overview HTML & CSS syntax


## 🏗️ Highlights

- Guardz Beautiful UI Style!
- Informative Popups For User Actions
- CORS-enabled security
- Environment-based configuration
- Docker containerization
- PostgreSQL management
- Nginx reverse proxy
- WebSocket integration


## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Reverse Proxy**: Nginx
- **Backend**: NestJS
- **Database**: PostgreSQL
- **Real-time**: Socket.io
- **Deployment**: Docker & Docker Compose


### 🚀 How To Run The Application

1. Clone the repository:
```bash
git clone https://github.com/OriHasin/submission-app.git
cd submission-app
```

2. Configure environment variables:
- Create `server/.env`:
```
CLIENT_PORT=80 (default)
FRONTEND_ORIGIN=http://your-host-server-ip
PORT=8080 (default)
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=guardz_db
POSTGRES_HOST=db
POSTGRES_PORT=5432
```

- Create `client/.env`:
```
VITE_API_URL=http://server-ip:8080/api
VITE_SOCKET_URL=ws://server-ip:8080
```

3. Launch the application:
```bash
docker-compose up --build -d
```


## Shutdown

To stop the application:
```bash
docker-compose down
```
