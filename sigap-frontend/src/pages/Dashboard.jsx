import Header from '../components/dashboard/Header';
import CameraFeed from '../components/dashboard/CameraFeed';
import AIRecommendations from '../components/dashboard/AIRecommendations';
import StatsCards from '../components/dashboard/StatsCards';
import PredictionTimeline from '../components/dashboard/PredictionTimeline';
import MetricsRow from '../components/dashboard/MetricsRow';

const cameraFeeds = [
    {
        name: 'Cam 1 - Main St.',
        location: 'Main St.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCPNTQ7LPRPRg8B095T_AlgZDwilQvpLt8C-T8-7uBlvJl9OkueEFiaFpuXAinxaMP8QTXQ1ADcEN10YzxUU3xZZe4wystY5CaVogont9j49zeECVvj7I5YENUGIt40KTjb68TqxVoSm4Y0ywM4xzzHMAuL2QZe2i59QCzyCxB1aFJ7l721aPhfFLLovRVbjziir15JMadleY1TAoUYMfqol2HB2Bzv91oIpPDkKkqd4F24ZE_NEBN6bx4CO_wvbx_rxR6qG2Ryk8JI',
        status: 'Moderate Flow',
        speed: '45 km/h',
    },
    {
        name: 'Cam 2 - 5th Ave',
        location: '5th Ave',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC5qj4qrVO6bk4elHjX0Uu4Eqt4UxP7X9YPphNYi0Zl692KgaHMGfmSIMTIyA3hrdDnl15rDLORmPRN8a_i_ZxcaHRb0I9Do-TVTmaIqPWZZKKTZeFVWIl9uZr4jC5kZ74-P2yl7xlpTNXIp-HcgyZLeYvPAqcARxw45OxygzeEsyFB4o1OVZ_fu_iK0JNMthM-LRuwKyTFYwoHJ-h9ymD-XR_zjdsWS2Q2TNgueKjeTL4Kg-dxkT4cmo-euFm4zhjD6qOJhzZs8Gjd',
        status: null,
        speed: null,
    },
    {
        name: 'Cam 3 - Broadway',
        location: 'Broadway',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDiXldbEvSZh6jHg57eJB-fZZVIF_692F3r5st1K8XJGZ-87NZBOWi_jQEWH_4AR58AmlIdjki4KgJlR4RuFVi_XeRpLhGgRPAaIRAut9ysKLDxYmwFhapVI0wB_24ratVrzvOHIbHL0-jsjsXcKLp0mAe6zjua3AXQZfWpa32FcpeUjfyDF3I_TMunEBqVCqUXow3kLXoDdUgM2XAAkD-LY5hN6nq8kkcMqFgRLQZGq9w2d_WNCdxAmB-9pv5EOE6fj-EUd04MAXQP',
        status: 'Free Flow',
        speed: '60 km/h',
    },
    {
        name: 'Cam 4 - Market St.',
        location: 'Market St.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCk_8nJkzzYva_zpd64YnB19k6t92zBRT6FWFo0Smf991rKfKZx6uJkscEv9lJWNebr5mr9mMrF8qwBB16RcASEip3PicaItdp_nMIX6IWv3KKqrub5IRIiHZCUGxXWWsZiPIjahNErBYTvdwo31xX5PP7WJKvgUbxynYMBrAEDzH9U9hxQ9ecJdIsTptv3dpM2n9Snp2lYQE7CbcVlc5G5-RrV8tTAEHvjegMLePcQ7QUzx8BdgQ5JAoG-rnzD3OfvHEq8U3Nq9BXt',
        status: 'Slow Traffic',
        speed: null,
    },
];

const Dashboard = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
            <Header />

            <main className="flex-1 p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
                {/* Page Title & Status */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">System Overview</h2>
                        <p className="text-slate-400">Real-time city congestion monitoring and AI intervention</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-green-500">System Operational</span>
                        <span className="text-slate-600 mx-2">|</span>
                        <span className="text-sm text-slate-400">
                            Last update: <span className="text-white font-mono">14:32:05</span>
                        </span>
                    </div>
                </div>

                {/* Camera Feeds + AI Recommendations */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
                    <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cameraFeeds.map((feed) => (
                            <CameraFeed
                                key={feed.name}
                                name={feed.name}
                                location={feed.location}
                                imageUrl={feed.imageUrl}
                                status={feed.status}
                                speed={feed.speed}
                            />
                        ))}
                    </div>
                    <AIRecommendations />
                </div>

                {/* Stats Cards */}
                <StatsCards />

                {/* Prediction Timeline */}
                <PredictionTimeline />

                {/* Metrics Row */}
                <MetricsRow />
            </main>
        </div>
    );
};

export default Dashboard;
