import React from "react";
import styled from "styled-components";
let StyledForm = styled.form`
    padding: 0.5rem;
    width:rem;
    height:auto;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    background-color: pink;
    &:hover{
        background-color: black;
    }
`

export interface FormProps {
    className?: string;
    children?: React.ReactNode
}

export const Form = (props: FormProps) => {
    return <StyledForm >{props.children}</StyledForm>;
};