# ✂️ ESL Lessons Hub

Welcome to Scizors' ESL Lessons Hub, a modern, interactive web application designed to host a collection of dynamic and engaging lessons for ESL students. This project was bootstrapped with Vite and is built on a robust, mobile-first React foundation, utilizing Material-UI for a beautiful, responsive user interface.

# 🏛️ Project Architecture & Vision

This repository is structured to grow into a multi-lesson platform. The goal is to create a hub where various educational modules can be easily added and accessed as new, interactive pages. The core architecture is designed to be modular and purely static:

- **Main App Shell (`App.jsx`):** Provides the consistent layout, theme-switching logic, and routing for the entire platform.
- **Lesson Components:** Each new lesson is built as its own self-contained set of React components.
- **Data Modules (`/src/data`):** All lesson-specific content (text, chart data, news articles, etc.) is hardcoded in separate JavaScript files within this directory. This keeps the component logic clean, enhances performance, and removes external API dependencies.

# 🎨 Aesthetic & Theming

The visual identity of this platform is a core feature, designed to be both elegant and engaging. The aesthetic is inspired by Scizors' figurative fashion concept art. Inspired by iconic artwork from vintage fashion editorials, these themes blend vibrant colors with a sense of motion and texture.

Key visual elements include:

- **Glassmorphism:** A "liquid glass" effect is applied to all card and paper surfaces, creating a sense of depth and modernity.
- **Animated Film Grain:** A subtle, animated texture is layered over the entire interface to emulate the organic feel of vintage film and eliminate digital color banding.
- **Five Curated Themes:** The application features a palette of five distinct themes, allowing users to customize their experience:
    - Dark & Light: Sophisticated, high-contrast themes for classic readability.
    - VaporWave Mode: An expressive theme that directly mirrors the colors of the inspirational artwork with a 90's.
    - Monochrome Dark & Light: Chic, Bauhaus-inspired themes that focus on form and structure.

# 👩🏼‍💻 Getting Started & Development

1.  **Initial Setup**
    Clone the repository and install the necessary dependencies from your terminal.

    `npm install`

2.  **Running the Development Server**
    This command starts the Vite development server, which will automatically reload in your browser as you make changes to the code.

    `npm run dev`

# 🌐 Deployment Workflow

This site is deployed to `GitHub Pages` and served from the custom domain:

`https://esl-lessons.scizors.wtf`

To update the live site, follow this complete feature-branch workflow. This process keeps the `main` branch clean and ensures all changes are reviewed before deployment.

1.  **Create a New Branch**
    First, ensure your local `main` branch is up-to-date, then create your new feature branch.

    `git checkout main`
    `git pull`
    `git checkout -b new-feature-branch`

2.  **Make Your Code Changes**
    Add new lessons, fix bugs, or update styles. Test your work locally using `npm run dev`.

3.  **Commit Your Changes**
    Stage and commit your work with a clear, descriptive message.

    `git add .`
    `git commit -m "feat: Add new awesome feature"`

4.  **Push Your Branch to GitHub**
    Push your feature branch to the remote repository.

    `git push origin new-feature-branch`

5.  **Open and Merge a Pull Request on GitHub**
    Go to your repository on GitHub. You'll see a prompt to `Compare & pull request` for your new branch. Open a pull request, have it reviewed, and then **merge it into `main`**.

6.  **Sync and Deploy from Your Computer**
    After merging, switch back to your local `main` branch, pull the newly merged code from GitHub, and then run the deploy script.

    `git checkout main`
    `git pull`
    `npm run deploy`

7.  **Clean Up Locally**
    After a successful deployment, keep your local machine tidy by deleting the old feature branch.

    `git branch -d new-feature-branch`

**Note:** Changes may take 1-5 minutes to appear on the live site. Always perform a hard refresh (`Cmd+Shift+R` or `Ctrl+Shift+R`) to bypass your browser's cache.