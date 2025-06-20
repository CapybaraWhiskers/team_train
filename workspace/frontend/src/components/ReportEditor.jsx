import React, { useState } from 'react';

export default function ReportEditor() {
  const [content, setContent] = useState('');

  const submitReport = async () => {
    await fetch('/report', { method: 'POST', body: JSON.stringify({ content }) });
  };

  return (
    <div>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={submitReport}>Submit Report</button>
    </div>
  );
}
