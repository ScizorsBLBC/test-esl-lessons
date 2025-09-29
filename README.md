# ESL Lessons Hub - Test Environment

**⚠️ TEST ENVIRONMENT - NOT FOR PRODUCTION USE**

Welcome to the ESL Lessons Hub Test Environment, a development and testing platform for new features and architectural improvements. This is a separate test environment that allows for safe experimentation and validation of dangerous refactors before deploying to production.

**🔗 Live Test Site**: https://test-esl-lessons.scizors.wtf
**📍 Production Site**: https://esl-lessons.scizors.wtf (Different Repository)

This test environment serves as our live testing ground where we can safely test experimental features, dangerous refactors, and architectural changes. The production site runs on a separate repository and is not affected by changes here.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Material-UI](https://img.shields.io/badge/material--ui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Features

### 🎓 Interactive Learning Experience
- **Comprehensive Lessons**: Vocabulary, idioms, verb tenses, pronunciation, cultural studies, and more
- **Interactive Exercises**: Quizzes, fill-in-the-blanks, and flashcards for active learning
- **Text-to-Speech**: Audio playback for all lesson content with accessibility support
- **Rich Media Integration**: YouTube videos, interactive charts, and visual learning aids
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML and ARIA labels

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

### 🔒 Security & Accessibility
- **Backend-for-Frontend**: Secure API key management for translation services
- **Text-to-Speech**: Web Speech API integration for inclusive learning
- **WCAG Compliance**: Full accessibility support for screen readers and keyboard navigation
- **Production Security**: Environment-based configuration and secure credential handling

## Core Architectural Principles

This project follows a strict set of principles to ensure it remains scalable, maintainable, and easy to contribute to.

1.  **Data-Driven Content**: All lesson content (text, chart data, video links, etc.) is strictly separated from the UI components. All content resides in dedicated JavaScript files within the `src/data/` directory. UI components are designed to be stateless "templates" that simply render the data imported from this directory.

2.  **Modular & Reusable Components**: The application is built on a foundation of custom, reusable components located in `src/components/`. New features and lessons should leverage these existing components to maintain consistency and reduce code duplication.

3.  **No Student-Facing Navigation**: The platform is designed as a collection of individual lessons accessed via direct links. There is no global navigation bar or central lesson index for students, ensuring a focused learning experience for each topic.

## Working with the Schema (Detailed Guide)

### Schema Structure Fundamentals

The ESL lesson schema is designed for maximum flexibility while maintaining strict separation of content and presentation:

```javascript
// Basic content block structure:
{
  "blockId": "unique-identifier-with-semantic-meaning",  // e.g., "present-tenses-quiz-09"
  "type": "content-type-identifier",                     // e.g., "text", "quiz", "chart"
  "data": {
    // Content-specific structure varies by type
    // This is where all lesson content lives
  }
}
```

### Content Type Specifications

#### Text Content (`"type": "text"`)
```javascript
{
  "blockId": "intro-what-are-tenses-01",
  "type": "text",
  "data": {
    "htmlContent": "<h2>What Are Verb Tenses?</h2><p>In English, verb tenses are tools that show <em>when</em> an action happens...</p>"
  }
}
```

#### Quiz Content (`"type": "quiz"`)
```javascript
{
  "blockId": "present-tenses-quiz-09",
  "type": "quiz",
  "data": {
    "quizTitle": "Check Your Knowledge: Present Tenses",
    "questions": [
      {
        "question": "Which sentence is correct for something that happens every day?",
        "answers": [
          "I am drinking coffee now.",
          "I drink coffee.",
          "I have drunk coffee.",
          "I have been drinking coffee."
        ],
        "correctAnswer": "2",  // 1-indexed answer position
        "messageForCorrectAnswer": "Great job! We use the Simple Present for habits and routines.",
        "messageForIncorrectAnswer": "Not quite. For daily habits, the Simple Present ('I drink') is the best choice."
      }
    ]
  }
}
```

#### Chart Content (`"type": "chart"`)
```javascript
{
  "blockId": "present-summary-chart-08",
  "type": "chart",
  "data": {
    "title": "Summary: Present Tenses",
    "headers": ["Tense", "Example Sentence", "Main Idea"],
    "rows": [
      ["Simple Present", "She <strong>works</strong> as a doctor.", "Habits, facts, and schedules."],
      ["Present Continuous", "I <strong>am working</strong> right now.", "Happening now, temporary, or future plans."]
    ]
  }
}
```

#### Fill-in-the-Blanks (`"type": "fillInTheBlanks"`)
```javascript
{
  "blockId": "final-practice-fill-blanks-22",
  "type": "fillInTheBlanks",
  "data": {
    "title": "Final Practice: Context is Key",
    "instructions": "Read the story and choose the verb that best fits the context.",
    "sentences": [
      {
        "text": "Yesterday was a strange day. I {blank} home from work when I saw a bright light in the sky.",
        "options": ["walked", "was walking"],
        "correctAnswer": "was walking"
      }
    ]
  }
}
```

### Block ID Naming Conventions

Block IDs should be semantic and follow consistent patterns:

```javascript
// Pattern: [section]-[content-type]-[sequence-number]
// Examples:
"intro-what-are-tenses-01"        // Introduction content
"present-simple-04"               // Present simple tense explanation
"present-tenses-quiz-09"          // Quiz for present tenses
"past-summary-chart-15"           // Chart summarizing past tenses
"final-practice-fill-blanks-22"   // Final practice exercise
```

### Filtering Content by Block ID

Use semantic patterns to organize content:

```javascript
// Filter by tense categories:
const presentBlocks = contentBlocks.filter(block =>
  block.blockId.includes('present-') && !block.blockId.includes('summary')
);

const pastBlocks = contentBlocks.filter(block =>
  block.blockId.includes('past-') && !block.blockId.includes('summary')
);

const futureBlocks = contentBlocks.filter(block =>
  block.blockId.includes('future-') && !block.blockId.includes('summary')
);

// Include quiz content appropriately:
const overviewContent = contentBlocks.filter(block =>
  block.blockId.includes('intro') ||
  block.blockId.includes('tenses-intro') ||
  block.type === 'quiz'
);
```

### Component Integration Patterns

When creating new components, follow these patterns:

```javascript
// ✅ GOOD: Use theme variables, pass theme as prop
const MyComponent = ({ data, theme }) => (
  <Card sx={{
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`
  }}>
    <CardContent>
      <Typography color={theme.palette.text.primary}>
        {data.title}
      </Typography>
    </CardContent>
  </Card>
);

