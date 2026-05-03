"use client";
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Edit } from 'lucide-react';

export default function MyProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [imageError, setImageError] = useState(false);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-[#008080] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  const user = session.user;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {/*Cover */}
        <div className="h-28 bg-gradient-to-r from-[#008080] to-[#0f766e]"></div>

        {/* info */}
        <div className="relative px-6 pb-8">
          {/* photo */}
          <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0">
            <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden flex items-center justify-center">
              {user.image && !imageError ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="h-full w-full bg-[#008080] flex items-center justify-center text-4xl sm:text-5xl font-bold text-white uppercase">
                  {user.name?.charAt(0) || 'U'}
                </div>
              )}
            </div>
          </div>

          {/* user info */}
          <div className="flex justify-center sm:justify-end pt-16 sm:pt-4">
            <div className="text-center sm:text-right">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {user.name || 'User Name'}
              </h1>
            </div>
          </div>

          {/* bottom section  */}
          <div className="mt-8 sm:mt-10 space-y-5">
            {/* user info card */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Account Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Full Name</p>
                  <p className="text-gray-900 font-medium">{user.name || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Email Address</p>
                  <p className="text-gray-900 font-medium break-all">{user.email}</p>
                </div>
              </div>
            </div>

            {/* up info btn */}
            <div className="flex justify-center sm:justify-end pt-1 sm:pt-2">
              <Link href="/my-profile/update-profile" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#008080] hover:bg-[#0f766e] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md">
                  <Edit className="h-4 w-4" />
                  Update Information
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
