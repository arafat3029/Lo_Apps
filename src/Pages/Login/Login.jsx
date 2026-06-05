import React from 'react';
import { Link } from 'react-router-dom'; // অথবা আপনার রাউটার অনুযায়ী 'react-router'

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Login Submitting:", { email, password });
        // এখানে আপনার লগইন লজিক বা API কল যোগ করবেন
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                
                {/* হেডার / ব্র্যান্ডিং */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-black tracking-tight">
                        Ponnofy<span className="text-[#0e8ddb]">.com</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Welcome back! Please login to your account.
                    </p>
                </div>

                {/* লগইন ফর্ম */}
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        {/* ইমেইল ইনপুট */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0e8ddb] focus:border-transparent transition"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        {/* পাসওয়ার্ড ইনপুট */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0e8ddb] focus:border-transparent transition"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {/* রিমেম্বার মি এবং ফরগট পাসওয়ার্ড */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center cursor-pointer select-none text-gray-700">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-[#0e8ddb] focus:ring-[#0e8ddb] border-gray-300 rounded mr-2"
                            />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="font-medium text-[#0e8ddb] hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    {/* সাবমিট বাটন */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 text-white font-medium bg-[#0e8ddb] hover:bg-[#0c7bc0] active:scale-[0.98] rounded-lg transition duration-150 shadow-sm"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* সাইন আপ লিঙ্ক */}
                <div className="text-center text-sm text-gray-600 border-t border-gray-100 pt-5">
                    Don't have an account?{" "}
                    <Link to="/register" className="font-semibold text-[#0e8ddb] hover:underline">
                        Register here
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Login;