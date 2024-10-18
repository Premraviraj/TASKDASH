
const MaxResult = () => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold mb-4">Max. result</h3>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold">16</span>
          <span className="text-gray-400 text-xl">/30</span>
        </div>
        <div className="text-sm text-gray-400">25 nov</div>
      </div>
      <p className="text-sm text-gray-400 mt-2">Finished tasks</p>
      <div className="mt-4 h-16 bg-gray-800 rounded-lg overflow-hidden">
        {/* Add a graph or chart here */}
      </div>
    </div>
  );
};

export default MaxResult;