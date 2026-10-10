import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import UserInfo from "./UserInfo";

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
               <UserInfo></UserInfo>
            </div>
            <NavLinks></NavLinks>
        </header>
    );
};

export default Header;