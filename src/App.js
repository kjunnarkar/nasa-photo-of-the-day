import React, {useState, useEffect} from "react";
import Apod from "./components/ApodComponent/Apod";
import axios from "axios";
import "./App.css";

function App() {

  const [astroData, setAstroData] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then (response => {
        console.log(response.data);
        setAstroData(response.data);
        //console.log(astroData);
      })
      .catch (error => {
        console.log("You Did NOT Receive Data", error);
      })
  
  }, []);

  return (
    <div className="App">
      <h1 className="Top-Title">
        The National Aeronatical and Space Administration Presents:
      </h1>
      <div>
            <Apod
              title={astroData.title}
              date={astroData.date}
              copyright={astroData.copyright}
              image={astroData.url}
              explain={astroData.explanation}
            />
      </div>
    </div>
  );
}

export default App;
