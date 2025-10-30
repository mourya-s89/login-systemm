"use client"
import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Card from '../global/card';

const StudentDashboardPage = () => (
  <MainLayout 
    sidebar={<Sidebar role="student" />} 
    navbar={<Navbar />}
    footer={<Footer />}
  >
    <h1 className="text-3xl font-bold mb-6 text-black">Student Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Welcome!</h2>
        <p className="text-black">This is your student dashboard. Here you can find your enrolled courses, grades, and profile information.</p>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">My Courses</h2>
        <p className="text-black">Enrolled Courses: 5</p>
        <p className="text-black">Completed: 2</p>
        <p className="text-black">In Progress: 3</p>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Recent Grades</h2>
        <p className="text-black">Mathematics: A</p>
        <p className="text-black">Physics: B+</p>
        <p className="text-black">Chemistry: A-</p>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Upcoming Assignments</h2>
        <p className="text-black">Physics Lab Report - Due: Dec 15</p>
        <p className="text-black">Math Problem Set - Due: Dec 18</p>
      </Card>
    </div>
  </MainLayout>
);

export default StudentDashboardPage;