import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a12] transition-opacity duration-700">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            {/* Spinner Container */}
            <div className="relative w-32 h-32 mb-8">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-4 border-transparent border-t-gold border-b-gold/50 rounded-full animate-[spin_3s_linear_infinite]"></div>

                {/* Middle Ring */}
                <div className="absolute inset-4 border-4 border-transparent border-r-purple border-l-purple/50 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>

                {/* Inner Ring */}
                <div className="absolute inset-8 border-4 border-transparent border-t-blue border-b-blue/50 rounded-full animate-[spin_1.5s_linear_infinite]"></div>

                {/* Center Core */}
                <div className="absolute inset-[38%] bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
            </div>

            {/* Text */}
            <div className="text-center z-10 space-y-2">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-wider animate-fade-up">
                    SMEC
                </h2>
                <p className="text-gold text-sm uppercase tracking-[0.3em] animate-[pulse_2s_ease-in-out_infinite]">
                    Loading Conclave
                </p>
            </div>
        </div>
    );
};

export default Loader;
