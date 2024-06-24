import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login.tsx';
import TodoList from './TodoList.tsx';

const App: React.FC = () => {
  console.log('app');
  return (
    <>
      <Login/ >
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/todolist" element={<TodoList/>} />
      </Routes>
    </>
  );
}

export default App;
