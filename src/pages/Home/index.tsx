import { Play } from 'phosphor-react'

import { useForm } from 'react-hook-form'
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

    const { register, handleSubmit, watch } = useForm()

    function handleCreateNewCycle(data: any) {
        console.log(data)
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        type="text"
                        id="task"
                        list='task-sugestions'
                        placeholder="Dê um nome para seu projeto"
                        {
                        ...register('task')
                        }
                    />
                    <datalist id="task-sugestions">
                        <option value="Example 1" />
                        <option value="Example 2" />
                        <option value="Example 3" />
                        <option value="Example 4" />
                    </datalist>

                    <label htmlFor="minutsAmount">durante</label>
                    <MinutesAmmountInput
                        type="number"
                        id="minutsAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {
                        ...register('minutsAmount', { valueAsNumber: true })
                        }
                    />
                    <span>minutos</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separtor>:</Separtor>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountDowButton disabled={isSubmitDisabled} type="submit">
                    <Play />
                    Começar
                </StartCountDowButton>
            </form>
        </HomeContainer>
    )
}
