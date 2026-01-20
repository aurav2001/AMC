import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('adminAuth') === 'true';
    });

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password check - can be enhanced with backend auth
        if (password === 'admin123') {
            sessionStorage.setItem('adminAuth', 'true');
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Login</h1>
                        <p className="text-slate-600">Enter password to access dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Enter admin password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {error && (
                                <p className="mt-2 text-sm text-red-600">{error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                        >
                            Login to Dashboard
                        </button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                        <p className="text-xs text-slate-600 text-center">
                            Default password: <span className="font-mono font-semibold">admin123</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
