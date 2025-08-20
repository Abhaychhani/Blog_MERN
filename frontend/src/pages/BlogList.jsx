import { Link } from 'react-router-dom';

const dummyPosts = [
  { id: 1, title: 'React Tips & Tricks' },
  { id: 2, title: 'Tailwind CSS Magic' },
];

export default function BlogList() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Blog Posts</h2>
      <ul className="space-y-4">
        {dummyPosts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
