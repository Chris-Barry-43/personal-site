import React from 'react';
import Navbar from './Components/Nav/Navbar.js'
import Footer from './Components/Footer/index.js'
import {HashRouter, Route} from "react-router-dom"
import About from "./Pages/About.js"
import Resume from "./Pages/Resume.js"
import Interests from "./Pages/Interests.js"
import Contact from "./Pages/Contact.js"
import Home from "./Pages/Home.js"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 3rem);
  top: 3rem;
  left: 0;
  border: none;
  margin: -0.5rem -0.5rem -0.5rem -0.5rem;
`

const Main = styled.div`

`

function App() {
  return (
    <Container>

      <HashRouter>
        <Navbar/>
        
        <Main>
            {/*Set up the Router*/}
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/> 
            <Route path="/resume" component={Resume}/>
            <Route path="/interests" component={Interests}/>
            <Route path="/contact" component={Contact} /> 

            
        </Main>

              

      </HashRouter>
      <Footer/>
      
    </Container>
  );
}

export default App;
