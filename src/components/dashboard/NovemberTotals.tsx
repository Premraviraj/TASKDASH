import { ChevronDown, Check } from 'lucide-react';

const NovemberTotals = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const dates = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1];

  return (
    <div className="bg-orange-500 text-white rounded-lg p-6 shadow col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">November totals</h2>
        <ChevronDown className="w-6 h-6" />
      </div>
      <div className="flex items-baseline space-x-4 mb-6">
        <span className="text-5xl font-bold">14</span>
        <span className="text-xl">Days</span>
        <div className="bg-white bg-opacity-20 rounded-full px-2 py-1 flex items-center">
          <Check className="w-4 h-4 mr-1" />
          <span className="text-sm">Completed</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-sm mb-2">{day}</div>
            {dates.map((date, dateIndex) => (
              <div
                key={dateIndex}
                className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                  Math.random() > 0.5 ? 'bg-white bg-opacity-20' : ''
                }`}
              >
                {date}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NovemberTotals;