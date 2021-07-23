import React from 'react';

export default function NumbersNlogic({ action, formula, formula2 }) {
  const func = () => {
    var display;
    var num1 = Number(document.getElementById('formula').value);
    var num2 = Number(document.getElementById('formula2').value);
    switch (action) {
      case '0':
        formula = 0;
        formula2 = 0;
        break;
      case '1':
        formula = 1;
        formula2 = 1;
        break;
      case '2':
        formula = 2;
        formula2 = 2;
        break;
      case '3':
        formula = 3;
        formula2 = 3;
        break;
      case '4':
        formula = 4;
        formula2 = 4;
        break;
      case '5':
        formula = 5;
        formula2 = 5;
        break;
      case '6':
        formula = 6;
        formula2 = 6;
        break;
      case '7':
        formula = 7;
        formula2 = 7;
        break;
      case '8':
        formula = 8;
        formula2 = 8;
        break;
      case '9':
        formula = 9;
        formula2 = 9;
        break;
      case '+':
        formula2 = '+';
        display = num1 + num2;
        break;
      case '-':
        display = num1 - num2;
        break;
      case '*':
        display = num1 * num2;
        break;
      case '/':
        if (num2) {
          display = num1 / num2;
        } else {
          display = 'бесконечность';
        }
        break;
      case '%':
        display = (num1 / 100) * num2;
        break;
      case 'sqrt':
        display = Math.sqrt(num1);
        break;
      case 'decimal':
        formula = '.';
        break;
      case 'clear':
        formula = 0;
        formula2 = 0;
        display = 0;
        break;
      default:
        display = 'Введите данные&&Выберите операцию';
    }
    document.getElementById('display').innerHTML = display;
    document.getElementById('formula').innerHTML = formula;
    document.getElementById('formula2').innerHTML = formula2;
  };
  var number2 = 1234.56789; // floating point example
  number2.toLocaleString(undefined, { maximumFractionDigits: 2 }); // "1,234.57"
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='grid grid-cols-3 gap-4'>
        <button
          className='col-span-2'
          id='clear'
          value='AC'
          onClick={() => func((action = 'clear'))}
        >
          AC
        </button>
        <button
          className=''
          id='one'
          value='1'
          onClick={() => func((action = '1'))}
        >
          1
        </button>
        <button
          className=''
          id='two'
          value='2'
          onClick={() => func((action = '2'))}
        >
          2
        </button>
        <button
          className=''
          id='three'
          value='3'
          onClick={() => func((action = '3'))}
        >
          3
        </button>
        <button
          className=''
          id='four'
          value='4'
          onClick={() => func((action = '4'))}
        >
          4
        </button>
        <button
          className=''
          id='five'
          value='5'
          onClick={() => func((action = '5'))}
        >
          5
        </button>
        <button
          className=''
          id='six'
          value='6'
          onClick={() => func((action = '6'))}
        >
          6
        </button>
        <button
          className=''
          id='seven'
          value='7'
          onClick={() => func((action = '7'))}
        >
          7
        </button>
        <button
          className=''
          id='eight'
          value='8'
          onClick={() => func((action = '8'))}
        >
          8
        </button>
        <button
          className=''
          id='nine'
          value='9'
          onClick={() => func((action = '9'))}
        >
          9
        </button>
        <button
          className=''
          id='zero'
          value='0'
          onClick={() => func((action = '0'))}
        >
          0
        </button>
        <button
          className=''
          id='zerozero'
          value='00'
          onClick={() => func((action = '00'))}
        >
          00
        </button>
        <button
          className=''
          id='decimal'
          value='.'
          onClick={() => func((action = '.'))}
        >
          .
        </button>
      </div>

      <div className='grid grid-col-1 gap-4'>
        <button
          className=''
          id='percentage'
          value='%'
          onClick={() => (action = '%')}
        >
          %
        </button>
        <button
          className=''
          id='sqrt'
          value='sqrt'
          onClick={() => (action = 'sqrt')}
        >
          \sqrt
        </button>
        <button
          className=''
          id='divide'
          value='/'
          onClick={() => (action = '/')}
        >
          /
        </button>
        <button
          className='...'
          id='multiply'
          value='*'
          onClick={() => (action = '*')}
        >
          *
        </button>
        <button
          className='...'
          id='subtract'
          value='-'
          onClick={() => (action = '-')}
        >
          -
        </button>
        <button
          className='...'
          id='add'
          value='+'
          onClick={() => (action = '+')}
        >
          +
        </button>
        <button
          className='...'
          id='equals'
          value='='
          onClick={() => func((action = '='))}
        >
          =
        </button>
      </div>
    </div>
  );
}