// ❌ BAD: Hard-coded colors
const MyComponent = ({ data }) => (
  <Card sx={{ backgroundColor: '#ffffff' }}>
    <CardContent>
      <Typography sx={{ color: '#000000' }}>
        {data.title}
      </Typography>
    </CardContent>
  </Card>
);
```

### Responsive Design Patterns

```javascript
// Mobile-first responsive design:
sx={{
  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
  padding: { xs: 2, sm: 3, md: 4 },
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' }
}}
```

## Technology Stack

- **Frontend Framework**: React 19 with Vite build tool
- **UI Library**: Material-UI (MUI) v7 with custom theming
- **Language**: JavaScript (ES2023+)
- **Build System**: Vite with optimized production builds
- **Deployment**: GitHub Actions with GitHub Pages
- **Version Control**: Git with feature branch workflow
- **Code Quality**: ESLint with React and accessibility rules
- **Backend Services**: Express.js BFF proxy server
- **Accessibility**: Web Speech API with react-text-to-speech
- **Translation**: DeepL API integration for content translation
- **Interactive Components**: react-quiz-component for quiz functionality

## Getting Started

### Prerequisites

-   Node.js (v20.x or later)
-   npm

### Local Development Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/scizorsblbc/esl-lessons.git
    cd esl-lessons
    ```

