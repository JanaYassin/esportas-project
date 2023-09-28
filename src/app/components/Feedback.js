import React from 'react';
import Image from 'next/image';
import './style.css';

function Feedback() {
  return (
    <div className="w-full mt-32 mb-32">
        <div className="grey-bg feedback-part">
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4 mt-24 text-black">Feedback From Our Customer</h1>
          <p className="text-[11px] text-center text-slate-400 mb-8">
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici
          </p>
          <table className='w-3/4 ml-8'>
            <tr>
            <td className='w-1/4 p-8'>
            <div className='flex items-center'>
            <span >
            <Image
              src="/images/SquarePlaceHolder.png"
              alt="box"
              width={45}
              height={35}/>
            </span>
            <div className='part1 ml-2'>
            <span className='text-[15px] font-semibold mb-1 text-black'>Micheal Deo</span><br />
            <span className='text-[11px] text-orange-500'>Sydney, Australia</span>
            </div>
            </div>
             <p className='part1 text-[14px] mt-8 text-slate-400'>
              Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem,Ut enim ad minima veniam, quis nost run exerci tationem.
             </p>
             </td>
             <td className='w-1/4 p-8'>
            <div className='flex items-center'>
            <span >
            <Image
              src="/images/SquarePlaceHolder.png"
              alt="box"
              width={45}
              height={35}/>
            </span>
            <div className='ml-2'>
            <span className='text-[15px] font-semibold mb-1 text-black'>Elina Deo</span><br />
            <span className='text-[11px] text-orange-500'>Sydney, Australia</span>
            </div>
            </div>
             <p className='text-[14px] mt-8 text-slate-400'>
              Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem,Ut enim ad minima veniam, quis nost run exerci tationem.
             </p>
             </td>
             <td className='w-1/4 p-8'>
            <div className='flex items-center'>
            <span >
            <Image
              src="/images/SquarePlaceHolder.png"
              alt="box"
              width={45}
              height={35}/>
            </span>
            <div className='ml-2'>
            <span className='text-[15px] font-semibold mb-1 text-black'>Williams Deo</span><br />
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
            <span className='mr-4 mb-24'>
            <Image
              src="/images/01.png"
              alt="box"
              width={15}
              height={10}/>
            </span>
            <span className='mr-4 mb-24'>
            <Image
              src="/images/02.png"
              alt="box"
              width={15}
              height={10}/>
            </span>
            <span className='mb-24'>
            <Image
              src="/images/01.png"
              alt="box"
              width={15}
              height={10}/></span> 
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