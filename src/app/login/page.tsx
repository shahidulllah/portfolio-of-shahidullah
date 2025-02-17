"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await fetch(`${process.env.BASE_URL}/api/auth/session`).then((res) =>
        res.json()
      );
      if (session?.user) router.push("/dashboard");
    };
    checkSession();
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
