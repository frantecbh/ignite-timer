import { HistoryContainer, HistoryList } from "./styles"


export const History = () => {
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa A</td>
                            <td>20 Minutos</td>
                            <td>Há 2 Meses</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa A</td>
                            <td>20 Minutos</td>
                            <td>Há 2 Meses</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa A</td>
                            <td>20 Minutos</td>
                            <td>Há 2 Meses</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa A</td>
                            <td>20 Minutos</td>
                            <td>Há 2 Meses</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa A</td>
                            <td>20 Minutos</td>
                            <td>Há 2 Meses</td>
                            <td>Concluído</td>
                        </tr>

                    </tbody>
                </table>
            </HistoryList>

        </HistoryContainer>
    )
}
