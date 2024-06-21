import "./SinglePost.css"

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="singlePostImg" />
      </div>
      <h1 className="singlePostTitle">
      The Interior Edit: Chic Ideas for Modern Living 
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor"> Author : <b>SAfak </b></span>
        <span className="singlePostDate"> 1 hour ago </span>
        
      </div>
      <p className="singlePostDesc">This is your ultimate guide to contemporary home design, offering stylish and practical
         solutions for creating beautiful living spaces. Whether you're updating a single
          room or transforming your entire home, this blog provides inspiration and exper
          t advice to help you achieve a modern, chic aesthetic. Discover the latest trends,
           from minimalist décor to bold color palettes, and learn how to incorporate them into 
           your own space. With tips on furniture selection, layout optimization, and personalized t
           ouches, "The Interior Edit" empowers you to curate a home that reflects your unique taste and lifestyle.






</p></div>
  )
}

export default SinglePost
