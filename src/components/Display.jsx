import React from 'react';

export default function Display({ previousNum, currentNum, operation }) {
  return (
    <div className="bg-green-300 flex flex-col w-full text-2xl text-end p-5">
      <div className="flex justify-end gap-1 text-base text-gray-600">
        <span>{previousNum}</span>
        <span>{operation}</span>
      </div>
      {currentNum == 'ERROR' ? (
        <span className="text-red-500">{currentNum}</span>
      ) : (
        <span>{currentNum}</span>
      )}
    </div>
  );
}
