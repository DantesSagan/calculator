import NumbersNlogic from './components/numbers';
import React from 'react';

export default function App() {
  const [recording, setRecording] = React.useState('');
 
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden d-flex p-4 mt-44'>
      <div className='output' id='display'>
        Output {recording}
      </div>
      <NumbersNlogic  setRecording={setRecording} />
    </div>
  );
}
