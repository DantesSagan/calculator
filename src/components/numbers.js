export default function NumbersNlogic({ op, result, setRecording }) {
  const func = () => {
    var result;
    var num1 = (document.getElementById('one').value);
    var num2 = (document.getElementById('two').value);
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result = 'бесконечность';
        }
        break;
      default:
        result = 'Введите данные&&Выберите операцию';
    }
    document.getElementById('result').innerHTML = result;
  };
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='grid grid-cols-3 gap-4'>
        <button className='col-span-2' id='clear' value='AC'>
          AC
        </button>

        <button id='one' value='1'>
          1
        </button>
        <button id='two' value='2'>
          2
        </button>
        <button id='three' value='3'>
          3
        </button>
        <button id='four' value='4'>
          4
        </button>
        <button id='five' value='5'>
          5
        </button>
        <button id='six' value='6'>
          6
        </button>
        <button id='seven' value='7'>
          7
        </button>
        <button id='eight' value='8'>
          8
        </button>
        <button id='nine' value='9'>
          9
        </button>
        <button className='' id='zero' value='0'>
          0
        </button>
        <button className='' id='decimal' value='.' onClick={(op = ' . ')}>
          .
        </button>
      </div>
      <div className='grid grid-col-1 gap-4'>
        <button className='' id='divide' value='/' onClick={(op = ' / ')}>
          /
        </button>
        <button className='...' id='multiply' value='*' onClick={(op = ' * ')}>
          *
        </button>
        <button className='...' id='subtract' value='-' onClick={(op = ' - ')}>
          -
        </button>
        <button className='...' id='add' value='+' onClick={(op = ' + ')}>
          +
        </button>
        <button className='...' id='equals' value='=' onClick={func()}>
          =
        </button>
      </div>
    </div>
  );
}
