import Card from '@/components/content/Card';
import Button from '@/components/forms/Button';

export default function UserProfile({ user }) {
  return (
    <Card>
      <div className="flex items-center space-x-6">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">
            {user?.name?.charAt(0) || 'U'}
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{user?.name || 'User Name'}</h2>
          <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
          <p className="text-sm text-gray-500 mt-1">
            Role: <span className="capitalize">{user?.role || 'student'}</span>
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <Button variant="outline" size="sm">Edit Profile</Button>
          <Button variant="secondary" size="sm">Settings</Button>
        </div>
      </div>
    </Card>
  );
}