import React from 'react';
import Sidebar from './components/Sidebar';
import ApplicantsHeader from './components/ApplicantsHeader';
import ApplicantsContent from './components/ApplicantsContent';

function App() {
  return (
    <div className="flex h-screen bg-custom-gray">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 p-6">
          <ApplicantsHeader />
        </div>
        <div className="flex-1 bg-white rounded-tl-3xl border-l border-gray-200 overflow-hidden">
          <ApplicantsContent />
        </div>
      </div>
    </div>
  );
}

export default App;
