import React from "react";

const Apod = (props) => {
    return (
        <div>
            <h1 className="intro">The Astronomy Picture of the Day</h1>
            <h2 className="title">{props.title}</h2>
            <img className="image" alt="Astronomy Picture of the Day" src={props.image}/>
            <p>Image Courtesy of {props.copyright}</p>
            <h4 className="date">{props.date}</h4>
            <p className="explain">{props.explain}</p>
        </div>
    );
};
export default Apod;
