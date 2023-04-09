import { HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import TodoList from './components/todoList';
import Pomodoro from './components/pomodoro';
import Counters from './components/counters';


/*
TODO
  - DONE: add ding noise to pomodoro app https://cdn.freesound.org/previews/611/611111_1629501-lq.mp3
  - DONE: clean up crappy apps
  - DONE: convert to typescript
  - use https://mui.com/ components and make pretty
  - DONE: add linting
  - add RTL tests (update unit tests)
  - add storybook tests
  - add e2e tests
  - publish to github profile
  - create static website
  - new page: Indeed Job search
  - new page: employer dashboard
  - new page: twitter
*/


function About() {
  return <h2>About</h2>;
}


function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <nav>
        <ul style={{listStyle: "none"}}>
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About</a></li>
          <li><a href="/#/todolist">Todo List App</a></li>
          <li><a href="/#/pomodoro">Pomodoro</a></li>
          <li><a href="/#/counters">Counters</a></li>
        </ul>
      </nav>
      <HashRouter>
        <Routes>
          <Route path="/"/>
          <Route path="/about" element={<About/>}/>
          <Route path="/todolist" element={<TodoList/>}/>
          <Route path="/pomodoro" element={<Pomodoro/>}/>
          <Route path="/counters" element={<Counters/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
