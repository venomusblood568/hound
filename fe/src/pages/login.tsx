import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff ,ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const[showPassword, setShowPassword] = useState(false)
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="w-full max-w-md p-8 mx-auto rounded-2xl border border-gray-700 backdrop-blur-md transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2 text-white">Welcome Back</h1>
          <p className="text-gray-400">Login to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-white/5 border-white/10 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type= {showPassword ? "text" : "password"}
                className="w-full pl-10 pr-12 py-3 rounded-lg border bg-white/5 border-white/10 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group w-full py-3 px-4 rounded-lg font-medium bg-white hover:bg-gray-100 text-black transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Login</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </form>

        {/* Signup link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-white hover:text-gray-300 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
