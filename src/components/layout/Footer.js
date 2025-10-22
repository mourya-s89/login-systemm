export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            © 2024 LMS Platform. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}