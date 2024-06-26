
import Home from "./pages/homepage/Home.jsx";

import Topbar from "./components/topbar/topbar.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/Write.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/Register/Register.jsx"
import Posts from "./components/posts/Post.jsx";
import Testi from "./components/testimonials/Testi.jsx";

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App(){

  return (
    
     <BrowserRouter>
     <Topbar></Topbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<Single />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/write/*" element={<Write />} />
        <Route path="/about/*" element={<Posts />} />
        <Route path="/testi/*" element={<Testi />} />
      
      </Routes>
    </BrowserRouter>
       
  );
}

export default App;