import React, { useRef } from 'react';
import './styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; //this function does not return anything
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form 
            className='input' 
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur(); //puts the element out of focus
            }}
            >
            <input  
                ref={inputRef}
                className='input__box' 
                type='input' 
                placeholder='Enter a task'
                value={todo}   
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    );
};

export default InputField;