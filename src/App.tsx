import React, { useState } from 'react';
import Input from './components/form/Input';
import { TodoProps } from './interfaces/Todo';
import Button from './components/form/Button';
import Todo from './components/todo/Todo';

import './App.css'
function App() {

  const [todos, setTodos] = useState<TodoProps[]>([])
  const [formState, setFormState] = useState<TodoProps>({
    title: '',
    description: '',
    status: 'todo'
  })
  const handleChange = (e: any) => {
    const name = e.target.name as keyof TodoProps
    formState[name] = e.target.value
    setFormState({ ...formState })

  }
  const handleSubmit = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault()
    setTodos([...todos, formState])
    setFormState({ title: '',
    description: '',
    status: 'todo'})

  }
  return (
    <div className="App">
      <form>
        <div>

          <label htmlFor="title">Title</label>
          <Input id="title" name="title" onChange={handleChange} value={formState.title} />
        </div>
        <div>

          <label htmlFor="description">Description</label>
          <Input id="description" name="description" onChange={handleChange} value={formState.description} />
        </div>

        <Button type="submit" name='Add' onClick={handleSubmit} value="Add" />


      </form>
      <header className="App-header">
        {todos.length ? <div>
          {todos.map(({ title, description, status }, index) => <Todo key={`${index}-${status}-${description}-${index}`} status={status} description={description} title={title} />)}

        </div> : null}

      </header>
    </div>
  );
}

export default App;
