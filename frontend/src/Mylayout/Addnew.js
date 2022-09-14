import React,{ useState } from 'react';


 export const Addnew= ({Add})=>{
       const [name,setItem] =useState("");
       const [title,setDesc] =useState("");
        const sub=(e)=>{
          e.preventDefault();
             if(!name ||!title)
              {alert("credentials can't be blank");}
              else
                  { Add(name,title);
                   setItem("");
                   setDesc("");}
               }
         return (
                <>
              <div>
                <label> Add new item </label>
                <form onSubmit={sub}>
                  <label> New item </label>
               <input type="text" value={name}  onChange={(e)=>{setItem(e.target.value)}}/>
                  <label> item desc </label>
               <input type="text" value={title} onChange={(e)=>{setDesc(e.target.value)}}/>
               <input type="submit" /> 
               </form>
            </div>
              </>
                )
 
  
  }