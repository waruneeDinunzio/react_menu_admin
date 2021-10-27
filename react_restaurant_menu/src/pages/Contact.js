import React from 'react';

const Contact = () => {
    return (
        <div>
          <form class="form">
            <h2>CONTACT US</h2>
            <p type="Name:"><input placeholder="Write your name here.."></input></p>
            <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
            <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
            <button>Send Message</button>
            <div className="phone">
              <span class="fa fa-phone"></span>781-438-1001
              <span class="fa fa-envelope-o"></span> contact@josiya.com
            </div>
          </form>
        </div>
    );
};

export default Contact;