# Multi-Step Form

This project is a multi-step form built with React and Material UI. The form collects personal information, address information, and provides a confirmation step before submission. Data is validated, errors are handled, and form state is persisted in local storage.

**Live application URL:**
https://multi-step-form-cyan-nu.vercel.app/

## Setup Instructions

1. **Clone the repository:**
   git clone https://github.com/sakshamdubeyyy/multi-step-form
   cd multi-step-form
2. **Install Dependencies:**
    npm install
3. **Run Application:**
    npm start

**Project Structure**
src/components/: Contains reusable form step components.
MultiStepForm.js: Main component handling the multi-step logic.
Step1.js: Component for personal information step.
Step2.js: Component for address information step.
Step3.js: Component for confirmation step.

**Assumptions and Decisions**
The form validation is basic and ensures all required fields are filled out correctly before moving to the next step.
Data is persisted in local storage to retain user inputs between sessions.
Material UI is used for styling to ensure a responsive and modern design.

**Additional Notes**
The form can be enhanced with animations and transitions between steps for better UX.
Unit tests can be added for critical components and validation functions.
Error handling for network requests can be implemented if the form submission involves an API call.