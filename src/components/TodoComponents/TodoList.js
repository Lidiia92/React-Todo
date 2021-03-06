// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  let todos = props.todoList; 

  return (
    <div>
        {
            todos.map(todo => {

                return <Todo key={todo.id} todoData={todo} changeStyle={props.changeStyle}/>
            })
        }
    </div>
  );
};

export default TodoList;
