"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading")
    return <p className="text-white text-center mt-12">Checking session...</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800/20 border border-gray-500 p-8 rounded-lg shadow-xl text-center w-">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Welcome to login page
        </h2>
        <p className="text-gray-300 mb-6">Sign in to continue</p>
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FcGoogle size={24} /> Sign in with Google
        </button>
      </div>
    </div>
  );
}
