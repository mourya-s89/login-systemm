import Card from '@/components/content/Card';

const stats = [
  { name: 'Enrolled Courses', value: '3', icon: '📚', color: 'text-blue-600' },
  { name: 'Completed', value: '1', icon: '✅', color: 'text-green-600' },
  { name: 'In Progress', value: '2', icon: '⏳', color: 'text-yellow-600' },
  { name: 'Total Hours', value: '24', icon: '⏰', color: 'text-purple-600' },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <Card key={stat.name} className="text-center">
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl mr-2">{stat.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900">{stat.name}</h3>
          </div>
          <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}