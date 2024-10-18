import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react';
import ProjectsCompleted from '../components/dashboard/ProjectsCompleted';
import TasksProgress from '../components/dashboard/TasksProgress';
import MaxResult from '../components/dashboard/MaxResult';
import ShareProgress from '../components/dashboard/ShareProgress';
import NovemberTotals from '../components/dashboard/NovemberTotals';

const Dashboard = () => {
  const [selectedWeek, setSelectedWeek] = useState('This Week');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectsCompleted selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} />
        <TasksProgress />
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-purple-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <h3 className="text-sm text-gray-500">Let's start</h3>
                <h2 className="text-2xl font-bold">Experience the power of seamless task management</h2>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="text-purple-600">
                <ChevronRight className="w-6 h-6" />
              </button>
              <button className="text-purple-600">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <MaxResult />
            <ShareProgress />
          </div>
        </div>
        <NovemberTotals />
      </div>
    </div>
  );
};

export default Dashboard;