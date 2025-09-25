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
          <li><strong>Habitual Actions/Routines:</strong> Describes something you do regularly or as a habit.<br><em>"I <strong>work</strong> from 9 AM to 5 PM."</em><br><em>"She <strong>works</strong> on weekends to earn extra money."</em></li>
          <li><strong>General Truths/Facts:</strong> States something that is generally true or a fact.<br><em>"The system <strong>works</strong> by processing data in batches."</em></li>
          <li><strong>Describing Profession/State:</strong><br><em>"I <strong>work</strong> as a software engineer."</em></li>
          <li><strong>Scheduled Future Events (often for timetables/official plans):</strong><br><em>"My flight <strong>arrives</strong> at 6:00 PM next Tuesday."</em><br><em>"The conference <strong>begins</strong> on Monday morning."</em></li>
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
          <li><strong>Action Happening Now:</strong> Describes an action in progress at the exact moment of speaking.<br><em>"Please be quiet, I <strong>am working</strong>."</em><br><em>"You can't talk to him now; he <strong>is working</strong>."</em></li>
          <li><strong>Temporary Action Around the Present:</strong> Describes an ongoing action happening around the present time, but not necessarily at the exact moment of speaking. It's often temporary.<br><em>"I <strong>am working</strong> on a new report this week."</em><br><em>"We <strong>are working</strong> to improve our services."</em></li>
          <li><strong>Future Arrangement (often with a time expression):</strong> Describes a planned future event.<br><em>"I <strong>am working</strong> the late shift tomorrow."</em><br><em>"I <strong>am working</strong> from home next Friday."</em></li>
        </ul>
      `
    },
    {
      name: 'Present Perfect',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Present Perfect Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I have eaten")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Indicates an action that happened at an unspecified time in the past but has a connection or relevance to the present.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Completed Action with Present Result:</strong> The action is finished, and its result is important now.<br><em>"Would you like some lunch?" "No, thank you, I <strong>have eaten</strong>." (The present result is I'm not hungry.)</em></li>
          <li><strong>Experience Up to the Present:</strong> The action happened at some point (or multiple times) up to now.<br><em>"I <strong>have eaten</strong> at that restaurant many times."</em><br><em>"<strong>Have</strong> you ever <strong>eaten</strong> sushi?"</em></li>
          <li><strong>Recently Completed Action:</strong> The action was completed very recently.<br><em>"I <strong>have just eaten</strong>, so I'm full."</em></li>
          <li><strong>Signal Words Often Used:</strong> already, yet, ever, never, just, recently, for, since.</li>
        </ul>
      `
    },
    {
      name: 'Present Perfect Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Present Perfect Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I have been working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Describes an action that started in the past and either is still continuing in the present or has just recently stopped, with its results or effects still evident. It emphasizes the <strong>duration</strong> of the activity.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Action Continuing to Present (emphasizing duration):</strong><br><em>"I <strong>have been working</strong> here for five years." (Still working here)</em><br><em>"She <strong>has been working</strong> on this project since January."</em></li>
          <li><strong>Recently Stopped Action with Present Result (emphasizing duration):</strong><br><em>"I'm tired because I <strong>have been working</strong> all night."</em><br><em>"My eyes hurt; I <strong>have been working</strong> on the computer for hours."</em></li>
          <li><strong>Asking about Duration:</strong><br><em>"How long <strong>have</strong> you <strong>been working</strong> on that proposal?"</em></li>
        </ul>
      `
    }
  ],
  presentSummaryTable: {
    title: 'Summary Table: Present Time & Present Relevance',
    headers: ['Tense/Structure', 'Example Sentence', 'Primary Use/Focus', 'Time Frame/Nuance'],
    rows: [
        ['Simple Present', 'She <strong>works</strong> as a doctor.', 'Habits, routines, general truths, facts, professions, scheduled future events.', 'General present, regular occurrences, fixed future.'],
        ['Present Continuous', 'I <strong>am working</strong> on this task now.', 'Action happening now, temporary ongoing activity, future arrangements.', 'At the moment of speaking, around the present, near future (planned).'],
        ['Present Perfect', 'We <strong>have eaten</strong> at that cafe before.', 'Past action with present relevance/result, experience up to now, recently completed action.', 'Unspecified past time connected to present.'],
        ['Present Perfect Continuous', 'They <strong>have been working</strong> since morning.', 'Duration of an action started in past & continuing, or just stopped with present results.', 'From a point in the past up to the present (emphasizes duration).']
    ]
  },

  pastTime: [
    {
      name: 'Simple Past',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Simple Past Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I ate")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Indicates that an action happened at a <strong>specific point in the past</strong> and is now completed. The focus is on the fact that the action occurred. It's often used when the specific time of the action is mentioned or implied.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
            <li><em>"I <strong>ate</strong> breakfast at 7 AM." (Specific time mentioned)</em></li>
            <li><em>"She asked if I was hungry, and I said I <strong>ate</strong> earlier." (Implied past time)</em></li>
            <li><strong>Signal Words Often Used:</strong> yesterday, last week, at 2 PM, ago, in 2010.</li>
        </ul>
      `
    },
    {
      name: 'Past Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Past Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I was working," "They were playing")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Actions in Progress at a Specific Past Time:</strong> Describes an action that was ongoing at a particular moment in the past.<br><em>"At 8 PM last night, I <strong>was watching</strong> a movie."</em></li>
          <li><strong>Background Information/Setting the Scene:</strong> Describes an ongoing action that was interrupted by another shorter past action (often in Simple Past).<br><em>"I <strong>was walking</strong> home when I saw an accident."</em></li>
          <li><strong>Two Parallel Actions in the Past:</strong> Describes two or more actions happening simultaneously in the past.<br><em>"While I <strong>was cooking</strong>, my children <strong>were doing</strong> their homework."</em></li>
        </ul>
      `
    },
    {
      name: 'Past Perfect',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Past Perfect Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I had eaten")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Indicates that an action was <strong>completed before another specific point or action in the past</strong>. It establishes a sequence of past events, showing which one happened earlier.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><em>"By the time the guests arrived, I <strong>had already eaten</strong> dinner." (Eating dinner happened before the guests arrived.)</em></li>
          <li><em>"I wasn't hungry at the party because I <strong>had eaten</strong> a large meal beforehand."</em></li>
          <li><strong>Signal Words Often Used:</strong> before, by the time, already (with past reference).</li>
        </ul>
      `
    },
    {
      name: 'Past Perfect Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Past Perfect Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I had been working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Describes an action that was continuously in progress in the past <strong>before another past action or a specific time in the past</strong>. It emphasizes the <strong>duration</strong> of the first past action leading up to the second past event.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><em>"By the time he finally arrived, I <strong>had been working</strong> for two hours." (Working for two hours was ongoing and completed before he arrived.)</em></li>
          <li><em>"She was exhausted because she <strong>had been working</strong> a double shift." (The continuous working happened before she felt exhausted.)</em></li>
          <li><em>"They <strong>had been working</strong> on the old system for years before they finally upgraded it."</em></li>
        </ul>
      `
    }
  ],
  pastSummaryTable: {
    title: 'Summary Table: Past Time',
    headers: ['Tense/Structure', 'Example Sentence', 'Primary Use/Focus', 'Time Frame/Nuance'],
    rows: [
        ['Simple Past', 'He <strong>visited</strong> Paris last year.', 'Completed action at a specific past time.', 'Definite point in the past.'],
        ['Past Continuous', 'She <strong>was reading</strong> when the phone rang.', 'Action in progress at a specific past time, background action interrupted, parallel actions.', 'Ongoing at a past moment.'],
        ['Past Perfect', 'They <strong>had finished</strong> dinner before I arrived.', 'Action completed before another past action or time.', 'Earlier of two past actions (sequencing).'],
        ['Past Perfect Continuous', 'I <strong>had been waiting</strong> for an hour when he came.', 'Duration of a past action ongoing before another past action or time.', 'Duration leading up to a past point (emphasizes continuity before another past event).']
    ]
  },

  futureTime: [
    {
      name: 'Simple Present (for Future)',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Simple Present Tense (for Future Events)</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "My flight arrives at 6 PM")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Used for future events that are <strong>scheduled, timetabled, or part of a fixed plan</strong>. It implies a high degree of certainty.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><em>"My flight <strong>arrives</strong> at 6:00 PM next Tuesday."</em></li>
          <li><em>"The conference <strong>begins</strong> on Monday morning."</em></li>
          <li><em>"What time <strong>does</strong> the movie <strong>start</strong> tonight?"</em></li>
        </ul>
      `
    },
    {
      name: 'Simple Future ("will")',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Simple Future Tense ("will")</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I will arrive," "I will drive")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>A common and versatile way to express future actions. It can indicate:</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Prediction:</strong><br><em>"I think it <strong>will rain</strong> later."</em></li>
          <li><strong>Spontaneous Decision (made at the moment of speaking):</strong><br><em>"The phone is ringing, I <strong>will get</strong> it."</em></li>
          <li><strong>Promise or Offer:</strong><br><em>"I <strong>will arrive</strong> by noon, I promise."</em></li>
          <li><strong>General Intention:</strong><br><em>"She <strong>will be</strong> happy to see you."</em></li>
        </ul>
      `
    },
    {
      name: '"be going to"',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">"Be going to" Structure</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I am going to work," "She is going to arrive")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>A very common way to talk about the future.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Prior Plans/Intentions:</strong> When a decision about a future action has already been made.<br><em>"We <strong>are going to move</strong> to a new city next year."</em><br><em>"I <strong>am going to visit</strong> my grandparents this weekend."</em></li>
          <li><strong>Predictions Based on Present Evidence:</strong> When there's something in the present situation that suggests what will happen.<br><em>"Look at those dark clouds! It <strong>is going to rain</strong>."</em><br><em>"He's driving too fast. He <strong>is going to have</strong> an accident."</em></li>
        </ul>
      `
    },
    {
      name: 'Future Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Future Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I will be arriving," "I will be working")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Indicates an action that will be <strong>in progress at a specific time in the future</strong>. It can also be used for:</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Planned Future Arrangements (can sound more formal/polite):</strong><br><em>"The delegates <strong>will be arriving</strong> throughout the morning."</em></li>
          <li><strong>Action in Progress at a Future Moment:</strong><br><em>"This time tomorrow, I <strong>will be arriving</strong> in London."</em><br><em>"Don't call between 7 and 8 PM, as we <strong>will be having</strong> dinner then."</em></li>
          <li><strong>Polite Inquiry about Plans:</strong><br><em>"<strong>Will</strong> you <strong>be joining</strong> us for the meeting?"</em></li>
        </ul>
      `
    },
    {
      name: 'Future Perfect',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Future Perfect Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I will have driven," "I will have finished")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Describes an action that will be <strong>completed before a specific point in time in the future</strong> or before another future action occurs. It emphasizes the completion or achievement of an action from a future perspective.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><strong>Action Completed by a Future Deadline/Moment:</strong><br><em>"By 8 PM tonight, I <strong>will have driven</strong> 300 miles."</em><br><em>"Next month, she <strong>will have worked</strong> here for five years."</em></li>
          <li><strong>Action Completed Before Another Future Event (sequencing):</strong><br><em>"By the time you finish cooking, I <strong>will have set</strong> the table."</em><br><em>"They <strong>will have finished</strong> their exams before the summer holidays begin."</em></li>
        </ul>
      `
    },
    {
      name: 'Future Perfect Continuous',
      details: `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Future Perfect Continuous Tense</h3>
        <p style="margin-bottom: 1em;"><em>(e.g., "I will have been working," "She will have been studying")</em></p>
        <strong style="font-size: 1.1em;">Meaning & Usage:</strong>
        <p>Emphasizes the <strong>duration</strong> of an action that will continue up to a specific point in the future.</p>
        <ul style="list-style-position: inside; padding-left: 0; margin-top: 0.5em; display: grid; gap: 1em;">
          <li><em>"By next June, I <strong>will have been working</strong> here for ten years." (Highlights the ten-year duration leading up to next June.)</em></li>
          <li><em>"When he retires next month, he <strong>will have been teaching</strong> for over 40 years."</em></li>
          <li><em>"By the time the movie ends, we <strong>will have been watching</strong> it for three hours."</em></li>
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
        ['Future Continuous', 'This time next week, I <strong>will be relaxing</strong> on a beach.', 'Action in progress at a future time, planned arrangements (can be more polite).', 'Emphasizes ongoing nature at a future point, or a definite planned activity.'],
        ['Future Perfect', 'By 2030, they <strong>will have built</strong> the new bridge.', 'Action completed before another future point/event.', 'Focus on completion/achievement from a future perspective, sequencing future events.'],
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