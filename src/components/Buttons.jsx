import React from 'react';

export default function Buttons({
  handleNumBtnClick,
  handleOperationBtnClick,
  handleEqualBtnClick,
  handleDelBtnClick,
  handleClearBtnClick,
  handleChangeSignBtnClick,
  handleDotBtnClick,
}) {
  return (
    <div className="buttons">
      <div className="btnsLineWrapper">
        <button onClick={handleOperationBtnClick} className="btn bg-gray-300">
          %
        </button>
        <button onClick={handleClearBtnClick} className="btn bg-rose-200">
          CE
        </button>
        <button onClick={handleClearBtnClick} className="btn bg-rose-300">
          C
        </button>
        <button onClick={handleDelBtnClick} className="btn bg-yellow-400">
          DEL
        </button>
      </div>

      <div className="btnsLineWrapper">
        <button onClick={handleOperationBtnClick} className="btn bg-gray-300">
          1/X
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-gray-300">
          x<sup>2</sup>
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-gray-300">
          <span className="text-sm">2</span>
          <sub>&radic;</sub>
          <sub>x</sub>
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-indigo-200">
          /
        </button>
      </div>

      <div className="btnsLineWrapper">
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          7
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          8
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          9
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-indigo-200">
          X
        </button>
      </div>

      <div className="btnsLineWrapper">
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          4
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          5
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          6
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-indigo-200">
          -
        </button>
      </div>

      <div className="btnsLineWrapper">
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          1
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          2
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          3
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-indigo-200">
          +
        </button>
      </div>

      <div className="btnsLineWrapper">
        <button onClick={handleChangeSignBtnClick} className="btn bg-zinc-400">
          +/-
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-gray-500"
        >
          0
        </button>
        <button onClick={handleDotBtnClick} className="btn bg-violet-300">
          .
        </button>
        <button
          onClick={handleEqualBtnClick}
          className="btn text-white bg-green-600"
        >
          =
        </button>
      </div>
    </div>
  );
}