2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the BFF server (optional, for translation features):**
    ```bash
    cd server
    npm install
    cp .env.example .env
    # Edit .env and add your DeepL API key
    cd ..
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port if 5173 is in use). The Vite server supports Hot Module Replacement (HMR) for a fast and efficient development experience.

### Development Commands Reference

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint

# Run tests (if implemented)
npm run test

# Fix ESLint issues automatically
npm run lint:fix

# Check for outdated packages
npm outdated

# Update packages
npm update
```

### Development Workflow Best Practices

#### Component Development
1. **Always check existing components** in `src/components/` before creating new ones
2. **Use the Layout component** - all pages must be wrapped in `<Layout />`
3. **Follow naming conventions**: PascalCase for components, camelCase for functions
4. **Import order**: React → MUI → Custom components → Utils → Styles

#### Data File Organization
1. **One file per lesson** in `src/data/` (e.g., `verbTenseData.js`)
2. **Export named objects** following the schema structure
3. **Use semantic block IDs** with consistent patterns
4. **Validate data structure** before committing

#### Theme Integration
1. **Always use theme variables** - never hard-code colors
2. **Pass theme as prop** when creating custom components
3. **Test across all themes** (Light, Dark, Vaporwave, etc.)
4. **Use semantic color names** (primary, secondary, success, error)

5.  **Start the BFF server (if using translation features):**
    ```bash
    cd server
    npm start
    ```
    The server will run on `http://localhost:3001`.

### Testing and Debugging

#### Development Testing
```bash
# Test component rendering
1. Open browser dev tools (F12)
2. Go to Console tab
3. Check for any errors or warnings
4. Use React DevTools extension for component inspection

# Test data loading
1. Add console.log() statements in components
2. Verify data structure matches schema expectations
3. Check network tab for any failed API calls
```

#### Common Debugging Patterns

```javascript
// Debug content loading
useEffect(() => {
  console.log('Lesson data loaded:', lessonData);
  console.log('Content blocks count:', lessonData.content?.length || 0);
  console.log('Block types:', lessonData.content?.map(b => b.type));
}, [lessonData]);

// Debug quiz functionality
const quizBlocks = contentBlocks.filter(b => b.type === 'quiz');
console.log('Found quiz blocks:', quizBlocks.length);
quizBlocks.forEach((block, index) => {
  console.log(`Quiz ${index + 1}:`, block.data.questions?.length, 'questions');
});
```

#### Production Testing
```bash
# Build test
npm run build

# Check for build errors
# Look for warnings about chunk sizes, unused imports, etc.

# Test with production preview
npm run preview  # Serves from dist/ folder
```

### Recent Architectural Changes (2024-2025 Refactoring)

#### Enhanced Quiz System
- **Fixed quiz display logic** to properly show all quiz blocks in lessons
- **Added TimelineVisualization component** for learning progression tracking
- **Improved quiz completion flow** with proper state management
- **Enhanced responsive design** for mobile and desktop quiz layouts

#### Theme System Improvements
- **Replaced all hard-coded colors** with theme variables for consistency
- **Enhanced GlassButtonWrapper** to use theme-aware styling
- **Updated YouTubeEmbed** component with theme-based backgrounds
- **Improved component theming** across all lesson pages

#### Component Architecture Enhancements
- **Maintained strict data separation** (content in `src/data/`, presentation in components)
- **Enhanced responsive design patterns** throughout the application
- **Improved component reusability** and consistency
- **Added comprehensive error handling** and loading states

#### Performance Optimizations
- **Reduced bundle size** through better component organization
- **Improved rendering performance** with proper memoization
- **Enhanced accessibility** with better ARIA labels and keyboard navigation
- **Optimized mobile performance** with responsive breakpoints

## Deployment (Test Environment)

