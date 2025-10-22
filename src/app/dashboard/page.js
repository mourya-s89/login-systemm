'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardStats from '@/components/pages/DashboardStats';
import CourseGrid from '@/components/pages/CourseGrid';

const sampleCourses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Learn the basics of JavaScript programming language including variables, functions, and DOM manipulation.',
    instructor: 'John Doe',
    duration: 20,
    level: 'Beginner'
  },
  {
    id: 2,
    title: 'React Development',
    description: 'Master React.js and build modern web applications with components, hooks, and state management.',
    instructor: 'Jane Smith',
    duration: 35,
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Node.js Backend',
    description: 'Build scalable backend applications using Node.js, Express, and MongoDB.',
    instructor: 'Mike Johnson',
    duration: 40,
    level: 'Advanced'
  }
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/login');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to your Dashboard, {session.user.name}!
        </h1>
        <p className="mt-2 text-gray-600">
          Explore courses and track your learning progress
        </p>
      </div>

      <DashboardStats />

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Courses</h2>
        <CourseGrid courses={sampleCourses} />
      </div>
    </DashboardLayout>
  );
}