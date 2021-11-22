import styled from 'styled-components'

export const DoTemplate = styled.div`
width: 500px;
height: 700px;

position: relative;
background-color: #F9F9F9;
margin: 0 auto 50px;
border-radius: 40px;

display: flex;
flex-direction: column;
`

export const DoHead = styled.div`
padding: 30px 20px 30px 30px;
border-bottom : 2px solid #94B3FD;

.headDate{
    font-size: 26px;
}
`

export const Input = styled.input`
    margin-top: 30px;
    width: 350px; height: 35px;
    border: 2px solid gray;
    border-radius: 10px;
    outline: none;
    padding-left: 10px;

    &::placeholder{
        color: #e5e5e5;
    }
`

export const InputButton = styled.button`
width: 30px; height: 30px;
border-radius: 15px;
background-color: #94B3FD;
outline: none;
border: none;

position: absolute;
top: 98px; right:67px;

display: flex;
justify-content: center;
align-items: center;

&:hover{
    background-color: #5e8bf3;
    transition: background-color 0.3s; 
}
`

export const DoList = styled.div`
height: 100%;
padding: 0px 13px 13px 30px;

.workLeft{
    font-size: 17px;
    margin-top: 25px;
    color: #94B3FD;
}
`
//할 일
export const Remove = styled.div`
font-size: 25px;
color: gray;
cursor: pointer;

&:hover{
    color: red;
    transform: color 0.3;
}
`
export const Update = styled.div`
font-size: 25px;
color: gray;
margin-right: 10px;
cursor: pointer;
&:hover{
    color: ${props => props.isComplete ? 'gray' : '#94B3FD'};
    transform: color 0.3;
}
`

export const DoItem = styled.div`
display: flex;
align-items: center;
margin-top: 5px;
`

export const CheckSqure = styled.div`
width: 27px;
height: 27px;
border: 2px solid ${props=>props.isComplete ? '#94B3FD': 'gray'};
border-radius: 10px;
cursor: pointer;

display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
color: ${props => props.isComplete ? '#94B3FD' : 'black'}
`

export const TextBox = styled.input`
padding: 5px 5px 5px 10px;
width: 343px;
height: 30px;
font-size: 20px;
border: none;
outline: none;
background-color: transparent;
`

export const TextDiv = styled.div`
display: flex;
align-items: center;
padding: 5px 5px 5px 10px;
width: 343px;
height: 30px;
font-size: 20px;

text-decoration: ${props => props.isComplete ? 'line-through': 'none'};
color: ${props => props.isComplete ? 'gray': 'black'};
transform: all 0.7s;
`

