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

## Setup Environment Variables

3. Copy the `.env.example` file and rename it to `.env` 
   Add the required values in `.env`
   Save the file

## Running the Project

4. Start the development server:
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


## Approach Taken

Component-Based Architecture – The project is structured into reusable components like  Board, Lane, TodoCard and AddTodocard.
State Management – Local state is managed using useState and useTodos (custom hook).
API Integration – Created instance of Axios and it is used to interact with the dummy API for fetching, adding, and updating todos.
Drag & Drop – Implemented using react-beautiful-dnd for a smooth drag-and-drop experience.


## Trade-offs & Improvements

Optimistic UI Updates – Currently, todos are updated only after a successful API response. We can improve by updating the UI instantly and rolling back if the request fails.
Persistent Storage – Right now, todos reset on refresh. Adding local storage or a backend would allow persistent data.
Better Error Handling – Display proper error messages instead of just logging errors.
Improved UX – Adding loading indicators and animations for a smoother experience.
Responsiveness – The UI can be improved for smaller screens, ensuring a better mobile experience by making layouts adapt dynamically.



