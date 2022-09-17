import React, { useEffect, useState } from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'buy postcard', id: 1 },
    { text: 'buy scented candle', id: 2 },
    { text: 'go to post office', id: 3 },
  ]);

  const [count, setCount] = useState(0);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: todos.length + 1 }]);
  };

  useEffect(() => {
    console.log('use effect', todos);
  }, [todos]);

  useEffect(() => {
    console.log('count', count);
  }, [count]);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
      {/* <button onClick={addTodo}>Add Todo</button> */}
      <AddNewTodo addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Score: {count}</button>
    </div>
  );
};

export default TodoList;
