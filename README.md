# Guardz Submission Service

A full-stack service for submit user form & view historical submitted users including real-time updates. 
Built with NestJS, React + Vite, Nginx, Docker, and PostgreSQL.


## Our GOAL 
Learn Guardz stack **FAST BUT DEEP** in order develop robust submission service.  **Focus on REAL learning not just on providing a solution**.
**No previous knowledge** on JavaScript and UI Development (Python frick :) )

## Topics Covered In Learning:
 - JavaScript Basics (JS Async Programming, ES6 Modules, etc.)
 - NestJS Framework (TypeScript based)
 - React Frontend Development
 - Overview HTML & CSS syntax


## Architecture Highlights
- Guardz Beautiful UI Style!
- Informative Popups For User Actions
- CORS-enabled security
- Environment-based configuration
- Docker containerization
- PostgreSQL management
- Nginx reverse proxy
- WebSocket integration


## Tech Stack
- **Frontend**: React + Vite
- **Reverse Proxy**: Nginx
- **Backend**: NestJS
- **Database**: PostgreSQL
- **Real-time**: Socket.io
- **Deployment**: Docker & Docker Compose


### How To Run The Application

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
VITE_API_URL=http://server-ip:8080
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
