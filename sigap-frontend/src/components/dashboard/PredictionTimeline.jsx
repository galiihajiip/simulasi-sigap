const PredictionTimeline = () => {
    return (
        <div className="bg-surface-dark rounded-lg border border-[#2a3441] p-6 mb-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white">Prediction Timeline</h3>
                    <p className="text-slate-400 text-sm">Projected vehicle density over the next 4 hours</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-slate-400/50"></span>
                        <span className="text-slate-400">Historical</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                        <span className="text-white font-medium">Predicted</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
                        <span className="text-slate-400">Congestion Zone</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="relative h-64 w-full border-l border-b border-[#2a3441]">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full h-px bg-[#2a3441]/50"></div>
                    <div className="w-full h-px bg-[#2a3441]/50"></div>
                    <div className="w-full h-px bg-[#2a3441]/50"></div>
                    <div className="w-full h-px bg-[#2a3441]/50"></div>
                    <div className="w-full h-px bg-transparent"></div>
                </div>

                {/* Congestion Risk Zone */}
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-red-500/5 border-l border-b border-red-500/10 rounded-bl-xl pointer-events-none flex items-end justify-start p-2">
                    <span className="text-xs text-red-500/50 font-bold uppercase">Congestion Risk Zone</span>
                </div>

                {/* SVG Chart */}
                <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                    {/* Historical dashed line */}
                    <path
                        className="opacity-50"
                        d="M0,200 C50,190 100,180 150,160 C200,140 250,150 300,140 C350,130 400,110 450,120"
                        fill="none"
                        stroke="#64748b"
                        strokeDasharray="4 4"
                        strokeWidth="2"
                    />

                    {/* Area gradient definition */}
                    <defs>
                        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#135bec" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#135bec" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Predicted area fill */}
                    <path
                        d="M450,120 C500,130 550,100 600,80 C650,60 700,50 750,55 C800,60 850,40 900,30 C950,20 1000,10 1200,5"
                        fill="url(#areaGradient)"
                        stroke="none"
                    />

                    {/* Predicted line */}
                    <path
                        d="M450,120 C500,130 550,100 600,80 C650,60 700,50 750,55 C800,60 850,40 900,30 C950,20 1000,10 1200,5"
                        fill="none"
                        stroke="#135bec"
                        strokeLinecap="round"
                        strokeWidth="3"
                    />

                    {/* Now indicator line */}
                    <line
                        className="opacity-30"
                        stroke="#fff"
                        strokeDasharray="4 2"
                        strokeWidth="1"
                        x1="450"
                        x2="450"
                        y1="0"
                        y2="256"
                    />

                    {/* Now dot */}
                    <circle cx="450" cy="120" fill="#fff" r="4" />
                </svg>

                {/* Now label */}
                <div className="absolute top-[125px] left-[460px] bg-[#2a3441] text-xs px-2 py-1 rounded text-white border border-slate-600 shadow-lg z-10 hidden lg:block">
                    Now
                </div>
            </div>

            {/* Time labels */}
            <div className="flex justify-between text-xs text-slate-500 mt-2 px-2">
                <span>14:00</span>
                <span>15:00</span>
                <span>16:00</span>
                <span>17:00</span>
                <span>18:00</span>
            </div>
        </div>
    );
};

export default PredictionTimeline;
