import About from "./About.jsx";
import Contact from "./Contact.jsx";

export default function Home() {
  return (
   <>
    <div className="p-8 text-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg">Explore articles, ideas, and insights.</p>
    </div>
    <About/>
    <Contact/>
   </>
  );
}
