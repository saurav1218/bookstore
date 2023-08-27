import "../style/navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <div className="navbar">
            <div className="nav1">
            <h1>Stories</h1>
            </div>
            <div className="nav2">
               <Link to='/home'>Home</Link> 
             <Link to='/book'>Books</Link>
             <Link to="/add-book">Add Books</Link>  
             <Link to="/">Log Out</Link>
            </div>
        </div>
    );
}
 
export default Navbar;