import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { addNewTodo, fetchTodos } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTask = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className='App'>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {status==='loading' && <h1>Loading</h1>}
      {error && <h1>Error: {error}</h1>}
      <TodoList />
    </div>
  );
}

export default App;
