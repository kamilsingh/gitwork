import React from 'react'
import { useState} from 'react';
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
import walk from './../images/walk.jpg'
import  run from './../images/run.jpg'
import dance from './../images/dance.jpg'
import yoga from './../images/yoga.jpg'
import outdoor from './../images/outdoor.jpg'
import bicycle from './../images/bicycle.jpg'
import swim from './../images/swim.jpg'
import others from './../images/others.jpg'
import housechors from './../images/housechors.jpg'
import weightwalk from './../images/weightwalk.JPG'


  export const Activity= ()=>{              
              const [buttonpop1,setButtonpop1]=useState(0);
              const [buttonpop2,setButtonpop2]=useState(0);
              const [buttonpop3,setButtonpop3]=useState(0);
              const [buttonpop4,setButtonpop4]=useState(0);
              const [buttonpop5,setButtonpop5]=useState(0);
              const [buttonpop6,setButtonpop6]=useState(0);
              const [buttonpop7,setButtonpop7]=useState(0);
              const [buttonpop8,setButtonpop8]=useState(0);
              const [buttonpop9,setButtonpop9]=useState(0);
              const [buttonpop10,setButtonpop10]=useState(0);
        
            const {calset,setCal,totalcal,setTotal}=useContext(nodeContext);         
          function handle_Negative(p){
          if(document.getElementById(p).value<0)
           {document.getElementById(p).value='';
           document.getElementById(p).style.borderColor="red";} }
     
              return (
             <>
   <div className="container">
   <div className="row">  <h1 style={{margin:'auto'}}> Track your fitness </h1></div>
    <div className="row">  <h4 style={{margin:'auto',background:'white',color:'green',borderRadius:'5px'}}> <strong> Total Calories Released : {totalcal} Cal </strong></h4></div>
   <div className="row">  <h3 style={{margin:'auto'}}>Choose your Activity </h3></div>     
   
    <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">  <h5><span  style={{float:'left'}} >  Activity:<br/>Running  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.run} cal  </span> </h5>
		        <div id="img"><img src={run}  height="100px" width="200px" alt="run" ></img> </div>  </div>
    <div id="Running">
        <label className="label"> Running </label> <br/>
         {buttonpop1===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(1);setButtonpop2(0);setButtonpop3(0);setButtonpop4(0);setButtonpop5(0);setButtonpop6(0);setButtonpop7(0);setButtonpop8(0);setButtonpop9(0);setButtonpop10(0);}}> Calculate</button>:
           <Activities set={setButtonpop1} num='2.3' Units='km/hr' name='R' />
         }
    </div>
   </div>
  </div>
   
   
               <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		      <h5><span  style={{float:'left'}} >  Activity:<br/>Walking  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.walk} cal  </span> </h5>
		        <div id="img"><img src={walk}  height="100px" width="200px" alt="run" ></img> </div> </div>
       <div id="Walking">
        <label className="label"> Walking </label> <br/>
         {buttonpop2===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(1);setButtonpop3(0);setButtonpop4(0);setButtonpop5(0);setButtonpop6(0);setButtonpop7(0);setButtonpop8(0);setButtonpop9(0);setButtonpop10(0);}}> Calculate</button>:
           <Activities set={setButtonpop2} num='1' Units='km/hr'  name='W'/>
           
     }
       </div>
       </div>
       </div>
       
       
                 
           <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		      <h5><span  style={{float:'left'}} >  Activity:<br/>Bicycling  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.bicycle} cal  </span> </h5>
		        <div id="img"><img src={bicycle}  height="100px" width="200px" alt="run" ></img> </div> </div>
       <div id="Bicycling">
        <label className="label">  Bicycling< /label> <br/>
         {buttonpop3===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(0);setButtonpop3(1);setButtonpop4(0);setButtonpop5(0);setButtonpop6(0);setButtonpop7(0);setButtonpop8(0);setButtonpop9(0);setButtonpop10(0);}}> Calculate</button>:
           <Activities set={setButtonpop3} num='1.5' Units='km/hr' name='B'/>
            
       }
       </div>
       </div>
       </div>
       
            <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		       <h5><span  style={{float:'left'}} >  Activity:<br/>Dancing  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.dance} cal  </span> </h5>
		        <div id="img"><img src={dance}  height="100px" width="200px" alt="run" ></img> </div> 
       </div>
       <div id="Dancing">
        <label className="label"> Dancing< /label> <br/>
         {buttonpop4===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(0);setButtonpop3(0);setButtonpop4(1);setButtonpop5(0);setButtonpop6(0);setButtonpop7(0);setButtonpop8(0);setButtonpop9(0);setButtonpop10(0);}}>Calculate</button>:
         <Activities set={setButtonpop4} num='2' Units='Level' name='D'/>
       }
       </div>
       </div>
       </div>
           
           
                    <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		      <h5><span  style={{float:'left'}} >  Activity:<br/>Swimming  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.swim} cal  </span> </h5>
		        <div id="img"><img src={swim}  height="100px" width="200px" alt="run" ></img> </div> 
       </div>
       <div id="Swimming">
        <label className="label">  Swimming< /label> <br/>
         {buttonpop5===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(0);setButtonpop3(0);setButtonpop4(0);setButtonpop5(1);setButtonpop6(0);setButtonpop7(0);setButtonpop8(0);setButtonpop9(0);setButtonpop10(0);}}> Calculate</button>:
           <Activities set={setButtonpop5} num='2' Units='Km/h' name='S'/>
            
       }
       </div>
       </div>
       </div>
       
          <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		      <h5><span  style={{float:'left'}} >  Activity:<br/>OutDoorPlay  </span> 
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.out} cal  </span> </h5> </div>
		        <div id="img"><img src={outdoor}  height="100px" width="200px" alt="run" ></img> </div> 
       
       <div id=" OutGround play">
        <label className="label">  OutGround play< /label> <br/>
         {buttonpop6===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(0);setButtonpop3(0);setButtonpop4(0);setButtonpop5(0);setButtonpop6(1);setButtonpop7(0);setButtonpop8(0);setButtonpop9(0);setButtonpop10(0);}}> Calculate</button>:
           <Activities set={setButtonpop6} num='2' Units='Role' name='G'/>
            
       }
       </div>
       </div>
       </div>
       
       
       
                       <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		      <h5><span  style={{float:'left'}} >  Activity:<br/>Yoga/Meditation  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.yoga} cal  </span> </h5>
		        <div id="img"><img src={yoga}  height="100px" width="200px" alt="run" ></img> </div>
	</div> 
       <div id="YogaMed">
        <label className="label"> Yoga...< /label> <br/>
         {buttonpop7===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(0);setButtonpop3(0);setButtonpop4(0);setButtonpop5(0);setButtonpop6(0);setButtonpop7(1);setButtonpop8(0);setButtonpop9(0);setButtonpop10(0);}}> Calculate</button>:
           <Activities set={setButtonpop7} num='1' Units='Level'name='Y' />
            
       }
       </div>
       </div>
       </div>
       
         <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		       <h5><span  style={{float:'left'}} >  Activity:<br/>Others  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.house} cal  </span> </h5>
		        <div id="img"><img src={housechors}  height="100px" width="200px" alt="run" ></img> </div> 
       </div>
       <div id="HouseChors">
        <label className="label"> HouseChors </label> <br/>
         {buttonpop8===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(0);setButtonpop3(0);setButtonpop4(0);setButtonpop5(0);setButtonpop6(0);setButtonpop7(0);setButtonpop8(1);setButtonpop9(0);setButtonpop10(0);}}> Calculate</button>:
          <Activities set={setButtonpop8} num='0.5' name='H' Units='time'/>
           
         }
       </div>
       </div>
     </div>
     
      <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		       <h5><span  style={{float:'left'}} >  Activity:<br/>Others  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.weight} cal  </span> </h5>
		        <div id="img"><img src={weightwalk}  height="100px" width="200px" alt="run" ></img> </div> 
       </div>
       <div id="WeightCarrying">
        <label className="label">WeightCarry Walk </label> <br/>
         {buttonpop9===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(0);setButtonpop3(0);setButtonpop4(0);setButtonpop5(0);setButtonpop6(0);setButtonpop7(0);setButtonpop8(0);setButtonpop9(1);setButtonpop10(0);}}> Calculate</button>:
          <Activities set={setButtonpop9} num='4' name='W' Units='km/hr'/>
           
         }
       </div>
       </div>
     </div>
  <div className="col15 banner">
   <div className="calculate">
    <div id="track activity">
		       <h5><span  style={{float:'left'}} >  Activity:<br/>Others  </span>
		      <span  style={{float:'right'}}> Calories Release :<br/>{calset.other} cal  </span> </h5>
		        <div id="img"><img src={others}  height="100px" width="200px" alt="run" ></img> </div> 
       </div>
       <div id="others">
        <label className="label"> Others </label> <br/>
         {buttonpop10===0?
          <button className="buttonmeal" onClick={()=>{setButtonpop1(0);setButtonpop2(0);setButtonpop3(0);setButtonpop4(0);setButtonpop5(0);setButtonpop6(0);setButtonpop7(0);setButtonpop8(0);setButtonpop9(0);setButtonpop10(1);}}> Calculate</button>:
          <Activities set={setButtonpop10} num='3' Units='Time'name='O' />
           
         }
       </div>
       </div>
     </div>
    
   </div>
   
 
  
             </>
             )
             }
      
             
 export const Activities=(props)=>
 {  
        function handle_Negative(p){
          if(document.getElementById(p).value<0)
           {document.getElementById(p).value='';
           document.getElementById(p).style.borderColor="red";} }
  const {calset,setCal,totalcal,setTotal}= useContext(nodeContext); 

               function load(){
               alert('done');
         let weight=document.getElementById('weigh').value;
         let MET=document.getElementById('custombox').value;
         let time=document.getElementById('time').value;
           if(weight==''||MET==''||time=='')
               {   let str="";
                  if(weight==='')
                  { str=str+'weight field is Unspecified\n'; document.getElementById("weigh").style.borderColor="red";}
                  if(MET==='')
                   { str=str+'MET field is Unspecified\n'; document.getElementById("custombox").style.borderColor="red";}
                  if(time==='')
                    { str=str+'time field is Unspecified\n';document.getElementById("time").style.borderColor="red";}
                    alert(str);
              }
             else
            { time=((time*(1.0))/60);
             let res=parseInt(weight*MET*time);
               alert(time.toFixed(2)); 
               
          	 if(props.name==='R') 
             setCal({...calset,run:res});
             else if(props.name==='B')
             setCal({...calset,bicycle:res});
             else if(props.name==='W')
             setCal({...calset,walk:res});
             else if(props.name==='D')
             setCal({...calset,dance:res});
             else if(props.name==='S')
             setCal({...calset,swim:res});
             else if(props.name==='G')
             setCal({...calset,out:res});
             else if(props.name==='Y')
             setCal({...calset,yoga:res});
             else if(props.name==='O')
             setCal({...calset,others:res});
             else if(props.name==='H')
             setCal({...calset,house:res});
             else if(props.name==='W')
             setCal({...calset,'weight':res});
             setTotal(calset.run+calset.walk+calset.bicycle+calset.dance+calset.swim+calset.out+calset.yoga+calset.others+calset.house+calset.house+calset.weight);   
            props.set(0);
              
            }
    	    }
              const updatepace=(p)=>{
                document.getElementById('custombox').value=parseInt(document.getElementById('paceSelector').value*p);
              }
                    
              return ( 
              <>
             <div class="col20 topp" style={{margin:'0 auto 0 auto'}}> 
		     <div class="choose">
		     <select  class="choose1" name="choose1" id="paceSelector" onChange={()=>{updatepace(props.num)}} >
		     <option class="inputs" value="0">   Choose your Pace(custom)    </option>
		     <option class="inputs" value="3.5"> Light </option>
		     <option class="inputs" value="5"> Moderate </option>
		     <option class="inputs" value="7.5"> Intense</option>
		      </select>
		      </div>
		      <div>
		       Your Weight <br/><input class="inputs"  style={{width:'168px'}} type="number"  min='1' id="weigh" onChange={()=>{handle_Negative('weigh')}}/><span style={{marginLeft:'-60px',color:'black'}}> Kg</span> <br/>
		       {props.mode} <br/><input class="inputs"  style={{width:'168px'}} type="number" min='1' id="custombox" onChange={()=>{handle_Negative('custombox')}}/><span style={{marginLeft:'-60px',color:'black'}}> {props.Units}</span> <br/>
		       Time <br/> <input class="inputs" style={{width:'168px'}} type="number" id="time" min='1' onChange={()=>{handle_Negative('time')}}/><span style={{marginLeft:'-60px',color:'black'}}> Min</span> <br/>
		      <button class="formbutton" onClick={load}> Submit </button>
		     </div>
		 </div> 
		   </>
		   ) 
		   
		 }
		
		

 