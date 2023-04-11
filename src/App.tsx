import { HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import TodoList from './components/todoList';
import Pomodoro from './components/pomodoro';
import Counters from './components/counters';
import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import DailyComponentLandingPage from './components/dailyComponentLandingPage';
import DayOne from './components/daily/dayOne/searchBar';

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

interface Navbar {
  name: string;
  href: string;
  // icon: // add icons later
}

const navbar: Navbar[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Todo List App',
    href: '/#/todolist'
  },
  {
    name: 'Pomodoro',
    href: '/#/pomodoro'
  },
  {
    name: 'Counters',
    href: '/#/counters'
  },
  {
    name: 'Daily Component',
    href: '/#/dailycomponent'
  },
]

function App() {
  return (
    <div className="App">
      <Grid item xs={12}>
        <h1>Tim Landowski Portfolio</h1>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs="auto">
      <List>
          {navbar.map((navItem) => (
            <ListItem key={navItem.name} disablePadding>
              <ListItemButton href={navItem.href}>
                <ListItemText primary={navItem.name}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={9}>
        <HashRouter>
          <Routes>
            <Route path="/"/>
            <Route path="/todolist" element={<TodoList/>}/>
            <Route path="/pomodoro" element={<Pomodoro/>}/>
            <Route path="/counters" element={<Counters/>}/>
            <Route path="/dailycomponent" element={<DailyComponentLandingPage/>}/>
            <Route path="/dailycomponent/1" element={<DayOne/>}/>
          </Routes>
        </HashRouter>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
