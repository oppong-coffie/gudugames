import { useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../../constants/images.constants';

const PartnerSignup = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        password: '',
        confirmPassword: '',
        website: '',
        location: '',
        industry: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Partner signup attempt:', formData);
        // In a real app, handle registration
    };

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center py-12 px-2 relative overflow-hidden text-white">
            {/* Background Decorative Elements - Blue color for partner */}
            <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#DECD00]/5 blur-[120px] pointer-events-none"></div>

            <div className="z-10 w-full max-w-lg bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl relative">

                <div className="flex flex-col items-center mb-4">
                    <Link to="/">
                        <img src={Images.gudulogo} alt="Gudu Games" className="h-10 mb-2" />
                    </Link>
                    <h1 className="text-2xl font-bold text-white">
                        Apply As Partner
                    </h1>
                    <p className="text-zinc-400 mt-1 text-sm text-center">Join the Gudu Games ecosystem</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-zinc-300 block">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="Your Company Inc."
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-zinc-300 block">Business Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="director@company.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-zinc-300 block">Website (Optional)</label>
                        <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            placeholder="https://company.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-zinc-300 block">Location</label>
                        <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all block"
                            placeholder="City, Country"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-zinc-300 block">Industry</label>
                        <input
                            type="text"
                            name="industry"
                            required
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all block"
                            placeholder="e.g. Technology"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="space-y-1 w-full">
                            <label className="text-sm font-medium text-zinc-300 block">Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all block"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="space-y-1 w-full">
                            <label className="text-sm font-medium text-zinc-300 block">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all block"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-[#DECD00] hover:bg-yellow-400 text-black font-semibold rounded-xl px-4 py-3 transition-all duration-300 shadow-[0_0_15px_rgba(222,205,0,0.2)] hover:shadow-[0_0_20px_rgba(222,205,0,0.4)]"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <div className="mt-6 pt-6 border-t border-zinc-800 text-center flex flex-col gap-3 text-sm text-zinc-500">
                    <p>
                        Already a partner? <Link to="/partner-login" className="text-[#DECD00] hover:underline">Sign in</Link>
                    </p>
                    <Link to="/" className="hover:text-white transition-colors mt-2">
                        &larr; Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PartnerSignup;
