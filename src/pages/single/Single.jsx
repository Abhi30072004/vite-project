import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
function Single() {
  return (
    <div className="single">
      {/* posts */}
      <SinglePost></SinglePost>
      <Sidebar></Sidebar>
    </div>
  )
}

export default Single;                          
