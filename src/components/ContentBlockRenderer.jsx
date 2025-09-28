import React from 'react';
import DetailCard from './DetailCard';
import QuizComponent from './Quiz';
import FillInTheBlanks from './FillInTheBlanks';
import Flashcard from './Flashcard';

const ContentBlockRenderer = ({ block }) => {
  switch (block.type) {
    case 'text':
      return <DetailCard content={block.data.htmlContent} />;
    case 'quiz':
      return <QuizComponent quizData={block.data} />;
    case 'fillInTheBlanks':
      return <FillInTheBlanks data={block.data} />;
    case 'flashcard':
      return <Flashcard frontContent={block.data.front} backContent={block.data.back} />;
    case 'youtubeEmbed':
      return (
        <div>
          <h3>YouTube Embed Component</h3>
          <p>YouTube embed functionality will be implemented in future phases.</p>
          <pre>{JSON.stringify(block.data, null, 2)}</pre>
        </div>
      );
    case 'chart':
      return (
        <div>
          <h3>Chart Component</h3>
          <p>Chart functionality will be implemented in future phases.</p>
          <pre>{JSON.stringify(block.data, null, 2)}</pre>
        </div>
      );
    default:
      return (
        <div>
          <p style={{ color: 'red' }}>⚠️ Unsupported content type: {block.type}</p>
          <p>Block ID: {block.blockId}</p>
          <pre>{JSON.stringify(block.data, null, 2)}</pre>
        </div>
      );
  }
};

export default ContentBlockRenderer;
