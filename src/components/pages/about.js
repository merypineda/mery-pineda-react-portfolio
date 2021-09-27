import React from 'react';
import profilePicture from "../../../static/assets/images/bio/img_3001.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column" 
       style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div className="right-column">

      <div className="icon-wrapper">
      <FontAwesomeIcon icon="book-open" />
      <span>Thank you for visiting</span>
      </div>
      
      <p>
      Creative, responsible are one of my biggest qualities. Also, being with the same company for over seven years and I’m always willing to learn new skills. Besides, being challenged by working with different levels of expertise and coworker’s attitude, but always kept focus on the goal. Able to communicate and seek answers to make reasonable decisions.</p>

      <p>I started the course out of curiosity, I never thought it was something that could become so interesting. One day I was just walking through a lunch room area at my job and a saw a poster about a web and software development class that was going to start the fallowing year. Why not give it a try? And I did. </p>

      <p>Being able to code gives you the ability to take a blank window and convert it into a window full of life. It’s amazing all the things that we can do with a set of codes.
 
      </p>


      </div>
      
    </div>
  );
} 