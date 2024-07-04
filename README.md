# React To-Do Application

## Objective
Develop a basic To-Do application using ReactJS that allows users to add, view, edit, and delete tasks. This application demonstrates the use of HTML, CSS, JavaScript, React components, hooks, and state management using Redux.

## Features
- **Add Task**: Users can input a task into a text field and add it to the list by pressing a button or Enter.
- **View Tasks**: Display all added tasks in a list format.
- **Edit Task**: Each task has an edit button that, when clicked, opens a popup for editing the task.
- **Delete Task**: Each task has a delete button that removes the task from the list.
- **Optional Bonus**: Mark tasks as completed and persist tasks using local storage.
  

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-todo-app.git
    cd react-todo-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```

## Folder Structure

## Technologies Used
- **React**: For building the UI components.
- **Redux**: For state management.
- **HTML/CSS**: For structuring and styling the application.
- **JavaScript (ES6)**: For implementing application logic.

## Components
- **TaskInput**: A component for adding a new task.
- **TaskList**: A component for displaying the list of tasks, with edit and delete functionality.

## State Management
State is managed using Redux. The tasks are stored in the Redux store and updated through actions and reducers.

### Actions
- `ADD_TASK`: Adds a new task.
- `REMOVE_TASK`: Removes an existing task.
- `EDIT_TASK`: Edits an existing task.

### Reducers
- `tasksReducer`: Handles task-related actions and updates the state accordingly.

## Usage
1. **Adding a Task**: Enter a task in the input field and press "Add Task" or Enter.
2. **Editing a Task**: Click the "Edit" button next to a task, make changes in the popup, and save.
3. **Deleting a Task**: Click the "Delete" button next to a task to remove it.

