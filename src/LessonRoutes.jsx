import PronunciationPage from './pages/lessons/PronunciationPage';
import GlobalBusinessCultures from './pages/lessons/GlobalBusinessCultures';
import EnglishVerbTenses from './pages/lessons/EnglishVerbTenses';
import EnglishPrepositions from './pages/lessons/EnglishPrepositions';
import PhrasalVerbs from './pages/lessons/PhrasalVerbs';
import CatCulture from './pages/lessons/CatCulture';

export const lessonRoutes = [
    { path: 'pronunciation', name: 'Pronunciation Guide', component: <PronunciationPage /> },
    { path: 'global-business-cultures', name: 'Global Business Cultures', component: <GlobalBusinessCultures /> },
    { path: 'english-verb-tenses', name: 'English Verb Tenses', component: <EnglishVerbTenses /> },
    { path: 'english-prepositions', name: 'English Prepositions', component: <EnglishPrepositions /> },
    { path: 'phrasal-verbs', name: 'Phrasal Verbs', component: <PhrasalVerbs /> },
    { path: 'cat-culture', name: 'The Feline Economy', component: <CatCulture /> }
];