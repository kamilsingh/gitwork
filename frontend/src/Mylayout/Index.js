import React from 'react'
import {Link} from "react-router-dom";
import search from './../images/search icon.jpg'
import { useState,useEffect } from 'react';
import aboutlove from './../images/foodlove.jpg'
import foodpicmiss from './../images/foodmissimage.jpg'
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
import {Alert} from './Alert';
  export const Index= (props)=>{   
   
               
   function bmi()
  {
      var res=document.getElementById("result");
      
       let h=parseInt(document.getElementById("height").value);
        let w=parseInt(document.getElementById("weight").value);
         let str="";
         let cat="";
          if(isNaN(h)||isNaN(w))
            {
              alert(" enter the valid height or weight");
              }
              else
             {
                   str=w/((h/100)*(h/100));
                   str=str.toFixed(2);
                   if(str<18)
                     {
                       cat="under-weight";
                     }
                     else if(str>=18 && str<=25)
                     {
                      cat ="Normal"; 
                     }
                     else
                     {
                      cat="over-weight";
                     }
          res.innerHTML="<strong> <h5><big> BMI value : </big>"+str+" <br/> <big> Category : </big>"+cat+" <br> <a href='/track'> <font color='white'>  click here to know detailed nutrition recommedations  </font> </a>  </h5> </strong>"; 
           }
  
  }
  
  
  function knowmore(){
	
	   let str=` 
        Fitbird is an college project inititative which focuses on healthy fitness,halthy Diet well mental welness, and good </br>
        Healthcare. It is one of the top competitior in the fitness industry. The company has been referred to as 'one of the</br>
        most influential economic' and cultural forces in the world, as well as the worlds most valuable rand.</br>
	    Mr fitman founded fitbird for his college project,[11] </br>
	    on Oct 5, 2021. It starts as an online marketplace for</br>
	    healthcare but expanded to mental wellness,healthcare,</br>
	    healthy diet plans, and much more. </br>
	       </br>
	    Fitbirds is known for its disruption of well-established  </br>
	    industries through technological innovation and mass scale.</br>
	    It is the world largest online healthcare market,assistant </br>
	    provider,live-streaming platform and cloud computing platform</br>
	    as measured by revenue and market, capitalization.It is the </br>
	    largest Internet company by revenue in the world.[20] It is the</br>
	    largest employer in the United States[21] and one of the worlds </br>
	    most valuable companies. As of 2020, WE have the highest global </br>
	    brand valuation.</br>
	    </br>
	    Fitbird disruption of well-established  industries through technological innovation and mass scale.</br>
	    It is the world largest online healthcare market,assistant  provider,live-streaming platform and cloud computing platform</br>
	    as measured by revenue and market, capitalization.It is the largest Internet company by revenue in the world.[20] It is the</br>
	    largest employer in the United States[21] and one of the worlds most valuable companies. As of 2020, WE have the highest global brand valuation.</br>`
	    document.getElementById("know").innerHTML=str;
	    
	     
   } 
 
  const[foodie,setFoodie]=useState(null);
 const [query,setQuery]=useState(null);
    const {showAlert}=useContext(nodeContext);
  async function foodquery(e){
    e.preventDefault();
   let food=document.getElementById('searchfood').value;
        if(food=='')
        showAlert('warning','food item cant be empty',2);
        else
        {showAlert('Please wait...',`${food} is being fetched`,2);   
    const resp=await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=eb306059&app_key=b6ea433ddc9ee58b9e326e490990f1cd&ingr=${food}&nutrition-type=cooking`); 
        	  const final_result=await resp.json();
        	  console.log(final_result);
        	 setFoodie(final_result);
        	 if(final_result.hints.length===0)
        	 {
        	 showAlert('warning',`Oops !!!No food item found with name ${food}`,4);
        	 }
        }
        }
    
         return (
             <> 
     <div style={{display:'flex'}}  id="grad">
   <div className="row">
     <div className="col25" >        
      <div className="lrow">
       <h2> Height</h2> <input className="inputbox" id="height" name="height" type="text" placeholder="Height in(cm)"/>
       <h2> Weight</h2> <input className="inputbox"  id="weight" name="weight" type="text" placeholder="Weight in(kgs)"/>
      </div>
      <div className="mass">
       <button style={{background:'blue',color:'white',borderRadius:'25px'}} className="bmi"   onClick={bmi}> CALCULATE BMI</button>
       <div><span id="result">  </span></div>
      </div>
     </div>
      <div className="col25">
        <div className="rrow" style={{width:'80%',float: 'right'}}>
         <h3  ><marquee behavior="slide" scrollamount="20" >Welcome to Fitbird</marquee> </h3>
         <h3 ><marquee direction="right"behavior="slide" scrollamount="20" >Place to seek fitness </marquee> </h3>
        </div>
      </div>
   </div>
  </div>
 
   <header className="sec2-head" align="center" style={{border:"9px inset",width:"100%"}}>
  <h5 style={{textAlign:'center'}}><strong> Search food of your choice </strong></h5>
  <form onSubmit={foodquery} action="/track" method="post" > <input type="search"  name="searchfood" id="searchfood" placeholder="(ex. butter,soup,tomato)" /> <input type="image"  src={search} alt="submit" style={{margin:"-10px 0 -24px -80px",height:"61px",
  width:"73px","border-radius":"10%",opacity: "0.5"}}/></form>
  </header>
  <div>
  { foodie===null?<h5 style={{textAlign:'center'}}> <i> Your Search Results will appear here </i></h5>:<Foodie foods={foodie}/>
  }
  </div>
  <div className="sec2-body">
    <div className="col15" style={{margin:"auto"}}>    
     <div className="item" id="item1" > 
      <div className="icon"> 
     <Link to="/trackmeal" style={{"text-decoration":"none",fontweight:"700px",color:"white"}}> <img className="featureicon" alt="" src={aboutlove} width="100px" height="100px" /> <br/> Calorie count </Link>
       <p> Keeping a food diary <br/>
       helps you understand your <br/>
       habits and increases your <br/>
       likelihood of hitting your goals.
      </p>
      </div>
    </div>
    </div>
    <div className="col15" style={{margin:"auto"}}>    
     <div className="item" id="item1" >
      <div className="icon"> 
     <Link to="/track" style={{"text-decoration":"none",fontweight:"700px",color:"white"}}> <img className="featureicon" alt="" src={aboutlove} width="100px" height="100px" /> <br/> Nutrition Recommedations </Link>
       <p>
       Our nutritionists cum advisor and <br/>
       fitness trainers will create <br/>
       diet and workout plans that<br/>
        will help YOU achieve your goal.<br/>
      </p>
      </div>
    </div>
    </div>
    <div className="col15" style={{margin:"auto"}}>    
     <div className="item" id="item1" > 
     <div className="icon"> 
     <Link to="/dietplans" style={{"text-decoration":"none",fontweight:"700px",color:"white"}}> <img className="featureicon" alt="" src={aboutlove} width="100px" height="100px" /> <br/>  Diet and Workout plans </Link>
       <p>Be it our coaches or Ria, <br/>
        our diet and workout plans have <br/>
       helped over 500,000 users achieve <br/>
       their goal.and oved their changes<br/>
        What are you waiting for?
       
      </p>
      </div>
    </div>
    </div>
    <div className="col15" style={{margin:"auto"}}>     
      <div className="item" id="item1">
       <div className="icon"> 
     <Link to="/activity" style={{"text-decoration":"none",fontweight:"700px",color:"white"}}> <img className="featureicon" alt="" src={aboutlove} width="100px" height="100px" /> <br/> Track your Activities </Link>
       <p> Powered by 500 Million food logs,<br/>
        20 million messages and a Millennium  <br/>
        of experience, Ria is the world's  <br/>
        first AI coach who <br/>
        will keep you going!
       
      </p>
      </div>
    </div>
    </div>
    <div className="col15" style={{margin:"auto"}}>    
     <div className="item"  id="item1" > 
       <div className="icon"> 
     <Link to="/login" style={{"text-decoration":"none",fontweight:"700px",color:"white"}}> <img className="featureicon" alt="" src={aboutlove} width="100px" height="100px" /> <br/> Fix appointment </Link>
       <p> Fix your appointment with one of <br/>
        top class coach and fitness masters <br/>
        with 10+ years of fitness experience <br/>
        and more than 50 millions users
      </p>
      </div>
    </div>
    </div>
    </div>
 
  <div className="container about" id="about" style={{backgroundColor:"white",color:'black'}}>
   <div className="row">
    <div className="col18" style={{padding:'100px'}}>
       <p id="know" align="center">Fitbird is an college  project  inititative which focuses on healthy fitness,halthy Diet<br/>
       well mental welness, and good Healthcare<br/>
        industry.... <br/>
        to know more click Know More Button 
        <button className="largebutton knowmore" onClick={knowmore}> Know More </button>
        </p>
        
   </div>
   <div className="col12">
    <div className="scene">
     <img  className="icon" alt=""  height="100px" width="100px" src={aboutlove}/> </div>   
   </div>
   </div>
  </div>
  </>
  )
 }
 
 const Foodie=(props)=>
      { 
      const item=props.foods.hints;
      console.log(props);
      return(
                 <>
        <div className="row">
          
         { item.map((list)=>{
               
             let foodpic=list.food.image;
                return ( <> 
                <div className="col14 " style={{boxShadow:'0 0 0 1px rgb(0 0 0 / 15%)',margin:'5px auto 5px auto',border:'1px outset',borderRadius:'25px'}}>
                <h5>  {list.food.label} </h5>
                { typeof foodpic==='undefined'?<img  alt="" height="200px" width="200px" style={{borderRadius:'50%'}}src={foodpicmiss}/>
                :<img  alt="" style={{borderRadius:'50%'}}src={list.food.image} height="200px" width="200px"/>}<br/>
                <h4 style={{color:'green'}}> <strong> Food category: </strong> {list.food.category} </h4>
                 <h5 style={{color:'voilet'}}> <strong> Food Name: </strong> {list.food.label}  </h5>
                <h5> Food Nutrients : </h5> <br/>
                <strong>Carbs:</strong> {parseInt(list.food.nutrients.CHOCDF)} gm<br/>
                <strong>Fats:</strong> {parseInt(list.food.nutrients.FAT)}  gm <br/>
                <strong>Fiber:</strong>{parseInt(list.food.nutrients.FIBTG)} gm <br/>
                <strong>Protein:</strong>{parseInt(list.food.nutrients.PROCNT)} gm <br/>
                <strong>Energy:</strong>{parseInt(list.food.nutrients.ENERC_KCAL)} kCAL <br/>
               </div>
               </> )})
            }           
        </div>
      </>
      )
 }