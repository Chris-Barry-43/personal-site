// src/Resume.js

import React from "react"
import Thumbnail from './Thumbnail'; //import the Thumbnail component
 
function Resume(props) {
  return (
      //Render a Thumbnail component
    <div>
      <h1>Resume</h1>
      <Thumbnail
        link="/twitter"
        image="twitter-logo.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
    </div>
  )
}
 
export default Resume;