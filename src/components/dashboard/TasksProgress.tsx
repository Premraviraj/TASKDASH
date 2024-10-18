import { ChevronRight } from 'lucide-react';

const TasksProgress = () => {
  const tasks = [
    { name: 'Prototype', progress: 51, change: '+5%' },
    { name: 'Promo', progress: 26, change: '-' },
    { name: 'Wireframes', progress: 55, change: '+10%' },
    { name: 'Branding', progress: 17, change: '-6%' },
  ];

  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tasks progress</h2>
        <ChevronRight className="w-6 h-6" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {tasks.map((task, index) => (
          <div key={index}>
            <div className="text-sm mb-2 flex justify-between">
              <span>{task.name}</span>
              <span
                className={
                  task.change.startsWith('+')
                    ? 'text-green-500'
                    : 'text-red-500'
                }
              >
                {task.change}
              </span>
            </div>
            <div className="h-24 bg-gray-800 rounded relative">
              <div
                className="absolute bottom-0 left-0 right-0 bg-white"
                style={{ height: `${task.progress}%` }}
              ></div>
            </div>
            <div className="text-center mt-2">{task.progress}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksProgress;
