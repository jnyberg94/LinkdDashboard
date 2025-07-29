import React from 'react';
import { Search, Settings, Sliders, Plus } from 'lucide-react';

const ApplicantsContent = () => {
  return (
    <div className="flex-1 p-6">
      {/* Controls */}
      <div className="flex items-center space-x-3 mb-8">
        <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Sliders size={14} />
          <span className="text-sm text-black">Display</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Settings size={14} />
          <span className="text-sm text-black">Settings</span>
        </button>
        <div className="flex-1 max-w-xs">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search applicants"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-base font-bold text-black mb-4">No applicants yet</h2>
          <p className="text-base text-black mb-8 max-w-sm">
            Start posting job listings to start receiving applications
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-custom-dark-black text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-opacity-90">
              <Plus size={16} />
              <span>Create Listing</span>
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-black hover:bg-gray-50">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsContent;
