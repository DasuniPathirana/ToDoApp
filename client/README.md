# TODO App - Frontend

React frontend for the todo app, using React Bootstrap for the UI.

## How to run it

1. Install dependencies:

```bash
npm install
```

2. Make sure the backend is running first (see `server/README.md`).

3. Start the dev server:

```bash
npm start
```

Opens at `http://localhost:3000`.

## What's in here

- **TodoForm** - handles adding and editing todos, with basic validation (title is required)
- **TodoList** - renders all the todos
- **TodoItem** - shows each todo with a checkbox, edit button, and delete button
- **api/todos.js** - all the axios calls to the backend

## UX stuff

- Completed todos get a strikethrough and faded look so they stand out from active ones
- Toggle and delete use optimistic updates, so the UI feels instant. If the server call fails, it rolls back.
- Items slide in with a subtle animation
- Hover effects on the todo cards
- Form validation shows an error if you try to submit without a title

## Assumptions and Limitations

- The API is expected at `http://localhost:5000`
- No authentication or user accounts
- Everyone shares the same list
- Tested on Chrome and Firefox
