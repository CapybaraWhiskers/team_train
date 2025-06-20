import React from 'react';
import ClockButton from './components/ClockButton.jsx';
import ReportEditor from './components/ReportEditor.jsx';
import Dashboard from './components/Dashboard.jsx';

export default function App() {
  return (
    <div>
      <h1>Attendance Dashboard</h1>
      <ClockButton />
      <Dashboard />
      <ReportEditor />
    </div>
  );
}
