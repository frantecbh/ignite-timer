import { ButtonContaniner, ButtonVariant } from './Buttton.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

// recebendo propriedade do component
export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return (
    // passando valor para o styled-components
    <ButtonContaniner variant={variant}>Enviar</ButtonContaniner>
  )
}
