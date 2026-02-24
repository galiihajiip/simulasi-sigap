const StatsCards = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* Congestion Risk */}
            <div className="bg-surface-dark p-5 rounded-lg border border-[#2a3441] flex flex-col justify-between hover:border-[#3f4c61] transition-colors">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-slate-400 text-sm font-medium">Congestion Risk</p>
                    <span className="material-symbols-outlined text-red-500 bg-red-500/10 p-1 rounded">trending_up</span>
                </div>
                <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold text-white">High</p>
                    <p className="text-red-500 text-sm font-medium mb-1">+12%</p>
                </div>
                <div className="w-full bg-[#2a3441] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: '78%' }}></div>
                </div>
            </div>

            {/* Peak Forecast */}
            <div className="bg-surface-dark p-5 rounded-lg border border-[#2a3441] flex flex-col justify-between hover:border-[#3f4c61] transition-colors">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-slate-400 text-sm font-medium">Peak Forecast</p>
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded">schedule</span>
                </div>
                <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold text-white">17:45</p>
                    <p className="text-slate-400 text-sm font-medium mb-1">Today</p>
                </div>
                <p className="text-xs text-slate-500 mt-3">Based on historical data</p>
            </div>

            {/* Active Recs */}
            <div className="bg-surface-dark p-5 rounded-lg border border-[#2a3441] flex flex-col justify-between hover:border-[#3f4c61] transition-colors">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-slate-400 text-sm font-medium">Active Recs</p>
                    <span className="material-symbols-outlined text-yellow-400 bg-yellow-400/10 p-1 rounded">lightbulb</span>
                </div>
                <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold text-white">3</p>
                    <p className="text-yellow-400 text-sm font-medium mb-1">Pending</p>
                </div>
                <div className="flex -space-x-2 mt-3">
                    <div className="h-6 w-6 rounded-full bg-slate-600 border border-surface-dark flex items-center justify-center text-[10px] text-white">1</div>
                    <div className="h-6 w-6 rounded-full bg-slate-600 border border-surface-dark flex items-center justify-center text-[10px] text-white">2</div>
                    <div className="h-6 w-6 rounded-full bg-slate-600 border border-surface-dark flex items-center justify-center text-[10px] text-white">3</div>
                </div>
            </div>

            {/* System Confidence */}
            <div className="bg-surface-dark p-5 rounded-lg border border-[#2a3441] flex flex-col justify-between hover:border-[#3f4c61] transition-colors">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-slate-400 text-sm font-medium">System Confidence</p>
                    <span className="material-symbols-outlined text-green-500 bg-green-500/10 p-1 rounded">verified</span>
                </div>
                <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-green-500 text-sm font-medium mb-1">Optimal</p>
                </div>
                <div className="w-full bg-[#2a3441] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '98%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default StatsCards;
