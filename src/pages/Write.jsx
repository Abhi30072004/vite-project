import "./write.css"

function Write() {
  return (
    <div className="write">
  
   <form  className="writeForm">

    <div className="writeFormGroup">
        <label htmlFor="fileInput">
        <i class="fa-solid fa-plus"></i>
        </label>
        <input type="file" id="fileInput" style={{display:"none"}}/>
        <input type="text" placeholder="" className="writeInput" autoFocus={true} />
         <textarea  placeholder="tell your story....." className="writeInput writeText" type="text" ></textarea>
         <button className="writeSubmit">Publish</button>
    </div>
    </form>  
      
    </div>
  )
}

export default Write;
