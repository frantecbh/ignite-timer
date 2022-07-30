import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}


export const ButtonContaniner = styled.button<ButtonContainerProps>`

width: 100px;
height: 40px;
border: 0;
margin: 8px;
border-radius: 5px;

background-color: ${props => props.theme["green-500"]};
color: ${props => props.theme.white};





`