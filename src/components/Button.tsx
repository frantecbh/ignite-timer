import { ButtonContaniner, ButtonVariant } from "./Buttton.styles"


interface ButtonProps {
    variant?: ButtonVariant
}




export const Button = ({ variant = 'primary' }: ButtonProps) => {
    return (
        <ButtonContaniner variant={variant}>
            Enviar
        </ButtonContaniner>
    )
}
