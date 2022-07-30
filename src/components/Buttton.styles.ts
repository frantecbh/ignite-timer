import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'purple',
    danger: 'red',
    success: 'green',
}

export const ButtonContaniner = styled.button<ButtonContainerProps>`

width: 100px;
height: 40px;
margin: 8px;

background-color: ${props => props.theme.secondary};
color: ${props => props.theme.white}

/* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }} */

`