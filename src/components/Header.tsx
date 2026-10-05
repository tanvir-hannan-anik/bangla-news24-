import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className=" bg-white">
            <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:py-5">

                {/* Logo + Website Name */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.webp"
                        alt="Bangla News 24"
                        width={45}
                        height={45}
                        priority
                        className="h-[45px] w-[45px] object-contain"
                    />

                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-red-700 sm:text-2xl">
                            Bangla News 24
                        </span>

                        <span className="text-[11px] text-neutral-500 sm:text-xs">
                            {date}
                        </span>
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2">
                    <button
                        type="button"
                        className="rounded-md px-2 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 sm:px-3"
                    >
                        সাইন ইন
                    </button>

                    <button
                        type="button"
                        className="rounded-md bg-red-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-800 sm:px-4"
                    >
                        সাইন আপ
                    </button>
                </div>
            </div>
            <NavLinks></NavLinks>
        </header>
    );
};

export default Header;