import { useRef, useState } from 'react';


function UserefHook() {
    let ref = useRef(0);

    function handleClick() {
      ref.current = ref.current + 1;
      alert('You clicked ' + ref.current + ' times!');
    }
   
    return (
      <div>
        {console.log("render")}
        <center>
        <h1>React Hooks - useRef</h1>
      </center>
      <p style={{borderBottom: "3px solid white" }}>
      <p>You clicked  {ref.current}  times!</p>
      <button onClick={handleClick}>
        Click me! 
      </button>
      
      </p>
      <br/>
      <Form/>
      <p style={{borderBottom: "3px solid white" }}></p>
      <Stopwatch/>
      </div>
    );
}

export default UserefHook;


export function Form() {
    const inputRef = useRef(null);
  
    function handleClick() {
      inputRef.current.focus();
    }
  
    return (
      <>
        <p>Text box to be focused : <input ref={inputRef} /></p>
        <button onClick={handleClick}>
          Focus the input
        </button>
        
      </>
    );
  }



  

export function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h3>Time passed: {secondsPassed.toFixed(3)}</h3>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}
