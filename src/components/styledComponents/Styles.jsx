import styled from "styled-components";

export const AsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    background: blue;
    border: 0.5px solid #000080;
`
export const AsideText = styled.p`
    font-family: sans-serif;
    font-size: 12px;
    color: white;

`
export const AsideTitle = styled.h1`
    font-family: sans-serif;
    font-size: 16px;
    color: ${props => props.primary ? "#007bff" : "#6c757d"};

`