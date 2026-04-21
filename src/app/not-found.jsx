"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-purple-500/30 rounded-lg rotate-12 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-pink-500/30 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/5 rounded-full blur-sm animate-pulse"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-black tracking-tighter text-white/10 blur-md -z-10">
            404
          </div>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-pulse"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            ← Go Back
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Take Me Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
