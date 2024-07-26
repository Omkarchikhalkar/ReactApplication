import React, { useState } from 'react';
import { useSpeechRecognition } from '@readpanda/react-speech-kit';
import { Maximize, WidthFull } from '@mui/icons-material';

function NPMCustomHook() {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <div>
        <center><h1>Custom Hook - NPM</h1>
      <textarea style={{width: "95%"}}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤 Click me to listen 🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}</center>
    </div>
  );
}

export default NPMCustomHook;