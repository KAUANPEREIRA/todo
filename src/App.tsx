import {useState} from 'react';
import * as C from './App.styles'
import { Item } from './types/item'
import {ListItem} from './components/ListItem'
import {AddArea} from './components/AddArea'

const App = ()=>{

  const [list, setList]=useState<Item[]>([
    {id:1,name:'Ir ao supermecado',done:false},
    {id:2,name:'Fazer dever da Faculdade',done:false},
    {id:3,name:'fazer lista',done:true}
  ])

  const hadleAddTask = (taskName:string)=>{
    let newList=[...list]//clonando meu array
    newList.push({
      id:list.length + 1,
      name:taskName,
      done:false
    })
    setList(newList)

  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>
          lista de tarefas
        </C.Header>

        <AddArea onEnter={hadleAddTask} />

        {list.map((item,index)=>(
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>

  )

}

export default App;
