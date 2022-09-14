import React from 'react'
import {Centerframe} from './Centerframe';
  export const Body= (props)=>{   
         return (
             <>
            <div>
            <h3> mainframe </h3>
           
              {(()=>{
                  if(props.pass.length===0)
                    {return (<h2> Nothing to display </h2>)}
                    else
                    {return (
                   <>
                {props.pass.map((list)=>{
                   return (
                     <>
                    <h3> hey </h3>
                  <Centerframe pass1={list} del={props.del}/>
                     </>   )
                               })
                 }  
                    </>           
                   )
                    }
                                       
                        })()}  
            
            </div>
            </>
                )
      }