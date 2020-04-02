// src/Interests.js
 
import React from "react"
import Thumbnail from './Thumbnail'; //import the Thumbnail component
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

 
function Interests(props) {
    return (
        //Render a Thumbnail component
      <div>
        <h1>Interests</h1>
        <Thumbnail
          link="/twitter"
          image=""
          title="Twitter Newsfeed"
          category="Mobile App"
        />
      </div>
    )
}
 
export default Interests;