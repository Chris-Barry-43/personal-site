// src/About.js
 
import React from "react"
import Thumbnail from './Thumbnail'; //import the Thumbnail component
 
function About(props) {
    return (
        //Render a Thumbnail component
      <div>
        <h1>About</h1>
        <Thumbnail
          link="/twitter"
          image="twitter-logo.jpg"
          title="Twitter Newsfeed"
          category="Mobile App"
        />
      </div>
    )
}
 
export default About;