This test environment uses **Netlify** for deployment with serverless functions. The site is configured to automatically rebuild and deploy whenever changes are pushed to any branch.

### How the Netlify Deployment Works

1. **Automatic Trigger**: Every push to any branch triggers the deployment workflow
2. **Build Process**: Netlify runs `npm install` and `npm run build` to create production files
3. **Serverless Functions**: The `server/` directory contains API endpoints
4. **Live Test Site**: The site is served at `https://test-esl-lessons.scizors.wtf`

### Complete Deployment Process

#### Option 1: Feature Branch to Main (Recommended Workflow)

New features and dangerous refactors are developed on feature branches and merged to main for live testing:

1. **Create Feature Branch**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Develop and Test**:
   - Make your changes on the feature branch
   - Test locally with `npm run dev`
   - Run `npm run build` to test production build
   - Commit your changes with descriptive messages
   - Test dangerous refactors safely in this isolated environment

3. **Create Pull Request**:
   - Push your feature branch to GitHub
   - Go to `https://github.com/ScizorsBLBC/ESL-Lessons`
   - Click "Pull requests" tab → "New pull request"
   - Select your feature branch as "compare"
   - Select `main` as "base"
   - Add descriptive title and description explaining the changes
   - Click "Create pull request"

4. **Review and Merge**:
   - Request code review if needed
   - Address any feedback or issues
   - Click "Merge pull request" → "Confirm merge"

5. **Live Test Deployment**:
   - Changes automatically deploy to test environment
   - Monitor progress in the "Actions" tab
   - Site updates in 2-5 minutes at `https://test-esl-lessons.scizors.wtf`
   - Test the changes live in this safe test environment

#### Option 2: Hotfix to Main (Emergency Updates)

For urgent bug fixes or security updates:

