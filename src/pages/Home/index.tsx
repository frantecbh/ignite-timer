import { Play } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
    CountdownContainer,
    FormContainer,
    HomeContainer,
    MinutesAmmountInput,
    Separtor,
    StartCountDowButton,
    TaskInput,
} from './styles'
import { useState } from 'react'


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutsAmount: zod.number().min(5, 'O Ciclo precisa ser de no mínimo 5 minutos').max(60, 'O Ciclo precisa ser de no máximo 60 minutos')
})

interface NewCicleFormData {
    task: string
    minutsAmount: number
}

interface Cycle {
    id: string;
    task: string;
    minutsAmount: number
}

export const Home = () => {

    const [cicles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)


    const { register, handleSubmit, watch, reset } = useForm<NewCicleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutsAmount: 0
        }
    })

    function handleCreateNewCycle({ task, minutsAmount }: NewCicleFormData) {
        const newCicle: Cycle = {
            id: String(cicles.length + 1),
            task,
            minutsAmount


        }

        setCycles((state) => [...state, newCicle])
        setActiveCycleId(newCicle.id)
        reset()
    }

    const activeCycle = cicles.find((cicle) => cicle.id === activeCycleId)

    console.log(activeCycle)
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
