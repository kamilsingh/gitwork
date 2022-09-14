import React from 'react'
import { useState} from 'react';
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';

  const styling={
       boxShadow:'0 0 0 1px rgb(0 0 0 / 15%)',
       border:'1px outset',
       borderRadius:'20px',
       textAlign:'center',
       margin:'50px auto 0 auto'}
       
   const inputstyle={
     width:'150px'
   }
     export const Track= ()=>{   
     const [eGoal,setE]=useState(0);
              const [nGoal,setN]=useState(0);
              const [recommend,setR]=useState(0);
              
          function handle_Negative(p){
          if(document.getElementById(p).value<0)
           {document.getElementById(p).value='';
           document.getElementById(p).style.borderColor="red";} }
     
     const {showAlert,healthtip}=useContext(nodeContext);
       
     
     function bmr(p)
     {let str=""; 
       let height=document.getElementById('height').value;
      let weight=document.getElementById('weight').value;
      let act=document.getElementById('active1').value;
      let age=document.getElementById('age').value;
      let male=document.getElementById('male').checked;
      let female=document.getElementById('female').checked;
   
      let hsquare=(height/100)*(height/100);
      let BMI=(weight/hsquare).toFixed(2);
      let fatPercent=((1.20*BMI)+(0.23*age)-16.2).toFixed(2);
      let VisceralFat=((0.1)*fatPercent).toFixed(2);
      let fatMass=parseInt(((fatPercent/100)*weight));
      let leanBodyMass=weight-fatMass;
      
       if(!male&&!female||!height||!weight||!age)
       {
       showAlert('warning','fill in parameter(age,weight,height..etc) properly',3);
       }
       else
       {let pregnant;
       let lactating;
       let calories=parseInt((10*weight)+(6.25*height)-(5*age))*act;
       
        if(!male)
       { calories-=(161*act);
        if(pregnant=document.getElementById('preg').checked)
        calories+=(300);
        if(lactating=document.getElementById('lact').checked)  
        calories+=(500);
        }
        else
         { 
           calories+=(5*act);  
         }
        
           calories=parseInt(calories); 
           let idealProtein=parseInt(((calories*0.10)/4)+((calories*0.35)/4))
          let idealCarbs=parseInt(((calories*0.45)/4)+((calories*0.65)/4));
          let idealFat=  parseInt(((calories*0.20)/9)+((calories*0.35)/9));
          let rangeCarbs=""+parseInt((calories*0.45)/4)+"-"+parseInt((calories*0.65)/4);
          let rangeFat=""+parseInt((calories*0.2)/9)+"-"+parseInt((calories*0.35)/9);
          let rangeProtein=""+parseInt((calories*0.10)/4)+"-"+parseInt((calories*0.35)/4);
         
          
          let water;
          let carbs="Ideal "+idealCarbs/2+" cal \nRange: ["+rangeCarbs+"] cal/day";
          let fat= "Ideal "+idealFat/2+" gm \n Range: ["+rangeFat+"] gm/day";
          let protein="Ideal "+idealProtein/2+" gm  \n Range: ["+rangeProtein+"] gm/day";    
      
      if(p==='Bmr')
      {  
         if(male===true)
          str=str+parseInt(447.593+(9.247*weight)+(3.098*height)-(4.330*age))+'Cal';
          else
          str=str+parseInt(447.593+(9.247*weight)+(3.098*height)-(4.330*age))+'Cal';
      }
      else if(p=='Fat')
      {
       str=str+fatPercent+' %'
      }
      else if(p=='V')
      {
       str=str+VisceralFat+' %'
      }
      else if(p=='MM')
      {
       str=str+leanBodyMass+' kg';
      }
      else if(p=='BMI')
      {
       str=str+fatMass+' kg';
      
      }
       else if(p=='cal')
      {str=str+calories+' cal';
      }
       else if(p=='pr')
      {
       str=str+protein+' kg';
      
      }
       else if(p=='wat')
      {
        if(age<0.5)
        {  water=0.7;}
        else if(age<1)
        {  water=0.8;}
        else if(age<3)
        {   water=1.3; }
        else if(age<8)
        {   water=1.7;}
        else if(age<13)
        {  water=2.8;}
        else if(age<18)
        { water=3.3;}
        else
        {  water=3.7;}
        if(!male&&age>9)
           { water-=1;
             if(pregnant)
                water+=0.3;
              if(lactating)
                water+=1;
           }
       str=str+water+'lt';
      
      }
       else if(p=='car')
      {
       str=str+carbs+'kg';
      
      }
       else if(p=='fat')
      {
       str=str+fat+' kg';
      
      
      }
      
      else if(p==='weightcontrol')
      {  
      let goal=document.getElementById('goal').value;
      let target=document.getElementById('goaltarget').value;
      let time=document.getElementById('goaltime').value;
      
       if(goal==='lose')
       {  const targetcal=calories-parseInt(1000*target/time)
         let tempstr="";
          if(targetcal<500)
        {
         showAlert('warning','This target cant be reached!!!Your target calorie intake goes lower than minimum threshold of daily calorie need',6);
         tempstr=`<h5 ><font color="red"> This target cant be reached!!!Your target calorie intake goes lower than minimum threshold of daily calorie need </font> <h5>`  
        }
        else
        {
          tempstr=`<h5 ><font color="green">  <strong> Current weight </strong>:${weight} <br/> <strong> Current Calories </strong>:${calories} <strong> <br/> target Weight </strong>:${weight-target}  <strong> TargetCalorie </strong>:${targetcal} </font></h5>`
        } 
         str=`<div className='col16' style={styling}>
            <h3>lose Weight  </h3> 
           ${tempstr}
            <strong>(Other Possible Option)</strong>
           <p>  Estimated Time ${target*4} week with Intake :${calories-250} cal/day</p> 
           <p>  Estimated Time ${target*3} week with Intake :${calories-500} cal/day </p>
           <p>  Estimated Time ${target*2} week with Intake :${calories-750} cal/day </p>
           <p>  Estimated Time ${target*1} week with Intake :${calories-1000}  cal/day </p>
           </strong> 
       </div>`
        
       }
       else if(goal==='gain')
       {   const targetcal=calories+parseInt(1000*target/time)
         let tempstr="";
        if(targetcal>=4000)
        {   tempstr=`<h5 ><font color="red"> This target cant be reached!!!Your target calorie intake goes  higher than maximum threshold of daily calorie need </font> <h5>`  
         showAlert('warning','This target cant be reached!!!Your target calorie intake goes  higher than maximum threshold of daily calorie need',6);
        }
        else
         {
         tempstr=`<h5 ><font color="green"> <strong> Current weight </strong>:${weight} <br/> <strong> Current Calories </strong>:${calories} <strong> <br/> target Weight </strong>:${parseInt(weight)+parseInt(target)} <strong> TargetCalorie </strong>:${targetcal} </font></h5>` 
         }
         str=`<div className='col16' style={styling}>
            <h3>  Gain Weight  </h3>
            ${tempstr}
            <strong>(Other Possible Option)</strong>
           <p>Estimated Time  ${target*4}  week with Calorie Intake :${calories+250} cal/day</p> 
           <p>Estimated Time  ${target*3}  week with Calorie Intake :${calories+500} cal/day </p>
           <p>Estimated Time  ${target*2} week with Calorie Intake :${calories+750} cal/day </p>
           <p>Estimated Time  ${target*1}  week with Calorie Intake :${calories+1000}  cal/day </p>
        </div>`
         }
       else if(goal=='maintain')
       { 
         str=` <div className='col16' style={styling}>
           <h3> To Maintain Weight </h3>
           <strong> 
           <p> Take daily : ${calories}  Calories and burn more than ${parseInt(1/4*calories)}Kcal </p>`
       }       
      }
  
      document.getElementById('result'+p).innerHTML=str;
     }
     }
     
     
     function check(){
       let height=document.getElementById('height').value;
      let weight=document.getElementById('weight').value;
      let act=document.getElementById('active1').value;
      let age=document.getElementById('age').value;
      let male=document.getElementById('male').checked;
      let female=document.getElementById('female').checked;
       
       
       if(!male&&!female||!height||!weight||!age)
       {
       showAlert('warning','fill in parameter(age,weight,height..etc) properly',3);
       }
       else
       {
       let hsquare=(height/100)*(height/100);
       let BMI=weight/hsquare;
       BMI=BMI.toFixed(2);
     let hsw=parseInt((18.5)*hsquare);
     let hew=parseInt((24.9)*hsquare);
     let iw=parseInt((22*hsquare));
    let gap=(weight-iw);  
            let msg;
       if(BMI<19)
          {msg=`oho!! you are just${hsw-weight} kgs below your healthy range and ${iw-weight} kgs below your ideal weight`
           showAlert('warning',msg,3);}
                    
         else if(BMI>=19&&BMI<=25)
            {msg=`Well Maintained !! you are in healthy range \n yet you are ${parseInt(Math.abs(weight-iw))} kg away from your ideal weight`
             showAlert('success',msg,3);}   
          else if(BMI>=25&&BMI<=29)
          {msg=`In Good Health !! you are above healthy range \n  yet you are ${weight-hew} kgs above your healthy range and${weight-iw} kgs above your ideal weight`
           showAlert('good',msg,3);}   
          else 
          {msg=`OHO!! you are  in obesity range \n you are ${weight-hew} kgs above your healthy range and ${weight-iw} kgs above your ideal weight`
           showAlert('warning',msg,3);} 
       setR(1);
       }
       
     
     }
     const [goalName,setGoalName]=useState("Scale");
       const [goalsTracker,setGoalsTracker]=useState([]);
       
       
         function goaladvice(){
     
      
      }
            
     return (
        <>
      <div className="row"> 
      <div    className="col19"  style={styling}>
      <div><h3> Fill in your Parameters </h3>
        Age &nbsp; :<input className="inputs" type="number" min="0" id='age'  style={inputstyle}onChange={()=>{handle_Negative('age')}}/> <span style={{marginLeft:'-60px'}} border='1'> Yrs</span> <br/>
        Height:<input className="inputs" type="number" min="10" id='height' style={inputstyle}onChange={()=>{handle_Negative('height')}}/> <span style={{marginLeft:'-60px',textAlign:'right'}}> Cm </span><br/>
        Weight:<input className="inputs" type="number" min="5" id='weight' style={inputstyle}onChange={()=>{handle_Negative('weight')}}/> <span style={{marginLeft:'-60px'}}> Kg </span> <br/>
       <div><h6 style={{width:'80%',margin:'auto'}}> <strong> Gender </strong> </h6>
       <input   type = "radio" onClick={()=>{document.getElementById('female+').innerHTML="";}}name = "gender" id="male"/> Male 
       <input type = "radio" onClick={()=>{document.getElementById('female+').innerHTML=`None:<input type='radio' name="female+" id='none' checked/> Lactating:<input type='radio' name="female+" id='lact'/> Pregnant: <input type='radio' name="female+" id='preg'/>`}} name = "gender" id="female"/> Female <br/></div>
       <div id='female+'> </div>
        <p>Choose your Daily Activity level </p>
     <select  class="inputs" name="active" id="active1" >
		     <option class="inputs" value="1.2"> Sedentary/No exercise </option>
		     <option class="inputs" value="1.2"> Light exercise</option>
		     <option class="inputs" value="1.375"> Moderate-Active </option>
		     <option class="inputs" value="1.55"> Very Active</option>
		     <option class="inputs" value="1.725"> Extra Activity </option>
		     <option class="inputs" value="1.9"> Intense </option>
	</select>  
        </div>
        
      </div>
    <div    className="col12"  style={styling}>
     <h3> Basal Metaboilic rate </h3>
     <button onClick={()=>{bmr('Bmr')}}name="submit" className="smallbutton"> Update </button> 
      <div id='resultBmr' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
     </div> 
  
   <div  className="col12"  style={styling}>
     <h3> Fat Percentage </h3>
    
     <button onClick={()=>{bmr('Fat')}}name="submit" className="smallbutton"> Update </button> 
      <div id='resultFat' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
     
     </div> 
      <div  className="col12"  style={styling}>
     <h3> Visceral Fat </h3>
      
      <button onClick={()=>{bmr('V')}}name="submit" className="smallbutton">  Update </button> 
      <div id='resultV' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
     </div> 
      <div  className="col12"  style={styling}>
      <h3> Body Muscle Mass </h3>
       
       <button onClick={()=>{bmr('MM')}}name="submit" className="smallbutton">  Update </button> 
       <div id='resultMM' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
     </div> 
      <div  className="col12"  style={styling}>
     <h3>  Body Fat Mass</h3>
     
     <button onClick={()=>{bmr('BMI')}}name="submit" className="smallbutton">  Update </button>
      <div id='resultBMI' style={{textAlign:'center',color:'green',fontSize:'25px'}}>
       </div>
     </div> 
     
       <div  className="col12"  style={styling}>
     <h3>  Calorie Intake </h3>
    <div id='resultcal' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
       <button onClick={()=>{bmr('cal')}}name="submit" className="smallbutton">  Update </button>
     </div> 
       <div  className="col12"  style={styling}>
     <h3>  WaterIntake </h3>
      <div id='resultwat' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
      <button onClick={()=>{bmr('wat')}}name="submit" className="smallbutton">  Update </button>
     </div> 
       <div  className="col12"  style={styling}>
     <h3> ProteinIntake </h3>
      <div id='resultpr' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
      <button onClick={()=>{bmr('pr')}}name="submit" className="smallbutton">  Update </button>
     </div> 
       <div  className="col12"  style={styling}>
     <h3>  CarbsIntake </h3>
      <div id='resultcar' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
      <button onClick={()=>{bmr('car')}}name="submit" className="smallbutton">  Update </button>
     </div> 
       <div  className="col12"  style={styling}>
     <h3>  FatIntake </h3>
      <div id='resultfat' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
       <button onClick={()=>{bmr('fat')}}name="submit" className="smallbutton">  Update </button>
     </div> 
     
     
      <div id='result' style={{textAlign:'center',color:'green',fontSize:'25px'}}> </div>
  
   <div id="getR" className="col16"  style={styling}>
     {recommend===0?
     <div><h3> Get your Nutritonal Recommendation  </h3>
    
     <button onClick={()=>{check();}}name="submit" className="smallbutton"> Get </button> </div>:
     <Recommend set={setR} 
     age={document.getElementById('age').value} 
     height={document.getElementById('height').value} 
     male={document.getElementById('male').checked} 
     weight={document.getElementById('weight').value} 
     act={document.getElementById('active1').value} /> }
     </div> 
     
       <div id='getN' className="col16"  style={styling}>
      
     <div><h4> Weight Goals  </h4>
        <label className='wide4'> Goal:  </label>
          <select  className="choose1" name="" id="goal"  onChange={()=>{document.getElementById('resultweightcontrol').innerHTML="";if(document.getElementById('goal').value==='maintain'){document.getElementById('goaltarget').value=0}else{document.getElementById('goaltarget').value=""}}}>
     <option style={{width:'40%'}}value="clear">   Choose your goal   </option> <br/>
     <option value="lose">Weight-loss</option> <br/>
     <option value="gain">Weight-gain </option> <br/>
     <option value="maintain"> Maintain-weight </option> <br/>
      </select>   <br/>
        <label > Lose/Gain  : </label><input type='number' id='goaltarget' className='inputs'/> <span  style={{marginLeft:'-70px'}}> kg </span><br/>
        <label className='wide1'> Timespan: </label><input type='number' id='goaltime' className='inputs'/>  <span style={{marginLeft:'-70px'}}> Weeks </span> <br/>      
       <button onClick={()=>{bmr("weightcontrol")}} name="submit" className="smallbutton">Set </button>
       <div id='resultweightcontrol'> </div>
    
       </div>
   </div> 
 </div>
             </>
             )
   }
             
  const Recommend=({age,height,weight,male,act,set})=>
 {    const {showAlert}=useContext(nodeContext);
       let hsquare=(height/100)*(height/100);
       let BMI=weight/hsquare;
       BMI=BMI.toFixed(2);
     let hsw=parseInt((18.5)*hsquare);
     let hew=parseInt((24.9)*hsquare);
     let iw=parseInt((22*hsquare));
    let gap=(weight-iw); 
   
     const Male={vA:1000,vD:10,vE:10,vK:35,Cal:800,Ph:800,Mg:200,Fe:150,Zn:15,I:150};
     const Female={vA:800,vD:10,vE:8,vK:35,Cal:1200,Ph:1200,Mg:280,Fe:15,Zn:12,I:150};
    
   let calories; 
   let BMR; 
  let data;
    if(male===true)
    { data=Male;
      calories=parseInt(((10*weight)+(6.25*height)-(5*age)+5)*act);
      BMR=parseInt(88.362+(13.397*weight)+(4.799*height)-(5.677*age)); }
    else
    {
    data=Female;
    BMR=parseInt(447.593+(9.247*weight)+(3.098*height)-(4.330*age));
    calories=parseInt(((10*weight)+(6.25*height)-(5*age)-161)*act);
    }
    
   
      let fatPercent=((1.20*BMI)+(0.23*age)-16.2).toFixed(2);
      let VisceralFat=((0.1)*fatPercent).toFixed(2);
      let fatMass=((fatPercent/100)*weight).toFixed(2);
      let leanBodyMass=weight-fatMass;
      
    return (<>
         <div>
         <h3> Your Daily recommdations(RDA) </h3>
            <strong> 
           <p> Your Weight:{weight} kg</p>
            <p> Healthy Range :{hsw} kg-{hew}kg </p>
            <p> Ideal weight :{iw} kg</p>
            <p> Fat Percent :{fatPercent} %</p>
            <p> Visceral Fat :{VisceralFat} % </p>
            <p> Fat Body Mass:{fatMass} kgs</p>
            <p> Lean Body Mass:{leanBodyMass} kgs </p> 
            <p> Basal Metaboilic Rate(BMR): {BMR} Cal/day </p>
            </strong>   
        
        <div className='col16' style={styling}>
           <h3> To maintain Weight </h3>
           <strong> 
           <p> Calories  : {calories} Kcal </p>
           </strong> 
        </div>
           
        <div className='col16' style={styling}>
            <h3> To Lose Weight  </h3>
           <strong> 
           <p> Lose(0.25kg/week):{calories-250} cal/day</p> 
           <p> Lose(0.50kg/week) :{calories-500} cal/day </p>
           <p> Lose(0.75kg/week) :{calories-750} cal/day </p>
           <p> Lose(1.00kg/week) :{calories-1000}  cal/day </p>
           </strong> 
       </div>
       <div className='col16' style={styling}>
            <h3> To Gain Weight  </h3>
           <strong> 
           <p> Gain(0.25kg/week) :{calories+250} cal/day</p> 
           <p> Gain(0.50kg/week):{calories+500} cal/day </p>
           <p> Gain(0.75kg/week):{calories+750} cal/day </p>
           <p> Gain(1.00kg/week) :{calories+1000} cal/day </p>
           </strong> 
      </div>
            
         <div className='col16' style={styling}> 
         <h3> Essential Nutrients and Minerals </h3>
         <strong> 
           <p> Carbs : {(parseInt((calories*0.45)/4)+parseInt((calories*0.65)/4))/2} gm  <br/> Range({parseInt((calories*0.45)/4)}-{parseInt((calories*0.65)/4)}) cal</p>
           <p> Fat : {(parseInt((calories*0.2)/9)+parseInt((calories*0.35)/9))/2} gm  <br/> Range({parseInt((calories*0.2)/9)}-{parseInt((calories*0.35)/9)}) gm </p>
           <p> Protein : {(parseInt((calories*0.1)/4)+parseInt((calories*0.35)/4))/2} gm <br/> Range({parseInt((calories*0.1)/4)}-{parseInt((calories*0.35)/4)}) gm</p>
           <p> Vitamin A: {data.vA} ug</p>
           <p> Vitamin D: {data.vD} ug</p>
           <p> Vitamin E: {data.vE} ug</p>
           <p> Vitamin K: {data.vK} ug</p>
           <p> Calcium: {data.Cal} mg</p>
           <p> Phosphorus : {data.Ph} mg </p>
           <p> Magnesium: {data.Mg} mg</p>
           <p> Iron: {data.Fe} ug</p>
           <p> Iodine: {data.I} ug</p>
           </strong> 
           </div>
           
            <button class="smallbutton" onClick={()=>{set(0)}}> back </button>
           
           </div>
           </>)
    }

     
     
      