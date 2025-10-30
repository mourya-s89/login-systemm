import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-500 text-sm font-medium">
                {item.name}

                
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

//breadcrumb