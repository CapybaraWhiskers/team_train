import React from 'react';

export default function ClockButton() {
  const handleClock = async () => {
    await fetch('/attendance/clock-in', { method: 'POST' });
  };

  return (
    <button onClick={handleClock}>Clock In</button>
  );
}
