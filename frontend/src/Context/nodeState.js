import NodeContext from './nodeContext';
import {useState} from 'react';

 const NoteState =(props)=> {   
    
    
    
    
     const[mealName,setName]=useState("NO NAME");
     
     const [alert,setAlert]=useState(null);
  
     const showAlert=(result,message,time)=>{
       setAlert({
        result:result,
        message:message,
 
       })
   setTimeout(()=>{
    setAlert(null); 
   }
   ,time*1000);
   }
     const [fname,setFname]=useState("Meal");
     const [fitems,setFitems]=useState([]);
   const [profile,setProfile]=useState({firstname:"NA",lastname:"NA",email:"NA",gender:"NA",Age:'NA',birth:"NA",weight:'NA',height:'NA',mobile:'NA',bmi:'NA',chest:'NA',shoulder:'NA',waist:'NA',pic:'NA'});
   const [login,setLogin]=useState(false);
   const [calset,setCal]=useState({run:0,walk:0,bicycle:0,dance:0,swim:0,out:0,yoga:0,others:0,house:0,weight:0});
   const [totalcal,setTotal]=useState(0);
   return (
     <NodeContext.Provider value={{login,setProfile,setLogin,profile,alert,showAlert,fname,fitems,setFitems,setFname,calset,setCal,totalcal,setTotal}}>
     {props.children}
     </NodeContext.Provider>
   )
}

export default NoteState;