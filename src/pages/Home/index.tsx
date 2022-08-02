import { Play } from 'phosphor-react'
import {
    CountdownContainer,
    FormContainer,
    HomeContainer,
    Separtor,
    StartCountDowButton,
} from './styles'

export const Home = () => {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="text" id="task" />
                    <label htmlFor="minutsAmount">durante</label>
                    <input type="number" id="minutsAmount" />
                    <span>minutos</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separtor>:</Separtor>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountDowButton disabled type="submit">
                    <Play />
                    Começar
                </StartCountDowButton>
            </form>
        </HomeContainer>
    )
}
