export default function ManagePosts() {
  const posts = [
    { id: 1, title: 'React Tips & Tricks' },
    { id: 2, title: 'Tailwind CSS Magic' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Manage Posts</h2>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="flex justify-between items-center border p-4 rounded">
            <span>{post.title}</span>
            <div className="space-x-2">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
