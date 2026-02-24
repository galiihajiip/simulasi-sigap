const MetricsRow = () => {
    const metrics = [
        {
            icon: 'queue_music',
            label: 'Queue Length',
            value: '45 cars',
            change: (
                <p className="text-xs text-red-400 mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12% vs avg
                </p>
            ),
        },
        {
            icon: 'timer',
            label: 'Wait Time',
            value: '12 mins',
            change: <p className="text-xs text-yellow-400 mt-1">Moderate delay</p>,
        },
        {
            icon: 'wb_sunny',
            label: 'Weather',
            value: '30°C',
            change: <p className="text-xs text-slate-400 mt-1">Sunny, Clear visibility</p>,
        },
        {
            icon: 'speed',
            label: 'Avg Speed',
            value: '15 km/h',
            change: <p className="text-xs text-red-400 mt-1">-5 km/h slowing</p>,
        },
        {
            icon: 'car_crash',
            label: 'Accidents',
            value: '0',
            change: <p className="text-xs text-green-500 mt-1">None reported</p>,
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map((metric) => (
                <div
                    key={metric.label}
                    className="bg-surface-dark p-4 rounded-lg border border-[#2a3441] hover:bg-[#232a3b] transition-colors"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">{metric.icon}</span>
                        <p className="text-slate-400 text-xs font-medium uppercase">{metric.label}</p>
                    </div>
                    <p className="text-xl font-bold text-white">{metric.value}</p>
                    {metric.change}
                </div>
            ))}
        </div>
    );
};

export default MetricsRow;
