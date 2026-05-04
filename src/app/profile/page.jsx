"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


export default function ProfilePage() {
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  const router = useRouter();
  
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Loading profile...</p>
      </div>
    );
  }

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (!error) {
      router.push("/sign-in");
    } else {
      router.push("/");
      console.log("LOGOUT ERROR:", error);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-5 border-b pb-4">
          <img
            src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="User"
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name || "User Name"}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between border p-3 rounded-lg">
            <span className="font-medium">Full Name</span>
            <span>{user.name || "Not provided"}</span>
          </div>

          <div className="flex justify-between border p-3 rounded-lg">
            <span className="font-medium">Email</span>
            <span>{user.email}</span>
          </div>

        
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Update profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
