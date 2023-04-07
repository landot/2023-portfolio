import React from 'react';
import {useState, useEffect} from 'react';
import ding from './../assets/ding';
// TODO: fix later
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pomodoroSvg: string = require('./../assets/tomato.svg').default;

export default function Pomodoro() {
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [running, setRunning] = useState(false);
    const [settings, setSettings] = useState({
        // shortBreakSeconds: 5 * 60,
        // longBreakSeconds: 15 * 60,
        // focusSeconds: 25 * 60,
        // numbers for testings
        shortBreakSeconds: 1,
        longBreakSeconds: 3,
        focusSeconds: 5,
    })
    const [updatedSettings, setUpdatedSettings] = useState({
        shortBreakSeconds: 5 * 60,
        longBreakSeconds: 15 * 60,
        focusSeconds: 25 * 60,
    })

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (running) {
          interval = setInterval(() => {
            setTimeLeft((prevTimer) => {
                if (prevTimer === 0) {
                    timerDone();
                    return 0
                }
                return prevTimer - 1;
            });
          }, 1000);
        }
        return () => {
          clearInterval(interval);
        };
      }, [running]);


    function onUpdate() {
        setSettings(updatedSettings)
        setTimeLeft(updatedSettings.focusSeconds)
    }

    function onStart() {
        setRunning(true);
        if (!timeLeft) {
            setTimeLeft(settings.focusSeconds)
        }
    }

    function onPause() {
        setRunning(false);
    }

    function onRestart() {
        setRunning(false);
        setTimeLeft(settings.focusSeconds);
    }

    function timerDone() {
        setRunning(false);
        ding.play();
    }

    function onShortBreak() {
        setRunning(true);
        setTimeLeft(settings.shortBreakSeconds);
    }

    function onLongBreak() {
        setRunning(true);
        setTimeLeft(settings.longBreakSeconds);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, setting: string) {
        setUpdatedSettings({ ...updatedSettings, [setting]: parseInt(e.target.value) * 60 });
    }

    function getTimeLeft() {
        if (timeLeft > 0) {
            const minutes = Math.floor(timeLeft / 60);
            const minutesText = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
            const seconds = timeLeft % 60;
            const secondsText = seconds < 10 ? '0' + seconds.toString(): seconds.toString();
            return `${minutesText}:${secondsText}`;
        } else {
            return '00:00';
        }
    }

    function getPlaceholder(seconds: number): string {
        return Math.floor((seconds / 60)).toString()
    }

    return (
        <div>
            <h1>Pomodoro</h1>
            <img src={pomodoroSvg} alt="tomato image" width="200" height="150"></img>
            <div>
                <p>How many minutes do you want to focus for?</p>
                <input type="text" placeholder={getPlaceholder(settings.focusSeconds)} onChange={(e) => handleInputChange(e, 'focusSeconds')}></input>
                <p>How long do you want your short break?</p>
                <input type="text" placeholder={getPlaceholder(settings.shortBreakSeconds)} onChange={(e) => handleInputChange(e, 'shortBreakSeconds')}></input>
                <p>How long do you want your long break?</p>
                <input type="text" placeholder={getPlaceholder(settings.longBreakSeconds)} onChange={(e) => handleInputChange(e, 'longBreakSeconds')}></input>
            </div>
            <button onClick={onUpdate}>update</button>
            <div>
                <button onClick={onStart}>START</button>
                <button onClick={onPause}>PAUSE</button>
                <button onClick={onRestart}>RESTART</button>
            </div>
            <div>
                <button onClick={onShortBreak}>SHORT BREAK</button>
                <button onClick={onLongBreak}>LONG BREAK</button>
            </div>
            <h1>{`time left: ${getTimeLeft()}`}</h1>
        </div>
    )

}