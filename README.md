# ESL Lessons Hub

Welcome to the ESL Lessons Hub, a modern, interactive web application designed to provide dynamic and engaging lessons for English language learners. This project is built with Vite and React, leveraging Material-UI for a beautiful and responsive user interface.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Material-UI](https://img.shields.io/badge/material--ui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Features

### 🎓 Interactive Learning Experience
- **10 Comprehensive Lessons**: Vocabulary, idioms, verb tenses, pronunciation, cultural studies, and more
- **Rich Media Integration**: YouTube videos, interactive charts, and visual learning aids
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG-compliant with proper semantic HTML and ARIA labels

### 🎨 Advanced Theming System
- **5 Distinct Themes**: Light, Dark, Vaporwave, Monochrome Light, Monochrome Dark
- **Glassmorphism UI**: Beautiful backdrop blur effects and transparency
- **Animated Backgrounds**: Subtle film grain and gradient animations
- **Theme Persistence**: Remembers user preference across sessions

### 🔧 Developer Experience
- **Hot Module Replacement**: Instant updates during development
- **TypeScript Support**: Modern development tooling
- **ESLint Integration**: Code quality and consistency enforcement
- **Automated Deployment**: Zero-configuration deployment pipeline

## Core Architectural Principles

This project follows a strict set of principles to ensure it remains scalable, maintainable, and easy to contribute to.

1.  **Data-Driven Content**: All lesson content (text, chart data, video links, etc.) is strictly separated from the UI components. All content resides in dedicated JavaScript files within the `src/data/` directory. UI components are designed to be stateless "templates" that simply render the data imported from this directory.

2.  **Modular & Reusable Components**: The application is built on a foundation of custom, reusable components located in `src/components/`. New features and lessons should leverage these existing components to maintain consistency and reduce code duplication.

3.  **No Student-Facing Navigation**: The platform is designed as a collection of individual lessons accessed via direct links. There is no global navigation bar or central lesson index for students, ensuring a focused learning experience for each topic.

## Technology Stack

- **Frontend Framework**: React 19 with Vite build tool
- **UI Library**: Material-UI (MUI) v7 with custom theming
- **Language**: JavaScript (ES2023+)
- **Build System**: Vite with optimized production builds
- **Deployment**: GitHub Actions with GitHub Pages
- **Version Control**: Git with feature branch workflow
- **Code Quality**: ESLint with React and accessibility rules

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

Deployment is fully automated using **GitHub Actions**. The site is configured to automatically rebuild and deploy whenever changes are pushed to the `main` branch.

### How the GitHub Actions Deployment Works

1. **Automatic Trigger**: Every push to the `main` branch triggers the deployment workflow
2. **Build Process**: The workflow is simple, you just need to run `npm install` and `npm run build` to create production files
3. **Deployment**: The contents of the `dist` folder are automatically deployed to GitHub Pages
4. **Live Site**: The site is served at `https://esl-lessons.scizors.wtf`

### Complete Deployment Process

#### Option 1: Feature Branch to Production (Recommended)

If your changes are on a feature branch (like `button-refactor`):

1. **Create Pull Request on GitHub**:
   - Go to `https://github.com/ScizorsBLBC/ESL-Lessons`
   - Click "Pull requests" tab
   - Click "New pull request"
   - Select `button-refactor` as the compare branch
   - Select `main` as the base branch
   - Click "Create pull request"

2. **Review and Merge**:
   - Add a descriptive title and description
   - Request review if needed
   - Click "Merge pull request" → "Confirm merge"

3. **Automatic Deployment**:
   - GitHub Actions automatically triggers on main branch push
   - Monitor progress in the "Actions" tab
   - Site updates in 2-5 minutes at `https://esl-lessons.scizors.wtf`

#### Option 2: Direct Merge (Quick Development)

If you're the only developer and want to deploy immediately:

```bash
# Merge feature branch into main
git checkout main
git merge button-refactor
git push origin main

# Wait for GitHub Actions to deploy (2-5 minutes)
# Site will be live at https://esl-lessons.scizors.wtf
```

#### Option 3: Manual Deployment (Troubleshooting)

If automatic deployment fails:

1. **Go to GitHub Repository**: `https://github.com/ScizorsBLBC/ESL-Lessons`
2. **Access Actions Tab**: Click "Actions" tab
3. **Find Workflow**: Look for "Deploy to GitHub Pages"
4. **Manual Trigger**: Click "Run workflow" → Select "main" → "Run workflow"
5. **Monitor Progress**: Watch the workflow run in real-time

### Deployment Workflow Configuration

The deployment is handled by the file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Triggers on pushes to main branch
  workflow_dispatch:  # Allows manual triggering

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build the application
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### GitHub Pages Settings

The site is configured in GitHub Pages with these settings:
- **Source**: Deploy from a branch
- **Branch**: `main`
- **Folder**: `/(root)`

### Deployment Status

You can monitor deployment status:
- **GitHub Actions Tab**: Shows build progress and logs
- **Live Site**: `https://esl-lessons.scizors.wtf`
- **Build Logs**: Available in the Actions tab for troubleshooting

### Troubleshooting Deployment Issues

If the site doesn't update after a push:

1. **Check Actions Tab**: Look for failed workflow runs
2. **View Build Logs**: Click on the workflow run to see detailed logs
3. **Common Issues**:
   - Node.js version conflicts
   - Build errors in the workflow
   - GitHub Pages configuration issues

4. **Manual Rebuild**: Use the "Run workflow" button in the Actions tab
5. **Force Rebuild**: Sometimes a manual trigger is needed if auto-deployment fails

### Development Workflow

#### Complete Development to Production Workflow

For new features or bug fixes:

1. **Create a Feature Branch**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**:
   - Add new lesson content to `src/data/`
   - Create/update components in `src/components/`
   - Test locally with `npm run dev`
   - Run `npm run build` to test production build

3. **Commit and Push**:
   ```bash
   git add .
   git commit -m "feat: Add new feature with descriptive message"
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**:
   - Go to `https://github.com/ScizorsBLBC/ESL-Lessons`
   - Click "Pull requests" tab → "New pull request"
   - Select your feature branch as "compare"
   - Select `main` as "base"
   - Add description and click "Create pull request"

5. **Review and Merge**:
   - Review the changes
   - Request code review if needed
   - Click "Merge pull request" → "Confirm merge"

6. **Automatic Deployment**:
   - GitHub Actions automatically triggers on main branch merge
   - Monitor in "Actions" tab
   - Site updates in 2-5 minutes at `https://esl-lessons.scizors.wtf`

#### Quick Commands Summary

```bash
# Start development
git checkout main && git pull
git checkout -b feature/new-feature
npm run dev  # Test locally

# Deploy to production
git add . && git commit -m "feat: Description"
git push origin feature/new-feature
# Create PR on GitHub → Merge to main
# GitHub Actions deploys automatically
```

#### Adding New Lessons

1. **Create Data File**: Add lesson content to `src/data/` (e.g., `newLessonData.js`)
2. **Create Lesson Component**: Add lesson page to `src/pages/lessons/`
3. **Update Routing**: Add route to `src/LessonRoutes.jsx`
4. **Test Locally**: Use `npm run dev` to test the new lesson
5. **Deploy**: Push to main branch for automatic deployment

## Project Structure

The repository is organized to clearly separate concerns and maintain a clean, scalable architecture:

```
esl-lessons/
├── .github/
│   └── workflows/          # GitHub Actions workflows for automated deployment
│       └── deploy.yml      # Main deployment workflow
├── public/                 # Static assets copied to build root
│   ├── 404.html           # Custom 404 error page
│   ├── CNAME              # Custom domain configuration
│   └── vite.svg           # Vite logo (favicon)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ChartSection.jsx    # Interactive chart component
│   │   ├── ContentSelector.jsx # Tabbed content navigation
│   │   ├── DetailCard.jsx      # Rich text content display
│   │   ├── Footer.jsx          # Global footer component
│   │   ├── GlassButtonWrapper.jsx # Glassmorphism button styling
│   │   ├── Layout.jsx          # Main app layout and theme provider
│   │   ├── LessonTabs.jsx      # Lesson section navigation
│   │   ├── TwoPaneLayout.jsx   # Side-by-side content layout
│   │   ├── YouTubeEmbed.jsx    # YouTube video embed component
│   │   └── GlobalScrollIndicator.jsx # Scroll position indicators
│   ├── data/               # All lesson content and application data
│   │   ├── catCultureData.js   # Cat culture lesson content
│   │   ├── culturalData.js     # Cultural studies content
│   │   ├── idiomData.js        # English idioms content
│   │   ├── newsData.js         # News articles content
│   │   ├── phrasalVerbData.js  # Phrasal verbs content
│   │   ├── prepositionData.js  # Prepositions content
│   │   ├── pronunciationData.js # Pronunciation guide content
│   │   ├── verbTenseData.js    # Verb tenses content
│   │   └── vocabularyData.js   # Vocabulary lessons content
│   ├── pages/              # Top-level page components
│   │   ├── AboutPage.jsx       # About page
│   │   ├── ContactPage.jsx     # Contact page
│   │   ├── DashboardPage.jsx   # Teacher dashboard (private)
│   │   ├── HomePage.jsx        # Main homepage
│   │   └── lessons/            # Individual lesson pages
│   │       ├── CatCulture.jsx      # Cat culture lesson
│   │       ├── EnglishPrepositions.jsx # Prepositions lesson
│   │       ├── EnglishVerbTenses.jsx   # Verb tenses lesson
│   │       ├── GlobalBusinessCultures.jsx # Business cultures lesson
│   │       ├── IdiomPage.jsx           # Idioms lesson
│   │       ├── NewsArticlePage.jsx    # News articles lesson
│   │       ├── PhrasalVerbs.jsx       # Phrasal verbs lesson
│   │       ├── PronunciationPage.jsx   # Pronunciation lesson
│   │       └── VocabularyPage.jsx     # Vocabulary lesson
│   ├── services/           # External service integrations
│   │   └── api.js              # RSS feed and external API calls
│   ├── App.jsx             # Main application component with routing
│   ├── index.css           # Global CSS styles and theme overrides
│   ├── LessonRoutes.jsx    # Dynamic lesson route generation
│   ├── main.jsx            # Application entry point
│   └── theme.js            # Material-UI theme configuration (5 themes)
├── dist/                  # Production build output (auto-generated)
│   ├── assets/            # Compiled JavaScript and CSS files
│   ├── index.html         # Production HTML file
│   └── .nojekyll          # Disables Jekyll processing for SPA
├── .gitignore             # Git ignore patterns
├── eslint.config.js       # ESLint configuration
├── index.html             # Development HTML template
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Dependency lock file
├── README.md              # This documentation
└── vite.config.js         # Vite build configuration
```

### Key Architectural Decisions

- **Data Separation**: All content stored in `src/data/` files, components are pure templates
- **Component Reusability**: Shared components in `src/components/` used across all lessons
- **Theme System**: Five distinct themes with consistent styling
- **Static Generation**: No server required - fully static site
- **Automated Deployment**: GitHub Actions handles all deployment automatically