import React from 'react';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div>
      <TextField 
        text='Hello' 
        ok={true} 
        int={2} 
        obj={{field1: 'London'}}
        person={{firstName: 'Jane', lastName: 'Doe'}}
        handleChange={e => {
          // code
        }}

      />
    </div>
  )
}

export default App;
