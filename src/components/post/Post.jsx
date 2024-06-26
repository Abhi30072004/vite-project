import "./Post.css"

function Post(props) {
  return (
    <div className="post">
      <img className="postImg" src={props.title} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">{props.discription}</span>
        <hr />
        <span className="postDate">1 hr ago</span>

      </div>
      <p className="postDesc">  the profound impact of music on our daily experiences, from personal growth and 
        inspiration to cultural trends and unforgettable moments, all harmonized through sound.
</p>


</div>
  )
}

export default Post;
