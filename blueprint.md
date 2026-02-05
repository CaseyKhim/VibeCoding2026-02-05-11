# Project Blueprint: Toto Number Generator with Day/Night Mode

## Project Overview
This project is a simple web-based Toto Number Generator. It displays a set of randomly generated numbers when a button is clicked. The application is designed to be framework-less, using plain HTML, CSS, and JavaScript, and will include a day/night mode toggle for user preference.

## Implemented Features
- **Toto Number Generation**: Generates 6 unique random numbers between 1 and 49, sorted in ascending order.
- **Display**: Shows the generated numbers in a visually appealing circular format.
- **User Interface**: A central container with a title, number display area, and a "Generate Numbers" button.

## Design and Style
- **Typography**: Uses `sans-serif` for general text. `h1` and generated numbers have distinct styling.
- **Layout**: Centered content on the page, occupying at least the full viewport height. Numbers are displayed with a gap using flexbox.
- **Colors (Day Mode)**:
    - Background: Light gray (`#f0f0f0`)
    - Container Background: White
    - Heading Color: Dark gray (`#333`)
    - Number Background: Green (`#4CAF50`)
    - Button Background: Blue (`#008CBA`), darker on hover (`#005f7a`)
- **Visuals**:
    - Rounded corners for the container.
    - Subtle box-shadow for the container.
    - Circular display for individual numbers.
    - Smooth transition for button hover effect.

## Planned Changes for Day/Night Mode

### Plan
The goal is to implement a day/night mode toggle. This will involve adding a switch to the HTML, defining CSS variables for themes, and using JavaScript to manage the theme state and user preference.

### Steps
1.  **Modify `index.html`**:
    *   Add a theme toggle button/switch (e.g., a `<button>` or `<input type="checkbox">`) to allow users to switch between day and night modes.
2.  **Modify `style.css`**:
    *   Define CSS custom properties (variables) for colors in a `:root` selector for the default (day) theme.
    *   Add a `.dark-mode` class to the `body` selector. Inside this class, redefine the CSS custom properties to reflect night mode colors.
    *   Update existing styles to use these CSS variables.
3.  **Modify `main.js`**:
    *   Add event listener to the theme toggle button.
    *   Implement a function to toggle the `dark-mode` class on the `body` element.
    *   Implement logic to save the user's preferred theme (day or night) to `localStorage`.
    *   On page load, check `localStorage` for a saved theme preference and apply it.
4.  **Verification**: Manually verify in the browser that the toggle works, preferences are saved, and both modes look correct.
5.  **Commit**: Commit the changes to the Git repository.
6.  **Push**: Push the changes to GitHub.
7.  **Deploy**: Provide instructions for deploying to Cloudflare Pages.