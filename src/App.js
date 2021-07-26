import NumbersNlogic from './components/numbers';
import * as math from 'mathjs';
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

export default function App({ formula, formula2, action }) {
  // const [recording, setRecording] = React.useState('');

  const [expression, setExpression] = React.useState('');
  const [answer, setAnswer] = React.useState(expression);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === '=') {
      if (/[A-Za-z1-9.]/g.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };
  function clear() {
    setExpression('');
    setAnswer(0);
  }
  function minusOne() {
    setExpression(() => expression.substring(1));
    setAnswer(() => expression.substring(1));
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
        <input value={expression} className='p-4 font-bold' id='expression' disabled />
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
