import React from 'react'
import  image1 from "./images/cod.jpg"
import  image2  from "./images/cottage-cheese.jpg"
import  image3 from "./images/eggs.jpg"
import  image4 from "./images/vegetable-soup.jpg"
import  image5 from "./images/watercress.jpg"
import  image6 from "./images/white slate food.jpg"
import { useState,useEffect } from 'react';
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
  export const Cataloug= ()=>{ 
 
  let useritem=0;
   const {showAlert}=useContext(nodeContext);
   const container=[ 
                   {Name:'Cod',image:image1,Energy:'82' ,Carbs:'0',Protein:'17.81',Fats:'0.67',Transfat:'0',Fiber:'1.4'},
                   {Name:'Cottage-cheese',image:image2,Energy:'98',Carbs:'3.38',Protein:'11.12',Fats:'4.3',Transfat:'2.5',Fiber:'0'},
                   {Name:'Eggs',image:image3,Energy:'143',Carbs:'0.72',Protein:'12.56',Fats:'9.51',Transfat:'0',Fiber:'0'},
                   {Name:'Vegetables-soup',image:image4,Energy:'72',Carbs:'13.47',Protein:'3.33',Fats:'0.52',Transfat:'4',Fiber:'4'},
                   {Name:'WaterCress',image:image5,Energy:'11',Carbs:'1.29',Protein:'2.3',Fats:'0.1',Transfat:'0.5',Fiber:'0.5'},
                   {Name:'White-Slate',image:image6,Energy:'100',Carbs:'23.5',Protein:'3',Fats:'1.5',Transfat:'2',Fiber:'3.2'}]
      
   
    let make;
   if(localStorage.getItem("userAdded")===null) 
    { make=[];}
  else
  { make=JSON.parse(localStorage.getItem('userAdded'));
  console.log('initilise with',make);}
  
    const [userAdded,setUserAdded]=useState(make)
    console.log("i am list",userAdded);
    
     useEffect(()=>{
  localStorage.setItem("userAdded",JSON.stringify(userAdded));
  
  },[userAdded])
    
    const Add=(p1)=>{
    setUserAdded([...userAdded,p1]);
        	    showAlert('Added','Item has been Added',3);
    localStorage.setItem("userAdded",JSON.stringify(userAdded));
    } 
    
    const del=(block)=>{
        	    showAlert('Deleted','Item has been deleted',3);
    setUserAdded(userAdded.filter((e)=>{return e!==block;}));
    localStorage.setItem("userAdded",JSON.stringify(userAdded));
    }
      let foodpic;
     function fun(e){
	  
	  foodpic=document.getElementById("image").src=URL.createObjectURL(e.target.files[0]);;
	    
  }
        const [buttonpop,setButtonpop]=useState(0);
            return (
             <>
             <div class="contain">
      <div> <h3 align="center">Food Available in Catalog</h3> </div>
           {container.map((list)=>{
                   return (
                     <>
                  <FoodBlock block={list} />
                     </>   )
                               })
             } 
       </div>
       
      <div className='banner' style={{textAlign:'center',width:'100%',margin:'10px'}}>
     <div ><h3 align ="center"> User Added Items</h3></div>
     {   
         userAdded.length===0?
         <h5 align="center" style={{color:'white'}}>No userAdded Item </h5>:  
          userAdded.map((list)=>{return ( <Useradded  block={list} Delete={del} />) })
     }
     
     <div style={{textAlign:'center',margin:'0 0 5px 0'}}>
     {buttonpop===0?
         <button class="formbutton" style={{background:'blue',color:'white'}} onClick={()=>{setButtonpop(1);}}> Add more  </button>:  
            <Itemsadd Add={Add} fun={fun} set={setButtonpop}/>
     }
     </div>
     </div>
        </>

        )
             
       }
       
     export const FoodBlock= (props)=>{                 
           const {showAlert}=useContext(nodeContext);   
             function cataItem(){
             showAlert('Access Denied','You are not Authorised to remove this',2);
             
             }
             
               return (
             <>
 <div class="row ">
 <div class="col13">
     
       <big> <strong>Item Name: </strong>{props.block.Name} </big> 
     </div>
 <div class="col13 banner ">
     <img class='food' src={props.block.image} style={{height:'200px',width:'200px',borderRadius:'25px'}} alt="fooditem"/> 
 </div>
 <div class="col13 banner ">
  <div> <h2> Nutriton composition</h2></div>
  <ol>
   <li>   Energy :{props.block.Energy} kcal </li> 
   <li>   Carbs: {props.block.Carbs} </li> 
   <li>   Protein: {props.block.Protein} </li> 
   <li>   Fats: {props.block.Fats} </li> 
   <li>   Trans-fat:{props.block.Transfat} </li> 
   <li>   Fiber: {props.block.Fiber} </li>    
 </ol>

 </div>
 <div class="col11 banner "> <button onClick={cataItem} disabled > Remove </button>  </div>
 </div> 
             </>
        )
             
       } 
       
           
  
 
  const Itemsadd=(props)=>
  {   const {showAlert}=useContext(nodeContext);
 
  const listing=async(e)=>
  {        props.set(0);
           e.preventDefault();
	
	  let food=document.getElementById("name").value;
	      
	   if(!food)
	    {showAlert('warning','oops!!! fooditem  cant be blank',2);}
	   else                
	   {  
	      const resp=await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=eb306059&app_key=b6ea433ddc9ee58b9e326e490990f1cd&ingr=${food}&nutrition-type=cooking`); 
        	  const final_result=await resp.json();
        	  console.log(final_result);
        	   if(final_result.parsed.length===0)
        	   {
        	    showAlert('sorry','No such food item available',3);}
	          else
	          {
	        const newItem={name:food,
	                  Image:final_result.parsed[0].food.image,
	                  Energy:final_result.parsed[0].food.nutrients.ENERC_KCAL,
	                  Carbs:final_result.parsed[0].food.nutrients.CHOCDF,
	                  Fats:final_result.parsed[0].food.nutrients.FAT,
	                  Proteins:final_result.parsed[0].food.nutrients.PROCNT,
	                  Transfats:final_result.parsed[0].food.nutrients.FIBTG,
	                  Fiber:final_result.parsed[0].food.nutrients.FIBTG,
	                  }
	                props.Add(newItem);
	                
	           }
	   } 
	
  } 
    
  return (
	 <>
 <div style={{textAlign:'center',background:'chartreuse',borderRadius:'100px',padding:'20px'}} >
	   <form onSubmit={listing}>
	   Food Name: <input type='text' id='name'/> <br/>
	   <input type='submit' /> 
	   </form>
	   </div>
	</>
	)
  }
  
  
   export const Useradded= (props)=>{   
               return (
             <>
 <div class="row">
 <div class="col13">
     
       <big> <strong>Item Name: </strong>{props.block.name} </big> 
     </div>
 <div class="col13 banner ">
     <img class='food' src={props.block.Image} style={{height:'200px',width:'200px',borderRadius:'25px'}} alt="fooditem"/> 
 </div>
 <div class="col13 banner ">
  <div> <h2> Nutriton composition</h2></div>
  <ol>
   <li>   Energy :{props.block.Energy} kcal </li> 
   <li>   Carbs: {props.block.Carbs} cal </li> 
   <li>   Protein: {props.block.Proteins} gm</li> 
   <li>   Fats: {props.block.Fats} gm</li> 
   <li>   Trans-fat:{props.block.Transfats} gm </li> 
   <li>   Fiber: {props.block.Fiber} gm </li> 
 </ol>
 </div >
 <div className="col11 banner " ><button onClick={()=>{props.Delete(props.block)}}> Remove </button> </div> 
 </div> 
             </>
        )
             
       }  
  
 
  
  