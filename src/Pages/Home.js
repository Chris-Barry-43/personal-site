
import React from "react"
import Thumbnail from './Thumbnail'; //import the Thumbnail component
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

 
function Home(props) {
    return (
        //Render a Thumbnail component
      <div>
        <h1>Home</h1>
        <Thumbnail
          link="/twitter"
          image=""
          title="Twitter Newsfeed"
          category="Mobile App"
        />
        {/* <div className="bio">
            <img src={kestrel} className="background-photo" alt="kestrel"></img>
            <img src={profpic} className="headshot" alt="photo of me"></img>
    </div>*/}
      </div> 
    )
}
 
export default Home;