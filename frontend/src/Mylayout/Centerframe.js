import React from 'react'
//import Centerframe from './Centerframe';
  export const Centerframe= (props)=>{
         return (
            <div>
         <h3> {props.pass1.name}  {props.pass1.title} </h3>
            <button onClick={()=>{props.del(props.pass1)}}> Delete </button>
             </div>
                )
 
                         }