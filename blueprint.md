# Project Blueprint: Toto Number Generator with Day/Night Mode and Feedback Form

## Project Overview
This project is a simple web-based Toto Number Generator. It displays a set of randomly generated numbers when a button is clicked. The application is designed to be framework-less, using plain HTML, CSS, and JavaScript, and includes a day/night mode toggle for user preference, along with a feedback form.

## Implemented Features
- **Toto Number Generation**: Generates 6 unique random numbers between 1 and 49, sorted in ascending order.
- **Display**: Shows the generated numbers in a visually appealing circular format.
- **User Interface**: A central container with a title, number display area, and a "Generate Numbers" button.
- **Day/Night Mode Toggle**: Allows users to switch between light and dark themes, with preference saved in `localStorage`.
- **Feedback Form**: A simple form powered by Formspree (`https://formspree.io/f/xeeljggv`) for users to submit feedback.

## Design and Style
- **Typography**: Uses `sans-serif` for general text. `h1` and generated numbers have distinct styling.
- **Layout**: Centered content on the page, occupying at least the full viewport height. Numbers are displayed with a gap using flexbox.
- **Colors (Day Mode)**:
    - Background: Light gray (`#f0f0f0`)
    - Container Background: White
    - Heading Color: Dark gray (`#333`)
    - Number Background: Green (`#4CAF50`)
    - Button Background: Blue (`#008CBA`), darker on hover (`#005f7a`)
- **Colors (Night Mode)**:
    - Background: Dark gray (`#222`)
    - Container Background: Darker gray (`#333`)
    - Heading Color: Light gray (`#eee`)
    - Number Background: Purple-ish (`#6a0dad`)
    - Button Background: Purple (`#8A2BE2`), darker on hover (`#6A0DAD`)
- **Visuals**:
    - Rounded corners for the container.
    - Subtle box-shadow for the container.
    - Circular display for individual numbers.
    - Smooth transition for button hover effects and theme changes.
    - **Feedback Form Styling**: Provides a clean, stacked layout for input fields and a styled submit button, adapting to the current theme.

## Implemented Changes for Day/Night Mode (Completed)

### Summary of Implementation
- **`index.html`**: A "Toggle Theme" button (`id="theme-toggle"`) was added within the main container.
- **`style.css`**: CSS custom properties were defined for both `:root` (day mode) and `.dark-mode` on the `body` element. All relevant elements (body, container, h1, numbers, buttons) now use these CSS variables and have smooth transition effects for theme changes.
- **`main.js`**:
    - A `themeToggleButton` constant was added and an event listener attached to it.
    - The `body` element's `classList.toggle('dark-mode')` is used to switch themes.
    - The theme preference is saved to and loaded from `localStorage` (`theme` key), ensuring the last selected theme persists across sessions.
- **`.idx/mcp.json`**: Updated as per Firebase MCP guidelines.

## Implemented Changes for Feedback Form (Completed)

### Summary of Implementation
- **`index.html`**: A `div` with class `feedback-section` containing an `h2` and a `form` element was added below the `generate-button`. The form is configured to submit to `https://formspree.io/f/xeeljggv` using the POST method, and includes email and message input fields with required attributes and a submit button.
- **`style.css`**: New styles were added for `.feedback-section`, `h2` within it, form elements (`form`, `label`, `input[type="email"]`, `textarea`, `button[type="submit"]`), ensuring it integrates visually with the existing theme and provides a user-friendly layout.

## Cloudflare Pages Deployment Instructions (Pending User Action)

To deploy this project to Cloudflare Pages:

1.  **Log in to Cloudflare:** Go to the Cloudflare dashboard ([https://dash.cloudflare.com/](https://dash.cloudflare.com/)) and log in to your account.
2.  **Navigate to Pages:** In the left-hand navigation, find and click on "Pages".
3.  **Create a new project:** Click "Create a project" and then "Connect to Git".
4.  **Connect GitHub:** Authorize Cloudflare to access your GitHub account if you haven't already.
5.  **Select your repository:** Choose your project repository (e.g., `VibeCoding2026-02-05-11`) from the list.
6.  **Configure build settings:**
    *   **Project name:** Cloudflare will suggest a name, or you can enter one.
    *   **Production branch:** Ensure `main` is selected.
    *   **Build command:** Leave this empty as it's a static HTML/CSS/JS project without a build step.
    *   **Build output directory:** Enter `.` (a single dot) as all your files are at the root level.
7.  **Save and Deploy:** Click "Save and Deploy".

Cloudflare will then fetch your repository and deploy your site. Once deployed, you'll get a unique URL for your project.