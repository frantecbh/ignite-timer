import { Play } from 'phosphor-react'
import {
    CountdownContainer,
    FormContainer,
    HomeContainer,
    MinutesAmmountInput,
    Separtor,
    StartCountDowButton,
    TaskInput,
} from './styles'

export const Home = () => {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        type="text"
                        id="task"
                        placeholder="Dê um nome para seu projeto" />
                    <label htmlFor="minutsAmount">durante</label>
                    <MinutesAmmountInput
                        type="number"
                        id="minutsAmount"
                        placeholder="00" />
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
