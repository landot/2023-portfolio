import React, { useState } from 'react';

const initialList = [
    {id: 0, text: 'This is my first default todo'},
    {id: 1, text: 'This is my second default todo'},
    {id: 2, text: 'This is my third default todo'},
]

export default function TodoList() {
    const [todoList, setTodoList] = useState(initialList);
    const [newNoteText, setNewNoteText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function onSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if (newNoteText.trim() === '') {
            setErrorMessage('Please enter some text!');
          return;
        }
        setTodoList([
            ...todoList,
            // use Date.now() to get a distinct id
            // there was a previous issue by setting id equal to todoList.length due to scenarios like:
            // add 1 new todo (id=3), delete todo with id=2, add another new todo (also id=3)
            { id: Date.now(), text: newNoteText }
        ])
        setErrorMessage('');
        setNewNoteText('');
    }

    function onTextboxUpdate(e: React.SyntheticEvent) {
        setNewNoteText((e.target as HTMLInputElement).value);
    }

    return (
    <div style={{border: '1px solid rgba(255,255,255, 0.9)'}}>
        <h2>Todo List</h2> 
        <div>
            <input onChange={onTextboxUpdate} value={newNoteText}></input>
            <button onClick={onSubmit}>Submit</button>
            {errorMessage && <span style={{ color: 'red', display: 'flex', fontSize: '12px' }}>{errorMessage}</span>}
            <ul style={{listStyle: "none"}}>
                {todoList.map(todo => {
                    return (
                    <li style={{textAlign: "left"}}>
                        <input key={todo.id} type="checkbox" onClick={() => {
                            setTodoList(
                                todoList.filter(a =>
                                    a.id !== todo.id
                                )
                            )}}
                        >
                        </input>
                        <label>{todo.text}</label>
                    </li>
                    ) 
                })}
            </ul>
        </div>
    </div>
    )
}