
import Home from "./pages/homepage/Home.jsx";

import Topbar from "./components/topbar/topbar.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/Write.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/Register/Register.jsx"


function App(){

  return (
    <>
      <Topbar></Topbar>
      {/* <Single></Single> */}
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      <Register></Register>
      
     
    </>
  );
}

export default App;