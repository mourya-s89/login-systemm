"use client"
import { useSession } from 'next-auth/react';
import Sidebar from '@/components/layout/sidebar';

export default function StudentDashboard() {
  const { data: session } = useSession();
  
  console.log(session?.user); // Submission requirement

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="student" />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Dashboard</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome, {session?.user?.name}!</h2>
            <p className="text-gray-600">Role: {session?.user?.role}</p>
            <p className="text-gray-600">Email: {session?.user?.email}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Enrolled Courses</h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
              <p className="text-gray-500 mt-2">No courses enrolled yet</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Completed Assignments</h3>
              <p className="text-3xl font-bold text-green-600">0</p>
              <p className="text-gray-500 mt-2">No assignments completed</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Available Courses</h3>
            <p className="text-gray-500">Browse and enroll in courses to get started with your learning journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}