```bash
# Create hotfix branch from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-issue

# Make your fix and test thoroughly
# Commit with descriptive message

# Merge directly to main (bypassing PR for urgent fixes)
git checkout main
git merge hotfix/critical-issue
git push origin main

# Wait for GitHub Actions to deploy (2-5 minutes)
# Site will be live at https://test-esl-lessons.scizors.wtf
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

#### Complete Development to Test Environment Workflow

For new features, dangerous refactors, or bug fixes:

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
   - This is a safe environment to test dangerous architectural changes

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
   - Add detailed description of changes and testing approach
   - Click "Create pull request"

5. **Review and Merge**:
   - Review the changes thoroughly
   - Request code review if needed
   - Click "Merge pull request" → "Confirm merge"

6. **Live Test Deployment**:
   - Changes automatically deploy to test environment
   - Monitor in "Actions" tab
   - Site updates in 2-5 minutes at `https://test-esl-lessons.scizors.wtf`
   - Test changes live in this isolated test environment
   - Production site (https://esl-lessons.scizors.wtf) remains unaffected


#### Adding New Lessons

1. **Create Data File**: Add lesson content to `src/data/` (e.g., `newLessonData.js`)
   ```bash
   # Create the data file
   touch src/data/newLessonData.js

   # Follow the schema structure
   export const newLessonData = {
     lessonId: "unique-lesson-identifier",
     title: "Your New Lesson Title",
     subtitle: "Brief description of the lesson",
     content: [
       {
         blockId: "intro-content-01",
         type: "text",
         data: {
           htmlContent: "<h2>Introduction</h2><p>Your lesson content here...</p>"
         }
       }
       // Add more content blocks following the schema patterns
     ]
   };
   ```

2. **Create Lesson Component**: Add lesson page to `src/pages/lessons/`
   ```bash
   # Create the lesson component
   touch src/pages/lessons/NewLessonPage.jsx

   # Follow this template structure:
   import React, { useState, useEffect, useMemo } from 'react';
   import { Box, Typography } from '@mui/material';
   import { newLessonData } from '../../data/newLessonData.js';
   import ContentBlockRenderer from '../../components/ContentBlockRenderer';
   import LessonTabs from '../../components/LessonTabs';

   export default function NewLessonPage() {
     const [activeTab, setActiveTab] = useState(0);

     useEffect(() => {
       document.title = `${newLessonData.title} | ESL Lessons`;
     }, []);

     // Group content blocks by category
     const groupedContent = useMemo(() => {
       // Your content filtering logic here
       return groupContentByCategory(newLessonData.content);
     }, []);

     return (
       <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
         <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold', textAlign: 'center' }}>
           {newLessonData.title}
         </Typography>

         <LessonTabs
           activeTab={activeTab}
           handleTabChange={(e, newValue) => setActiveTab(newValue)}
           sections={sections}
         />

         <ContentBlockRenderer contentBlocks={getCurrentTabContent()} />
       </Box>
     );
   }
   ```

3. **Update Routing**: Add route to `src/LessonRoutes.jsx`
   ```javascript
   // Add to the lessonRoutes array:
   {
     path: "/lessons/new-lesson",
     component: () => import('../pages/lessons/NewLessonPage'),
     lessonId: "unique-lesson-identifier"
   }
   ```

4. **Test Locally**: Use `npm run dev` to test the new lesson
5. **Deploy**: Push to main branch for automatic deployment

#### Working with Existing Components

##### Layout Components
- **Always wrap pages** with `<Layout />` for theme and footer
- **Use LessonTabs** for section navigation within lessons
- **Use ContentBlockRenderer** to display content blocks automatically

##### Content Components
- **DetailCard**: For rich text content with TTS support
- **Quiz**: For interactive quiz functionality
- **ChartSection**: For data visualization tables
- **FillInTheBlanks**: For interactive exercises
- **TwoPaneLayout**: For side-by-side content layouts

##### Navigation Components
- **GlassButtonWrapper**: For consistent button styling
- **ContentSelector**: For tabbed content selection
- **LessonTabs**: For lesson section navigation

#### Component Usage Examples

```javascript
// Basic lesson structure
export default function MyLesson() {
  return (
    <Layout>  {/* Always wrap with Layout */}
      <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', textAlign: 'center' }}>
          {lessonData.title}
        </Typography>

        <LessonTabs
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          sections={sections}
        />

        <ContentBlockRenderer contentBlocks={getCurrentTabContent()} />
      </Box>
    </Layout>
  );
}

// Using TwoPaneLayout for side-by-side content
<TwoPaneLayout
  pane1={<ArticlePane text={articleText} />}
  pane2={<HomeworkPane questions={questions} />}
/>

// Custom content filtering
const groupContentByCategory = (contentBlocks) => {
  const categories = {
    section1: [],
    section2: [],
    practice: []
  };

  contentBlocks.forEach(block => {
    const blockId = block.blockId.toLowerCase();

    if (blockId.includes('section1-')) {
      categories.section1.push(block);
    } else if (blockId.includes('section2-')) {
      categories.section2.push(block);
    } else if (blockId.includes('practice') || blockId.includes('quiz')) {
      categories.practice.push(block);
    }
  });

  return categories;
};
```

### Troubleshooting Common Issues

#### Quiz Not Displaying
```javascript
// Check if quiz blocks are being filtered out
const quizBlocks = contentBlocks.filter(b => b.type === 'quiz');
console.log('Quiz blocks found:', quizBlocks.length);

// Ensure quiz blocks are included in content filtering
const getCurrentTabContent = () => {
  return contentBlocks.filter(block => {
    // Include quiz blocks in the appropriate sections
    return block.blockId.includes('present-') ||
           block.type === 'quiz'; // Include quiz blocks
  });
};
```

#### Theme Colors Not Working
```javascript
// Always pass theme as prop to custom components
const MyComponent = ({ data, theme }) => (
  <Box sx={{
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`
  }}>
    {data.title}
  </Box>
);

