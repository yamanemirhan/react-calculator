import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';

export default function App() {
  const [operation, setOperation] = useState('');
  const [previousNum, setPreviousNum] = useState('');
  const [currentNum, setCurrentNum] = useState('0');

  const handleNumBtnClick = (e) => {
    let val = e.target.innerText.toString();
    if (currentNum.length < 13) {
      if (currentNum == '0') {
        setCurrentNum(() => val);
      } else {
        setCurrentNum((prev) => prev.toString() + val);
      }
    }
  };

  const handleOperationBtnClick = (e) => {
    if (e.target.parentElement.nodeName == 'BUTTON') {
      setOperation(e.target.parentElement.innerText.toString());
    } else {
      setOperation(e.target.innerText.toString());
    }

    if (previousNum == '') setPreviousNum(currentNum);
    if (operation == '') setCurrentNum('0');
  };

  const handleEqualBtnClick = async (e) => {
    let ans;
    let previousNumber = parseFloat(previousNum);
    let currentNumber = parseFloat(currentNum);
    if (operation == '+') {
      ans = parseFloat(previousNumber + currentNumber);
    }
    if (operation == '-') {
      ans = parseFloat(previousNumber - currentNumber);
    }
    if (operation == 'X') {
      ans = parseFloat(previousNumber * currentNumber);
    }
    if (operation == '/') {
      ans = parseFloat(previousNumber / currentNumber);
    }
    if (operation == '2√x') {
      ans = parseFloat(Math.sqrt(previousNumber));
    }
    if (operation == 'x2') {
      ans = parseFloat(Math.pow(previousNumber, 2));
    }
    if (operation == '1/X') {
      ans = parseFloat(1 / previousNumber);
    }
    if (operation == '%') {
      ans = parseFloat(previousNumber % currentNumber);
    }

    setOperation('');
    setPreviousNum('');

    if (ans.toString() == 'NaN' || ans.toString() == 'Infinity') {
      setCurrentNum('ERROR');

      const elements = [...document.getElementsByClassName('btn')];
      elements.forEach((element) => {
        element.disabled = true;
      });

      await timeout(1000);

      elements.forEach((element) => {
        element.disabled = false;
      });
      ans = '0';
    }

    if (previousNum != '') setCurrentNum(ans.toString());
  };

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleDelBtnClick = (e) => {
    if (currentNum == '0') {
      return;
    }
    if (currentNum.length == 1) {
      setCurrentNum('0');
    } else {
      setCurrentNum((prev) => prev.slice(0, -1));
    }
  };

  const handleClearBtnClick = (e) => {
    if (e.target.innerText == 'CE') {
      setCurrentNum('0');
    } else {
      setPreviousNum('');
      setCurrentNum('0');
      setOperation('');
    }
  };

  const handleChangeSignBtnClick = (e) => {
    setCurrentNum((prev) => prev * -1);
    setCurrentNum((prev) => prev.toString());
  };

  const handleDotBtnClick = (e) => {
    if (currentNum == '') return;
    if (!currentNum.includes('.'))
      setCurrentNum((prev) => prev.toString() + '.');
  };

  return (
    <div className="bg-red-200 flex justify-center items-center min-h-screen text-lg font-semibold">
      <div className="bg-blue-200 max-w-lg overflow-hidden container flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-black">
        <h1 className="font-bold text-3xl p-2">CALCULATOR</h1>
        <Display
          previousNum={previousNum}
          currentNum={currentNum}
          operation={operation}
        />
        <Buttons
          handleNumBtnClick={handleNumBtnClick}
          handleOperationBtnClick={handleOperationBtnClick}
          handleEqualBtnClick={handleEqualBtnClick}
          handleDelBtnClick={handleDelBtnClick}
          handleClearBtnClick={handleClearBtnClick}
          handleChangeSignBtnClick={handleChangeSignBtnClick}
          handleDotBtnClick={handleDotBtnClick}
        />
      </div>
    </div>
  );
}
