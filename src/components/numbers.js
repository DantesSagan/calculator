import React from 'react';

export default function NumbersNlogic({
  // action,
  // formula,
  // formula2,
  display,
  allClear,
  calculate,
  expression,
  setExpression,
  sqrt,
  percentage,
  minusOne,
}) {
  // const [b, setB] = useState(null);
  // const [a, setA] = useState('0');
  // const [action, setAction] = useState(null);

  // useEffect(() => {}, [action, a, b]);

  // const func = () => {
  //   var display;
  //   var a = Number(document.getElementById('expression').value);
  //   var b = Number(document.getElementById('formula2').value);
  //   switch (action) {
  //     case '0':
  //       a = 0;
  //       break;
  //     case '1':
  //       expression = 1;
  //       break;
  //     case '2':
  //       expression = 2;
  //       break;
  //     case '3':
  //       expression = 3;
  //       break;
  //     case '4':
  //       expression = 4;
  //       break;
  //     case '5':
  //       expression = 5;
  //       break;
  //     case '6':
  //       expression = 6;
  //       break;
  //     case '7':
  //       expression = 7;
  //       break;
  //     case '8':
  //       expression = 8;
  //       break;
  //     case '9':
  //       expression = 9;
  //       break;
  //     case '+':
  //       display = a + b;
  //       break;
  //     case '-':
  //       display = a - b;
  //       break;
  //     case '*':
  //       display = a * b;
  //       break;
  //     case '/':
  //       if (b) {
  //         math.evaluate = a / b;
  //       } else {
  //         display = 'бесконечность';
  //       }
  //       break;
  //     case '%':
  //       display = (a / 100) * b;
  //       break;
  //     case 'sqrt':
  //       display = Math.sqrt(a);
  //       break;
  //     case 'decimal':
  //       formula = '.';
  //       break;
  //     case 'clear':
  //       formula = 0;
  //       formula2 = 0;
  //       display = 0;
  //       break;
  //     default:
  //       display = 'Введите данные&&Выберите операцию';
  //   }
  //   document.getElementById('display').innerHTML = display;
  //   document.getElementById('formula').innerHTML = formula;
  //   document.getElementById('formula2').innerHTML = formula2;
  // };

  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='grid grid-cols-3 gap-4'>
        <button
          className='button col-span-3 bg-red-500 active:bg-red-700'
          id='clear'
          value='AC'
          onClick={allClear}
        >
          AC
        </button>

        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='seven'
          value='7'
          onClick={() => display('7')}
        >
          7
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='eight'
          value='8'
          onClick={() => display('8')}
        >
          8
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='nine'
          value='9'
          onClick={() => display('9')}
        >
          9
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='four'
          value='4'
          onClick={() => display('4')}
        >
          4
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='five'
          value='5'
          onClick={() => display('5')}
        >
          5
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='six'
          value='6'
          onClick={() => display('6')}
        >
          6
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='one'
          value='1'
          onClick={() => display('1')}
        >
          1
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='two'
          value='2'
          onClick={() => display('2')}
        >
          2
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='three'
          value='3'
          onClick={() => display('3')}
        >
          3
        </button>

        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='zero'
          value='0'
          onClick={() => display('0')}
        >
          0
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='zerozero'
          value='00'
          onClick={() => display('00')}
        >
          00
        </button>
        <button
          className='button bg-yellow-500 active:bg-yellow-600'
          id='decimal'
          value='.'
          onClick={() => display('.')}
        >
          .
        </button>
      </div>

      <div className='grid grid-col-1 gap-4'>
        <button
          className='buttonM '
          id='percentage'
          value='%'
          onClick={percentage}
        >
          %
        </button>
        <button className='buttonM' id='sqrt' value='sqrt' onClick={sqrt}>
          √
        </button>
        <button
          className='buttonM col-span-2'
          id='divide'
          value='/'
          onClick={() => display('/')}
        >
          /
        </button>
        <button
          className='buttonM col-span-2'
          id='multiply'
          value='*'
          onClick={() => display('*')}
        >
          *
        </button>

        <button
          className='buttonM col-span-2'
          id='subtract'
          value='-'
          onClick={() => display('-')}
        >
          -
        </button>
        <button
          className='buttonM col-span-2'
          id='add'
          value='+'
          onClick={() => display('+')}
        >
          +
        </button>
        <button
          className='buttonM bg-red-500 active:bg-red-700'
          id='c'
          value='c'
          onClick={minusOne}
        >
          C
        </button>
        <button
          className='buttonM col-span-3'
          id='equals'
          value='='
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
}
