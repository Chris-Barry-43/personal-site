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

const Main = styled.div`
  position: relative;
  background-color: grey;
  top: 3rem;
`
function App() {
  return (
    <div>
      <HashRouter>

        <Navbar/>
        <div>
          <Main>
            hello
            {/*Set up the Router*/}
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/> {/*defines what page to render given the url extension*/}
            <Route path="/resume" component={Resume}/>
            <Route path="/interests" component={Interests}/>
            <Route path="/contact" component={Contact} /> 

          </Main>
        </div> 
              

      </HashRouter>

      <Footer/>
    </div>
  );
}

export default App;

