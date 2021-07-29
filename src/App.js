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

  // display  with expression and answer
  const display = (symbol) => {
    setExpression((prevValue) => {
      if (
        /[+*-/]/.test(symbol) &&
        /[+*-/]/.test(prevValue[prevValue.length - 1])
      ) {
        let newValue;
        if (/[-]/.test(symbol)) {
          newValue = prevValue.slice(0, prevValue.length) + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + symbol;
        }

        setExpression(newValue);
      } else {
        if (prevValue) {
          prevValue = prevValue + '';
          let valArr = prevValue.split(/[+/*-]/g);
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === '.') {
            console.log('symbol = empty ');
            symbol = '';
          }
        }

        setExpression(
          (prevValue + symbol).replace(/^0/g, '').replace(/\.+/g, '.')
        );
      }
    });

    setAnswer((prevValue) =>
      (prevValue + symbol).replace(/^0/g, '').replace(/\.+/g, '.')
    );
    if (answer[answer.length - 1] === '') {
      if (/0-9.]/g.test(symbol)) {
        setAnswer(symbol);
      } else {
        setAnswer(answer + symbol)
          .replace(/^0/g, '')
          .replace(/\.+/g, '.');
      }
    }
  };
  // allClear
  function allClear() {
    setExpression('');
    setAnswer(0);
  }
  // minusOne operand by right side
  function minusOne() {
    setExpression((minus) => {
      minus = minus + '';
      return minus
        .split('')
        .slice(0, minus.length - 1)
        .join('');
    });
  }
  // calculate with adds
  function calculate() {
    if (expression) {
      setAnswer(math.evaluate(expression));
      setExpression(math.evaluate(expression));
    } else {
      alert('Please enter expression ;)');
    }
  }
  // sqrt operand
  function sqrt() {
    setAnswer(math.sqrt(expression));
  }
  // percentage operand
  function percentage() {
    var percentage = expression / 100;
    setExpression(percentage);
    setAnswer(percentage);
  }
  return (
    <div
      className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden d-flex p-4 mt-44'
      id='main'
    >
      <div className='output grid grid-col-1 bg-black bg-opacity-60'>
        <input
          placeholder='0'
          value={expression}
          className='p-4 font-bold'
          id='expression'
          disabled
        />
        <input
          placeholder='0'
          value={answer}
          className='p-4 font-bold'
          id='display'
          disabled
        />
      </div>
      {/* Output {recording} */}
      {/* {numbers.map((numberObj) => ( */}
      <NumbersNlogic
        minusOne={minusOne}
        percentage={percentage}
        sqrt={sqrt}
        calculate={calculate}
        allClear={allClear}
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
