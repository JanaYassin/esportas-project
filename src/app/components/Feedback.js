import React from 'react';
import './style.css';

function Feedback() {
  return (
    <div className="w-full mt-32 mb-32">
        <div className="grey-bg feedback-part">
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4 mt-24">Feedback From Our Customer</h1>
          <p className="text-[11px] text-center text-slate-400 mb-8">
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici
          </p>
          <table className='w-3/4 ml-8'>
            <tr>
            <td className='w-1/4 p-8'>
            <div className='flex items-center'>
            <span className='square-placeholder'></span>
            <div className='part1 ml-2'>
            <span className='text-[15px] font-semibold mb-1'>Micheal Deo</span><br />
            <span className='text-[11px] text-orange-500'>Sydney, Australia</span>
            </div>
            </div>
             <p className='part1 text-[14px] mt-8 text-slate-400'>
              Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem,Ut enim ad minima veniam, quis nost run exerci tationem.
             </p>
             </td>
             <td className='w-1/4 p-8'>
            <div className='flex items-center'>
            <span className='square-placeholder'></span>
            <div className='ml-2'>
            <span className='text-[15px] font-semibold mb-1'>Elina Deo</span><br />
            <span className='text-[11px] text-orange-500'>Sydney, Australia</span>
            </div>
            </div>
             <p className='text-[14px] mt-8 text-slate-400'>
              Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem,Ut enim ad minima veniam, quis nost run exerci tationem.
             </p>
             </td>
             <td className='w-1/4 p-8'>
            <div className='flex items-center'>
            <span className='square-placeholder'></span>
            <div className='ml-2'>
            <span className='text-[15px] font-semibold mb-1'>Williams Deo</span><br />
            <span className='text-[11px] text-orange-500'>Sydney, Australia</span>
            </div>
            </div>
             <p className='text-[14px] mt-8 text-slate-400'>
              Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem,Ut enim ad minima veniam, quis nost run exerci tationem.
             </p>
             </td>
            </tr>
            <tr>
              <td colSpan={3} >
            <div className='flex justify-center items-center'>
            <span className='orange-square mr-4 mb-24'></span>
            <span className='empty-square mr-4 mb-24'></span>
            <span className='orange-square mb-24'></span> 
            </div> 
            </td>
            </tr>
          </table>
          
          </div>
        </div>
      </div>

  );
}

export default Feedback;