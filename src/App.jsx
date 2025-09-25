import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Layout from './components/Layout';

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Import All Lessons
import PronunciationPage from './pages/lessons/PronunciationPage';
import GlobalBusinessCultures from './pages/lessons/GlobalBusinessCultures';
import EnglishVerbTenses from './pages/lessons/EnglishVerbTenses';
import EnglishPrepositions from './pages/lessons/EnglishPrepositions';
import PhrasalVerbs from './pages/lessons/PhrasalVerbs';
import CatCulture from './pages/lessons/CatCulture';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Main Pages */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* FIX: Lesson Pages now use shorter, direct paths */}
        <Route path="pronunciation" element={<PronunciationPage />} />
        <Route path="global-business-cultures" element={<GlobalBusinessCultures />} />
        <Route path="english-verb-tenses" element={<EnglishVerbTenses />} />
        <Route path="english-prepositions" element={<EnglishPrepositions />} />
        <Route path="phrasal-verbs" element={<PhrasalVerbs />} />
        <Route path="cat-culture" element={<CatCulture />} />
      </Route>
    </Routes>
  );
}