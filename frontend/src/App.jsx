import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreatePost from "./components/CreatePost.jsx";
import Analytics from "./pages/Analytics.jsx";
import AllBlogs from "./pages/AllBlogs.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Dashboard />} path="/dashboard" >
            <Route element={<CreatePost/>} path="create-post" />
            <Route element={<Analytics/>} path="analytics" />
            <Route element={<AllBlogs/>} path="blogs" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
