const LoadingSkeletonPage = () => {
    return (
        <div className="min-h-screen animate-pulse bg-gray-50">
            {/* Navbar Skeleton */}
            <nav className="border-b border-gray-200 bg-white px-6 py-4">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <div className="h-8 w-32 rounded-lg bg-gray-200" />
                    <div className="hidden gap-6 md:flex">
                        <div className="h-4 w-16 rounded bg-gray-200" />
                        <div className="h-4 w-16 rounded bg-gray-200" />
                        <div className="h-4 w-16 rounded bg-gray-200" />
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gray-200" />
                </div>
            </nav>

            {/* Main Content */}
            <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
                {/* Page Title */}
                <div className="mb-8 space-y-3">
                    <div className="h-8 w-56 rounded-lg bg-gray-200" />
                    <div className="h-4 w-72 max-w-full rounded bg-gray-200" />
                </div>

                {/* Profile Skeleton */}
                <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 shrink-0 rounded-full bg-gray-200" />
                        <div className="flex-1 space-y-3">
                            <div className="h-5 w-40 max-w-full rounded bg-gray-200" />
                            <div className="h-4 w-56 max-w-full rounded bg-gray-200" />
                        </div>
                    </div>
                </div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                        >
                            <div className="mb-5 h-40 rounded-xl bg-gray-200" />

                            <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />

                            <div className="mb-2 h-4 w-full rounded bg-gray-200" />

                            <div className="mb-5 h-4 w-2/3 rounded bg-gray-200" />

                            <div className="h-10 w-28 rounded-lg bg-gray-200" />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default LoadingSkeletonPage;