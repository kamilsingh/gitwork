import React from 'react'
  export const Update=()=>{   
            return(
            <>
            <div id="container">
 <div class="col15 banner"> 
   <div id="params"> content </div>  
 <form action="/update" id="passupdate"  onsubmit="return passcheck()" method="post" name="forgotpass">
   <p> Enter your Email: 
    <input type="text" name="email" id="email"/> </p>
   <p> New password:
    <input type="password" name="password" id="pass"/> </p>
   <p>Confirm password:
    <input type="password" name="confirm" id="confirm"/> </p>
   <p>
    <input type="submit" name="update" id="update"/>  </p>
    </form>
   <p id='change'>  </p>
   </div>
   </div>
            </>
            ) 
             
             }  