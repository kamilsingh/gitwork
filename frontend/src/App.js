import './App.css';
import Header from './Mylayout/Header';
import {About} from './Mylayout/About';
import {Index} from './Mylayout/Index';
import {Footer} from './Mylayout/Footer';
import React,{ useState} from 'react';
import {Alert} from './Mylayout/Alert';
import {Activity} from './Mylayout/Activity';
import {Cataloug} from './Mylayout/Cataloug';
import {Login} from './Mylayout/Login';
import {Signup} from './Mylayout/Signup';
import {Update} from './Mylayout/Update';
import {Meal} from './Mylayout/Meal';
import {Dietplans} from './Mylayout/Dietplans';
import {Profile} from './Mylayout/Profile';
import {Feeds} from './Mylayout/Feeds';
import NodeState from './Context/nodeState';
import {Track} from './Mylayout/Track';
import { BrowserRouter as Router,Switch,Route,
} from "react-router-dom";
function App() {

 const readIndex=()=>{  
       return (
         <>
          <Index/>
         </>
         )
          }       
          
   function readActivity()
  {
    return (
        <Activity/>
    )
  
  }        
            
   const readAbout=() =>{  
       return (
         <>
       <About/>
       </>
        )
           }
   
 
  
 const readContact=() =>{  
        return (
      <h2> About </h2>
    )
           }
           
  
    
  function readSignup()
  {
    return (
     <Signup/>
    )
  
  }
  function readLogin()
  {
    return (
     <Login/>
    )
  
  }
  
  function readProfile()
  {
    return (
    <Profile/>
    )
  
  }
   function readDash()
  {
    return (
     <Cataloug/>
    )
  
  }
  function readUpdate()
  {
    return (
      <Update/> 
    )
  
  }
   function readMeal()
  {
    return (
      <Meal/> 
    )
  
  }
   function readDiet()
  {
    return (
      <Dietplans/> 
    )
  
  }
  
  const[mystyle,setMystyle]=useState({
   color:'black',
  background:'linear-gradient(white,orange)'

});
 
const [mode,setMode]=useState("light");
const toggleMode=()=>{
  if(mystyle.color==='black')
  {
    setMystyle({
   color:'white',
  background:'black'

})
   setMode('dark');
   //showAlert('Success','dark mode is imposed'); 
  }
  else
  {
  setMystyle({
   color:'black',
    background:'linear-gradient(white,orange)',
   }) 
   
   //showAlert('success','dark mode is lifted'); 
   setMode('light');
  
  }


}

  function readActive(){
        return ( <Track />) };
        

   function readfeeds(){
           return(
            <Feeds  /> ) };
  return (
    <> 
  <NodeState>
    <Router>  
     <Header search={false} style={mystyle} mode={mode} toggleMode={toggleMode} /> 
     <Alert/>  
     <body style={mystyle}>
     <Switch>
     <Route exact path='/'  render={readIndex}/>
     <Route exact path='/activity'  render={readActivity}/>
     <Route exact path='/recommend'  render={readActivity}/>
     <Route exact path='/about'  render={readAbout}/>
     <Route exact path='/contacts'  render={readContact}/>
     <Route exact path='/feeds'  render={readfeeds}/> 
     <Route exact path='/signup'  render={readSignup}/>
     <Route exact path='/login'  render={readLogin}/>
     <Route exact path='/profile'  render={readProfile}/>  
     <Route exact path='/dash'  render={readDash}/>
     <Route exact path='/updatepassword'  render={readUpdate}/>
     <Route exact path='/dietplans'  render={readDiet}/>
     <Route exact path='/trackmeal'  render={readMeal}/>
     <Route exact path='/track'  render={readActive}/>
   </Switch>
  </body>
 <Footer/>
 </Router>
 </NodeState>
  </>
  );
   }

export default App;


/*
 let make;
 if(localStorage.getItem("list")===null)
 {  make=[];  }
 else
 {
  make=JSON.parse(localStorage.getItem("list"));
  console.log("i am make",make);
 }
 

 const onDelete =(List)=>{
    setList(list.filter((e)=>{return e!==List;}));
    localStorage.setItem("list",JSON.stringify(list));
    }
       
  const append=(p1,p2)=>{
        let block={name:p1,title:p2}
        setList([...list,block]);
   localStorage.setItem("list",JSON.stringify(list));  
                         }

 
                         
                         
  const [list,setList]=useState(make);
  console.log("i am list",list);
  
  useEffect(()=>{
  localStorage.setItem("list",JSON.stringify(list));
  },[list])
 
 /*const readoldhome=()=>{  
       return (
         <>
       <Addnew Add={append}/>
       <Body pass={list} search={false} del={onDelete} />
       
       </>
        )
          }  
          */
