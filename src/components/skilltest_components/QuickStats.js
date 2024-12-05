const QuickStats = ({ stats }) => {
  return (
    <div className="border-y rounded-md w-full p-4">
      <h2 className="font-bold text-lg mb-4">Quick Statistics</h2>
      <div className="flex justify-between sm:items-center sm:flex-row flex-col">
        <div className="flex items-center space-x-4 justify-center sm:border-r sm:pr-6 border-gray-300">
          <div className="h-10 w-14">
            <img src="/trophy.jpg" alt="Rank Icon" />
          </div>
          <div>
            <h3 className="text-md font-bold">{stats.rank}</h3>
            <p className="text-sm text-gray-600">YOUR RANK</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:border-r justify-center sm:px-6 border-gray-300">
          <img src="/percentie.png" alt="Percentile Icon" className="h-10 w-8" />
          <div>
            <h3 className="text-md font-bold">{stats.percentile}%</h3>
            <p className="text-sm text-gray-600">PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 justify-center sm:pl-6">
          <img src="/check.jpg" alt="Score Icon" className="h-18 w-12" />
          <div>
            <h3 className="text-md font-bold">{stats.currentScore} / 15</h3>
            <p className="text-sm text-gray-600">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuickStats;
