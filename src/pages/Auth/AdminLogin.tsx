import { useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../../constants/images.constants';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Admin login attempt:', { email, password });
        // In a real app, handle authentication
    };

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 relative overflow-hidden text-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#DECD00]/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#DECD00]/5 blur-[120px] pointer-events-none"></div>

            <div className="z-10 w-full max-w-md bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5 shadow-2xl">
                <div className="flex flex-col items-center mb-8">
                    <Link to="/">
                        <img src={Images.gudulogo} alt="Gudu Games" className="h-12 mb-1" />
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-zinc-300 block">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#DECD00] focus:ring-1 focus:ring-[#DECD00] transition-all"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-zinc-300 block">Password</label>
                            <a href="#" className="text-xs text-[#DECD00] hover:text-yellow-300 transition-colors">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#DECD00] focus:ring-1 focus:ring-[#DECD00] transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#DECD00] hover:bg-yellow-400 text-black font-semibold rounded-xl px-4 py-3 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(222,205,0,0.3)] hover:shadow-[0_0_25px_rgba(222,205,0,0.5)]"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-zinc-500">
                    <Link to="/" className="hover:text-white transition-colors">
                        &larr; Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
