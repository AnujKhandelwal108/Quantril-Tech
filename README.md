# Task Tracker

A modern, responsive task management application built with React, Tailwind CSS v4, and Vite. Manage your daily tasks with a clean, intuitive interface featuring real-time updates and a flexible layout that works on all device sizes.

## Features

- ✅ **Create Tasks** - Add new tasks with title and description
- 📋 **View All Tasks** - See all tasks in a responsive grid layout
- ✔️ **Mark Complete** - Toggle task completion status with checkboxes
- 🔍 **Task Details** - View complete information about individual tasks
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 📱 **Responsive Design** - Adapts to desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite and optimized for speed
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS v4 utilities

## Tech Stack

- **Frontend Framework**: React 19.2 with Hooks (useState, useEffect)
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin
- **Routing**: React Router v7 for client-side navigation
- **Build Tool**: Vite 7 for rapid development and optimized builds
- **CSS Processing**: PostCSS with autoprefixer
- **Node Version**: Node.js 20.19+ or 22.12+

## Project Structure

```
task-tracker/
├── src/
│   ├── components/
│   │   ├── AddTask.jsx          # Form component for creating new tasks
│   │   ├── Footer.jsx           # Footer with project information
│   │   ├── Navbar.jsx           # Top navigation with app title and links
│   │   ├── TaskCard.jsx         # Individual task card with actions
│   │   ├── TaskDetail.jsx       # Detailed view of a single task
│   │   └── TaskList.jsx         # Grid display of all tasks
│   ├── data/
│   │   └── initialTasks.js      # Sample task data for initial load
│   ├── App.jsx                  # Main component with routing and state management
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML template
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**
   ```bash
   cd task-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173/` (or the next available port if 5173 is in use)

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Usage Guide

### Adding a New Task

1. Click **"Add Task"** in the navigation bar
2. Enter a task title (required)
3. Enter a task description (required)
4. Click **"Add Task"** button
5. You'll be redirected to the tasks list where your new task appears

### Managing Your Tasks

- **View All Tasks**: Click **"Tasks"** in the navbar to see your task list
- **Check Completion**: Click the checkbox on a task card to mark it as completed/pending
  - Completed tasks show with strikethrough text and gray color
  - Pending tasks remain in normal text
- **View Full Details**: Click the **"View"** link on a task card to see complete information
- **Delete a Task**: 
  - Click **"Delete"** on the task card, or
  - Open task details and click **"Delete Task"** button
  - Task will be removed and you'll return to the task list

## Component Details

### App.jsx
**Main application component** - Core logic and state management
- Manages `tasks` state using `useState`
- Loads initial tasks with `useEffect`
- Handles task operations: `addTask()`, `toggleTask()`, `deleteTask()`
- Implements routing with React Router
- Layout: Full-height container with navbar, scrollable content area, and footer

### Navbar.jsx
**Top navigation bar** - Provides app branding and navigation
- Displays "Task Tracker" title
- Links to "/tasks" (view all tasks) and "/add" (create new task)
- Fixed width with centered content
- White background with shadow

### TaskList.jsx
**Task grid display** - Shows all tasks
- Responsive grid layout:
  - Mobile: 1 column
  - Tablet: 2 columns (sm:)
  - Desktop: 3 columns (lg:)
- Displays "No tasks available" message when list is empty
- Passes `toggleTask` and `deleteTask` props to TaskCard

### TaskCard.jsx
**Individual task display** - Shows task summary with actions
- Displays task title and description (limited to 2 lines)
- Completion checkbox with label
- Action buttons:
  - **View**: Navigate to detailed task view
  - **Delete**: Remove task immediately
- Hover effect for better interactivity
- Visual feedback for completed tasks (strikethrough, gray text)

### AddTask.jsx
**Task creation form** - Input form for new tasks
- Two required fields:
  - Title input field
  - Description textarea
- Form validation (both fields required)
- On submit:
  - Creates task object with unique timestamp ID
  - Adds task to state via `addTask()`
  - Navigates to task list
- Clean, centered form design

### TaskDetail.jsx
**Detailed task view** - Full information page for a single task
- Displays complete task information:
  - Title (large heading)
  - Full description
  - Status (Completed/Pending with color coding)
- Action buttons:
  - **Back to Tasks**: Return to task list
  - **Delete Task**: Remove task and return to list
- Shows error message if task not found
- Responsive card layout

### Footer.jsx
**Application footer** - Copyright and tech info
- Auto-updating copyright year
- Tech stack information
- Responsive layout (stacks on mobile, inline on desktop)
- Sticky footer that doesn't scroll

## Styling

### Tailwind CSS v4
The application uses Tailwind CSS v4 with the modern `@tailwindcss/vite` plugin for optimal performance.

### Layout Responsiveness
- **Mobile First**: All designs start with mobile layout
- **Breakpoints**:
  - Default: Mobile devices
  - `sm:`: Small devices (640px+)
  - `md:`: Medium devices (768px+)
  - `lg:`: Large devices (1024px+)

### Color Scheme
- **Primary**: Blue (`bg-blue-600`)
- **Danger**: Red (`bg-red-600`)
- **Success**: Green (`text-green-600`)
- **Background**: Light gray (`bg-gray-100`)
- **Text**: Dark gray (`text-gray-800`)

## Configuration

### vite.config.js
- Integrates Tailwind CSS v4 plugin
- Configures React plugin for JSX transformation
- Optimized for development and production builds

### tailwind.config.js
- Content paths configured for CSS tree-shaking
- Includes HTML and JSX files for style extraction

### postcss.config.js
- Autoprefixer for cross-browser CSS support
- Minimal configuration for Tailwind CSS v4

### index.css
- Single `@import "tailwindcss"` statement for Tailwind v4
- Global HTML/body/root height settings for full-viewport layout

## Data Structure

### Task Object
```javascript
{
  id: number,              // Unique identifier (timestamp)
  title: string,           // Task name (1-100 characters)
  description: string,     // Detailed information
  completed: boolean       // Completion status
}
```

## Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- ⚡ Vite's instant server start and lightning-fast HMR
- 🎯 Tailwind CSS v4 with optimized @tailwindcss/vite plugin
- 📦 Minimal bundle size with tree-shaking
- 🔄 Efficient state management with React Hooks
- 🖼️ Responsive images and lazy-loaded components

## Future Enhancement Ideas

- 📅 Due dates and deadline reminders
- 🏷️ Task categories and tags
- 🔍 Search and filter functionality
- ⭐ Task priority levels
- 💾 Local storage persistence
- 🌙 Dark mode toggle
- 👤 User authentication and cloud sync
- 📊 Task statistics and analytics
- 🔔 Notifications and alerts
- ⏰ Time tracking for tasks

## Project Statistics

- **Total Components**: 6 (Navbar, TaskList, TaskCard, AddTask, TaskDetail, Footer)
- **Dependencies**: React, React Router, Tailwind CSS, Vite
- **Lines of Code**: ~400 (excluding configuration)
- **Build Size**: Minimal with Vite optimization

## Common Issues & Solutions

### Port Already in Use
If port 5173 is busy, Vite automatically uses the next available port (5174, 5175, etc.). Check the terminal for the actual URL.

### Tailwind Styles Not Showing
- Ensure `@import "tailwindcss"` is in `src/index.css`
- Check that tailwind.config.js has correct content paths
- Restart dev server after configuration changes

### Tasks Not Persisting
Currently, tasks are stored in component state and will reset on page reload. Future enhancement: implement localStorage or backend API.

## License

Open source project. Feel free to use, modify, and distribute as needed.

## Credits

Built with modern web technologies:
- React - UI library
- Tailwind CSS - Utility-first CSS framework
- Vite - Next generation build tool
- React Router - Client-side routing

---

Happy task tracking! 🚀 Built with ❤️ using React, Tailwind CSS v4, and Vite.
