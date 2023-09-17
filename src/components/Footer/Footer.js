import {
  MailOutlined
} from "@ant-design/icons";
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
<>
       <footer class="footer-main">
  <div class="container">
    <div class="row address-main">
      <div class="col-lg-4 col-sm-12 col-xs-12">
        <div class="address-box clearfix">
          <div class="add-icon">
            <img src="Img/footer-icon-01.png" alt="" />
          </div>
          <div class="add-content">
            <h5>Address</h5>
            <p> 1. Ayush Bhawan, B Block, GPO Complex, INA, New Delhi – 110023
<br/>
2. Ayush NBCC Office, Nbcc Central Courtyard Garden 1241-1340 Flats, Block B, East Kidwai Nagar, Kidwai Nagar, New Delhi, Delhi 110023 </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12 col-xs-12">
        <div class="address-box clearfix">
          <div class="add-icon">
      
          </div>
          <div class="add-content">
            <h5>Phone</h5>
            <p>1800-11-22-02 (9:00 AM to 5:30 PM) (IST) </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12 col-xs-12">
        <div class="address-box clearfix">
          <div class="add-icon">
            <img src="Img/footer-icon-03.png" alt="" />
          </div>
          <div class="add-content">
            <h5>Email</h5>
            <p> <a href="mailto:" style={{textDecoration:"none"}}>ayush@gov.com</a> </p>
          </div>
        </div>
      </div>
    </div>
</div>
 

 </footer> 
<footer class="bg-dark text-center text-white">

<div class="container p-4 pb-0">

  <section class="mb-1">

    <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/moayush" role="button"
      ><i class="fa fa-facebook-f"></i
    ></a>

    
    <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/moayush" role="button"
      ><i class="fa fa-twitter"></i
    ></a>


    <a class="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/@MinistryofAYUSHofficial/videos" role="button"
      ><i class="fa fa-google"></i
    ></a>


    <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/ministryofayush/" role="button"
      ><i class="fa fa-instagram"></i
    ></a>

  </section>
  
</div>



<div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
Team DAART ♥️ © 2023 All Rights Reserved.
</div>

</footer>

</>
  )
}

export default Footer
