import Sidebar from "../components/Sidebar";

function Home() {
  
  return (
    <div className="flex items-center flex-col gap-4">
        <h1>This is Home Page.</h1>
        <Sidebar/>
    </div>
  );
}

export default Home;
