import "../style/signUp.css"
import { useRef} from "react";
import SignupImages from '../images/signupbooks.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";


const SignUp = () => {

let name = useRef("")
let email = useRef("")
let password = useRef("")
let confirmPassword = useRef("")
let navigate = useNavigate()


let signUp=(e)=>{

    e.preventDefault()

    let data={
    name: name.current.value,
    email: email.current.value,
    password: password.current.value,
    confirmPassword : confirmPassword.current.value

    }
   if(data.name && data.email && data.password && data.password == data.confirmPassword){
    axios.post("https://bookstore-i3rs.onrender.com/signup",data).then((res)=>{
    
    alert(res.data.message)
    if(res.data.status==200){
    navigate('/')
    }

    })
   }
   else{
    alert("invalid credential")
   }
}


    return ( 
        <div className="mainSignup">
        <div className="nav1_signup">
            <h1>Stories</h1>
            </div>
        <div className="signup">

            <div className="signupimg">
                <img src={SignupImages} alt="" />
            </div>
            <div className="takingData">
                <div className="data">

                <form action="" onSubmit={signUp}>
             
               <div className="signup_n">

                   <span>N<span style={{color:"red"}}>a</span>me</span>
                <input type="text" ref={name} placeholder="Enter Your Name" />
               </div>
                    <div className="signup_e">
                       <span>E<span style={{color:"red"}}>m</span>ail</span>
                    <input type="email" ref={email} placeholder="Enter Your Email" />
                    </div>
                    <div className="signup_pass">
                   <span>P<span style={{color:"red"}}>a</span>ssword</span>
                    <input type="password" ref={password} placeholder="Enter Password" />
                    <span>C<span style={{color:"red"}}>o</span>nfirm P<span style={{color:"red"}}>a</span>ssword</span>
                    <input type="password" ref={confirmPassword} placeholder="Enter Password" />
                    
                </div>
          
          <div className="button">
                <button id="signup_button">S<span style={{color:"red"}}>i</span>gn Up</button>
                <span>/</span><Link to={'/'}>S<span style={{color:'red'}}>i</span>gn I<span style={{color:'red'}}>n</span></Link>
    
                </div>
                </form>


                </div>

            </div>

        </div>

        </div>
     );
}
 
export default SignUp;