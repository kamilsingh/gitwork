import React from 'react'
import {useState,useEffect} from 'react'; 
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';

 export const Meals=(props)=>{
            const {fname,fitems,setFname,setFitems}=useContext(nodeContext); 
       const temp=[<div>
            <label> Ingredient </label> 
              <input type='text' placeholder='Enter your ingredient' id={'item'+props.pass+'0'} name={'item'+props.pass+'0'} style={{width:'50%'}} />
 	     <br/> <label> Quantity </label>
 	 	      <input type='number' min='1' name={'quant'+props.pass+'0'} id={'quant'+props.pass+'0'} style={{width:'30%'}}/>
 	 	  <select  class='input' name='foodweigh' id={'foodweigh'+props.pass+0}> 
 	 	  <option   class='input' value=''>Scale</option>
 	 	  <option  class='input' value='grams'>grams</option>
 	 	  <option  class='input' value='serving'>Serving</option>
 	 	  </select>  <br/> </div>]
     const [content,setContent]=useState(temp);
       const {showAlert}=useContext(nodeContext); 
 	 function add(i){         
 	 	    console.log(i);
 	 	   setContent([...content,[[<div> 
            <label> Ingredient </label> 
              <input type='text' placeholder='Enter your ingredient' id={'item'+props.pass+i} name={'item'+props.pass+i} style={{width:'50%'}} />
 	       <br/> <label> Quantity </label>
 	 	   <input type='number' min='1' name={'quant'+props.pass+i} id={'quant'+props.pass+i} style={{width:'30%'}}/>
 	 	   <select  name='foodweigh' id={'foodweigh'+props.pass+i}> 
 	 	   <option  value=''>Scale</option>
 	 	   <option  value='grams'>grams</option>
 	 	   <option class='input' value='serving'>Serving</option>
 	 	  </select></div>]]]);
 	 	  
        }
         
 	 
 	 function finish(){	     
          if(document.getElementById('mealname').value!=='')
               {setFname(document.getElementById('mealname').value);}
          const temp={
          Energy:props.data.Energy-props.mealsmath.Energy,
          Protein:props.data.Protein-props.mealsmath.Protein,
          Carbs:props.data.Carbs-props.mealsmath.Carbs,
          Fats:props.data.Fats-props.mealsmath.Fats,
          Transfat:props.data.Transfat-props.mealsmath.Transfat,
          }
           props.meal(temp);
           props.setmealsmath(props.data);
           props.set(2);
       }   
 	 	 
     const [food,setFood]=useState(null);                 
     async function confirm(done,i){
       const itemid='item'+props.pass+i;
       const quantid='quant'+props.pass+i;
       const foodweigh='foodweigh'+props.pass+i;
       const req=document.getElementById(itemid).value;
       const quantity=document.getElementById(quantid).value;
       const foodweight=document.getElementById(foodweigh).value;
              if(document.getElementById('mealname').value==='')
                { showAlert('warning','Give this special meal a unique name     gajar ka halwa,sunday-breakfast or any ',5); }
             else if(quantity<=0)
                 { showAlert('warning','quantity cant be zero or less than zero',2);}
      	    else if(req===''||req===null||foodweight=='')
      	         {document.getElementById(itemid).style.borderColor="red";
      	           document.getElementById(quantid).style.borderColor="red";
      	           document.getElementById(quantid).style.borderColor="red";
      	           showAlert('warning','item cant be empty and choose weigh scale',2);} 
      	          else
      	         { 
      	           document.getElementById(itemid).style.borderColor="black";
      	           document.getElementById(quantid).style.borderColor="black";
      	            document.getElementById(quantid).style.borderColor="black";
      	         console.log("req is ",req);
      	        setFitems([...fitems,{item:req,quan:quantity}]);
                  console.log("req is ",req);
              const resp=await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=eb306059&app_key=b6ea433ddc9ee58b9e326e490990f1cd&ingr=${req}&nutrition-type=cooking`); 
              const final_result=await resp.json();
              console.log(final_result);
              if(final_result.parsed.length===0)
              {  
               showAlert('warning','No such food item in database',2);
             
              }
              else
              {
                if(done!==1)  
      	              {add(i+1);}
      	       showAlert('success','food item added in meal',2);
          const temp={
           Energy:props.data.Energy+(final_result.parsed[0].food.nutrients.ENERC_KCAL*quantity),
           Protein:props.data.Protein+(final_result.parsed[0].food.nutrients.PROCNT*quantity),
           Carbs:props.data.Carbs+(final_result.parsed[0].food.nutrients.CHOCDF*quantity),
           Fats:props.data.Fats+(final_result.parsed[0].food.nutrients.FAT*quantity),
           Transfat:props.data.Transfat+(final_result.parsed[0].food.nutrients.FIBTG*quantity) }
           
           if(foodweight==='grams')
            {
             temp.Energy/=100;
             temp.Protein/=100;
             temp.Carbs/=100;
             temp.Fats/=100;
             temp.Transfat/=100;
            }
          props.setData(temp);
                if(done===1)
              {finish();}  
                 }
                 }
                 }
       
      return (<>
 	 	 <div>
 	 	 <h5>
 	 	 <label > Give this meal a name</label> <br/>
 	 	 <input type='text' id='mealname' name='mealname' style={{width:'70%'}}/> <br/>
 	 	  Enter the items in Meal ({content.length-1} items Added) 
         </h5> 
           {content.map((item)=>{return (<p> {item} </p>)})}
          <br/>
          <button style={{background:'green',color:'white',padding:'10px 20px 10px 20px',margin:'20px'}} onClick={()=>{confirm(0,content.length-1);}}> Add </button>
 	 	  <button style={{background:'blue',color:'white',padding:'10px 20px 10px 20px',margin:'20px'}}  onClick={()=>{confirm(1,content.length-1);}}> Done </button></div>
            </>
              )
      
      } 