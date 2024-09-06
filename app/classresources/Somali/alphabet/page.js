import React from 'react';

const ExeContent = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/SomaliLetters/index.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="eXeLearning Content"
      />
    </div>
  );
};

export default ExeContent;
