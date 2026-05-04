import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li className="text-sm">tisha rani dey</li>
            <li>
              <Link href="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>

            <li>
              <button>Logout</button>
            </li>
            <li>
              <Link href="/sign-in">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
