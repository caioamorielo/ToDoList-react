import { useState } from 'react';
import { v4 as uuid } from 'uuid'



import { Container, Title, ToDoList, Input, Button, ListItem, TrashIcon, CheckIcon } from './styles'

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const inputMudou = (event) => {
    setInputTask(event.target.value)

  }

  const ButtonClicked = () => {
    if (inputTask){
    setList([...list, { id: uuid(), task: inputTask, finished: false }])
    console.log(list);
    }
  }

  const endTask = (id) => {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  const deleteTask = (id) => {
    const newList = list.filter(item => item.id != id)

    setList(newList)
  }

  return (
    <Container>
      <Title>To Do List</Title>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={ButtonClicked}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (

              list.map((item) => (
                <ListItem key={item.id} isFinished={item.finished}>
                  <CheckIcon onClick={() => endTask(item.id)} />
                  <li>{item.task}</li>
                  <TrashIcon onClick={() => deleteTask(item.id)} />
                </ListItem>
              ))) : (
              <h3>Não há itens na lista</h3>
            )
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
