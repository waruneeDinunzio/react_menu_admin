import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
    return (
        <div className="socialMedia">
           <h4>FOLLOW US @</h4> 
           <a href="https://www.youtube.com"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
            <a href="https://www.facebook.com"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.twitter.com" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a href="https://www.instagram.com"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
        </div>
    );
};

export default SocialMedia;