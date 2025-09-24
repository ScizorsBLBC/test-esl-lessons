/**
 * verbTenseData.js
 * This file contains the complete, unabridged content for the "English Verb Tenses" lesson,
 * ensuring 1:1 fidelity with the original source document.
 */
export const verbTenseData = {
  // Section 1: Present Time
  presentTime: [
    {
      name: 'Simple Present',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Simple Present Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I work," "The train arrives")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Habitual Actions/Routines:</strong><br><em>"I <strong>work</strong> from 9 AM to 5 PM."</em><br><em>"She <strong>works</strong> on weekends to earn extra money."</em></li>
          <li><strong>General Truths/Facts:</strong><br><em>"The system <strong>works</strong> by processing data in batches."</em></li>
          <li><strong>Describing Profession/State:</strong><br><em>"I <strong>work</strong> as a software engineer."</em></li>
          <li><strong>Scheduled Future Events:</strong><br><em>"My flight <strong>arrives</strong> at 6:00 PM next Tuesday."</em><br><em>"The conference <strong>begins</strong> on Monday morning."</em></li>
        </ul>
      `
    },
    {
      name: 'Present Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Present Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I am working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Action Happening Now:</strong><br><em>"Please be quiet, I <strong>am working</strong>."</em><br><em>"You can't talk to him now; he <strong>is working</strong>."</em></li>
          <li><strong>Temporary Action Around the Present:</strong><br><em>"I <strong>am working</strong> on a new report this week."</em><br><em>"We <strong>are working</strong> to improve our services."</em></li>
          <li><strong>Future Arrangement:</strong><br><em>"I <strong>am working</strong> the late shift tomorrow."</em></li>
        </ul>
      `
    },
    {
      name: 'Present Perfect',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Present Perfect Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I have eaten")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Completed Action with a Result in the Present:</strong><br><em>"No, thank you, I <strong>have eaten</strong>." (The result is that I am not hungry now).</em><br><em>"The company <strong>has developed</strong> a new system." (The system exists now).</em></li>
          <li><strong>Experience Up to Now (Unspecified Past Time):</strong><br><em>"I <strong>have eaten</strong> at that restaurant many times."</em><br><em>"She <strong>has visited</strong> Paris three times."</em></li>
          <li><strong>Recently Completed Action (often with 'just'):</strong><br><em>"I <strong>have just eaten</strong>, so I'm full."</em></li>
        </ul>
      `
    },
    {
      name: 'Present Perfect Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Present Perfect Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I have been working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Action Continuing Up to the Present (emphasizing duration):</strong><br><em>"I <strong>have been working</strong> here for five years."</em><br><em>"They <strong>have been talking</strong> for over an hour."</em></li>
          <li><strong>Recently Stopped Action with a Result in the Present:</strong><br><em>"I'm tired because I <strong>have been working</strong> all night."</em></li>
        </ul>
      `
    }
  ],
  presentSummaryTable: {
    title: 'Summary Table: Present Time & Present Relevance',
    headers: ['Tense/Structure', 'Example Sentence', 'Primary Use/Focus', 'Time Frame/Nuance'],
    rows: [
      ['Simple Present', 'She <strong>works</strong> as a doctor.', 'Habits, routines, facts, scheduled future.', 'General present, regular, fixed future.'],
      ['Present Continuous', 'I <strong>am working</strong> on this task now.', 'Action now, temporary activity, future plans.', 'At this moment, around now, near future.'],
      ['Present Perfect', 'We <strong>have eaten</strong> there before.', 'Past action with present result, experience.', 'Unspecified past connected to now.'],
      ['Present Perfect Continuous', 'They <strong>have been working</strong> since morning.', 'Duration of an action up to the present.', 'Emphasizes duration from past to present.']
    ]
  },

  pastTime: [
    {
      name: 'Simple Past',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Simple Past Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I ate")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li>Indicates an action that happened at a <strong>specific point in the past</strong> and is now completed. It is often used with specific time markers like 'yesterday', 'last week', 'in 2010', or 'at 7 AM'.<br><em>"I <strong>ate</strong> breakfast at 7 AM."</em><br><em>"We <strong>developed</strong> this software last year."</em></li>
        </ul>
      `
    },
    {
      name: 'Past Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Past Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I was working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Action in Progress at a Specific Past Time:</strong><br><em>"At 8 PM last night, I <strong>was watching</strong> a movie."</em></li>
          <li><strong>Interrupted Action in the Past:</strong><br><em>"I <strong>was walking</strong> home when I saw an accident."</em></li>
          <li><strong>Parallel (Simultaneous) Actions in the Past:</strong><br><em>"While I <strong>was cooking</strong>, my children <strong>were doing</strong> their homework."</em></li>
        </ul>
      `
    },
    {
      name: 'Past Perfect',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Past Perfect Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I had eaten")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li>Indicates an action that was <strong>completed before another specific point or action in the past</strong>. It establishes the sequence of past events.<br><em>"By the time the guests arrived, I <strong>had already eaten</strong> dinner."</em><br><em>"She told me she <strong>had studied</strong> English for five years before she moved to the US."</em></li>
        </ul>
      `
    },
    {
      name: 'Past Perfect Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Past Perfect Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I had been working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li>Describes an action that was continuously in progress in the past <strong>before another past action occurred</strong>. It emphasizes the duration of the first action.<br><em>"By the time he finally arrived, I <strong>had been working</strong> for two hours."</em><br><em>"They <strong>had been driving</strong> all day before they found a hotel."</em></li>
        </ul>
      `
    }
  ],
  pastSummaryTable: {
    title: 'Summary Table: Past Time',
    headers: ['Tense/Structure', 'Example Sentence', 'Primary Use/Focus', 'Time Frame/Nuance'],
    rows: [
      ['Simple Past', 'He <strong>visited</strong> Paris last year.', 'Completed action at a specific past time.', 'Definite point in the past.'],
      ['Past Continuous', 'She <strong>was reading</strong> when the phone rang.', 'Action in progress at a past time, interrupted action.', 'Ongoing at a past moment.'],
      ['Past Perfect', 'They <strong>had finished</strong> dinner before I arrived.', 'Action completed before another past action.', 'Earlier of two past actions.'],
      ['Past Perfect Continuous', 'I <strong>had been waiting</strong> for an hour when he came.', 'Duration of an action before another past action.', 'Emphasizes continuity before a past event.']
    ]
  },

  futureTime: [
    {
      name: 'Simple Future ("will")',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Simple Future ("will")</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I will arrive")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Prediction:</strong><br><em>"I think it <strong>will rain</strong> later."</em></li>
          <li><strong>Spontaneous Decision:</strong><br><em>"The phone is ringing, I <strong>will get</strong> it."</em></li>
          <li><strong>Promise or Offer:</strong><br><em>"I <strong>will arrive</strong> by noon, I promise."</em><br><em>"I <strong>will help</strong> you with your bags."</em></li>
        </ul>
      `
    },
    {
      name: '"be going to"',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">"be going to" Structure</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I am going to work")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Prior Plans/Intentions:</strong><br><em>"We <strong>are going to move</strong> to a new city next year."</em></li>
          <li><strong>Predictions Based on Present Evidence:</strong><br><em>"Look at those dark clouds! It <strong>is going to rain</strong>."</em></li>
        </ul>
      `
    },
    {
        name: 'Simple Present (for Future)',
        details: `
          <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Simple Present (for Future Use)</h3>
          <p style="margin-bottom: 1em;"><em>(e.g., "The train leaves")</em></p>
          <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
          <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
            <li>Used for future events that are <strong>scheduled or timetabled</strong>, implying a high degree of certainty.<br><em>"The conference <strong>begins</strong> on Monday morning."</em></li>
          </ul>
        `
    },
    {
      name: 'Future Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Future Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I will be working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li>Indicates an action that will be <strong>in progress at a specific time in the future</strong>.<br><em>"This time tomorrow, I <strong>will be arriving</strong> in London."</em><br><em>"Don't call me at 9 PM; I <strong>will be watching</strong> the final match."</em></li>
        </ul>
      `
    },
    {
      name: 'Future Perfect',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Future Perfect Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I will have finished")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li>Describes an action that will be <strong>completed before a specific point in the future</strong>.<br><em>"By 8 PM tonight, I <strong>will have driven</strong> 300 miles."</em><br><em>"By the time she is 30, she <strong>will have started</strong> her own company."</em></li>
        </ul>
      `
    },
    {
      name: 'Future Perfect Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Future Perfect Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I will have been working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li>Emphasizes the <strong>duration of an action that will continue up to a specific point in the future</strong>.<br><em>"By next June, I <strong>will have been working</strong> here for ten years."</em><br><em>"When he retires next month, he <strong>will have been teaching</strong> for over 40 years."</em></li>
        </ul>
      `
    }
  ],
  futureSummaryTable: {
    title: 'Summary Table: Future Time',
    headers: ['Tense/Structure', 'Example Sentence', 'Primary Use/Focus', 'Time Frame/Nuance'],
    rows: [
      ['Simple Present (for future)', 'The train <strong>leaves</strong> at 5 PM.', 'Scheduled, timetabled, fixed future events.', 'High certainty, part of an official plan.'],
      ['Simple Future ("will")', 'I <strong>will call</strong> you later.', 'Predictions, spontaneous decisions, promises, offers, general intentions.', 'General way to express future actions.'],
      ['"Be going to" Structure', 'She <strong>is going to start</strong> a new job.', 'Prior plans/intentions, predictions based on present evidence.', 'Stronger sense of plan or imminence based on signs.'],
      ['Future Continuous', 'This time next week, I <strong>will be relaxing</strong> on a beach.', 'Action in progress at a future time, planned arrangements.', 'Emphasizes ongoing nature at a future point.'],
      ['Future Perfect', 'By 2030, they <strong>will have built</strong> the new bridge.', 'Action completed before another future point/event.', 'Focus on completion from a future perspective.'],
      ['Future Perfect Continuous', 'Next year, I <strong>will have been living</strong> here for a decade.', 'Duration of an action continuing up to a specific future point.', 'Emphasizes length of time leading up to a future point.']
    ]
  },

  vocabulary: [
    {
      topic: 'Core Concepts',
      terms: [
        { term: 'Habitual Action', definition: 'An action that is done regularly or as a routine. (e.g., Simple Present: "I drink coffee every morning.")' },
        { term: 'General Truth', definition: 'A statement that is a fact or is generally considered true. (e.g., Simple Present: "Water boils at 100 degrees Celsius.")' },
        { term: 'Spontaneous Decision', definition: 'A decision made at the moment of speaking, without prior planning. (e.g., Future with "will": "It\'s cold. I will close the window.")' },
        { term: 'Prior Plan', definition: 'An intention or plan that was made before the moment of speaking. (e.g., Future with "be going to": "I am going to the cinema tonight.")' },
        { term: 'Present Relevance', definition: 'A quality of a past action that has a result or connection to the present moment. (e.g., Present Perfect: "I have lost my keys," meaning I cannot get in now.)' },
        { term: 'Duration', definition: 'The length of time that an action continues. Continuous tenses often emphasize duration.' }
      ]
    }
  ],

  homework: [
    {
      title: 'Context is Key',
      topic: 'Tense Selection',
      details: `
        <p class="mb-4">Read the short story below. For each blank, choose the verb from the parentheses that best fits the context and write a short (1-sentence) explanation for your choice.</p>
        <div class="homework-email">
          <p>Yesterday was a strange day. I <strong>(1. walked / was walking)</strong> home from work when I saw a bright light in the sky. I stopped and stared. I <strong>(2. never saw / had never seen)</strong> anything like it before in my entire life. While I <strong>(3. stood / was standing)</strong> there, my phone rang. It was my friend, Sarah.</p>
          <p>"Are you watching this?" she shouted. "It <strong>(4. flies / is flying)</strong> over my house right now!"</p>
          <p>By the time I got home, the light was gone. I turned on the news. The newscaster said that for the past hour, mysterious lights <strong>(5. were reported / had been reported)</strong> by people all over the city. I think by next week, everyone <strong>(6. will forget / will have forgotten)</strong> all about it, but I know I won't.</p>
        </div>
      `
    },
    {
      topic: 'Sentence Transformation',
      title: 'Rewrite the Narrative',
      details: `
        <p class="mb-4">Rewrite the following sentences to match the instructions. This will test your ability to control the nuance and meaning of different tenses.</p>
        <ol class="list-decimal list-inside space-y-4">
          <li>
            <strong>Original:</strong> "I started my new job."<br>
            <strong>Instruction:</strong> Rewrite this to emphasize that you started in the past and are still working there now, for a duration of three months.<br>
            <em>Example Answer: I have been working at my new job for three months.</em>
          </li>
          <li>
            <strong>Original:</strong> "He will finish the report."<br>
            <strong>Instruction:</strong> Rewrite this to indicate that he will finish the report before his boss arrives tomorrow.
          </li>
          <li>
            <strong>Original:</strong> "She cooked dinner. The guests arrived."<br>
            <strong>Instruction:</strong> Combine these into one sentence to show that she finished cooking *before* the guests arrived.
          </li>
           <li>
            <strong>Original:</strong> "I am saving money for a car."<br>
            <strong>Instruction:</strong> Rewrite this to make it a prior plan or strong intention.
          </li>
          <li>
            <strong>Original:</strong> "They lived in London for five years."<br>
            <strong>Instruction:</strong> Rewrite this to emphasize the duration of their living in London *before* they moved to Paris last year.
          </li>
        </ol>
      `
    }
  ]
};

