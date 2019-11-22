import React from "react";
import styled from "styled-components";

/* styled-components */
export const TopTitle = styled.h1 `
    margin-top: 40px;
    margin-bottom: 25px;
    margin-right: 100px;
    margin-left: 100px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    background-color: black;
`;

const Title = styled.h2 `
    margin-top: 25px;
    margin-bottom: 50px;
    text-decoration: underline;
`;

const Image = styled.img `
    height: 50%;
    width: 50%;
    margin-bottom: 10px;
`;

const Copy = styled.p `
    display: flex;
    justify-content: center;
`;

const Date = styled.h4 `
    display: flex;
    justify-content: center;
    margin-left: 250px;
    margin-right: 250px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    background-color: black;
`;

const Explain = styled.p `
    margin: 50px 250px 25px 250px;
`;
/* End of styled-components */

const Apod = (props) => {
    return (
        <div>
            <TopTitle>The Astronomy Picture of the Day</TopTitle>
            <Title>{props.title}</Title>
            <Image alt="Astronomy Picture of the Day" src={props.image}/>
            <Copy>Image Courtesy of {props.copyright}</Copy>
            <Date>{props.date}</Date>
            <Explain>{props.explain}</Explain>
        </div>
    );
};
export default Apod;
