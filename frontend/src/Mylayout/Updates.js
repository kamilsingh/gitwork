import React from 'react';
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';

 
   export  const Updates=(props)=>{
           const {fname,fitems,setFitems,setFname}=useContext(nodeContext);
            let format={name:fname,data:fitems};
               console.log(format);
              async function savefav(){
    	       
    	      const opt={method:'POST',
    	       headers:{ 'Content-Type': 'application/json'},
    	       body:JSON.stringify(format),
    	       };
    	  alert("saving!!!!");
    	  const resp=await fetch('http://localhost/saving',opt);
    	  const final_result=await resp.json();
    	  console.log(final_result);
      } 
          
         async function postlog(){
    	       
    	   const opt={method:'POST',
    	   headers:{ 'Content-Type': 'application/json'},
    	   body:JSON.stringify(format),
    	   };
    	  alert("saving!!!!");
    	  const resp=await fetch('http://localhost/saving',opt);
    	  const final_result=await resp.json();
    	  console.log(final_result);
      } 
          
                      
        console.log(props.block);
       return (
          <>
      <div className="col16" style={{textAlign:'center'}}>
      
      <label style={{padding:'7px'}}> Nutrients  Intake </label> <br/>
      <label style={{padding:'7px'}}> Carbs:  </label> <label style={{padding:'7px'}} > {props.block.Carbs.toFixed(2)} kcal </label><br/>
      <label style={{padding:'7px'}}> Protien: </label> <label style={{padding:'7px'}} >{props.block.Protein.toFixed(2)} gm </label><br/>
      <label style={{padding:'7px'}}> Fats:  </label> <label style={{padding:'7px'}} >{props.block.Fats.toFixed(2)} gm  </label><br/>
      <label style={{padding:'7px'}}> Trans-fat :</label> <label style={{padding:'7px'}}> {props.block.Transfat.toFixed(2)} gm </label><br/>
       <button onClick={postlog} style={{background:'black',color:'white',fontSize:'20px',padding:'15x',margin:'10px'}}> Save logs </button>
       <button onClick={savefav} style={{background:'green',color:'white',fontSize:'20px',padding:'15x',margin:'10px'}}> Save Favourite </button> <br/>
   </div>
   <div className='col12'> <button style={{background:'green',color:'white',padding:'5px 5px 5px 5px',marginTop:'10px',borderRadius:'5px'}}>  Energy :{props.block.Energy} kcal</button> </div> 
       </>
       )
    
    }
    