const CameraFeed = ({ name, location, imageUrl, status, speed }) => {
    return (
        <div className="group relative aspect-video bg-surface-dark rounded-lg overflow-hidden border border-[#2a3441] shadow-lg">
            {/* Background image with hover zoom */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

            {/* LIVE indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-red-500 live-indicator"></span>
                <span className="text-xs font-bold text-white tracking-wider bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30">
                    LIVE
                </span>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                    <p className="text-white font-bold text-sm">{name}</p>
                    {status && speed && (
                        <p className="text-slate-300 text-xs mt-0.5">
                            {status} • {speed}
                        </p>
                    )}
                    {status && !speed && (
                        <p
                            className={`text-xs mt-0.5 font-medium ${status === 'Slow Traffic' ? 'text-yellow-400' : 'text-slate-300'
                                }`}
                        >
                            {status}
                        </p>
                    )}
                </div>
                <span className="material-symbols-outlined text-white/70 hover:text-white cursor-pointer">fullscreen</span>
            </div>
        </div>
    );
};

export default CameraFeed;
