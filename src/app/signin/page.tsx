"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault()
    const fromData = new FormData(e.target)
    const user = Object.fromEntries(fromData.entries()) as { name: string, image: string, email: string, password: string }
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/"
    })
    if (data) {
      toast.success(`Sign in Successfully`)
      console.log(data);
      redirect("/")
    }
    if (error) {
      toast.error("Give Right Email and Password")
      console.log(error);
    }
  }

  const handleGooogleSignIn = async () => {
   await authClient.signIn.social({
      provider: "google",
    });
  }

  const handleGithubSignIn = async()=>{
    await authClient.signIn.social({
        provider: "github"
    })
  }

  return (
    <div className="min-h-screen bg-base-100 px-4 py-5">
      <div className="mx-auto w-full max-w-[480px]">
        <h1 className="mb-7 text-center text-3xl font-bold text-red-600">
          সাইন ইন
        </h1>

        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-base-content">
                ইমেইল
              </span>
            </label>

            <input
              type="email"
              name="email"
              className="input input-bordered w-full bg-transparent"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base text-base-content">
                পাসওয়ার্ড
              </span>
            </label>

            <input
              type="password"
              name="password"
              className="input input-bordered w-full bg-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full border-red-700 bg-red-700 text-base text-white hover:border-red-800 hover:bg-red-800"
          >
            সাইন ইন করুন
          </button>

        </form>
        <div className='flex justify-center items-center gap-4 mt-5'>
          <button onClick={handleGooogleSignIn} className="relative flex h-10 min-w-fit items-center justify-center gap-2 overflow-hidden rounded border border-[#747775] bg-white px-3 text-sm font-medium text-[#1f1f1f] transition hover:shadow-md">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center">
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
            </div>

            <span className="whitespace-nowrap">
              Sign in with Google
            </span>
          </button>
          <button onClick={handleGithubSignIn} className="flex h-10 items-center justify-center gap-2 rounded border border-[#747775] bg-white px-3 text-sm font-medium text-[#1f1f1f] transition hover:bg-gray-50 hover:shadow-md">
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.1.99 2.09.74.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.61 5.23-5.09 5.5.4.35.76 1.03.76 2.08v3.26c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>

            <span className="whitespace-nowrap">
              Sign in with GitHub
            </span>
          </button>
        </div>
        <p className="mt-5 text-center text-base">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-medium text-red-600 hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignInPage;