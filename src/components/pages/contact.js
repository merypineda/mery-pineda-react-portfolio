import React from 'react';
import contactImg from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column" 
       style={{
        background: "url(" + contactImg + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />

       <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="link" />
            </div>

            <div className="text">www.linkedin.com/in/mery-pineda </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="at" />
            </div>

            <div className="text">Mery.pineda@outlook.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marker-alt" />
            </div>

            <div className="text"> Pennsylvania</div>
          </div>
        </div>
      </div>
    </div>
  );
}