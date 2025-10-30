import ClientSessionProvider from '@/components/providers/session-provider';
import connectToDatabase from '@/utils/mongodb';
import User from '@/models/User';
import { Toaster } from 'react-hot-toast';
import "./globals.css";

export default async function RootLayout({ children }) {
  // Test MongoDB connection and User model
  try {
    await connectToDatabase();
    console.log('✅ MongoDB connection established');
    console.log('✅ User model loaded successfully:', !!User);
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
  }

  return (
    <html lang="en">
      <body className="antialiased">
        <ClientSessionProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </ClientSessionProvider>
      </body>
    </html>
  );
}
