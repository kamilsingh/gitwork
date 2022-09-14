import React from 'react'
import{useState} from 'react';
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
import image from './../images/logLogo.png';
import {Api,ApiScope} from 'fitbit-api-handler';
import demopic from './../images/picdemo.jpg'
const api= new Api("23BL88","71c8016caecb5c5c293fe6f9e8b6db44"); 
const path=api.getLoginUrl("http://localhost/trackactivity",[ApiScope.ACTIVITY,ApiScope.PROFILE,ApiScope.WEIGHT,ApiScope.NUTRITION]);
  export const Profile= ()=>{ 
  
   const {profile}=useContext(nodeContext);       
   const[popup1,setPopup1]=useState(0);
             const[popup2,setPopup2]=useState(0);
              const[popup3,setPopup3]=useState(0);
               const[popup4,setPopup4]=useState(0);
                const[popup5,setPopup5]=useState(0);
                 const[popup6,setPopup6]=useState(0);
                 const[chatpop,setChatpop]=useState(0);
                 const[logs1,setLogs1]=useState([]);
                 const[logs2,setLogs2]=useState([]);
                 const[logs3,setLogs3]=useState([]);
                 const[logs4,setLogs4]=useState([]);
                 const[logs5,setLogs5]=useState([]);
                 const[logs6,setLogs6]=useState([]);
           const profilestyle={
            width:'30%',
            margin:'0 20% 3% 0'
            }
          // const[fitbit,setFit]=useState("");   
           const[call,setCall]=useState(0);
           
           let myWin;
           function openWin(){
              myWin=window.open(path,"_blank","width=200",'height=100');
              
              setTimeout(()=>{
        myWin.close(); 
   }
   ,15000);
           }
           
            async function tracking(p,date,period){
                      let res=await fetch('http://localhost/getpass');
                           const res1=await res.json();
                        // const  period="7d";
                             console.log(res1); 
                               let user=res1.user_id;
                         
               if(p=='a')
               { 
               const url=`https://api.fitbit.com/1/user/-/activities/steps/date/${date}/${period}.json`
              const opt={method:'GET',headers: {"Authorization":"Bearer "+res1.access_token}}//,body:JSON.stringify(query),data:JSON.stringify(query)} 
               const result=await fetch(url,opt); 
                const obj=await result.json();
                console.log(obj);
               setLogs1(obj['activities-steps']);}
              else if(p=='b')
               {const url=`https://api.fitbit.com/1/user/-/activities/calories/date/${date}/${period}.json`
              const opt={method:'GET',headers: {"Authorization":"Bearer "+res1.access_token}}//,body:JSON.stringify(query),data:JSON.stringify(query)} 
               const result=await fetch(url,opt); 
                const obj=await result.json();
                 console.log(obj);
               setLogs2(obj['activities-calories']);}
              else if(p=='c')
              { 
              const url=`https://api.fitbit.com/1/user/-/body/fat/date/${date}/${period}.json`
              const opt={method:'GET',headers: {"Authorization":"Bearer "+res1.access_token}}//,body:JSON.stringify(query),data:JSON.stringify(query)} 
               const result=await fetch(url,opt); 
                const obj=await result.json();
                  console.log(obj);
              setLogs3(obj['body-fat']);}
              else if(p=='d')
              { const url=`https://api.fitbit.com/1/user/-/body/weight/date/${date}/${period}.json`
              const opt={method:'GET',headers: {"Authorization":"Bearer "+res1.access_token}}//,body:JSON.stringify(query),data:JSON.stringify(query)} 
               const result=await fetch(url,opt); 
                const obj=await result.json();
                 console.log(obj);
              setLogs4(obj['body-weight']);}
              else if(p=='e')
              {const url=`https://api.fitbit.com/1/user/-/foods/log/water/date/${date}/${period}.json`
              const opt={method:'GET',headers: {"Authorization":"Bearer "+res1.access_token}}//,body:JSON.stringify(query),data:JSON.stringify(query)} 
               const result=await fetch(url,opt); 
                const obj=await result.json();
               console.log(obj);
              setLogs5(obj['foods-log-water']);}
              else if(p=='f')
              {const url=`https://api.fitbit.com/1/user/-/foods/log/caloriesIn/date/${date}/${period}.json`
              const opt={method:'GET',headers: {"Authorization":"Bearer "+res1.access_token}}//,body:JSON.stringify(query),data:JSON.stringify(query)} 
               const result=await fetch(url,opt); 
                const obj=await result.json();
                 console.log(obj);
              setLogs6(obj['foods-log-caloriesIn']);}                
        }
           
          // const [Profile,updateProfile]=useState({Name:NOT UPDATED,Email:NOT UPDATED,Gender:NOT UPDATED,Weight:NOT UPDATED:Height UPDATED,Mobile:NOT UPDATED:,BMI:NOT UPDATED,Chest:NOT UPDATED,Shoulder:NOT UPDATED,Waist:NOT UPDATED})
             const walk= "Walking logs";
             const water="Water  logs";
            const weight="Weight logs";
            const calIn ="CalsIn logs";
            const calOut="CalsOut logs";
              return (
             <>
          <div className="contain">
   <div className="row">
    <div className="col13 ">
     <p style={{textAlign:'center',fontSize:'150%'}}>
       Your Personal and <br/>physical info
       </p>
        <div>
         <div><label style={profilestyle}><strong> NAME:</strong>  </label>  <label style={profilestyle}> {profile.firstname} {profile.lastname} </label> </div>
         <div> <label style={profilestyle}><strong> EMAIL: </strong>  </label>  <label style={profilestyle}>{profile.email} </label> </div>
          <div> <label style={profilestyle}><strong> GENDER: </strong>  </label>  <label style={profilestyle}>{profile.gender}</label> </div>
           <div> <label style={profilestyle}><strong> WEIGHT: </strong>  </label>  <label style={profilestyle}>{profile.weight} </label> </div>
            <div> <label style={profilestyle}><strong> HEIGHT:</strong>  </label>  <label style={profilestyle}>{profile.height}</label> </div>
             <div> <label style={profilestyle}><strong> MOBILE: </strong>  </label>  <label style={profilestyle}>{profile.mobile} </label> </div>
              <div> <label style={profilestyle}><strong> BMI: </strong>  </label>  <label style={profilestyle}> {profile.gender}</label> </div>
               <div> <label style={profilestyle}><strong> CHEST:</strong>  </label>  <label style={profilestyle}>{profile.chest} </label> </div>
               <div>  <label style={profilestyle}><strong> SHOULDER </strong>  </label>  <label style={profilestyle}>{profile.shoulder}</label> </div>
                <div>  <label style={profilestyle}><strong> WAIST: </strong>  </label>  <label style={profilestyle}> {profile.waist} </label> </div>
            </div>    
    </div>
    <div className="col14 dashboard">
       <div > <h3 align="center">  Your Dashboard </h3></div>
       <div style={{textAlign:'left'}}> <a href="/activity#recommend" style={{textDecoration:'none'}}> <button className='mediumbutton'> Set goals </button></a> 
        <a href="/dietplans" style={{textDecoration:'none',float:'right'}}> <button className='mediumbutton'> Buy Diet plans </button></a>  </div>
        <div className='logs'>
        {popup1===0?<button  onClick={()=>{setPopup1(1);setPopup2(0);setPopup3(0);setPopup4(0);setPopup5(0);setPopup6(0);}} className="smallbutton" >
         <label> <h4> {walk}   </h4></label> <span style={{fontSize:'300%',
    marginLeft:'50%'}}>+</span></button>
        :popup1===1?<Logsform  name='Walk/Run steps' tracking={tracking} num='a' set={setPopup1}/>:<Result name='Steps' units='steps' logs={logs1}/>}
        {popup3===0?<button  onClick={()=>{setPopup1(0);setPopup2(0);setPopup3(1);setPopup4(0);setPopup5(0);setPopup6(0);}} className="smallbutton"> 
        <label> <h4> Fats  logs &nbsp; &nbsp;</h4> </label> <span style={{fontSize:'300%',
    marginLeft:'50%'}}>+</span></button>
         :popup3===1?<Logsform  name='Fat change' tracking={tracking} num='c' set={setPopup3}/>:<Result name='Fat' units='body_percent' logs={logs3}/>}
        {popup4===0?<button  onClick={()=>{setPopup1(0);setPopup2(0);setPopup3(0);setPopup4(1);setPopup5(0);setPopup6(0);}} className="smallbutton">
        <label ><h4> {weight} </h4> </label> <span style={{fontSize:'300%',
    marginLeft:'50%'}}>+</span></button>
         :popup4===1?<Logsform name='Weight Change'  tracking={tracking} num='d' set={setPopup4}/>:<Result name='Weight'units ='kg' logs={logs4}/>}
        {popup5===0?<button  onClick={()=>{setPopup1(0);setPopup2(0);setPopup3(0);setPopup4(0);setPopup5(1);setPopup6(0);}} className="smallbutton">
         <label > <h4> {water} </h4> </label> <span style={{fontSize:'300%',
    marginLeft:'50%'}}>+</span></button>
        :popup5===1?<Logsform  name='WaterIntake' tracking={tracking} num='e' set={setPopup5} />:<Result name='Meal' units='glasses' logs={logs5}/>}
        {popup6===0?<button  onClick={()=>{setPopup1(0);setPopup2(0);setPopup3(0);setPopup4(0);setPopup5(0);setPopup6(1);}} className="smallbutton"> 
        <label> <h4> {calIn}  </h4></label> <span style={{fontSize:'300%',
    marginLeft:'50%'}}>+</span></button>
        :popup6===1?<Logsform name='Calorie Intake' tracking={tracking} num='f' set={setPopup6}/>:<Result name='Nutrition' units=' KCal intaken' logs={logs6}/>}   
            {popup2===0?<button  onClick={()=>{setPopup1(0);setPopup2(1);setPopup3(0);setPopup4(0);setPopup5(0);setPopup6(0);}} className="smallbutton">
         <label> <h4> {calOut} </h4> </label> <span style={{fontSize:'300%',
    marginLeft:'50%'}}>+</span></button>
        :popup2===1?<Logsform  name='Calorie Release' tracking={tracking} num='b' set={setPopup2}/>:<Result name='Calories' units='KCal Release' logs={logs2}/>}
           </div>
           
    </div>
 <div className="col13">
       <div className="col11 profile" style={{textAlign:'center'}}>{profile.pic==='NA'?<img id="dp" className="profile" src={demopic} height="63px" width="63px"/>:<img id="dp" className="profile" src={profile.pic}   height="63px" width="63px"/>}</div>
       <div className="col16 profile"> <p style={{textAlign:'center',fontSize:'150%'}}> {profile.firstname} <br/> {profile.email}</p></div>
     <div  className="profile"><button  className="profilebutton"> Track your goals </button></div>
     <div  className="profile"><button  className="profilebutton"> Diet and Fitness Plan </button></div> 
    
    <div className='assist fixed_right'>
     {chatpop===0?<button onClick={()=>{setChatpop(1)}} style={{background:'blue',color:'white',height:'50px'}}>Chat with expert </button>:<Chat set={setChatpop}/>}
    </div>    
 </div>
 </div>
 </div>
      </> ) 
 }
 
   const Chat=(props)=>{
     const close=()=>{
      props.set(0);
     }
   
   return(<>
      <div style={{display:'flex'}}>
      <div class='col19'>
      <h4 align="center"> Wanna Ask something ?</h4>
       <form>
       Query: <br/> <input type='text'  name="query"  style={{width:'50%'}}id="query"/> <br/>
       Desc :<br/><textarea name='desc'  id="desc" cols='50' rows='6' style={{width:'90%',borderRadius:'25px'}}></textarea>
       <input type="submit" className="formbutton"/>
      </form>
      </div>
      <div class='col11'><button style={{background:'red',color:'white',float:'right'}} onClick={close}> X </button></div>
      </div>
      </>
   )
   }
 
  const Logsform=(props)=>
         {
 
           const display=(e)=>
  {     
         let d=document.getElementById("startDate").value;
         let t=document.getElementById("timeSpan").value;
         if(d==='')
          {
           document.getElementById("startDate").style.borderColor="red";
            alert("date field is mandatory"); 
          }                
          else
          {window.open(path,"_blank","width=200",'height=100');
          props.tracking(e,d,t);                
           props.set(2); }
  }
  
    
    return (  <>
         <div class="col20" style={{margin:'0 auto 0 auto'}}>
 		 <button className="smallbutton" style={{color:'white',background:'blue'}}> {props.name} logs </button>
 		   
 		   <div id="track activity">
 		      <div> Enter the date and time to see {props.name} logs  </div > 
 		        <div id="img"><img src={image} height='100px' width='200px' alt="run" ></img> </div>
 		     <div>
 		     Date: <br/><input style={{fontSiize: '20px',width: '174px',height:'29px',borderRadius:'25px'}}  type="date" id="startDate"/> <br/>
 		    <p> Select Timespan </p><select  className="input" name="timeSpan" id="timeSpan">
              <option   className="input"value="1d">1 day</option>
              <option  className="input"value="1w">Week</option>
              <option  className="inpus"value="1m">Month</option>
              <option  className="inpus"value="3m"> 3 Months</option>
              <option  className="inpus"value="6m"> Half year</option>
              <option  className="inpus"value="1y"> Full year</option>
           </select>
      <button onClick={()=>{display(props.num)}}>Show </button> 
 		 </div>
 		</div>
 	</div>
          </> )
         }
         
         
const Result=({logs,name,units})=>{
  console.log(logs);
   return (
      <>
     <div>
      <button className="smallbutton" style={{color:'white',background:'blue'}}> {name} logs </button>
{logs.map((list)=>{  if(list.value===0||list.value===0.0) list.value="Not Updated"; return (<p> <strong> Date: </strong> {list.dateTime} <strong> {name}  </strong> :{list.value} {units} </p>)} )}   
     </div>
   </>
   )

}
