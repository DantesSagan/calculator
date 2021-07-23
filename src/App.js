import NumbersNlogic from './components/numbers';
import React from 'react';

// const numbers = [
//   {
//     id: 'one',
//     value: 1,
//   },
//   {
//     id: 'two',
//     value: 2,
//   },
//   {
//     id: 'three',
//     value: 3,
//   },
//   {
//     id: 'four',
//     value: 4,
//   },
//   {
//     id: 'five',
//     value: 5,
//   },
//   {
//     id: 'six',
//     value: 6,
//   },
//   {
//     id: 'seven',
//     value: 7,
//   },
//   {
//     id: 'eight',
//     value: 8,
//   },
//   {
//     id: 'nine',
//     value: 9,
//   },
//   {
//     id: 'zero',
//     value: 0,
//   },
// ];

export default function App({ op, display, formula, action, func }) {
  // const [recording, setRecording] = React.useState('');

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden d-flex p-4 mt-44'>
      <div
        className='p-4'
        id='formula'
      ></div>
      <div
        className='p-4'
        id='formula2'
      ></div>
      <div className='p-4' id='display'>
        Result:
      </div>
      {/* Output {recording} */}
      {/* {numbers.map((numberObj) => ( */}
      <NumbersNlogic display={display} action={action} formula={formula} />
      {/* // setRecording={setRecording} */}
      {/* ))} */}
    </div>
  );
}
