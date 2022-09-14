import React from 'react'
import signup1 from './images/fitness.JPG'
import {Link} from "react-router-dom";
import { useState } from 'react';
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
  export const Signup=()=>{   
    const[message,setMessage]=useState({title:"",content:""});                    
  const {showAlert} =useContext(nodeContext);
   async function check(e)
{       
   e.preventDefault();  
   let first=document.form1.first.value;
   let last=document.form1.last.value;
   let email=document.form1.email.value;
   let dob=document.form1.dob.value;
   const d1 = new Date();
    const d2 = new Date(dob);
   let age=d1.getFullYear()-d2.getFullYear();
   let mob=document.form1.mob.value;
   let password=document.form1.password.value;
   let confirm=document.form1.confirm.value;
   let gend='NA';
   if(document.getElementById("male").checked===true)
   {
     gend='M'
   }
   else if(document.getElementById("female").checked===true)
   {
   gend='F'
   }
   else if(document.getElementById("trans").checked===true)
   {
   gend='T'
   }
   let flag=0;
    
   let str="POSSIBLE ERRORS :\n";
    if(first==="")
       {str=str+"FIRST NAME (required)\n";document.getElementById("first").style.borderColor="red";flag=1;}
    if(last==="")
       {str=str+"LAST NAME (required)\n";document.getElementById("last").style.borderColor="red";flag=1;}

    if(email==="")
      {str=str+"EMAIL (required)\n";document.getElementById("email").style.borderColor="red";flag=1;}

    if(mob===""||mob.length!=10)
      {str=str+"MOBILE NO. (not valid)\n";document.getElementById("mob").style.borderColor="red";flag=1;}
    
    
   if(password.length<6)
     {str=str+"PASSWORD (length should be more than 6)\n";document.getElementById("password").style.borderColor="red";flag=1;}

     if((password!==confirm)||((password.length<6)&&(password===confirm)))
     {str=str+"Password (aren't matched)\n";document.getElementById("confirm").style.borderColor="red";flag=1;}
     let format;
     if(flag==1)
      {  alert(str);
      setMessage({title:'Some required fields are missing',content:str,code:0});
      }
     else
     { alert('Submitted');
      const format={firstname:first,
                    lastname:last,
                    birth:dob,
                    Age:age,
                    gender:gend,
                    mobile:mob,
                    email:email,
                    password:password};
       const opt={method:'POST',
       headers:{ 'Content-Type': 'application/json'},
       body:JSON.stringify(format)};
  
        const resp=await fetch('http://localhost/signup',opt);
        const final_result=await resp.json();
           console.log(final_result);
           if(final_result.status==='Success')
           {
            setMessage({title:"",content:""});
           showAlert('success','Your account is ready Log in now to access',3);
           }
           else
           {
           showAlert('warning','Email already exist',3);
            setMessage(final_result);
           }
           
            
         }
                  
      }   
    
    return (
             <>
                          <div className="container">
 <div className="row">
 <div className="col15">
 <div className="signupleft clsmob" >
 <img  className="signupad" src={signup1} style={{borderRadius:'25px'}}  width="100%"/>
 </div>
 
 </div>
 <div className="col15">
 <div className="signupright">
  <div className="heading">
  <h2> New users </h2></div>
   <div className="body">
   <h5> Sign up for new users </h5>
  <div> <label>Do you already have an account </label> <Link to="/login"> Log in </Link>  </div> 
  <h2> <i> Sign Up </i> </h2> 
<h5> <i>{message.title} </i></h5>
   <h5  style={{color:'red'}}><pre> {message.content} </pre> </h5>
 <form name="form1" action="/login" method="post" onSubmit={check}>
 <div className="signupform">

 <h5> First Name :<font color="red">* </font> </h5><input  className="inputs" type="text" name="first" id="first"/> 
 <h5> Last Name:<font color="red">* </font> </h5><input className="inputs" type = "text" name = "last" id="last"/> 
 <br/>
 <label > <strong>  GENDER  </strong></label> <br/> 
     <input  type = "radio" name = "gender" id="male"/> MALE
     <input  type = "radio" name = "gender" id="female"/> FEMALE
     <input  type = "radio" name = "gender" id="trans"/> TRANSGENDER

 <h5> Mobile:<font color="red">* </font> </h5><input  className="inputs" type="number" name="mob" id="mob"/> 
 <h5> email:<font color="red">* </font> </h5><input className="inputs" type = "email" name = "email" id="email"/> 
 <h5> D.O.B:<font color="red">* </font> </h5><input className="inputs" type="date" name="dob" id="dob" />
 <h5> Set password:<font color="red">* </font> </h5><input  className="inputs" type="password" name="password" id="password" />
 <h5> confirm password:<font color="red">* </font> </h5><input  className="inputs" type="password" name="confirm" id="confirm"/>
 <h5> Security question: </h5>
 <select  className="inputs" name="s_q" id="s_q">
 <option   className="inputs"value="">---select a security question---</option>
     <option  className="inputs"value="what is your fav pet">what is your fav pet</option>
     <option  className="inputs"value="your fav colour">your fav colour</option>
     <option  className="inputs"value="fav pastime"> FAV PASTIME</option>
     <option  className="inputs"value="best moment"> BEST MOMENTS</option>
      </select>
 Answer: <input className="inputs" type = "text" name = "s_a" id="s_a"/> <br/>
 <input type="Reset" id="formbutton" name="reset" />
 <input type="submit" id="formbutton"  name="signin"/>
 </div>
 </form>
 <p id="change">  </p>
 </div>
   </div>
 </div>
 </div>
 </div>
             </>
             )
             }  