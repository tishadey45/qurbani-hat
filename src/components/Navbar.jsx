"use client";
import logo from "@/assets/logo.png";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const userData = authClient.useSession();
  console.log(userData?.data?.user);
  const user = userData?.data?.user;

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (!error) {
      router.push("/sign-in");
    } else {
      console.log("LOGOUT ERROR:", error);
    }
  };

  const avatar =
  user?.image?.startsWith("http")
    ? user.image
    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

    
  return (
    <div className="navbar bg-base-100 shadow-sm mx-auto ">
      <div className="flex-1">
        <Image src={logo} alt="QurbaniHat" width={100} height={50} />
      </div>
      <div className="mx-auto flex justify-between items-center">
        <ul className="menu menu-horizontal px-1 mx-auto flex justify-between items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-animals">All animals</Link>
          </li>
        </ul>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li className="text-sm">{user?.name}</li>

            {user ? (
              <>
                <li>
                  <Link href="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/sign-in">Sign in</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
