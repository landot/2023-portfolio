import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

export default function DayOne() {
    const [text, setText] = useState('');
    const [showResults, setShowResults] = useState('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.currentTarget.value);
    }

    function handleCancelClick() {
        setText('');
    }

    function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            setShowResults(text);
        }
    }

    return (
        <div style={{outlineColor: '#00FF00', padding:'40px'}}>
            <h1>Day 1: Google</h1>
            <div id='searchWrapper' style={{backgroundColor: '#808080', borderRadius: '24px'}}>
                <SearchIcon style={{display: 'inline', alignContent: 'center', verticalAlign: 'middle'}}/>
                <input 
                    className="searchInput" 
                    style={{width: '70%', paddingRight: '10px', padding: '10px', border: 'none', backgroundColor: '#808080'}} 
                    id='search' 
                    placeholder='Search Google or type a URL' 
                    value={text}
                    onChange={handleInputChange}
                    onKeyDown={handleEnter}
                />
                <CancelIcon
                    style={{display: 'inline', alignContent: 'center', verticalAlign: 'middle'}}
                    onClick={handleCancelClick}
                />
            </div>
            {showResults && <span>Showing results for: {showResults}</span>}
        </div>
    )
}