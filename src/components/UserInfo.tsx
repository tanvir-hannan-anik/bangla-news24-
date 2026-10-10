"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    // console.log(user);

    const handleSignOut = async () => {
        await authClient.signOut();
    }
    return (
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2">

            {
                user ? <div>
                    <div className="flex justify-end gap-3">
                        <Link href={"/profile"}>
                        <div className="flex items-center gap-2">
                            {user.image ? (
                                <Image
                                height={300}
                                width={300}
                                    src={user.image}
                                    alt={user.name}
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                            ) : (
                                <div
                                    aria-hidden="true"
                                    className="h-8 w-8 rounded-full bg-neutral-200"
                                />
                            )}
                            <span className="text-sm font-medium">{user.name}</span>
                        </div>
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
                        >
                            {/* Sign Out */}
                            লগ আউট
                        </button>
                    </div>

                </div> : <div >
                    <Link href={'/signin'}>
                        <button
                            type="button"
                            className="rounded-md px-2 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 sm:px-3"
                        >
                            সাইন ইন
                        </button>
                    </Link>
                    <Link href={'/signup'}>
                        <button
                            type="button"
                            className="rounded-md bg-red-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-800 sm:px-4"
                        >
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            }



        </div>
    );
};

export default UserInfo;