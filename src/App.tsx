import {useState} from 'react';
import * as C from './App.styles'
const App = ()=>{

  const [list, setList]=useState([])

  return(
    <C.Container>
      <C.Area>
        <C.Header>
          lista de tarefas
        </C.Header>
      </C.Area>
    </C.Container>

  )

}

export default App;
