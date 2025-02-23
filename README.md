# Todo Board Project

This project is a **Drag & Drop Trello Board** where users can add, edit, and manage todos.

## Features
- **Drag & Drop** support for todos
- **Add New Todo** using a modal
- **Edit Todo Title** with an update button
- **Persist Data** with API calls

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or later)
- **npm** or **yarn**

## Installation

1. Clone the repository:

   git clone <repo-url>
   cd <project-directory>

2. Install dependencies:

   npm install
   or
   yarn install


## Running the Project

3. Start the development server:
   npm run dev
   or
   yarn dev


The project should now be running on `http://localhost:3000/`.

## API Endpoints Used

- **Get Todos:** `https://dummyjson.com/todos`
- **Add Todo:** `https://dummyjson.com/todos/add`
- **Update Todo:** `https://dummyjson.com/todos/{id}` (PUT)

## Project Structure
├── src
│   ├── components
|   |   ├── AddTodoModal.jsx
│   │   ├── Board.jsx
│   │   ├── Lane.jsx
|   |   ├── TodoCard.jsx
│   ├── hooks
│   │   ├── useTodos.js
│   ├── utils
│   │   ├── api
│   │   |    ├──axiosInstance.js
│   ├── App.jsx
│   ├── main.jsx
├── public
├── package.json
├── README.md





