import { useState, useEffect } from "react";

export default function Timer(){
    // const [time, setTime] = useState(0);
    // const [start] = useState(true);
    // //removed setStart
    // // const [start, setStart] = useState(false)
    // useEffect(() => {
    //     let useDelayStart = true;
    //     let interval = null;
    //     let delayedStart = 1000;
    //     let start = true;
    //     function timeout() {
    //     if(start){
    //         interval = setInterval(() => {
    //             setTime(prevTime => prevTime + 10)
    //         }, 10)

    //     return () => clearInterval(interval)}
    //     }
    //     // don't start timer right away, so set a delay here
    //     setTimeout(timeout, delayedStart);
    //     // if(useDelayStart){
    //     //     setTimeout(timeout, delayedStart);
    //     //     useDelayStart = false;
    //     // }
    // }, [start])
    const [time, setTimer] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
        setTimer((prev) => prev + 1)
        }, 1000)
        return () => {
        clearInterval(id)
        }
    }, [])
    //console.log(time);
    // whenever the game ends, just return the time
    //let finalTime = String(("0" + Math.floor((time/60000) % 60)).slice(-2)) + ":" + String(("0" + Math.floor((time/1000) % 60)).slice(-2)) + ":" + String(("0" + (time/10) % 1000).slice(-2));
    let finalTime = String(("0" + Math.floor((time % 3600) / 60)).slice(-2)) + ":" + String(("0" + time % 60).slice(-2))
    return (
        <div className="Timer">
            <h1 id="time">
                {/* <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}</span> */}
                {/* <span>{("0" + (time/10) % 1000).slice(-2)}</span>
                {/* <span>{time}</span> */}
                <span>{("0" + Math.floor((time % 3600) / 60)).slice(-2)}:</span>
                 <span>{("0" + time % 60).slice(-2)}</span>
            </h1>
        </div>
    );
}