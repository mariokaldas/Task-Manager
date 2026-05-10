# TaskFlow 📝

TaskFlow is a modern, responsive Task Management application built with the latest features of Angular. It is designed to help users efficiently organize, track, and manage their daily work with a seamless user experience.

## ✨ Key Features

- **Authentication Simulation**: Protected routes using functional route guards to ensure only logged-in users access their dashboard.
- **Task Management**: Full CRUD (Create, Read, Update, Delete) capabilities for tasks.
- **Organization**: Assign categories (Work, Personal, Study) and priorities (High, Medium, Low) to tasks.
- **Smart Filtering & Sorting**: Filter tasks by status (All, To-Do, Done) and sort them dynamically by Due Date or Priority.
- **Form Validation**: Robust client-side validation using both Template-Driven and Reactive Forms (including custom date validators).
- **Mock Backend**: Integration with `json-server` to simulate asynchronous REST API interactions.

## 🛠️ Technology Stack

- **Framework**: Angular 17+ (TypeScript, HTML, CSS)
- **State Management**: Angular Signals (`signal`, `computed`) for highly performant reactivity.
- **Architecture**: 100% Standalone Components (No NgModules) with modern `inject()` dependency injection.
- **Styling**: Bootstrap 5 for responsive layout and custom CSS for a premium theme.
- **Backend Simulation**: `json-server` via RxJS and `HttpClient`.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed.

### Installation & Execution

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Mock Backend**
   Run the json-server to mock the API (runs on port 3000 by default):
   ```bash
   npx json-server db.json
   ```

3. **Run the Angular Application**
   In a separate terminal, start the development server:
   ```bash
   ng serve -o
   ```
   The application will automatically open in your default browser at `http://localhost:4200/`.

## 📁 Project Structure Highlights
- **`/components`**: Contains all standalone UI components (TaskList, TaskCard, Login, etc.).
- **`/services`**: Houses singleton services for state management (`AllTasksService`), API communication, and notifications.
- **`/guards`**: Functional route guards securing application access.
- **`app.routes.ts`**: Defines lazy-loaded routes and child routes with data binding.
