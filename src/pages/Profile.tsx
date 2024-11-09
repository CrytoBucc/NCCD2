import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Key, Camera, Edit2, Save, LogOut } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import type { User as UserType } from '../types';

const mockUser: UserType = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80',
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [newAvatar, setNewAvatar] = useState<File | null>(null);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to your backend
  };

  const handleLogout = () => {
    // Handle logout logic
  };

  return (
    <div>
      <PageHeader
        title="My Profile"
        description="Manage your account settings and preferences"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-green-600 to-blue-600">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -bottom-16 left-8"
            >
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                {isEditing && (
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <Camera className="h-5 w-5 text-gray-600" />
                    <input
                      id="avatar-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => setNewAvatar(e.target.files?.[0] || null)}
                    />
                  </label>
                )}
              </div>
            </motion.div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  {isEditing ? (
                    <>
                      <Save className="h-4 w-4" />
                      Save
                    </>
                  ) : (
                    <>
                      <Edit2 className="h-4 w-4" />
                      Edit Profile
                    </>
                  )}
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>

            {/* Profile Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>

              {isEditing && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Change Password
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Preferences Section */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    disabled={!isEditing}
                  />
                  <span className="text-gray-700">Receive email notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    disabled={!isEditing}
                  />
                  <span className="text-gray-700">Two-factor authentication</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    disabled={!isEditing}
                  />
                  <span className="text-gray-700">Public profile visibility</span>
                </label>
              </div>
            </div>

            {/* Connected Accounts */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connected Accounts
              </h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://www.google.com/favicon.ico"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    <span className="font-medium">Google</span>
                  </div>
                  <span className="text-sm text-gray-500">Connected</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://github.com/favicon.ico"
                      alt="GitHub"
                      className="w-5 h-5"
                    />
                    <span className="font-medium">GitHub</span>
                  </div>
                  <span className="text-sm text-blue-600">Connect</span>
                </button>
              </div>
            </div>

            {/* Save Changes Button */}
            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <button
                  onClick={handleSave}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}