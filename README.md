# TODO App

A full-stack todo application with a React frontend and an Express + MongoDB backend.

## What it does

- Add todos with a title and optional description
- Edit existing todos
- Mark them as done (or undo it)
- Delete todos you don't need anymore
- Completed ones show up with a strikethrough so you can tell them apart

## Tech Stack

- **Frontend**: React, React Bootstrap, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Monorepo**: npm workspaces

## Project Structure

```
ToDoApp/
  client/         # React frontend
    README.md
    src/
      components/
      api/
  server/         # Express backend
    README.md
    models/
    routes/
  package.json    # Workspaces config
```

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- A MongoDB database (Atlas free tier works great, or local)

### Quick setup

1. Clone the repo and install everything:

```bash
git clone https://github.com/DasuniPathirana/ToDoApp.git
cd ToDoApp
npm install
```

Since this is an npm workspaces monorepo, running `npm install` at the root will install dependencies for both `client/` and `server/`.

2. Set up the backend environment:

```bash
cp server/.env.example server/.env
```

Then edit `server/.env` and add your MongoDB connection string (check `server/README.md` for details).

3. Run both servers at once:

```bash
npm run dev
```

Or run them separately in two terminals:

```bash
npm run server
npm run client
```

- Backend runs on http://localhost:5000
- Frontend runs on http://localhost:3000

## More Details

- See [client/README.md](client/README.md) for frontend-specific docs
- See [server/README.md](server/README.md) for backend setup and API docs
