"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SingleProductLayout({ children }) {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#008080] border-t-transparent"></div>
          <p className="text-lg font-medium text-gray-600 animate-pulse">Verifying Access...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null; 
  }

  return <>{children}</>;
}
