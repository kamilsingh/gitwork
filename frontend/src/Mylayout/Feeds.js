import React from 'react'
import {Link} from "react-router-dom";
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
  export const Feeds=(props)=>{   
          const wash=()=>{
          document.getElementById('feedform').innerText="";
         
          }
          
          const  feedsend=()=>
      {    
       alert("Are you sure!");
	   let data="";
	 
	   let name=document.feedform.name.value;
	   let email=document.feedform.email.value;
	   let desc=document.feedform.desc.value;
		if(name==""||email==""||desc=="")
		     { data+=`Failed !!!! Possible error \n one of field is empty`;
		     alert(data);
		     props.showAlert('Failed',data);}
		 else
		  { alert('Success');
		  props.showAlert('Success','Thank you for putting feedback to us.\n We will be shortly communicating with you');}
		     
     }
          
            return(
            <>
            <div id='feedform' style={{display:'flex',color:'black'}}>
            <div class="col19" id='temp'>
            <form name='feedform'>
         Name: <input type='text' id='name' name='name' style={{height:'10px',width:'100px',borderRadius:'25px'}}/>  <br/>
	     Email:<input type='email' id='email' name='email'style={{height:'10px',width:'100px',borderRadius:'25px'}}/>  <br/>
	     Subject <input type='text' id='subject' style={{height:'10px',width:'100px',borderRadius:'25px'}}/> <br/>
	     Description <p> <textarea name='desc'  cols='70' rows='11'/></p> <br/>
	    <button  onClick={feedsend}>Send </button></form></div>;
	    <div class="col11" > <Link to='/'> <button onClick={wash} style={{float:'right'}} > x</button> </Link></div> 
	    </div> 
            </>
            ) 
             
             }  