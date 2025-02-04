# Project Management Application

A React-based project management tool that allows users to create and manage projects and their associated tasks.

## Features

- Create and delete projects with form validation
- Add and remove tasks for each project
- Data persistence using cookies
- Form validation for project creation
- Tailwind CSS for styling.

## Technical Implementation

This application demonstrates the use of several key React concepts:

- **State Management**: Using React's useState hook for managing application state
- **Side Effects**: Implementing useEffect for cookie-based data persistence
- **Refs**: Utilizing useRef for form handling and DOM manipulation
- **Portals**: React portals for modal dialogs
- **Props**: Prop drilling for component communication

## Project Structure

The application is structured with the following main components:

- Sidebar: Project navigation and creation
- NewProject: Project creation form with validation
- SelectedProject: Project details and task management
- NoProjectSelected: Initial landing state

## Data Persistence

Projects and tasks are stored in browser cookies, allowing data to persist between page reloads. The cookie implementation includes:

- Automatic loading of saved data on application start
- Updates to cookie storage when projects or tasks are modified
- 24-hour cookie expiration