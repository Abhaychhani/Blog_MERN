export default function Contact() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded h-32" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}

