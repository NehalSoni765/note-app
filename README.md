# Note App

## Overview

This is a simple web-based note-taking application that allows users to create, edit, and delete notes. The app provides the following features:

- Filter notes by input text.
- Sort notes by created date, edited date, or alphabetically (default: edited date).
- Notes are stored in local storage, so user data persists even after refreshing the site.
- Real-time synchronization across different tabs or browsers.
- Notes are displayed on the homepage as titles with their respective updated times.
- A "Create Note" button redirects to the edit page.

## Project Links

- [GitHub Repository](https://github.com/NehalSoni765/note-app)
- [Live Demo](https://notememomaster.netlify.app/)

## Usage

### Homepage

- When you open the app, you will see a list of notes displayed with their titles and updated times.
- You can use the filter input to search for specific notes.
- Clicking on a note title or Create Note will redirect you to the edit page for that note.
- Use the sort options to change the order in which notes are displayed.

### Create Note / Edit Note

- The edit page will show a title, description, and a "Remove" button.
- You can edit the title and description of the note.
- Click the "Remove" button to delete the note and redirect to homepage.
- Click the "Home" button to return to the homepage.

### Data Persistence

- All notes are automatically saved to local storage, so your data will persist even if you refresh the site or close and reopen your browser.
- Note changes made in one tab or browser will be reflected in real-time on other tabs or browsers.

## Installation

If you want to run the app locally or make changes to the code:

1. Clone the repository:

   ```bash
   git clone https://github.com/NehalSoni765/note-app.git
2. Navigate to the project directory:
   ```bash
   cd note-app
3. Install the necessary dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run start
7. Open the browser https://localhost:3000.

## Contributing
- If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the original repository.
