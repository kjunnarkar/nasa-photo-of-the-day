import React, {useState, useEffect} from "react";
import Apod from "./components/ApodComponent/Apod";
import axios from "axios";
import "./App.css";
import {TopTitle} from "./components/ApodComponent/Apod";
import styled from "styled-components";

/* styled-components */
const Nav = styled.nav `
  margin-top: 50px;
  margin-bottom: 100px;
  display:flex;
  justify-content: space-evenly;
`;

const Links = styled.a `
  color: black;
  font-weight: bold;
  text-decoration: none;
`;

const BottomLink = styled(Links) `
  margin-bottom: 75px;
`;
/* End of styled-components */

function App() {

  const [astroData, setAstroData] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then (response => {
        console.log(response.data);
        setAstroData(response.data);
      })
      .catch (error => {
        console.log("You Did NOT Receive Data", error);
      })
  
  }, []);

  return (
    <div className="App">
      <Nav>
        <Links href="./index.html">Home</Links>
        <Links href="">About</Links>
        <Links href="">Photos</Links>
        <Links href="">Blog</Links>
      </Nav>
      <TopTitle>
        The National Aeronautical and Space Administration Presents:
      </TopTitle>
      <div>
        <Apod
          title={astroData.title}
          date={astroData.date}
          copyright={astroData.copyright}
          image={astroData.url}
          explain={astroData.explanation}
        />
      </div>
      <BottomLink href="./index.html">Back to Top</BottomLink>
    </div>
  );
}

export default App;
