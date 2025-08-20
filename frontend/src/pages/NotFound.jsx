import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
    </div>
  );
}
