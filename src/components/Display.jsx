import React from 'react';

export default function Display({ previousNum, currentNum, operation }) {
  return (
    <div className="display">
      <div className="flex justify-end gap-1 text-lg text-gray-600">
        <span>
          {operation != '2√x' &&
            operation != 'x2' &&
            operation != '1/X' &&
            previousNum}
        </span>

        {operation == '2√x' ? (
          <>
            <span className="text-base">
              2<sub className="text-lg">&radic;</sub>
              <sub className="text-lg">{previousNum}</sub>
            </span>
          </>
        ) : operation == 'x2' ? (
          <>
            {previousNum}
            <sup className="text-lg">2</sup>
          </>
        ) : operation == '1/X' ? (
          <span>1/{previousNum}</span>
        ) : (
          operation
        )}
      </div>

      {/* SHOW ANSWER */}
      {currentNum == 'ERROR' ? (
        <span className="text-red-500">{currentNum}</span>
      ) : (
        <span>{currentNum}</span>
      )}
    </div>
  );
}
