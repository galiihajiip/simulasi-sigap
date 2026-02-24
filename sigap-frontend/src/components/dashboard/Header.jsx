const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#2a3441] bg-[#111722]/95 backdrop-blur supports-[backdrop-filter]:bg-[#111722]/60">
            <div className="flex h-16 items-center px-6 gap-6">
                {/* Logo */}
                <div className="flex items-center gap-3 mr-4">
                    <div className="size-8 text-primary">
                        <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">TrafficAI</h1>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* Right side: Nav + Actions */}
                <div className="flex items-center gap-6">
                    {/* Navigation - positioned right next to notification bell */}
                    <nav className="hidden md:flex items-center gap-1">
                        <a className="px-4 py-2 text-sm font-medium text-primary border-b-2 border-primary transition-colors" href="#">
                            Dashboard
                        </a>
                        <a className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-[#2a3441] transition-colors" href="#">
                            Analytics
                        </a>
                        <a className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-[#2a3441] transition-colors" href="#">
                            Live Map
                        </a>
                        <a className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-[#2a3441] transition-colors" href="#">
                            Settings
                        </a>
                    </nav>

                    {/* Notification & Profile */}
                    <div className="flex items-center gap-4 border-l border-[#2a3441] pl-6">
                        <button className="relative rounded-lg p-2 text-slate-400 hover:text-white hover:bg-[#2a3441] transition-colors">
                            <span className="material-symbols-outlined text-[24px]">notifications</span>
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                        <div className="h-8 w-[1px] bg-[#2a3441]"></div>
                        <button className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-lg hover:bg-[#2a3441] transition-colors group">
                            <div
                                className="h-8 w-8 rounded-full bg-cover bg-center border border-[#2a3441]"
                                style={{
                                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAamexfWBjfdzds2MtWSqTwkCukLnT-w0srNbt9eMjWUraYEuGkTeEMjt4aCE89gbnjemlkKtbBBLY8A28hL1sd_T2rZ7iKEqCCVkN7Mk02U9Y4C496xQv9412oyZLwVohVXOJcDcAcy_d1wmD14po57RbkPUH86pZ7njJ-E4XoKwEdjN68vvyrLdFJR82FCfD3wXHcYMnpuBj2nh2fXv-RahBIlFbU2iTVyP6keyjuLOkWYGKgDrR1wvNLHlFgOuYBs7C-fbQrmzv2')`,
                                }}
                            ></div>
                            <div className="hidden lg:block text-left">
                                <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Alex Morgan</p>
                                <p className="text-xs text-slate-400">Admin</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-500 text-[20px]">expand_more</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
