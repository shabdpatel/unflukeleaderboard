import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const leaderboardData = [
    { rank: 1, name: 'Selling with re entr', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winRate: '0.65', price: '-', action: 'View', slippage: 0 },
    { rank: 2, name: 'strategy_name', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winRate: '0.64', price: 500, action: 'Buy', slippage: 0.5 },
    { rank: 3, name: 'Based on premium', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winRate: '0.64', price: '-', action: 'View', slippage: 0 },
    { rank: 4, name: 'strategy_name', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winRate: '0.64', price: '400', action: 'View', slippage: 0 },
    { rank: 5, name: 'Based on premium', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winRate: '0.64', price: '500', action: 'View', slippage: 0 },
    { rank: 6, name: 'strategy_name', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winRate: '0.64', price: '500', action: 'View', slippage: 0 },
    { rank: 7, name: 'Based on premium', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winRate: '0.64', price: '600', action: 'View', slippage: 0 },
    // Add more data as needed
];

const Leaderboard = () => {
    const [slippage, setSlippage] = useState(0);

    const topStrategies = leaderboardData.slice(0, 5);
    const chartData = {
        labels: topStrategies.map(strategy => strategy.name),
        datasets: [
            {
                label: 'Overall Profit',
                data: topStrategies.map(strategy => strategy.overallProfit),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="flex flex-col items-center w-450 bg-gray-900 p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-center text-white">LeaderBoards</h1>
            <div className="flex justify-between items-center mb-4 w-full">
                <h2 className="text-xl font-bold text-white">Basic Backtest</h2>
                <div className="relative">
                    <label htmlFor="slippage" className="mr-2 text-white">Slippage</label>
                    <select
                        id="slippage"
                        value={slippage}
                        onChange={(e) => setSlippage(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1"
                    >
                        <option value={0}>0%</option>
                        <option value={0.5}>0.5%</option>
                        <option value={1}>1%</option>
                        <option value={1.5}>1.5%</option>
                        <option value={2}>2%</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div className="w-2/3 mr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leaderboardData.map((user) => (
                            <div
                                key={user.rank}
                                className="bg-gray-700 p-6 rounded-lg shadow-md transform transition duration-300 hover:bg-gray-600 hover:shadow-lg hover:scale-105"
                            >
                                <h3 className="text-xl font-bold mb-2 text-white">Rank {user.rank}</h3>
                                <p className="text-gray-300 mb-1"><span className="font-semibold text-white">Name:</span> {user.name}</p>
                                <p className="text-gray-300 mb-1"><span className="font-semibold text-white">Calmar Ratio:</span> <span className="text-green-500">↑ {user.calmarRatio}</span></p>
                                <p className="text-gray-300 mb-1"><span className="font-semibold text-white">Overall Profit:</span> {user.overallProfit}</p>
                                <p className="text-gray-300 mb-1"><span className="font-semibold text-white">Avg. Daily Profit:</span> {user.avgDailyProfit}</p>
                                <p className="text-gray-300 mb-1"><span className="font-semibold text-white">Win % (Day):</span> {user.winRate}</p>
                                <p className="text-gray-300 mb-1"><span className="font-semibold text-white">Price (Rs):</span> {user.price}</p>
                                <button className="text-blue-500 hover:underline">{user.action}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="w-full mt-8">
                        <h2 className="text-xl font-bold text-white mb-4">Overall Profit Distribution</h2>
                        <Pie data={chartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
