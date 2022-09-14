import React from 'react'
import {Link} from "react-router-dom";
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
  export  const Alert=()=>{
      
       const {alert} =useContext(nodeContext); 
        return(
              alert&&<>
           <div id='alert' className='alert'>
                
           {alert.result==='warning'?  <div  style={{color:'red'}}> <big>  <i>   <h3>{alert.type} </h3> </i> </big> <p> <h1> {alert.result}!!!! </h1> <h6> {alert.message} </h6> </p> </div>
           :alert.result==='success'? <div  style={{color:'green'}}>  <big>  <i> <h3> {alert.type} </h3> </i> </big> <p> <h5> {alert.result} </h5>  <h6> {alert.message} </h6> </p> </div>
           :                         <div> <big>  <i>  <h3>{alert.type}  </h3> </i> </big> <p> <h5> {alert.result} </h5>  <h6> {alert.message} </h6>  </p></div>} 
            </div>
         </>
      )
   }
   