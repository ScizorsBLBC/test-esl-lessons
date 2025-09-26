// src/data/pronunciationData.js

export const pronunciationData = {
  vowels: [
    {
      title: 'The Vowel Sounds: Long "ee" vs. Short "i"',
      sounds: '/iː/ (as in "seat") vs. /ɪ/ (as in "sit")',
      importance: "Many languages do not have two distinct \"i\" sounds like English. Differentiating between these two vowel sounds is one of the most critical steps to being understood, as it changes the meaning of many common words.",
      howTo: [
        "The English \"long ee\" (/iː/) is a tense sound, with the tongue high and forward in the mouth and lips spread, similar to a smile.",
        "The \"short i\" (/ɪ/) is a lax sound, with the tongue slightly lower and more relaxed."
      ],
      videos: [
        { title: "Pronouncing /i/ – English Pronunciation Lesson", url: "https://youtu.be/ANSOvkPAuvc?si=4FyuWpOop9FcP2fV" },
        { title: "Pronouncing /ɪ/ – English Pronunciation Lesson", url: "https://youtu.be/Vb8tEGbOEt4?si=cf19CJL8_FcFqzBv" }
      ],
      practiceWords: {
        pairs: [ { word1: 'seat', word2: 'sit' }, { word1: 'leave', word2: 'live' }, { word1: 'sheep', word2: 'ship' }, { word1: 'heat', word2: 'hit' }, { word1: 'feel', word2: 'fill' }, { word1: 'each', word2: 'itch' } ]
      }
    },
    {
        title: "The /æ/ Vowel (as in 'cat')",
        sounds: "/æ/ as in cat, black, happy",
        importance: "This vowel does not exist in a large number of languages and is often replaced by an \"eh\" or \"ah\" sound, which can change the word (e.g., \"man\" vs. \"men\").",
        howTo: "Drop your jaw significantly. The tongue is low and flat in the mouth, and the corners of the lips might pull back slightly.",
        videos: [
            { title: "Practicing /æ/ – English Pronunciation Lesson", url: "https://youtu.be/KmRfop2Ky5w?si=1yt86MXDo-VHLoUG" }
        ],
        practiceWords: {
            pairs: [ { word1: 'cat', word2: 'cut' }, { word1: 'bad', word2: 'bed' }, { word1: 'man', word2: 'men' } ]
        }
    },
    {
        title: "The /ʊ/ ('put') vs. /uː/ ('pool') Vowels",
        sounds: "/ʊ/ as in put, book vs. /uː/ as in pool, food",
        importance: "This is similar to the \"sit/seat\" distinction. Many languages only have one \"oo\" sound, which is closer to the long, tense /uː/. The short, relaxed /ʊ/ sound is a common challenge.",
        howTo: [
            "/uː/ (long/tense): Your lips are tightly rounded, and the back of your tongue is very high.",
            "/ʊ/ (short/relaxed): Your lips are more relaxed, and your tongue is slightly lower and further forward in your mouth."
        ],
        videos: [
            { title: "Pronouncing /ʊ/ – English Pronunciation Lesson", url: "https://youtu.be/Tj85FHJvuTk?si=Pk1W9AXytP-nWFjU" },
            // NEW VIDEO ADDED HERE
            { title: "Pronouncing /u/ – English Pronunciation Lesson", url: "https://youtu.be/LdjD0ROq1Ek?si=hVeUMRs4k25PvzQZ" }
        ],
        practiceWords: {
            pairs: [ { word1: 'pool', word2: 'pull' }, { word1: 'food', word2: 'good' }, { word1: 'shoed', word2: 'should' } ]
        }
    }
  ],
  consonants: [
    {
        title: 'The "th" Sounds',
        sounds: 'Voiceless /θ/ (as in "think") and Voiced /ð/ (as in "this")',
        importance: 'These sounds are rare in many languages and are often replaced with more familiar sounds like /t/, /d/, or /s/. Mastering these sounds is crucial for clear and accurate American English pronunciation.',
        howTo: [
            'For both "th" sounds, the tip of the tongue should be placed lightly between the top and bottom front teeth.',
            'For the voiceless /θ/, air is pushed through without vibrating the vocal cords.',
            'For the voiced /ð/, the vocal cords vibrate, creating a buzzing sound.'
        ],
        videos: [
            { title: "Pronouncing /th/ (voiceless) – English Pronunciation Lesson", url: "https://youtu.be/iG9M0wpXfJY?si=h5S3DhEIr6HhIn47" },
            { title: "Pronouncing /th/ (voiced) – English Pronunciation Lesson", url: "https://youtu.be/JTZgEWNQIIo?si=bA-a520SaqYoVSv4" }
        ],
        practiceWords: {
            voiceless: { sound: '/θ/', words: 'think, three, path, mouth, author, healthy' },
            voiced: { sound: '/ð/', words: 'this, that, they, them, mother, father, breathe' }
        }
    },
    {
        title: 'The /s/ and /z/ Sounds at the End of Words',
        sounds: '/s/ (as in "cats") vs. /z/ (as in "dogs")',
        importance: 'In English, the sound at the end of a plural noun or a third-person singular verb can be either a voiceless /s/ or a voiced /z/. Many learners tend to pronounce all of them as a voiceless /s/. This distinction affects grammatical clarity.',
        howTo: 'The key difference is voicing: for /s/, the vocal cords do not vibrate, but for /z/, they do, creating a "buzzing" sound.',
        videos: [
            { title: "Pronouncing /s/ – English Pronunciation Lesson", url: "https://youtu.be/KF2sLpgxD1I?si=ezqYcFgbo26PQ5OQ" },
            { title: "Pronouncing /z/ – English Pronunciation Lesson", url: "https://youtu.be/ajt_TR6pKSk?si=tzTj-8JrhDVZ-pB9" }
        ],
        practiceWords: {
            voiceless: { sound: '/s/', words: 'cats, stops, works, books, laughs' },
            voiced: { sound: '/z/', words: 'dogs, plays, lives, words, has, was' }
        }
    },
    {
        title: 'The Consonant Sounds /b/ and /v/',
        sounds: '/b/ (as in "boat") vs. /v/ (as in "vote")',
        importance: 'Some languages do not distinguish between the /b/ and /v/ sounds, or the pronunciation is very similar. In English, the distinction is critical.',
        howTo: [
            'The /b/ sound is made by pressing both lips together and releasing a puff of air.',
            'The /v/ sound is made by placing the top teeth on the bottom lip and pushing air through while vibrating the vocal cords.'
        ],
        videos: [
            { title: "Pronouncing /b/ – English Pronunciation Lesson", url: "https://youtu.be/klUYdxjKAj8?si=tTvuqc6yT5mM_WSo" },
            { title: "Pronouncing /v/ – English Pronunciation Lesson", url: "https://youtu.be/0qGX5ZGRgYk?si=VQwVX6j_PPcH5RPj" }
        ],
        practiceWords: {
            pairs: [ { word1: 'berry', word2: 'very' }, { word1: 'boat', word2: 'vote' }, { word1: 'ban', word2: 'van' }, { word1: 'base', word2: 'vase' } ]
        }
    },
    {
        title: 'Initial "s" Consonant Clusters',
        sounds: '/s/ + consonant (e.g., in "school," "speak," "strategy")',
        importance: 'Some languages do not have words that begin with an "s" followed immediately by another consonant. Learners may be tempted to add a vowel sound before the "s" to make it easier to pronounce.',
        howTo: 'It is important to practice starting the sound directly with the /s/, followed smoothly by the next consonant without adding any preceding vowel.',
        videos: [
            { title: "S Clusters at the Beginning of Words", url: "https://youtu.be/u-a-9a-a828?si=z8B3g2UjJ0P4v97k" }
        ],
        practiceWords: ['school', 'speak', 'student', 'strategy', 'stop', 'small']
    },
    {
        title: 'The English "r" Sound',
        sounds: '/r/ (as in "red," "car")',
        importance: 'The American English "r" is very different from the "r" sound in many other languages, which may involve a tap or a trill of the tongue.',
        howTo: 'The American /r/ is produced in the back of the mouth. The tongue should be tense and pulled back, and the tip of the tongue should not tap the roof of the mouth.',
        videos: [
            { title: "Pronouncing /r/ – English Pronunciation Lesson", url: "https://youtu.be/9hjepVUdidE?si=NivlYJQRUXv0Jx1D" }
        ],
        practiceWords: ['red', 'run', 'car', 'brother', 'her', 'work', 'service']
    },
    {
        title: 'The /f/ and /v/ Sounds',
        sounds: '/f/ as in face vs. /v/ as in voice',
        importance: 'Many languages do not have one or both of these sounds, often substituting them with /p/ or /b/. The key is using the top teeth and bottom lip instead of both lips.',
        howTo: [
            '/f/ (voiceless): Gently place your top teeth on your bottom lip and blow air continuously. There is no vibration in your throat.',
            '/v/ (voiced): Use the same mouth position as /f/, but this time, make a sound with your vocal cords, creating a buzzing vibration.'
        ],
        videos: [
            { title: "Pronouncing /f/ – English Pronunciation Lesson", url: "https://youtu.be/p_tx34GlUHc?si=DE1PZLz9CKUulct7" },
            { title: "Pronouncing /v/ – English Pronunciation Lesson", url: "https://youtu.be/0qGX5ZGRgYk?si=VQwVX6j_PPcH5RPj" }
        ],
        practiceWords: {
            pairs: [ { word1: 'fan', word2: 'van' }, { word1: 'safe', word2: 'save' }, { word1: 'life', word2: 'live' } ]
        }
    },
    {
        title: 'The /w/ Sound',
        sounds: '/w/ as in we',
        importance: 'This sound is absent in many languages and is often confused with /v/. Correctly producing /w/ is crucial for words like "we," "want," and "work".',
        howTo: 'Round your lips tightly as if you are about to whistle. Your top teeth should NOT touch your bottom lip. Quickly move your lips and tongue away from this position into the next vowel sound.',
        videos: [
            { title: "Pronouncing /w/ – English Pronunciation Lesson", url: "https://youtu.be/pMRo_hrB7hc?si=FjkAYqXnAUChyyuJ" }
        ],
        practiceWords: {
            pairs: [ { word1: 'we', word2: 'very' }, { word1: 'wine', word2: 'vine' }, { word1: 'west', word2: 'vest' } ]
        }
    },
    {
        title: 'The "Dark L" Sound /ɫ/',
        sounds: 'The /l/ sound at the end of words like feel or ball',
        importance: 'English has two types of /l/ sounds. The "light l" at the beginning of words (like lip) is common in other languages. The "dark l" /ɫ/ at the end of syllables is different and is a key feature of American English.',
        howTo: [
            'Light /l/: Touch the tip of your tongue to the ridge behind your upper front teeth.',
            'Dark /ɫ/: The back of your tongue pulls up high in your mouth, while the tip may or may not touch the ridge. This creates a "fuller," darker sound.'
        ],
        videos: [
            { title: "Pronouncing /l/ – English Pronunciation Lesson", url: "https://youtu.be/7Wc_WLrCy6A?si=p3ieBnJe9xcrPxlR" }
        ],
        practiceWords: ['feel', 'ball', 'control', 'people']
    },
    {
        title: 'The /tʃ/ and /dʒ/ sounds',
        sounds: '/tʃ/ as in church vs. /dʒ/ as in judge',
        importance: 'The main difference between these two common sounds is voicing. Learners often devoice the /dʒ/ sound at the end of words, making "page" sound like "paich".',
        howTo: [
            '/tʃ/ (voiceless): Start with your tongue in the position for /t/, then release the air in a "sh" sound.',
            '/dʒ/ (voiced): Start with your tongue in the position for /d/, then release the air in a "zh" (as in "measure") sound, keeping your vocal cords vibrating.'
        ],
        videos: [
             { title: "Pronouncing /dʒ/ – English Pronunciation Lesson", url: "https://youtu.be/gD2cHUvdZM8?si=ttDXCsWZAfPdiVRT" }
        ],
        practiceWords: {
            pairs: [ { word1: 'cheap', word2: 'jeep' }, { word1: 'rich', word2: 'ridge' }, { word1: 'watch', word2: 'wedge' } ]
        }
    }
  ],
  rhythm: [
    {
        title: 'The Schwa Sound /ə/',
        sounds: "The weak, neutral \"uh\" sound found in unstressed syllables, like the 'a' in about or the 'e' in taken",
        importance: "This is the most common vowel sound in English and the key to its natural rhythm. Learners often pronounce unstressed syllables with a \"full\" vowel sound, which makes their speech sound unnatural and robotic.",
        howTo: "Your mouth should be completely relaxed. The tongue is in a neutral, central position. It is always short and weak.",
        videos: [
            { title: "Pronouncing /ə/ – English Pronunciation Lesson", url: "https://youtu.be/g4KxOE4X5Q8?si=FMkGBKXRMhNHuW50" }
        ],
        practiceWords: ['about', 'sofa', 'system', 'communicate']
    },
    {
        title: 'Word Stress and Sentence Rhythm',
        importance: "English is a \"stress-timed\" language. This means the rhythm is based on stressing certain words in a sentence, while other words are shortened and de-emphasized. Giving every syllable equal importance is a common mistake for learners.",
        howTo: [
            'Content words (nouns, main verbs, adjectives) are usually stressed, while function words (articles, prepositions, pronouns) are weak.',
            'Listen for the "music" of a sentence. Identify the stressed words that are louder, longer, and higher in pitch. Practice reducing the unstressed words in between.',
            'For example, in "Dogs eat bones," the three words are stressed. In "The dogs will eat the bones," the same three words are stressed, and "The," "will," and "the" are spoken quickly and softly.'
        ],
        videos: [] // No video provided for this sound, so array is empty
    },
    {
        title: 'Linking',
        importance: "Native speakers do not pause between each word. Instead, words are smoothly connected. Understanding and using linking makes speech sound more fluid and fluent.",
        howTo: "Practice linking words that end in a consonant to words that begin with a vowel. For example, \"an apple\" should sound like \"anapple\". Also, notice how a final consonant sound can blend into the same consonant sound at the beginning of the next word (e.g., \"big game\").",
        videos: [] // No video provided for this sound, so array is empty
    }
  ],
  techniques: [
    {
        title: 'Improving with Shadowing and Self-Correction',
        importance: [
            "<li><strong>Choose Short Audio Clips:</strong> Start with individual sentences or very short phrases (5-10 seconds long). The goal is to focus on a small, manageable amount of speech. You can find these in podcasts, audiobooks, or news clips.</li>",

            "<li> ‎</li>",

            "<li><strong>Understand the Meaning First:</strong> Before you begin practicing, make sure you know what the sentence means and what each word means.</li>",

            "<li> ‎</li>",


            "<li><strong>Listen for Sound and Rhythm:</strong> Listen to your chosen audio clip several times. Don't try to speak yet. Pay close attention to the pronunciation of each word, the rhythm and speed, the intonation (the \"music\"), and where words are linked together smoothly.</li>",

            "<li> ‎</li>",

            "<li><strong>Shadow the Speaker:</strong> Now, play the audio and try to speak at the same time as the native speaker. The goal is to mimic their pronunciation, rhythm, and intonation as closely as possible in real-time. This technique helps train the muscles in your mouth to produce new sounds. Pause and rewind as much as you need.</li>",

            "<li> ‎</li>",

            "<li><strong>Record, Compare, and Correct:</strong> This is the most critical step for making real progress. Record yourself saying the phrase without the original audio. Use an online tool (like searching Google for \"how to pronounce 'practice' \") to hear the standard pronunciation, using the slow playback option. Compare your recording word-by-word with the online model, asking yourself about vowel sounds, stress, and mouth shape. Then, re-record and refine, focusing on the specific errors you noticed. Repeat this cycle a few times.</li>",

            "<li> ‎</li>",

            "<li><strong>Focus on One or Two Sounds at a Time:</strong> Don't try to perfect everything at once. Targeted practice on one or two sounds is much more effective.</li>",

            "<li> ‎</li>",

            "<li><strong>Watch for Mouth Movements:</strong> When you use pronunciation resources online, pay close attention to the visual guide of how a native speaker moves their mouth and lips.</li>",

            "<li> ‎</li>",

            "<li><strong>Enjoy the Process:</strong> Practice with audio clips from topics that are genuinely interesting to you to make the process more engaging and sustainable.</li>",

            "<li> ‎</li>",

            "<li><strong>Aim for Clarity, Not Perfection:</strong> The goal is to develop clear and understandable American English. A slight accent is natural. Progress takes time and consistent, focused practice.</li>"
        ],
        videos: [] // No video provided for this section, so array is empty
    }
  ]
};