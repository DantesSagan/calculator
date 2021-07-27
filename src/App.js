/* eslint-disable no-useless-escape */
import NumbersNlogic from './components/numbers';
import * as math from 'mathjs';
import React from 'react';

// const numbers = [
//   {
//     keyCode: 97,
//     keyid: 'Numpad1',
//   },
//   {
//     keyCode: 98,
//     keyid: 'Numpad2',
//   },
//   {
//     keyCode: 99,
//     keyid: 'Numpad3',
//   },
//   {
//     keyCode: 100,
//     keyid: 'Numpad4',
//   },
//   {
//     keyCode: 101,
//     keyid: 'Numpad5',
//   },
//   {
//     keyCode: 102,
//     keyid: 'Numpad6',
//   },
//   {
//     keyCode: 103,
//     keyid: 'Numpad7',
//   },
//   {
//     keyCode: 104,
//     keyid: 'Numpad8',
//   },
//   {
//     keyCode: 105,
//     keyid: 'Numpad9',
//   },
//   {
//     keyCode: 96,
//     keyid: 'Numpad0',
//   },
// ];

export default function App({ formula, formula2, action }) {
  // const [recording, setRecording] = React.useState('');

  const [expression, setExpression] = React.useState('');
  const [answer, setAnswer] = React.useState(expression);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === '=') {
      if (/[A-Za-z0-9.]/g.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
      if (/[\.]/g.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol)
          .replace(/^[0-9]+/g, '')
          .replace(/[\.]+/g, '.');
      }
    }
    setAnswer(() => symbol);
    if (expression[expression.length - 1] === '=') {
      if (/[0-9.]/g.test(symbol)) {
        setAnswer(symbol);
      } else {
        setAnswer(answer + symbol);
      }
      if (/[\.]/g.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol)
          .replace(/^[0-9]+/g, '')
          .replace(/[\.]+/g, '.');
      }
    }
  };
  function clear() {
    setExpression('');
    setAnswer(0);
  }
  function minusOne() {
    setExpression((minus) => {
      minus = minus + '';
      return minus
        .split('')
        .slice(0, minus.length - 1)
        .join('');
    });
  }
  function calculate() {
    if (expression) {
      setAnswer(math.evaluate(expression));
      setExpression(math.evaluate(expression));
    } else {
      setAnswer('Plese enter expression ;)');
    }
  }
  function sqrt() {
    setAnswer(math.sqrt(expression));
  }
  function percentage() {
    var percentage = (expression / 100) * expression;
    setAnswer(percentage);
  }
  return (
    <div
      className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden d-flex p-4 mt-44'
      id='main'
    >
      <div className='output grid grid-col-1 bg-black bg-opacity-60'>
        <input
          value={expression}
          className='p-4 font-bold'
          id='expression'
          disabled
        />
        <input value={answer} className='p-4 font-bold' id='display' disabled />
      </div>
      {/* Output {recording} */}
      {/* {numbers.map((numberObj) => ( */}
      <NumbersNlogic
        minusOne={minusOne}
        percentage={percentage}
        sqrt={sqrt}
        calculate={calculate}
        clear={clear}
        display={display}
        action={action}
        formula={formula}
        formula2={formula2}
      />
      {/* // setRecording={setRecording} */}
      {/* ))} */}
    </div>
  );
}
