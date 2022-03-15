import styled from 'styled-components'

//este Container se refere ao contexto em que esta sendo importando analisar imports

type ContainerProps={
    done:boolean
}

export const Container = styled.div(({done}:ContainerProps)=>(
    `
    display:flex;
    background-color:#20212c;
    padding:10px;
    border-radius:10px;
    margim-bottom:20px;
    align-items:center;
    margin-top:10px;

    input{
        width:25px;
        height:25px;
        margin-right:5px;
    }

    label{
        color:#ccc;
        text-decoration:${done?'line-through':'initial'}
    
    }

    `


))
   





