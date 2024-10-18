import { ChevronDown, MoreHorizontal } from 'lucide-react';

const ProjectsCompleted = ({ selectedWeek, setSelectedWeek }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Projects completed</h2>
        <div className="relative">
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>This Week</option>
            <option>Last Week</option>
            <option>This Month</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="relative pt-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-500">Total progress</span>
          <span className="text-sm text-gray-500">100%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded">
          <div className="h-2 bg-purple-500 rounded" style={{ width: '55%' }}></div>
        </div>
        <div className="absolute top-0 left-1/4 w-px h-4 bg-gray-300"></div>
        <div className="absolute top-0 left-1/2 w-px h-4 bg-gray-300"></div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                <span className="text-blue-500 text-lg">🏪</span>
              </div>
              <span className="text-sm">Online-store rebranding</span>
            </div>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
          <div className="mt-2 text-2xl font-bold">16<span className="text-gray-400 text-lg">/20</span></div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                <span className="text-purple-500 text-lg">🚀</span>
              </div>
              <span className="text-sm">Launch campaign</span>
            </div>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
          <div className="mt-2 text-2xl font-bold">4<span className="text-gray-400 text-lg">/6</span></div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold">6.5</span>
          <span className="text-gray-500 ml-2">Average score</span>
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};

export default ProjectsCompleted;