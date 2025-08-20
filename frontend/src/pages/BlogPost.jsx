import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Blog Post #{id}</h2>
      <p className="text-gray-700">This is the content of blog post {id}.</p>
    </div>
  );
}
