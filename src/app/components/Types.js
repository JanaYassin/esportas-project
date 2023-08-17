import React from 'react';
import './style.css';

function Types() {
  return (
    <div className="types bg-white flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold mb-4">Different Colours & Different Choice</h1>
    <p className="text-[15px] text-center text-slate-400 mb-8">
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici
    </p>
    <table className='ml-24'>
      <tr>
        <td><div className='headphone-placeholder1 '></div></td>
        <td><div className='headphone-placeholder2 '></div></td>
        <td><div className='headphone-placeholder1 '></div></td>
      </tr>
    </table>
    </div>
  );
}

export default Types;