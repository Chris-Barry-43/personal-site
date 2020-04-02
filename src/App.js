import React from 'react';
import {HashRouter, Route} from "react-router-dom"
import styled from "styled-components"
import logo from './logo.svg';

const Main = styled.div`
  position: relative;
  background-color: grey;
  top: 3rem;
`
function App() {
  return (
    <div>
      <HashRouter>
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

    </div>
  );
}

export default App;
