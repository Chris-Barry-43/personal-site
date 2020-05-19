import React from "react"
import styled from "styled-components"

const Wrapper = styled.div `
  display: flex;
  width: 100%;
  background-image: linear-gradient(#c69c96, #ecd7d2);
  padding-top: 3rem;
  height: 100%;
`

const Left = styled.div `
  width: 40%;
  justify-content: center;
  align-self: flex-start;
  padding-left: 1rem;
  height: 100%;
`

const Right = styled.div`
  width: 60%;
  justify-content: center;
  align-self: flex-end;
  background: #ecd7d2;
  padding: 2rem;
  height: 100%;
  border-radius: 15px 0 0 0;
`

function Resume(props) {
  return (
      //Render a Thumbnail component
    <Wrapper>
      <Left>
        <h1>
          Chris Barry
        </h1>
      </Left>
      <Right>
        <h1>
          Resume
        </h1>
        {/* education */}
        <h2>
          Education
        </h2>
        <p>
          B.S. Mechanical Engineering 
          <br/>University of Vermont 2015
        </p>
        {/* experience */}
        <h2>Experience</h2>
        <h3>Software Test Developer </h3>
        <h4>Pure Watercraft<br/></h4>
        <ul>
          <li>
            Building a Qt app using C, C++ to perform end of line test on battery assemblies
          </li>
        </ul>
        <h3>Tutor</h3>
        <h4>Varsity Tutors<br/></h4>
        <ul>
          <li>Thermodynamics (fundamentals and applied)</li>
          <li>Calculus I,II,&II</li> 
          <li>System dynamics</li>
          <li>Physics (classical mechanics, electricity & magnetism)</li>
        </ul>

      </Right>
    </Wrapper>
  )
}
 
export default Resume;