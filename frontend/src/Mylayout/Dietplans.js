import React from 'react'
import {Link} from "react-router-dom";
import {useContext,useHistory} from 'react';
import nodeContext from '../Context/nodeContext';
import GooglePayButton from '@google-pay/button-react';
import gpayout from './../images/gpayout.JPG';
import bird from './../images/logo.png';

  export const Dietplans= ()=>{   
           const {login,showAlert}=useContext(nodeContext);
            
            function aler(){
            showAlert('warning',' Ready to pay',3);
            }
             return (
             <>
             <div class="contain">
  <div> <h1 align="center" style={{color:'GREEN'}}> <strong><i> HealthCare Plans </i> </strong></h1> </div>
   <div style={{textAlign:'center'}}> <img src={bird} alt=""/> <img src={bird} alt=""/> <img src={bird} alt=""/> </div>  
   <div class="row" >
  <div class="col13 plans " style={{height:'500px',margin:'auto'}}>
       <div class="plan"  >   <h3> <b>  Basic</b> </h3> <br/> <strong> <h5>₹ <strike>99/-</strike> <big>0/-</big> </h5> </strong>
         <i> <div style={{display:'flex'}}>
           <div style={{width:'50%'}}>
           <span style={{padding:'5px',fontSize:'20px'}}> Availability </span>  <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Coach </span> <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Assistance</span>  <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> CustomDiet </span> <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Offers </span> <br/>
           </div>
            <div style={{width:'50%'}}>
           <span style={{padding:'5px',fontSize:'20px'}}> 24/7 </span> <br/>
           <span style={{padding:'5px',fontSize:'20px'}}> &#10007;</span><br/>
           <span style={{padding:'5px',fontSize:'20px'}}>&#10004; </span><br/>
           <span style={{padding:'5px',fontSize:'20px'}}> &#10007; </span><br/>
            <span style={{padding:'5px',fontSize:'20px'}}>&#10007; </span><br/>
           </div>
        </div> </i> 
      <div><button onClick={aler}style={{background:'black',color:'white',borderRadius:'5px',padding:'10px 20px 10px 20px'}}> Claim  with Love </button></div></div></div>
      <div class="col13 plans " style={{height:'500px'}}>
      <div class="plan">  <h3> <b> Basic+Assistance </b> </h3> <br/> <strong> <h5>₹ <strike>599/-</strike>  <big>399/-</big>  </h5></strong> 
         <i> <div style={{display:'flex'}}>
           <div style={{width:'50%'}}>
           <span style={{padding:'5px',fontSize:'20px'}}> Availability </span>  <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Coach </span> <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Assistance</span>  <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> CustomDiet </span> <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Offers </span> <br/>
           </div>
            <div style={{width:'50%'}}>
           <span style={{padding:'5px',fontSize:'20px'}}> 24/7 </span> <br/>
           <span style={{padding:'5px',fontSize:'20px'}}> &#10007;</span><br/>
           <span style={{padding:'5px',fontSize:'20px'}}>&#10004; </span><br/>
           <span style={{padding:'5px',fontSize:'20px'}}> &#10004;</span><br/>
           <span style={{padding:'5px',fontSize:'20px'}}> &#10007;</span><br/>
           </div>
        </div> </i> 
       <div>
      <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '399.00',
      currencyCode: 'INR',
      countryCode: 'IN',
    },
    shippingAddressRequired:true,
  callbackIntents:['SHIPPING_ADDRESS','PAYMENT_AUTHORIZATION']
  }}
  
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}

  onPaymentAuthorized={paymentData => {
    console.log('A data', paymentData);
  }}
  
  onPaymentDataChanged={paymentData => {
    console.log('d data',paymentData);
  }}
       />
</div></div></div>
   <div class="col13 plans " style={{height:'500px'}}>
     <div class="plan">  <h3> <b> Basic+Advance </b> </h3> <br/> <strong> <h5>₹ <strike>1500/-</strike> <big> 1275/- </big> </h5></strong> 
     <i> <div style={{display:'flex'}}>
           <div style={{width:'50%'}}>
           <span style={{padding:'5px',fontSize:'20px'}}> Availability </span>  <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Coach </span> <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Assistance</span>  <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Custom Dietplans </span> <br/>
          <span style={{padding:'5px',fontSize:'20px'}}> Offers </span> <br/>
           </div>
            <div style={{width:'50%'}}>
           <span style={{padding:'5px',fontSize:'20px'}}> 24/7 </span> <br/>
           <span style={{padding:'5px',fontSize:'20px'}}>&#10004;</span><br/>
           <span style={{padding:'5px',fontSize:'20px'}}>&#10004; </span><br/>
           <span style={{padding:'5px',fontSize:'20px'}}> &#10004; </span><br/>
           <span style={{padding:'5px',fontSize:'20px'}}> &#10004; </span><br/>
           </div>
        </div> </i> 
       <div>
   <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '1275.00',
      currencyCode: 'INR',
      countryCode: 'IN',
    },
      
  }}
  
  
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
   
   }}

/></div></div></div>
   </div>
 
    
   </div>
  
             </>
             
             
             )
             
             }  