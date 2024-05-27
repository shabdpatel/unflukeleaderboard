import React from 'react';
import Leaderboard from './leaderboard/Leaderboard';
import './index.css';

function App() {
  return (
    <div className="items-center justify-center min-h-screen w-450 bg-gray-100">
      <Leaderboard style={{ height: '100%' }} />
    </div>
  );
}

export default App;
