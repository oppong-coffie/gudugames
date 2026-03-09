import { useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../../constants/images.constants';

const PartnerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Partner login attempt:', { email, password });
        // In a real app, handle authentication
    };

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center px-2 relative overflow-hidden text-white">
            {/* Background Decorative Elements - Slightly different color for partner */}
            <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#DECD00]/5 blur-[120px] pointer-events-none"></div>

            <div className="z-10 w-full max-w-md bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-4 shadow-2xl relative">

                <div className="flex flex-col items-center mb-2">
                    <Link to="/">
                        <img src={Images.gudulogo} alt="Gudu Games" className="h-12 mb-0" />
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300 block">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="partner@example.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-zinc-300 block">Password</label>
                            <a href="#" className="text-xs text-yellow-300 hover:text-yellow-100 transition-colors">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-zinc-100 hover:bg-white text-black font-semibold rounded-xl px-4 py-3 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-zinc-800 text-center flex flex-col gap-3 text-sm text-zinc-500">
                    <p>
                        Not a partner yet? <Link to="/partner-signup" className="text-[#DECD00] hover:underline">Apply here</Link>
                    </p>
                    <Link to="/" className="hover:text-white transition-colors mt-2">
                        &larr; Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PartnerLogin;
