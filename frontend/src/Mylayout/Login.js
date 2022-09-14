import React from 'react'
import {Link} from "react-router-dom";
import login1 from './../images/fitness.JPG'
import login2 from './../images/fitness2.JPG'
import { useState,useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
import {Profile} from './Profile';
import google from './../images/googlegif.JPG';
import {Alert} from './Alert'; 
  export const Login= ()=>{   
const[message,setMessage]=useState({title:"",content:""});
const {profile,setProfile,setLogin,login,showAlert} =useContext(nodeContext);
   async function check(e)
{   e.preventDefault();
	alert("Are you sure want to submit");
	 
	    let em=document.form2.email.value;
	    let pass=document.form2.password.value;
	    let flag=0;
	    let str="";
	   
	     if(em=="")
	     {str=str+"Email is required\n";document.form2.email.style.borderColor="red";flag=1;}
	   if(pass.length<6)
	     {str=str+"Password should be more than 6 character\n";document.getElementById("password").style.borderColor="red";flag=1;}
        
	    if(flag==1)
	    	{ showAlert('warning','Email or Password Missing Failed',3);
	    	   setMessage({title:'',content:str});}
        else
        { 
        const format={email:em,password:pass};   
          const opt={method:'POST',
          headers:{ 'Content-Type': 'application/json'},
          body:JSON.stringify(format)};
          
           const resp= await fetch('http://localhost/loginauthen',opt); 
          const final_result= await resp.json();
            console.log(final_result);
            if(final_result.code===0)
            {
             showAlert('warning','Authentication failed',3); 
            setMessage(final_result);
            }
            else
             {setProfile(final_result.content);
                 showAlert('success','Logged in Successfully',3); 
                 setMessage({title:"",content:""});
                    const content=final_result.content;
                 
                    console.log(content);
                   setProfile({...profile,...content});
                   setLogin(true);
                  
             }
           

        }
	             
   
       
      
    }
    
   const responseGoogle = (response) => {
 
 console.log(response);
}
const logout=()=>{

showAlert('success','Logged Out Successfully',3); 

}
   
    return (
             <>
  {login===false? <div class="container">
 <div class="row">
 <div class="col15">
 <div class="signupleft clsmob" >
 <img class="signupad" style={{borderRadius:'25px'}} src={login1} height="400px" width="50%"/>
  <img  class="signupad" style={{borderRadius:'25px'}}src={login2} height="400px" width="50%"/>
 </div>
 
 </div>
<Alert/>
 <div class="col15">
 <div class="signupright">
   <div class="body"> 
   <h5> Log in  for existing users</h5>
  <div> <label>Don't have any account </label>
  <Link to="/signup"> Sign up </Link>  </div>
  <h2> login </h2>
  <p style={{color:'red'}}> {message.title}</p>
   <p style={{color:'red'}}> {message.content} </p> 
   <form name="form2" action="/loginauthen" onSubmit={check} method="post" >
  <div> <p> EMAIL: <input class="inputs"  type="email" name="email" id="email"/> <required/> </p>  </div>
  <div> <p> PASSWORD:<input class="inputs" type="password" name="password" id="password"/> <required/> </p> </div>
  <p> <Link to="/updatepassword">Forgot password</Link> </p>
   <input type="submit" id="formbutton" name="login" value="Login"/>
  </form>
   <GoogleIn />
    <p> Don't Have an Account <Link to="/signup">Sign Up </Link> </p>
    
  </div>
   </div>
 </div>
 </div>
 </div> :<Profile/> } 
             </>
             )
             } 
             
      const GoogleIn=()=>{
      
     const {showAlert} =useContext(nodeContext);
      const[message,setMessage]=useState({title:"",content:""});
     const {setProfile,profile,setLogin,login} =useContext(nodeContext);
     const refreshToken=(res)=>{
        let refreshTiming=(res.tokenObj.expires_in||3600-5*60)*1000;
       const refreshing=async()=>{
           const newAuthRes=await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in|| 3600-5*60)*3600;
            console.log('new Authen ',newAuthRes);
            console.log('new auth Token', newAuthRes.id_token);
            setTimeout(refreshToken,refreshTiming);
            };
        setTimeout(refreshToken,refreshTiming);
       }
  const onSuccess=async(res)=>{
    console.log('login Success:',res.profileObj);
      refreshToken(res);
      console.log(res.tokenId);
        console.log('login :',res);  
          const opt={method:'POST',
            headers :{ 'Content-Type': 'application/json'},
                     body:JSON.stringify({token:res.tokenId,
                                           cred:res.profileObj})
                     };
                     
          
           const resp= await fetch('http://localhost/glogin',opt); 
          const result= await resp.json();
            console.log(result);
           const content=result.content;
           console.log(content);
            if(result.code===1)
             {showAlert('success','Logged in Successfully',3); 
 setProfile({...profile,...content});
               setMessage({title:"",content:""});
              setLogin(true);
              }
            else
             {
             setMessage(result);
             }  
            
   }
   
   
   const onFailure=(res)=>{
    console.log('login  falied res:', res);
   
   }
    
   
     

            
    return (
    <div>  
  <GoogleLogin
    clientId="1055590570001-0ho2ga2ra9ot69d55ko8c09san8nase4.apps.googleusercontent.com" 
    isSignedIn={true}
    render={renderProps => ( <>
      <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{background:'blue',color:'white',padding:'5px',margin:'5px',borderRadius:'5px'}}><img src={google}  alt=""  style={{}}/> Login using Google</button>
     </>)}
    buttonText="Login using google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
  />  
    </div> ) 
      }
      
      
      
     