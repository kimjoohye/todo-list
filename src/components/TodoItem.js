import React, {useState, useRef, useEffect} from 'react'
import { IoMdCheckmark, IoMdCreate,IoIosTrash } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { todoRemove, todoToggle, todoUpdate } from '../reducer/Todo';
import { Remove, DoItem, CheckSqure, Update, TextBox, TextDiv } from './styledComp'

const TodoItem = props => {
    const { id, text, isComplete } = props.todo;

    const [edited, setEdited] = useState(false);
    const focus = useRef();
    const dispatch = useDispatch();

    const onClickEdit = () => {
        if(isComplete === false)
          setEdited(!edited);
    }

    const keyPress = (e) => {
        if(e.key === "Enter"){
            dispatch(todoUpdate(id, e.target.value));
            onClickEdit();
        }
    }

    useEffect(()=> {
        if(edited){
            focus.current.focus();
        }
    },[edited])
    return <DoItem>
        {/* 체크박스 */}
        <CheckSqure
        isComplete={isComplete} 
        onClick = {() => dispatch(todoToggle(id))}>
            { isComplete ? <IoMdCheckmark />: <></>}
        </CheckSqure>

        {/* 내용 */}
        {edited ? <TextBox type="text" 
        defaultValue={text} 
        onKeyPress={keyPress}
        ref={focus}/>
        : <TextDiv isComplete={isComplete}>{text}</TextDiv>}

        {/* 수정 버튼 */}
        <Update isComplete={isComplete} onClick={()=> onClickEdit()}>
            <IoMdCreate />
        </Update>

        {/* 삭제 버튼 */}
        <Remove onClick={() => dispatch(todoRemove(id))}>
            <IoIosTrash />
        </Remove>
    </DoItem>
}

export default TodoItem