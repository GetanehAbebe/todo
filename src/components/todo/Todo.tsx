import React from 'react'
import { TodoProps } from '../../interfaces/Todo';
const Todo: React.FC<TodoProps> = ({ description, title }) => {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <div>{description}</div>
      
    </div>
  );
};

export default Todo