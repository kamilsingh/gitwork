import React from 'react'
import PropTypes from 'prop-types'
import {Link,useLocation} from "react-router-dom";
import { useState,useEffect } from 'react';
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
import { GoogleLogout } from 'react-google-login';
import {Alert} from './Alert';
  export default function Header(props){
   
  const drop=()=>{
	
	let x = document.getElementById("drop");
	  if(x.className==="top")
		  {
		    x.className+=" responsive";
		  }
	  else
		  {
		    x.className="top";
		  }
                }
          
        const [popupfeed,setPopup]=useState(0); 
        const {login,setLogin}=useContext(nodeContext); 
       const onSuccess=()=>{
                 alert('success','Logged out Successfully',3);
                  setLogin(false);  }
        const logout=()=>{
         alert('are you sure to log out');
          }      
        const [mode,setMode]=useState(0);
        const {showAlert,profile}=useContext(nodeContext);
        const [tip,setTip]=useState("1");
         return (
        
         <>   
   
   <nav >
    <ul class="top" id="drop"  >
    <li><Link  to="/"  >HOME</Link></li>
    <li><Link  to="/dash"  >CATALOUG</Link></li>
    <li><Link onClick={()=>{setPopup(1);setMode(0)}} to="#" >FEEDBACK</Link></li>
     <li><Link onClick={()=>{setPopup(1);setMode(1)}} to="#" ><button style={{background:'blue',color:'white',borderRadius:'10px'}}>Healthtip<span style={{background:'red',color:'white',borderRadius:'25%',fontSize:'18px'}}> {tip}&nbsp; </span></button> </Link></li>
    <li><Link to="/about" >ABOUT US</Link></li>
    <li> <a href="mailto:officialkam9@gmail.com" >CONTACT US </a></li>
    <li> <button onClick={props.toggleMode}  style={{background:'blue',color:'white',borderRadius:'25px'}} >{props.mode=='light'?'Dark Mode':'light Mode'}</button> </li>
    {login===false?<><li class="right"><Link to="/login" >LOG IN</Link>  </li>  
    <li class="right"> <Link to="/signup" >SIGN UP</Link></li></>:<><li class='right'> <Link to="/login" > ACCOUNT </Link></li><li class="right"><Link to="#"  onClick={logout}>  <GoogleLogout
      clientId="1055590570001-0ho2ga2ra9ot69d55ko8c09san8nase4.apps.googleusercontent.com"
      render={renderProps => ( <>
      <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{background:'blue',color:'white',borderRadius:'5px'}}> Logout </button>
     </>)}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    >
    </GoogleLogout></Link>  </li></>}
    <li class="dropdown"><Link to="#"  onClick={drop}>&#9776;</Link></li>
   </ul>
  </nav>
    <div> 
   { popupfeed===1?<Feeds set={setPopup}  mode={mode}  style={props.style} />:""}
   </div>
   <div>
   </div>   
       </> )
       
  }
  
  
   export const Feeds=(props)=>{   
        
                   const healthtip=[{heading:"Eat a healthy diet",message:"Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season. By eating healthy, you will reduce your risk of malnutrition and noncommunicable diseases (NCDs) such as diabetes, heart disease, stroke and cancer."},
                                                {heading:"Consume less salt and sugar",message:"consuming excessive amounts of sugars increases the risk of tooth decay and unhealthy weight gain. In both adults and children, the intake of free sugars should be reduced to less than 10% of total energy intake. This is equivalent to 50g or about 12 teaspoons for an adult. WHO recommends consuming less than 5% of total energy intake for additional health benefits. You can reduce your sugar intake by limiting the consumption of sugary snacks, candies and sugar-sweetened beverages."},
                                                 {heading:"Reduce intake of harmful fats",message:"The preferable unsaturated fats are found in fish, avocado and nuts, and in sunflower, soybean, canola and olive oils; saturated fats are found in fatty meat, butter, palm and coconut oil, cream, cheese, ghee and lard; and trans-fats are found in baked and fried foods, and pre-packaged snacks and foods, such as frozen pizza, cookies, biscuits, and cooking oils and spreads."},
                                                 {heading:"Avoid harmful use of alcohol",message:"There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases, as well as injuries resulting from violence and road clashes and collisions"},
                                                 {heading:"Don’t smoke",message:"If you are currently a smoker, it’s not too late to quit. Once you do, you will experience immediate and long-term health benefits. If you are not a smoker, that’s great! Do not start smoking and fight for your right to breathe tobacco-smoke-free air."},
                                                 {heading:"Be Physically active!!",message:"Physical activity is defined as any bodily movement produced by skeletal muscles that requires energy expenditure. This includes exercise and activities undertaken while working, playing, carrying out household chores, travelling, and engaging in recreational pursuits. The amount of physical activity you need depends on your age group but adults aged 18-64 years should do at least 150 minutes of moderate-intensity physical activity throughout the week. Increase moderate-intensity physical activity to 300 minutes per week for additional health benefits."},
                                                 {heading:"Check your blood pressure regularly",message:"Hypertension, or high blood pressure, is called a “silent killer”. This is because many people who have hypertension may not be aware of the problem as it may not have any symptoms. If left uncontrolled, hypertension can lead to heart, brain, kidney and other diseases. Have your blood pressure checked regularly by a health worker so you know your numbers. If your blood pressure is high, get the advice of a health worker. This is vital in the prevention and control of hypertension."},
                                                 {heading:"Get Regular checkup",message:"Getting yourself tested is an important step in knowing your health status, especially when it comes to HIV, hepatitis B, sexually-transmitted infections (STIs) and tuberculosis (TB). "},
                                                 {heading:"Get vaccinated",message:"Vaccination is one of the most effective ways to prevent diseases. Vaccines work with your body’s natural defences to build protection against diseases like cervical cancer, cholera, diphtheria, hepatitis B, influenza, measles, mumps, pneumonia, polio, rabies, rubella, tetanus, typhoid, and yellow fever."},
                                                 {heading:"Cover your mouth when coughing or sneezing",message:"Diseases such as influenza, pneumonia and tuberculosis are transmitted through the air. When an infected person coughs or sneezes, infectious agents may be passed on to others through airborne droplets."},
                                                 {heading:"Drink only safe water",message:"Drinking unsafe water can lead to water-borne diseases such as cholera, diarrhoea, hepatitis A, typhoid and polio. Globally, at least 2 billion people use a drinking water source contaminated with faeces"},
                                                 {heading:"Clean your hands properly",message:"Hand hygiene is critical not only for health workers but for everyone. Clean hands can prevent the spread of infectious illnesses"},
                                                 {heading:"Prepare your food correctly",message:"Unsafe food containing harmful bacteria, viruses, parasites or chemical substances, causes more than 200 diseases – ranging from diarrhoea to cancers. When buying food at the market or store, check the labels or the actual produce to ensure it is safe to eat. "},
                                                 {heading:"Have regular check-ups",message:"Regular check-ups can help find health problems before they start. Health professionals can help find and diagnose health issues early, when your chances for treatment and cure are better."},
                                                 ]
        
         const {showAlert}=useContext(nodeContext);  
          const  feedsend=(e)=>
      {  props.set(0);    
          e.preventDefault();
          
       alert("Are you sure!");
	   let data="";
	   let name=document.feedform.name.value;
	   let email=document.feedform.email.value;
	   let desc=document.feedform.desc.value;
		if(name==""||email==""||desc=="")
		     { data+=`Failed !!!! Possible error \n one of field is empty`
		     showAlert('warning',data,3);}
		 else
		  { alert('Success');
		    props.set(0);
		  showAlert('success','Thank you for putting feedback to us.\n We will be shortly communicating with you',3);}
		     
          }
            const index=Math.floor(Math.random()*14);
            return(
            <>
            <div id='feedform col15' style={{position:'absolute',background:'orange',borderRadius:'25px',left:'5px',display:'flex',textAlign:'center',overflow:'hidden'}}>
            {props.mode===0?<div class="col19" >
            <form name='feedform'  onSubmit={feedsend} >
            Name: <input type='text' id='name' name='name' style={{width:'50%',borderRadius:'25px',marginTop:'10px'}}/>  <br/>
	        Email&nbsp;&nbsp;:<input type='email' id='email' name='email' style={{width:'50%',borderRadius:'25px',marginTop:'10px',height:'38px'}}/> <br/>
	        Subject <input type='text' id='subject' style={{height:'10px',width:'50%',borderRadius:'25px',marginTop:'10px'}}/> <br/>
	        Description  <br/><textarea name='desc' cols='70' rows='11' style={{borderRadius:'25px',marginTop:'10px',width:'80%'}}/> <br/>
	       <input type="submit"/>
	       </form>
	       </div>:<><div className="col11"></div><div className="coll18" style={{background:'white',textAlign:'center'}}>
            <div  style={{color:'green'}}> <big>  <i><h3>{healthtip[index].heading} </h3> </i> </big> <p> <h1> {alert.result}!!!! </h1> <h6> {healthtip[index].message} </h6> </p> </div>
            </div> </>}
	    <div class="col11">
	     <button onClick={()=>{props.set(0);}} style={{background:'red',color:'white',float:'right'}}> <h2> x </h2> </button> </div>
	    </div> 
            </>
            ) 
             
          } 
  