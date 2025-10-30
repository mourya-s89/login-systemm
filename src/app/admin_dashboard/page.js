import { getServerSession } from 'next-auth';
import { NEXT_AUTH } from '../api/auth/[...nextauth]/route';
import Sidebar from '@/components/layout/sidebar';

export default async function AdminDashboard() {
  const session = await getServerSession(NEXT_AUTH);
  
  console.log(session.user); // Submission requirement

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome, {session.user.name}!</h2>
            <p className="text-gray-600">Role: {session.user.role}</p>
            <p className="text-gray-600">Email: {session.user.email}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Students</h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Courses</h3>
              <p className="text-3xl font-bold text-green-600">0</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Sessions</h3>
              <p className="text-3xl font-bold text-purple-600">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}