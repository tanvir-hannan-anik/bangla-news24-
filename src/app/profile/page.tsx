"use client"
import { authClient } from '@/lib/auth-client';
import { console } from 'inspector';
import React, { useState } from 'react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user

    const [show,setShow] = useState(false)

    const hangleUpdateInfo = async(e:React.SubmitEvent<HTMLElement>) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const newUserData = Object.fromEntries(formData.entries())
        await authClient.updateUser({
            ...newUserData
        })
    }

    const handleShowUpdate = ()=>{
        setShow(!show)
    }
    return (
        <div className="mt-5 flex justify-around items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            {/* Profile Image */}
            <img
                src={user?.image || "/default-avatar.png"}
                alt={user?.name || "User"}
                className="h-14 w-14 shrink-0 rounded-full border border-gray-200 object-cover"
            />

            {/* User Information */}
            <div className="min-w-0 flex-1">
                {/* Name + Verified Badge */}
                <div className="flex items-center gap-1.5">
                    <h2 className="truncate text-base font-semibold text-gray-900">
                        {user?.name || "User"}
                    </h2>

                    {user?.emailVerified && (
                        <svg
                            className="h-4 w-4 shrink-0 text-blue-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-label="Verified email"
                        >
                            <path d="M12 2 15 4l3.6-.1.8 3.5 2.6 2.5-1.5 3.3.4 3.6-3.3 1.5L15 21l-3-2-3 2-2.6-2.7-3.3-1.5.4-3.6L2 9.9l2.6-2.5.8-3.5L9 4l3-2Zm-1.2 13.8 6-6-1.4-1.4-4.6 4.6-2.2-2.2-1.4 1.4 3.6 3.6Z" />
                        </svg>
                    )}
                </div>

                {/* Email + Icon */}
                <div className="mt-1 flex min-w-0 items-center gap-1.5 text-gray-500">
                    <svg
                        className="h-4 w-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                    >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                    </svg>

                    <p className="truncate text-sm">
                        {user?.email}
                    </p>
                </div>
                <button onClick={handleShowUpdate} className='btn'>Edit Profile</button>
            </div>
           {show && <div className=' flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-red-700'>Update Profile</h2>
                <form className="flex flex-col gap-4" onSubmit={hangleUpdateInfo}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base text-base-content">
                                নাম
                            </span>
                        </label>

                        <input
                            type="text"
                            name="name"
                            className="input input-bordered w-full bg-transparent"
                            required
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base text-base-content">
                                Image
                            </span>
                        </label>

                        <input
                            type="url"
                            name="image"
                            placeholder="Image URL"
                            className="input input-bordered w-full bg-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn mt-1 w-full border-red-700 bg-red-700 text-base text-white hover:border-red-800 hover:bg-red-800"
                    >
                        Save Update
                    </button>
                </form>
            </div>}
        </div>
    );
};

export default ProfilePage;