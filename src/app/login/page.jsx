import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f8f9fa] to-[#e6ecec] p-4">
      <div className="w-full max-w-md rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-md sm:p-10">
        
        {/* Logo */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-[#007d7d]">SunCart</h1>
          <div className="mx-auto mt-1 h-1 w-12 rounded-full bg-gradient-to-r from-[#007d7d] to-[#e6be8a]"></div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your curated collection of Mediterranean lifestyle waits for you.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-1.5 block text-xs font-bold tracking-wider text-[#8b7355] uppercase">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your Gmail"
              className="w-full rounded-xl bg-[#f4f5f6] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#007d7d]/20"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-xs font-bold tracking-wider text-[#8b7355] uppercase">
                Password
              </label>
              <Link href="#" className="text-xs font-semibold text-[#007d7d] hover:underline">
                Forgot?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl bg-[#f4f5f6] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#007d7d]/20"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-[#007d7d] py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#006868] hover:shadow-lg active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* 2nd part  */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <p className="px-4 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            Or continue with
          </p>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#fce4c4] py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-[#fbd6a6] active:scale-[0.98]"
        >
          <FcGoogle className="text-xl" />
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="mt-8 text-center text-sm font-medium text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="font-bold text-[#007d7d] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
