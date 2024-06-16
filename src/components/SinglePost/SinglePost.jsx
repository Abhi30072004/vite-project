import "./SinglePost.css"

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.unsplash.com/photo-1562370367-f899d0965c62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="singlePostImg" />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit, amet consectetur 
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor"> Author : <b>SAfak </b></span>
        <span className="singlePostDate"> 1 hour ago </span>
        
      </div>
      <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum earum architecto pariat
        ur temporibus, expedita repudiandae, vero perspiciatis adipisci aut culpa minus ipsum harum eius, r
        atione maiores voluptatem est magni debitis dolor natus deleniti! Numquam, excepturi. Voluptatum a labore 
        laudantium doloribus veritatis? Reprehenderit aperiam blanditiis adipisci velit suscipit quisquam quos conseq
        uuntur! Eius tenetur, reprehenderit dolore quisquam odit deleniti labore. Molestiae reprehenderit laboriosam cum perspi
        ciatis ducimus tempora modi repellat harum illo similique, dolor dolorum nisi expedita accusantium quo ab hic suscipit nam culpa exercitationem quisquam vitae possimus. Pariatur soluta, qu
        is autem placeat numquam voluptas! Consectetur odit iusto facere iure beatae doloremque!</p>
    </div>
  )
}

export default SinglePost
