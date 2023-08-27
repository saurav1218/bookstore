import { useRef } from "react";
import "../style/addBooks.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddBooks = () => {

    let Navigate = useNavigate()
    let title = useRef("")
    let author = useRef("")
    let imageURL = useRef("")

    let submit=(e)=>{
        e.preventDefault()
        let data={
            title: title.current.value,
            author: author.current.value,
            imageURL: imageURL.current.value
        }
   if(data.title && data.author && data.imageURL){
    axios.post("https://bookstore-i3rs.onrender.com/add-book",data).then((res)=>{
        alert(res.data.message)
    Navigate('/book')

   })
   }
   else{
    alert("invalid credential")
    Navigate('/book')
   }
    }
    return (  
        <div className="addbooks">
            <div className="add">
                <img src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_640.jpg" alt="" />
            </div>
            <div className="add1">
                <h1>Add BooKs</h1>
                <form action="" onSubmit={submit}>
                    <h2>Book's Title</h2>
                    <input type="text" ref={title} placeholder="Enter Your Title" />
                    <h2>Author </h2>
                    <input type="text" ref={author} placeholder="Author" /> <br />
                    <h2>Image URL</h2>
                    <input type="text" ref={imageURL} placeholder="Image URL" /> <br />

                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default AddBooks;