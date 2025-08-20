export default function CreatePost() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Title" className="w-full p-2 border rounded" />
        <textarea placeholder="Content" className="w-full p-2 border rounded h-40" />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Publish</button>
      </form>
    </div>
  );
}
