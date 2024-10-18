import { Share2, MoreHorizontal } from 'lucide-react';

const ShareProgress = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Share progress</h3>
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <img src="https://i.pravatar.cc/40?img=2" alt="User" className="w-10 h-10 rounded-full" />
        <div className="flex-1">
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="flex items-center text-blue-500">
          <Share2 className="w-4 h-4 mr-1" />
          <span className="text-sm">Share</span>
        </button>
        <button className="text-sm text-gray-500">Copy link</button>
      </div>
    </div>
  );
};

export default ShareProgress;