"use client";
import { authClient } from "@/lib/auth-client";
import { Input, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex w-150 flex-col gap-4 justify-center mx-auto mt-10 mb-10 bg-pink-100 p-6 rounded-lg shadow ">
      <h1 className="text-2xl">Sign in to qurbanihat</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-email">Email</Label>
          <Input
            id="input-type-email"
            placeholder="jane@example.com"
            type="email"
            name="email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-password">Password</Label>
          <Input
            id="input-type-password"
            placeholder="••••••••"
            type="password"
            name="password"
          />
        </div>
        <button
          type="submit"
          className="btn bg-indigo-700 mt-4  text-white rounded-lg text-xl"
        >
          Sign in
        </button>
      </form>
      <div className="flex items-center my-4">
        <div className="grow border-gray-400 border-t"></div>
        <span className="mx-3  text-sm">OR</span>
        <div className="grow border-gray-400 border-t"></div>
      </div>

      <button
        onClick={handleGoogleSignIn}
        className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100 rounded-lg"
      >
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          width={20}
          height={20}
        />
        Continue with Google
      </button>
      <button
        onClick={handleGithubSignIn}
        className="btn w-full bg-white text-black rounded-lg border border-gray-300 hover:bg-gray-100"
      >
        <Image
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          alt="github"
          width={20}
          height={20}
        />
        Continue with Github
      </button>
      <p>
        New to qurbanihat?{" "}
        <Link href="/sign-up" className="text-blue-500 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
