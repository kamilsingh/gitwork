import React from 'react'
import {Link} from "react-router-dom";
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
import {useState,useEffect} from 'react';
import {Meals} from './Meals.js';
import {Updates} from './Updates.js';
import breakfast from './../images/breakfastlogo.JPG'
import lunch from './../images/lunchlogo.png'
import dinner from './../images/dinnerlogo.JPG'
import snacks from './../images/snackslogo.JPG'

  export  const Meal= (props)=>{   
       const {fname,fitems,setFname,setFitems}=useContext(nodeContext);      
           const [popup1,setPopup1]=useState(0);
           const [popup2,setPopup2]=useState(0);
           const [popup3,setPopup3]=useState(0);
           const [popup4,setPopup4]=useState(0);
           const[data,setData]=useState({Energy:0,Protein:0,Carbs:0,Fats:0,Transfat:0});
           const[mealmath,setMealmath]=useState({Energy:0,Protein:0,Carbs:0,Fats:0,Transfat:0}); 
           const[mealcount,setMealcount]=useState([]);    
           const append=(p1)=>{
            setMealcount([...mealcount,p1]);
           }     
             return (
             <>
             <div class="container">
  <div style={{textAlign:'center'}}> <strong> <h3> Calculate your Today Calorie intake  </h3></strong> </div>
  <div class="row " style={{position:'fixed',width:'20%',top:'5px',right:'5px',background:'green',color:'white',fontSize:'25px',borderRadius:'25px'}}> 
    <label style={{fontSize:'15px'}}> Total Nutrients  Intake </label> <br/>
    <label style={{padding:'7px'}}> Carbs:  </label> <label style={{padding:'7px'}}> {data.Carbs.toFixed(2)} kcal </label><br/>
     <label style={{padding:'7px'}}> Protien: </label> <label style={{padding:'7px'}}>{data.Protein.toFixed(2)} gm </label><br/>
     <label style={{padding:'7px'}}> Fats:  </label> <label style={{padding:'7px'}}>{data.Fats.toFixed(2)} gm  </label><br/>
      <label style={{padding:'7px'}}> Trans-fat :</label> <label style={{padding:'7px'}}> {data.Transfat.toFixed(2)} gm </label><br/>
      <label> Total Calories taken : {data.Energy.toFixed(2)} Kcal </label>

   
 </div>
 
 <div class="row "> 
  <div class="headleft">
    <label style={{fontSize:'15px'}}>Total  Nutrients  Intake </label> <br/>
    <label style={{padding:'7px'}}> Carbs:  </label> <label style={{padding:'7px'}}> {data.Carbs.toFixed(2)} kcal </label><br/>
     <label style={{padding:'7px'}}> Protien: </label> <label style={{padding:'7px'}}>{data.Protein.toFixed(2)} gm </label><br/>
     <label style={{padding:'7px'}}> Fats:  </label> <label style={{padding:'7px'}}>{data.Fats.toFixed(2)} gm  </label><br/>
      <label style={{padding:'7px'}}> Trans-fat :</label> <label style={{padding:'7px'}}> {data.Transfat.toFixed(2)} gm </label><br/>
   </div>
   <div class="result">
     Total Calories taken : {data.Energy.toFixed(2)} Kcal
   </div>
   
 </div>
 <div class="row bann">
       <div class="col15 block" style={{textAlign:'center'}}>
        <div style={{display:'flex'}} id="Breakfast">
            <div className='col13'> <label class="label"> Breakfast</label> <br/> <img  className='clsmob clstab'src={breakfast} style={{borderRadius:'50px'}} alt="" height="100px" width="150px"/> </div>
           <div style={{display:'flex'}}className='col17'>
        { 
        popup1===0?  <button class="mealcount" onClick={()=>{setFitems([]);setFname("Meal");setPopup1(1);}}> 
        Calculate</button> :popup1==1?<Meals  showAlert={props.showAlert} set={setPopup1} setData={setData} data={data}  setmealsmath={setMealmath}  mealsmath={mealmath}    meal={append}  pass={1} />:<Updates block={mealcount[0]} />
       } </div>
       </div>
       </div>
       </div>
      <div class="row bann">
       <div class="col15 block" style={{textAlign:'center'}}>
        <div style={{display:'flex'}} id="Lunch">
            <div className='col13'> <label class="label"> Lunch</label> <br/> <img  className='clsmob clstab'src={lunch} style={{borderRadius:'50px'}} alt="" height="100px" width="150px"/> </div>
           <div style={{display:'flex'}}className='col17'>
        { 
        popup2===0?  <button class="mealcount" onClick={()=>{setFitems([]);setFname("Meal");setPopup2(1);}}> 
        Calculate</button> :popup2==1?<Meals  showAlert={props.showAlert} set={setPopup2} setData={setData} data={data}  setmealsmath={setMealmath}  mealsmath={mealmath}    meal={append}  pass={2} />:<Updates block={mealcount[1]} />
       } </div>
       </div>
       </div>
       </div>
     <div class="row bann">
       <div class="col15 block" style={{textAlign:'center'}}>
        <div style={{display:'flex'}} id="Dinner">
            <div className='col13'> <label class="label"> Dinner</label> <br/> <img  className='clsmob clstab'src={dinner} style={{borderRadius:'50px'}} alt="" height="100px" width="150px"/> </div>
           <div style={{display:'flex'}}className='col17'>
        { 
        popup3===0?  <button class="mealcount" onClick={()=>{setFitems([]);setFname("Meal");setPopup3(1);}}> 
        Calculate</button> :popup3==1?<Meals  showAlert={props.showAlert} set={setPopup3} setData={setData} data={data}  setmealsmath={setMealmath}  mealsmath={mealmath}    meal={append}  pass={3} />:<Updates block={mealcount[2]} />
       } </div>
       </div>
       </div>
       </div>
     <div class="row bann">
       <div class="col15 block" style={{textAlign:'center'}}>
        <div style={{display:'flex'}} id="Snacks">
            <div className='col13'> <label class="label">Other</label> <br/> <img  className='clsmob clstab'src={snacks} style={{borderRadius:'50px'}} alt="" height="100px" width="150px"/> </div>
           <div style={{display:'flex'}}className='col17'>
        { 
        popup4===0?  <button class="mealcount" onClick={()=>{setFitems([]);setFname("Meal");setPopup4(1);}}> 
        Calculate</button> :popup4==1?<Meals  showAlert={props.showAlert} set={setPopup4} setData={setData} data={data}  setmealsmath={setMealmath}  mealsmath={mealmath}    meal={append}  pass={4} />:<Updates block={mealcount[3]} />
       } </div>
       </div>
       </div>
       </div>
          </div>             
             </>
             
             )
     } 
             
             
     
 	 	         
             
   
      
    
  