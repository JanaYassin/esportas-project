import React from 'react';
import './style.css';

function Greenblackpart() {
  return (
    <div className="green-black-part flex w-full h-4/5">
        <div className="flex-1 green-part">
          <h1 className="mt-24 text-[30px] ml-[200px] font-bold text-left text-white w-1/2">The science of today is the technology of tomorrow</h1>
          <p className="text-[15px] ml-[200px] mb-4 text-left text-white w-2/3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inven.
          </p>
          <button className="custom-rounded-button bg-white text-orange-600 text-[13px] w-36 ml-[200px] mt-4 mb-28 px-6 py-2 hover:bg-orange-400">
            LEARN MORE
          </button>
        </div>
        <div className="black-part flex-1 bg-black flex items-center justify-center green-text ">
          <p className="text-[30px] font-bold mb-8">Watch
            <span className='video '></span>
            <span className='ml-[90px] mb-8'>Video</span>
          </p>
        </div>
      </div>
  );
}

export default Greenblackpart;