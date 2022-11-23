import React, { useState, useRef } from 'react';

interface Person {
    firstName: string;
    lastName: string
}

interface Props {
    text: string;
    ok?: boolean; //prop is optional
    int: number;
    fn?: (bob: string) => string;
    obj: {
     field1: string   
    };
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


// or, as a parameter: {text: string}

export const  TextField:React.FC<Props>= ({ handleChange }) => {
  const  [count, setCount] = useState<number | null | undefined>(5); 
  const  [message, setMessage] = useState< {text: string }>({text: 'hello'}); //object
  
  setCount(null)
  setCount(undefined)

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLInputElement>(null);

  return (
    <div ref={divRef}>
        <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
};
