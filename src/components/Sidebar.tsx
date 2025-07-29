import React from 'react';
import { Home, FileText, Users, BarChart3, Settings, HelpCircle, Search } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-custom-black rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">L</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-black">linkd</h1>
            <p className="text-xs text-custom-darker-gray">admin@linkd.com</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm text-black">Quick actions</span>
          <div className="flex items-center space-x-1 bg-custom-lighter-gray rounded px-2 py-1">
            <span className="text-xs text-custom-medium-gray">⌘</span>
            <span className="text-xs text-custom-medium-gray">K</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50">
              <Home size={16} className="text-custom-dark-gray" />
              <span className="text-sm text-black">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50">
              <FileText size={16} className="text-custom-dark-gray" />
              <span className="text-sm text-black">Job listings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <Users size={16} className="text-custom-dark-gray" />
                <span className="text-sm text-black">Candidates</span>
              </div>
              <span className="bg-custom-light-green text-custom-green text-xs px-2 py-1 rounded">New</span>
            </a>
          </li>
        </ul>

        <div className="border-t border-gray-200 my-4"></div>

        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50">
              <BarChart3 size={16} className="text-custom-dark-gray" />
              <span className="text-sm text-black">Reports</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50">
              <Settings size={16} className="text-custom-dark-gray" />
              <span className="text-sm text-black">Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Help Center */}
      <div className="px-4 py-4 border-t border-gray-200">
        <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50">
          <HelpCircle size={16} className="text-custom-dark-gray" />
          <span className="text-sm text-black">Help Center</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
