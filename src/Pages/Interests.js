import React from "react"
import styled from 'styled-components'
import kestrel from '../Kestrel.jpg'
import biking from '../me_biking.jpg'
import iris from '../iris.jpeg'
import la from '../la.jpg'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`

const Item = styled.div`
  
`

const Image = styled.img`
  border-radius: 8px;
  height: 15rem;
`
 
function Interests(props) {
    return (
      <Wrapper>
        <Image src = {kestrel} alt="photo of Kestrel"/>
        <Image src = {biking} alt="me biking"/>
        <Image src = {iris} alt="me holding iris"/>
        <Image src = {la} alt="me in LA"/>
      </Wrapper>
    )
}
 
export default Interests;