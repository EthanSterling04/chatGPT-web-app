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

## Code Evaluation
### Does the code work? If not, what's broken?

Yes, the code works. It successfully allows users to submit donor stories via a form and displays those stories in a feed. The toggle functionality for showing and hiding the form also works as expected.

### How is the code better than what the team currently has?

* Enhanced Functionality: Provides a clear structure for adding and displaying donor stories.
* User Interface: Includes a user-friendly interface with a toggle button for form visibility and a styled feed for displaying stories.
* State Management: Uses React's state management to handle form submissions and update the feed dynamically.

### How is the code worse?

* Basic Styling: The styling is functional but basic. It may not match the visual design standards of the existing application.
* No Backend Integration: This example does not include backend integration for persistent data storage. The current state is only maintained in the front-end.
* Limited Validation: Form validation is minimal. Additional checks and user feedback could be implemented to improve the user experience.

### How many tries did it take to get the code? Main struggles?
The code was developed iteratively, and it took a couple of tries to get everything working smoothly. Main struggles included:

* Ensuring state was correctly managed and passed between components.
* Getting the form submission to correctly update the feed.
* Styling the components to look cohesive and user-friendly.

### Overall impression of the experience
Overall, the experience was positive. Developing this application using React and Vite was straightforward, and the modular approach of React components made it easy to manage and update different parts of the application. Vite's fast development server and hot module replacement significantly improved the development workflow.
