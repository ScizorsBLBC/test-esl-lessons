import React from 'react';
import DetailCard from './DetailCard';

const ContentBlockRenderer = ({ block }) => {
  switch (block.type) {
    case 'text':
      return <DetailCard content={block.data.htmlContent} />;
    case 'quiz':
      return (
        <div>
          <h3>Quiz Component</h3>
          <p>Quiz functionality will be implemented in phase 2.</p>
          <pre>{JSON.stringify(block.data, null, 2)}</pre>
        </div>
      );
    case 'fillInTheBlanks':
      return (
        <div>
          <h3>Fill in the Blanks Component</h3>
          <p>Fill-in-the-blanks functionality will be implemented in phase 2.</p>
          <pre>{JSON.stringify(block.data, null, 2)}</pre>
        </div>
      );
    case 'flashcard':
      return (
        <div>
          <h3>Flashcard Component</h3>
          <p>Flashcard functionality will be implemented in phase 2.</p>
          <pre>{JSON.stringify(block.data, null, 2)}</pre>
        </div>
      );
    case 'youtubeEmbed':
      return (
        <div>
          <h3>YouTube Embed Component</h3>
          <p>YouTube embed functionality will be implemented in phase 2.</p>
          <pre>{JSON.stringify(block.data, null, 2)}</pre>
        </div>
      );
    case 'chart':
      return (
        <div>
          <h3>Chart Component</h3>
          <p>Chart functionality will be implemented in phase 2.</p>
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
