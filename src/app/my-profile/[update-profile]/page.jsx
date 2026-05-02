"use client";
import React, { useState, useEffect } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { User, Camera, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || '');
      setImage(session.user.image || '');
    }
  }, [session]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage({ type: '', text: '' });

    try {
      const { data, error } = await authClient.updateUser({
        name,
        image
      });

      if (error) {
        setMessage({ type: 'error', text: error.message || 'Failed to update profile' });
      } else {
        setMessage({ type: 'success', text: 'Profile updated successfully!' });
        setTimeout(() => {
          router.push('/my-profile');
        }, 1500);
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="mb-6">
        <Link href="/my-profile" className="inline-flex items-center text-[#008080] hover:text-[#0f766e] transition-colors font-medium">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Profile
        </Link>
      </div>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Update Information</h1>
        
        {message.text && (
          <div className={`p-4 rounded-lg mb-6 ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Image URL Input */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Camera className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all"
                placeholder="https://example.com/your-image.jpg"
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isUpdating}
            className={`w-full py-3 px-4 flex justify-center items-center gap-2 rounded-lg text-white font-medium shadow-sm transition-all ${
              isUpdating ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#008080] hover:bg-[#0f766e] hover:shadow-md'
            }`}
          >
            {isUpdating ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : null}
            {isUpdating ? 'Updating...' : 'Update Information'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
