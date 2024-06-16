import Posts from "../../components/posts/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css"
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div>
        
     <Header></Header>
     
    <div className="home">
   
    <Posts></Posts>
    <Sidebar></Sidebar>
    </div>
  
    </div>
  )
}

export default Home;
