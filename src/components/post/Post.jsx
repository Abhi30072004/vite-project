import "./Post.css"

function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.unsplash.com/photo-1638073694509-eeba8841ca20?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hr ago</span>

      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores est expedita atque sed, laudantium perfe
        rendis alias architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid, similique ea soluta veritatis numquam veniam incidunt in dicta eligendi
         ratione. Delec
        tus maiores voluptates quaerat eum aliquid similique, excepturi nostrum quae laboriosam neque recusandae, error magnam ex laborum rerum autem?.</p>
    </div>
  )
}

export default Post;
