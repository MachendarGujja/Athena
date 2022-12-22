import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot'>
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginRight:145,padding:0,height:100}}>
        <h4>Quick Links</h4>
        <p>FAQ's</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginRight:145,padding:0,height:100}}>
      <h4>Services</h4>
        <p>Order Medicine</p>
        <p>Lab Tests</p>
        <p>Doctor Consultation</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginRight:145,padding:0,height:100}}>
       <h4>Our Policies</h4>
       <p>Privacy Policy</p>
       <p>Terms and Conditions</p>
       <p>Cancellation Policy</p>
     </div>
     <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginRight:145,padding:0,height:100}}>
     <h4>Social</h4>
     <div >
                <FacebookIcon style={{color:'white',fontSize:16}}/>
                <YouTubeIcon style={{color:'white',fontSize:16}}/>
                <TwitterIcon style={{color:'white',fontSize:16}}/>
            </div>
     <p>Need Help?</p>
     <p>+911244847489</p>
   </div>
   <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginRight:0,padding:0,height:100}}>
   <h4 >Our App</h4>
   <p>FAQ's</p>
   <p>About Us</p>
 </div>
 </div>
 <hr style={{width:1170,marginTop:50}}/>
 <div>
  <p>@Company. All Rights Reserved</p>
 </div>
    </div>
  )
}

export default Footer