import React from 'react';
import SocialMedia from '../pages/SocialMedia';
const Footer = () => {
    return (
      <div className= "row" id="footer" >
            
      <div className="col-lg-4 mb-2">
        
          <h5 className="mb-1" >OPENING HOURS:</h5>
          <table className="table">
             <tbody>
               <tr>
                 <td>Lunch</td>
                <td>Mon-Sat: 11:30 - 3:00 pm</td>
              </tr>
              <tr>
                 <td>DINNER</td>
                <td>Mon-Thurs: 5:00 - 9:00 pm</td>
                <td>Sun: 4:00 - 9:00 pm</td>
              </tr>
            </tbody>
          </table>
      </div>

      <div className="col-lg-4 mb-2">
        <SocialMedia />
          <div className="footer-copyright text-center p-4">© 2021 Copyright:
            <a href=""> josiya.com</a>
           </div>
      </div>

      {/* <SocialMedia /> */}

      <div className="col-lg-4 mb-2">
          {/* <h4>DELIVERY HOURS:</h4>
          <p>Mon: Pick Up Only</p>
          <p>Tue-Sat: 11:30 am - 9:00 pm</p>
          <p>Sun: 4:00 - 9:00 pm</p> */}
          <h5 className="mb-1" >DELIVERY HOURS:</h5>
          <table className="table">
            <tbody>
             <tr>
                <td>Mon: Pick Up Only</td>
               </tr>
               <tr>
                <td>Tue-Sat: 11:30 am - 9:00 pm</td>
                <td>Sun: 4:00 - 9:00 pm</td>
              </tr>
             </tbody>
           </table>
      </div>  
    </div>


  //   <footer id = "footer">
  //   <div class="container p-4">
  //     <div class="row">
  //       <div class="col-lg-6 col-md-12 mb-2">
  //       <h5 class="mb-1" >DELIVERY HOURS:</h5>
  //         <table class="table">
  //           <tbody>
  //             <tr>
  //               <td>Mon: Pick Up Only</td>
  //               <td>Tue-Sat: 11:30 am - 9:00 pm</td>
  //             </tr>
  //             <tr>
  //               {/* <td>Sat - Sun:</td> */}
  //               <td>Sun: 4:00 - 9:00 pm</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>

  //       <div class="col-lg-3 col-md-6 mb-4">
  //       <SocialMedia />
  //       <div className="footer-copyright text-center p-4">© 2020 Copyright:
  //       //     <a href=""> josiya.com</a>
  //       //   </div>
  //       </div>

  //       <div class="col-lg-3 col-md-6 mb-4">
  //         <h5 class="mb-1" >DELIVERY HOURS:</h5>
  //         <table class="table">
  //           <tbody>
  //             <tr>
  //               <td>Mon: Pick Up Only</td>
  //               <td>Tue-Sat: 11:30 am - 9:00 pm</td>
  //             </tr>
  //             <tr>
  //               {/* <td>Sat - Sun:</td> */}
  //               <td>Sun: 4:00 - 9:00 pm</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
    
    
  // </footer>
  
    );
};

export default Footer;