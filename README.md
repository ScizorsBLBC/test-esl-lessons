# ESL Lessons Hub

Welcome to the ESL Lessons Hub, a modern, interactive web application designed to provide dynamic and engaging lessons for English language learners. This project is built with Vite and React, leveraging Material-UI for a beautiful and responsive user interface.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Material-UI](https://img.shields.io/badge/material--ui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Core Architectural Principles

This project follows a strict set of principles to ensure it remains scalable, maintainable, and easy to contribute to.

1.  **Data-Driven Content**: All lesson content (text, chart data, video links, etc.) is strictly separated from the UI components. All content resides in dedicated JavaScript files within the `src/data/` directory. UI components are designed to be stateless "templates" that simply render the data imported from this directory.

2.  **Modular & Reusable Components**: The application is built on a foundation of custom, reusable components located in `src/components/`. New features and lessons should leverage these existing components to maintain consistency and reduce code duplication.

3.  **No Student-Facing Navigation**: The platform is designed as a collection of individual lessons accessed via direct links. There is no global navigation bar or central lesson index for students, ensuring a focused learning experience for each topic.

## Getting Started

### Prerequisites

-   Node.js (v20.x or later)
-   npm

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/scizorsblbc/esl-lessons.git](https://github.com/scizorsblbc/esl-lessons.git)
    cd esl-lessons
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`. The Vite server supports Hot Module Replacement (HMR) for a fast and efficient development experience.

## Deployment

Deployment is fully automated using **GitHub Actions**. Every push to the `main` branch triggers a workflow that performs the following steps:
1.  Installs all dependencies.
2.  Builds the production-ready static files (`npm run build`).
3.  Deploys the contents of the `dist` folder to the live server.

There is no need to run any manual deployment commands.

## Project Structure

The repository is organized to clearly separate concerns:

Of course. Here is that specific section formatted as a raw markdown code snippet. This will render correctly.

```
esl-lessons/
├── .github/workflows/      # Automated deployment workflow for GitHub Actions
├── public/                 # Static assets (images, CNAME, etc.) that are copied to the build root
├── src/
│   ├── components/         # Reusable React components (e.g., DetailCard, ChartSection)
│   ├── data/               # All lesson content and application data
│   ├── pages/              # Top-level page components, including lesson templates
│   ├── services/           # Service modules (e.g., RSS feed fetching)
│   ├── App.jsx             # Main application component with routing
│   ├── main.jsx            # Application entry point
│   └── theme.js            # Material-UI theme configuration
├── .gitignore
├── index.html              # The HTML template for the application
├── package.json
└── README.md
```