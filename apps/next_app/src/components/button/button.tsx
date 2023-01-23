import React from "react";
import styled from "styled-components"

let StyledButton = styled.button`
    margin: 0;
    padding: 0.5rem;
    width:10vh;
    height:10vh;
    font-weight: bolder;
    border-radius: 5px;
    border: 1px solid black;
    text-shadow: 2.83px 2.83px 2px rgb(208, 208, 208);
    background-color: #CCCCCC;
    box-shadow: 2.83px 2.83px 2px #C4C4C4;
    opacity: 100%;
    cursor: pointer;
`

export interface ButtonProps {
    className?: string;
    children?: React.ReactNode
}

export const Button = ( props:ButtonProps) => {
    return <StyledButton >{props.children}</StyledButton>;
};