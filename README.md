# Donor Stories

This project is a React application that allows users to submit and view donor stories. The app includes a form for entering a donor's name, email, photo, and description. Submitted stories are displayed in a feed on the main page. 

## Features

- **Form Submission**: Users can fill out a form to submit a donor's story, including the donor's name, email, photo URL, and a brief description.
- **Story Feed**: Submitted stories are displayed in a feed, showing the donor's name, email, photo, and description.
- **Toggle Form**: A button on the main page allows users to show or hide the form for submitting new stories.

## Project Structure

- `App.jsx`: The main component that manages the state and visibility of the form and feed.
- `Form.jsx`: The component that renders the form and handles the submission of new donor stories.
- `Feed.jsx`: The component that displays the submitted stories in a feed.
- `App.css`: The CSS file that contains the styling for the application.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/donor-stories.git
   cd donor-stories
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server, and you should be able to see the application running in your browser at `http://localhost:3000`.

### Usage

1. **Add a new donor story:**
   - Click the "Add Entry" button to display the form.
   - Fill out the form with the donor's name, email, photo URL, and description.
   - Click the "Submit" button to add the story to the feed.

2. **View donor stories:**
   - Submitted stories will appear in the feed below the form.
   - Each story displays the donor's name, email, photo, and description.

### File Descriptions

- **`App.jsx`**:
  - Manages the state of the application.
  - Contains the main layout, including the header, toggle button, form, and feed.
  - Handles form submission and updates the feed.

- **`Form.jsx`**:
  - Renders the form for submitting new donor stories.
  - Manages local state for form inputs.
  - Calls the `onSubmit` function passed via props to submit the form data.

- **`Feed.jsx`**:
  - Displays a list of submitted donor stories.
  - Receives the list of stories via props and renders each story.

- **`App.css`**:
  - Contains styles for the application, including layout, form styling, button styling, and feed item styling.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the open-source community for providing great tools and libraries.
- Created with React and Vite.