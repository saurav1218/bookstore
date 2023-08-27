import "../style/loginPage.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

import { useRef } from "react";

const LoginPage = () => {
 let Navigate = useNavigate()
    let email = useRef("")
    let password = useRef("")


    let signIn=(x)=>{
        x.preventDefault()
      let data = {
        email: email.current.value,
        password: password.current.value
      }
      axios.post("https://bookstore-i3rs.onrender.com/login",data).then((res)=>{
        alert(res.data.message)
        if(res.data.status == 200){
            Navigate('/home')
        }
      })
    }

    return ( 
      <div className="main">  
        <div className="nav1_login">
            <h1>Stories</h1>
            </div>
        <div className="loginpage">
            <div className="takingInput">
            <span>L<span style={{color:'red'}}>o</span>gin t<span style={{color:'red'}}>o</span> B<span style={{color:'red'}}>o</span>ok S<span style={{color:'red'}}>t</span>ore</span>
            <form action="" onSubmit={signIn}>

            <div className="user">
            <span>U<span style={{color:'red'}}>s</span>ername</span>
            <input type="email" ref={email} placeholder="Enter Your Email"/>
            </div>
            <div className="pass">
            <span>P<span style={{color:'red'}}>a</span>ssword</span>
            <input type="password" ref={password}  placeholder="Enter Your Password"/> <br />
            </div>
            <div className="click">
            <button id="loginButton">L<span style={{color:'red'}}>o</span>gin</button>
         <span>/</span>  <Link to={'/signup'}>S<span style={{color:'red'}}>i</span>gn Up</Link>
            </div>
           </form>
           </div>

        </div>
        </div>
     );
}
 
export default LoginPage;