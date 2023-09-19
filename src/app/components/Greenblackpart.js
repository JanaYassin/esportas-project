import React from 'react';
import './style.css';

function Greenblackpart() {
  return (
    <div className="green-black-part flex ">
        <div className="flex-1 green-part  pb-32">
          <h1 className="mt-24 text-[30px] pl-60 font-bold text-left text-white w-10/12">The science of today is the technology of tomorrow</h1>
          <p className="text-[15px] pl-60 mb-4 text-left text-white w-11/12">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inven.
          </p>
          <a className="custom-rounded-button bg-white text-orange-600 text-[13px] ml-[235px] w-36 px-6 py-2 hover:bg-orange-400">
            LEARN MORE
          </a>
        </div>
        <div className="black-part flex-1 bg-black flex items-center justify-center green-text ">
          <p className="text-[30px] font-bold pb-8">Watch
            <span className='video '></span>
            <span className='ml-[90px] mb-8'>Video</span>
          </p>
        </div>
      </div>
  );
}

export default Greenblackpart;