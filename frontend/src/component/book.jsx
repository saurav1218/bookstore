import axios from "axios";
import { useEffect, useState } from "react";
import '../style/book.css'


const Books = () => {
    let[book,setBook]= useState([])

 useEffect(()=>{
    let fetchData = async()=>{
        let res = await axios.get("https://bookstore-vtbi.onrender.com/book")
        let data = res.data
        setBook(data)
        console.log(res.data);
    }
    fetchData()
 })
let [search,setSearch]=useState("")

 let filterItems=book.filter(item=>(
    item.title.toLowerCase().includes(search) || 
    item.author.toLowerCase().includes(search)
 ))
    return (  
        <div className="books">
            <div className="search">
 <input type="text" placeholder="Search Books" value={search} onChange={(e)=>setSearch(e.target.value)} />
 <span class="material-symbols-outlined">
mystery
</span>
                        </div>

          {
            filterItems.map((x)=>{
                return(
                    <div className="showing_books_data">
                     
                        <img src={x.imageURL} alt="" />
            

                        <div className="showing_books_data_nextPart">
                        <span>{x.title}</span> <br />
                        <span>Book By {x.author}</span>
                        </div>
                     <a href="https://www.amazon.in/kindle-dbs/storefront?storeType=browse&node=1634753031" target="_blank">  <button>Buy Now</button></a> 
                    </div>
                )
            })
          }
        </div>
    );
}
 
export default Books;