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
    <div className="bg-slate-200 grid grid-rows-6 items-center space-y-1 my-2 py-1 w-full">
      <div className="flex justify-between gap-2 px-2 text-center">
        <button onClick={handleOperationBtnClick} className="btn bg-slate-400">
          %
        </button>
        <button onClick={handleClearBtnClick} className="btn bg-rose-400">
          CE
        </button>
        <button onClick={handleClearBtnClick} className="btn bg-red-400">
          C
        </button>
        <button onClick={handleDelBtnClick} className="btn bg-yellow-200">
          DEL
        </button>
      </div>

      <div className="flex justify-between gap-2 px-2 text-center">
        <button onClick={handleOperationBtnClick} className="btn bg-slate-400">
          1/X
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-slate-400">
          x<sup>2</sup>
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-slate-400">
          <span className="text-sm">2</span>
          <sub>&radic;</sub>
          <sub>x</sub>
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-blue-300">
          /
        </button>
      </div>

      <div className="flex justify-between gap-2 px-2 text-center">
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          7
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          8
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          9
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-blue-300">
          X
        </button>
      </div>

      <div className="flex justify-between gap-2 px-2 text-center">
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          4
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          5
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          6
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-blue-300">
          -
        </button>
      </div>

      <div className="flex justify-between gap-2 px-2 text-center">
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          1
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          2
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          3
        </button>
        <button onClick={handleOperationBtnClick} className="btn bg-blue-300">
          +
        </button>
      </div>

      <div className="flex justify-between gap-2 px-2 text-center">
        <button onClick={handleChangeSignBtnClick} className="btn bg-zinc-400">
          +/-
        </button>
        <button
          onClick={handleNumBtnClick}
          className="btn text-white bg-teal-600"
        >
          0
        </button>
        <button onClick={handleDotBtnClick} className="btn bg-violet-400">
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
