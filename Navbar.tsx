import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold">Social Media Analytics</h1>
      <div className="space-x-4">
        <Link to="/feed" className="hover:underline">Feed</Link>
        <Link to="/top-users" className="hover:underline">Top Users</Link>
        <Link to="/trending-posts" className="hover:underline">Trending</Link>
      </div>
    </nav>
  );
}
