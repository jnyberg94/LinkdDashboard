import React from 'react';
import { Plus } from 'lucide-react';

const ApplicantsHeader = () => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-base font-bold text-black">Applicants</h1>
        <button className="bg-custom-dark-black text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-opacity-90">
          <Plus size={16} />
          <span>Create Listing</span>
        </button>
      </div>
    </div>
  );
};

export default ApplicantsHeader;
