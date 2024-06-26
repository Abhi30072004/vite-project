import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <div className="headerTitles">
        <span className="headerTitleSm">Think Diffrent & Explore</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img  className="headerImg"src="https://images.unsplash.com/photo-1717908903938-73e3470c2295?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default Header;
