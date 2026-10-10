import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center bg-red-50 px-4 text-center">
            <div className="relative">
                <h1 className="text-9xl font-extrabold tracking-tight text-red-200">
                    404
                </h1>

                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-red-700 px-4 py-2 text-sm font-bold uppercase tracking-widest text-white shadow-lg">
                        Not Found
                    </span>
                </div>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                Oops! Page Not Found
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
                The page you are looking for does not exist or may have been
                moved. Let us get you back on track.
            </p>

            <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-red-800 hover:shadow-lg"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3 10 9-7 9 7M5 9v11h14V9M9 20v-6h6v6"
                    />
                </svg>
                Back to Home
            </Link>

            <div className="mt-10 h-1 w-20 rounded-full bg-red-700" />
        </div>
    );
};

export default NotFoundPage;