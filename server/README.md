# TODO App - Backend

The API server for the todo app. Built with Express and uses MongoDB through Mongoose.

## How to run it

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the `server/` folder. You can copy from `.env.example`:

```
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/todoapp?retryWrites=true&w=majority
```

**MongoDB Atlas (cloud, recommended):**

- Head to https://www.mongodb.com/atlas and create a free account
- Spin up a free shared cluster
- Under Database Access, create a database user
- Under Network Access, add your IP (or allow all with 0.0.0.0/0)
- Click Connect, choose "Connect your application", and copy the connection string
- Replace `<username>` and `<password>` in the string with your database user credentials

**Local MongoDB:**

If you have MongoDB installed locally, just use:

```
MONGODB_URI=mongodb://localhost:27017/todoapp
```

3. Start the server:

```bash
npm run dev
```

Server will be running at `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/todos | Fetch all todos |
| POST | /api/todos | Create a new todo |
| PUT | /api/todos/:id | Update title or description |
| PATCH | /api/todos/:id/done | Toggle the done status |
| DELETE | /api/todos/:id | Delete a todo |

## Assumptions and Limitations

- No authentication. This is a single-user app for now.
- MongoDB must be running and reachable before starting the server.
- The server defaults to port 5000. Change it in `.env` if needed.
