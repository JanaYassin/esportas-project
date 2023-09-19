import React from 'react';
import Image from 'next/image';

function Features() {
  return (
    <div className="features-part new-page min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 p-2 text-black">Technology Keeps Moving Forward</h1>
      <p className="semi-title text-[15px] text-center text-slate-400 mb-8 p-2">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici
      </p>
      <div className="flex justify-center items-center ">
      <div class="">
        
            <div class="icon">
            <Image
                 src="/images/arrow-Icon.png"
                 alt="arrow"
                 width={30}
                 height={20}/>
            </div>
            <div>
                <h2 class="icon-title text-lg font-semibold mt-3 text-black">Latest Technology</h2>
                <p class="icon-text w-64 text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
            </div>
            
            <div class="icon">
            <Image
                 src="/images/heart-Icon.png"
                 alt="heart"
                 width={30}
                 height={15}/>
            </div>
      <div>
        <h2 className="text-lg font-semibold mt-3 text-black">Modern Design</h2>
        <p className="icon-text w-64 text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>

      <div class="icon">
      <Image
                 src="/images/sound-Icon.png"
                 alt="sound"
                 width={30}
                 height={15}/>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-3 text-black">Sound Clarity</h2>
        <p className="icon-text w-64 text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
        </div>
       
        <div class="headphone-image">
        <Image
                 src="/images/headphones.png"
                 alt="headphone"
                 width={350}
                 height={300}/>
        </div>

        <div class="">
            <div class="icon">
            <Image
                 src="/images/speaker-Icon.png"
                 alt="speaker"
                 width={30}
                 height={15}/>
            </div>
            <div>
                <h2 class="text-lg font-semibold mt-3 text-black">Easy To Use</h2>
                <p class="icon-text w-64 text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
            </div>
            <div class="icon">
            <Image
                 src="/images/layers-Icon.png"
                 alt="layers"
                 width={30}
                 height={15}/>
            </div>
      <div>
        <h2 className="text-lg font-semibold mt-3 text-black">Layered Materials</h2>
        <p className="icon-text w-64 text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
      <div class="icon">
      <Image
                 src="/images/wireless-Icon.png"
                 alt="wireless"
                 width={30}
                 height={15}/>
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-3 text-black">Wireless Available</h2>
        <p className="icon-text w-64 text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
        </div>
</div>
</div>
  );
}

export default Features;
