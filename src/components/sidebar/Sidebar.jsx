import "./Sidebar.css"
import img1 from "../sidebar/personal_pic_beach.jpg"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg"  src={img1} alt="" />
        <p>Hi ,  I am abhishek a college student and passionate blogger, sharing insights on student life, tech trends, and personal growth. Join him on his journey of learning and discovery.

</p>
      </div>
      <div className="sidebarItem">
         <span className="sidebarTitle"> CATEGORIES </span>
             
         <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Web Dev</li>
            <li className="sidebarListItem">DATA Hunting</li>

         </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
