import React, { useState, useRef } from 'react'
import {DoHead,Input,InputButton} from './styledComp'
import { IoMdAdd } from "react-icons/io"
import { todoInsert } from '../reducer/Todo'
import { useDispatch } from 'react-redux';

function TodoHead(){
    const today = new Date();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    const date = today.getFullYear() + "년 " + (today.getMonth()+1) + "월 "
     + today.getDate() +"일 " + week[today.getDay()]+"요일";

     const [todoInput, setodoInput] = useState("");
     const nextId = useRef(2);

     const dispatch = useDispatch();

     const onremove = ()=> {
         setodoInput("");
     };
     
     const onChangeInput = (e) => {
         setodoInput(e.target.value);
     };

     const keyPress = (e) => {
         if(e.key === "Enter"){
             TodoAdd();
         }
     };

     const TodoAdd = () => {
         if(todoInput.length === 0){
             return;
         }
         dispatch(todoInsert(nextId.current, todoInput));
         nextId.current += 1;
         onremove();
     };

     const onsubmit = (e) => {
         e.preventDefault();
     }

    return <DoHead>
        <div className="headDate">{date}</div>
        <form onSubmit={onsubmit}>
            <Input
            onChange={onChangeInput}
            onKeyPress={keyPress}
            value={todoInput} 
            placeholder="할 일을 입력하세요"/>

            <InputButton onClick={TodoAdd}>
                <IoMdAdd/>
            </InputButton>
        </form>
    </DoHead>
}

export default TodoHead