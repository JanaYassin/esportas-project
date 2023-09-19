import React from 'react';
import './style.css';
import Image from 'next/image';

function Types() {
  return (
    <div className="types bg-white flex flex-col justify-center items-center ">
    <h1 className="text-4xl font-bold pb-4 text-black">Different Colours & Different Choice</h1>
    <p className="text-[15px] text-center text-slate-400 mb-8">
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici
    </p>
    <div class="types-images ">
  <div class="headphone-placeholder1">
  <Image
        src="/images/ImagePlaceHolder.png"
        alt="headphone1"
        width={200}
        height={150}/>
  </div>
  <div class="headphone-placeholder2">
  <Image
        src="/images/ImagePlaceHolder2.png"
        alt="headphone2"
        width={200}
        height={150}/>
  </div>
  <div class="headphone-placeholder3">
  <Image
        src="/images/ImagePlaceHolder.png"
        alt="headphone1"
        width={200}
        height={150}/>
  </div>
</div>
    </div>
  );
}

export default Types;