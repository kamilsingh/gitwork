import React from 'react'
import {Link} from "react-router-dom";
import {useContext} from 'react';
import nodeContext from '../Context/nodeContext';
  export const Footer= ()=>{
     let footstyle={
       position:"sticky",       
           
         width:"100%",
        
     }
         return (
            <>
         <footer class="foot">
   <div class="row">
    <div class="col21 footcol">
     <div class="items">            

      <h1> App Based Gamified Process</h1>
     </div>
     <ul class="items">
      <li>Leaderboard</li>
     <li>Moderated health Clubs</li>
     <li>Tasks & Objectives</li>
     <li>Instant follow ups</li>
    </ul> 
   </div>
   <div class="col21 footcol">
    <div class="items">
     <h1> High Engagement </h1>
    </div>
    <ul class="items">
     <li>Marketing & Promotion</li>
     <li>Fitness & Nutrition drives</li>
     <li>Fitness & Nutrition drives</li>
     <li>Registration Kiosks</li>
     <li>Webinars & Lives</li>
    </ul>
   </div>

   <div class="col21 footcol">
    <div class="items">
     <h1> Health Delivered </h1>
    </div>
   <ul class="items">
    <li> Highly Qualified Coaches</li>
    <li>Diet & Workout Plans</li>
    <li> Content Educate Users</li>
    <li>Personalised Coaching </li>
    </ul>
   </div> 
  
  <div class="col21 footcol">
  <div  class="items">
   <h1 >Measurable Impact</h1>
  </div>
  <ul class="items">
   <li> Monthly Company Report</li>
   <li>Individual Progress</li>
   <li> Actionable Insight</li>
   <li> Dashboards</li>
  </ul> 
  </div>
<div class="contactus">
 <Link to="http://www.fb.com/kamil_rajput" class='endstrip'>Facebook</Link>
  <Link to="http://www.yt.com/kamil_rajput" class='endstrip'>YouTube</Link> 
 <Link to="http://www.instagram.com/kamil_rajput" class='endstrip'>Instagram</Link>
 <Link to="http://www.Linkedin.com/kamil_rajput" class='endstrip'>MyClub</Link>
<Link to="mailto:officialkam9@gmail.com" class='endstrip'>CONTACT US </Link>
<Link class='endstrip'>&copy; Fitbirds 2021</Link>
</div>
</div>
  </footer>
           </> )
 
  
  }