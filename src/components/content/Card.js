export default function Card({ 
  children,
  className = '', 
  padding = 'p-6',
  shadow = 'shadow-md'
}) {
  return (
    <div className={`bg-white rounded-lg ${shadow} ${padding} ${className}`}>
      {children}
    </div>
  );
}