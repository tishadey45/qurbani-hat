"use client";

import { Input, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image_url.value;
    // console.log(name,email,password,image_url);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/",
    });
    console.log({ data, error });
    if (!error) {
      router.push("/");
    }
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
    <div className="flex w-150 flex-col gap-4 justify-center mx-auto mt-20 mb-15 bg-pink-100 p-6 rounded-lg shadow">
      <h1 className="text-2xl">Sign up for qurbanihat</h1>
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100 rounded-lg"
        type="button"
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
        type="button"
      >
        <Image
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          alt="github"
          width={20}
          height={20}
        />
        Continue with Github
      </button>
      <div className="flex items-center my-4">
        <div className="grow border-gray-400 border-t"></div>
        <span className="mx-3  text-sm">OR</span>
        <div className="grow border-gray-400 border-t"></div>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
          <Label htmlFor="input-type-name">Name</Label>
          <Input
            id="input-type-name"
            placeholder="Jane Doe"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-url">Image url</Label>
          <Input
            id="input-type-url"
            placeholder="https://example.com/avatar.jpg"
            type="url"
            name="image_url"
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
          Create account
        </button>
        <p>
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