// Use the component like this:
<MyComponent data={block.data} theme={theme} />
```

#### Responsive Layout Issues
```javascript
// Use consistent responsive patterns
sx={{
  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
  padding: { xs: 1, sm: 2, md: 3 },
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: { xs: 1, sm: 2 }
}}
```

## Project Structure

The repository is organized to clearly separate concerns and maintain a clean, scalable architecture:

```
esl-lessons/
├── .github/
│   └── workflows/          # GitHub Actions workflows for automated deployment
│       └── deploy.yml      # Main deployment workflow
├── server/                 # Backend-for-Frontend (BFF) proxy server
│   ├── .env.example       # Server configuration template
│   ├── package.json       # Server dependencies
│   └── server.js          # Express server with DeepL API proxy
├── public/                 # Static assets copied to build root
│   ├── 404.html           # Custom 404 error page
│   ├── CNAME              # Custom domain configuration
│   └── vite.svg           # Vite logo (favicon)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ChartSection.jsx    # Interactive chart component
│   │   ├── ContentBlockRenderer.jsx # Dynamic content rendering
│   │   ├── ContentSelector.jsx # Tabbed content navigation
│   │   ├── DetailCard.jsx      # Rich text content with TTS
│   │   ├── FillInTheBlanks.jsx # Interactive fill-in-the-blanks
│   │   ├── Flashcard.jsx       # Interactive flashcard component
│   │   ├── Footer.jsx          # Global footer component
│   │   ├── GlassButtonWrapper.jsx # Glassmorphism button styling
│   │   ├── Layout.jsx          # Main app layout and theme provider
│   │   ├── LessonHeader.jsx    # Consistent lesson headers
│   │   ├── LessonTabs.jsx      # Lesson section navigation
│   │   ├── Quiz.jsx           # Interactive quiz component
│   │   ├── TwoPaneLayout.jsx   # Side-by-side content layout
│   │   ├── YouTubeEmbed.jsx    # YouTube video embed component
│   │   └── GlobalScrollIndicator.jsx # Scroll position indicators
│   ├── data/               # All lesson content and application data
│   │   ├── catCultureData.js   # Cat culture lesson content
│   │   ├── culturalData.js     # Cultural studies content
│   │   ├── idiomData.js        # English idioms content
│   │   ├── newsData.js         # News articles content
│   │   ├── phrasalVerbData.js  # Phrasal verbs content (schema-compliant)
│   │   ├── prepositionData.js  # Prepositions content
│   │   ├── pronunciationData.js # Pronunciation guide content
│   │   ├── schema.js           # JSON schema for lesson data
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
│   │       ├── PhrasalVerbs.jsx       # Phrasal verbs lesson (refactored)
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
- **Static Generation**: No server required - fully static site
- **Automated Deployment**: GitHub Actions handles all deployment automatically

## Guide: Migrating Changes from Test to Production

This guide outlines the complete process for merging features and fixes from the `test-esl-lessons` repository into the main `ESL-Lessons` production repository.

### Step 1: Prepare Your Local Environment

Ensure both of your local repository folders are clean and up-to-date.

1.  Navigate to your main production repository directory:
    ```bash
    cd /path/to/your/projects/ESL-Lessons
    ```

2.  Make sure you are on the `main` branch and have the latest changes from GitHub:
    ```bash
    git checkout main
    git pull origin main
    ```

### Step 2: Link the Test Repository

Temporarily link the `test-esl-lessons` repository to your main project using a Git "remote". This allows you to fetch its code and history.

1.  From inside the `ESL-Lessons` directory, add the test repository as a remote named `test-repo`.
    ```bash
    # The path should be relative to your current location.
    git remote add test-repo ../test-esl-lessons
    ```

2.  Fetch all the data from the test repository:
    ```bash
    git fetch test-repo
    ```

### Step 3: Create an Integration Branch

Never work directly on your `main` branch. Create a new, temporary branch to handle the merge.

```bash
git checkout -b feature/integrate-test-refactor