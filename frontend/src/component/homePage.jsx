import "../style/homePage.css"
import Books from "../images/add_books.avif"
import { Link } from "react-router-dom";


const HomePage = () => {
    return (  
        <div className="homepage">
            <div className="home">
                <img src={Books} alt="" />
            </div>
            <div className="home1">
             <h1>Books are The Ocean Of knowledge, Deeper you will dive more you will shine!! </h1>
             <div className="home2">

            </div>
          <Link to="/book">  <button id="read">Read More</button></Link>
            </div>
    
        </div>
    );
}
 
export default HomePage;