import styled from "styled-components";

import "./Button.css";

const Button = styled.button`
    display: block;
    width: 10rem;
    height: 3rem;

    margin-top: 1rem;

    background-color:  ${props => props.invalid ? "#cccccc": '#800080'};
    border: 1px solid ${props => props.invalid ? "#cccccc": '#800080'};
    border-radius: 0.5rem;

    font-size: 1rem;
    color: ${props => props.invalid ? "black": 'white'};

    transition: all 0.6s ease;

  &:hover {
    background-color:${props => props.invalid ? "#cccccc": '#ac00ac'};
    border: 1px solid ${props => props.invalid ? "#cccccc": '#ac00ac'};
  }

  &:focus {
    background-color: ${props => props.invalid ? "#cccccc": '#ac00ac'};
    border: 1px solid ${props => props.invalid ? "#cccccc": '#ac00ac'};

    outline-color: #ac00ac;
  }

  &:active {
    background-color: ${props => props.invalid ? "#cccccc": '#4e004e'};
    border: 1px solid ${props => props.invalid ? "#cccccc": '#4e004e'};
  }

  @media(max-width: 540px) {
    width: 100%;
  }
`;

export default Button;
