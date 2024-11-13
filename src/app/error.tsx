"use client";

import React, { useEffect, useState } from "react";
import { AlertOctagon, RefreshCcw, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Error = ({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Optional: Add some randomized shooting stars
    const interval = setInterval(() => {
      const star = document.createElement("div");
      star.className = "shooting-star";
      star.style.left = `${Math.random() * 100}%`;
      document.getElementById("star-container")?.appendChild(star);
      setTimeout(() => star.remove(), 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div id="star-container" className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 max-w-md w-full transform transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Error Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-20"></div>
              <div className="relative rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-4">
                <AlertOctagon className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white mb-4 animate-float">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-300 mb-8">
              {error?.message ||
                "Don't worry, we're on it! Our team of coding ninjas is already investigating."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {reset && (
                <button
                  onClick={reset}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <RefreshCcw className="w-4 h-4 animate-spin-slow" />
                  <span>Try Again</span>
                </button>
              )}

              <Link
                href="/"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </Link>
            </div>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="mt-8 text-gray-400 hover:text-white transition-colors flex items-center justify-center space-x-2 group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shooting-star {
          from {
            transform: translateY(0) translateX(0) rotate(-45deg);
            opacity: 1;
          }
          to {
            transform: translateY(200px) translateX(200px) rotate(-45deg);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          position: absolute;
          animation: shooting-star 1s linear forwards;
        }

        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          animation: twinkle 3s ease-in-out infinite;
          background-image: radial-gradient(white 1px, transparent 1px),
            radial-gradient(white 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: 0 0, 25px 25px;
          opacity: 0.3;
        }

        .stars2 {
          animation-delay: 1s;
          background-size: 100px 100px;
          background-position: 0 0, 50px 50px;
        }

        .stars3 {
          animation-delay: 2s;
          background-size: 150px 150px;
          background-position: 0 0, 75px 75px;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Error;
