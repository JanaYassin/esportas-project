import React from 'react';

function Features() {
  return (
    <div className="bg-white new-page min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Technology Keeps Moving Forward</h1>
      <p className="text-[15px] text-center text-slate-400 mb-8">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici
      </p>
      <div className="flex justify-center items-center ">
      <table >
  <tr>
    <td className=" items-center w-64 ">
     <div class="arrow-icon"></div>
      <div>
        <h2 className="text-lg font-semibold mt-3">Latest Technology</h2>
        <p className="text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
    </td>
    <td rowSpan={3} className="items-center justify-center">
        <div class="headphone-image"></div>
    </td>
    <td className="items-center w-64 ">
     <div class="speakeer-icon"></div>
      <div>
        <h2 className="text-lg font-semibold mt-3">Easy To Use</h2>
        <p className="text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
    </td>
  </tr>
  
  <tr>

    <td className=" items-center w-64 ">
     <div class="heart-icon"></div>
      <div>
        <h2 className="text-lg font-semibold mt-3">Modern Design</h2>
        <p className="text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
    </td>
    <td className=" items-center w-64 ">
     <div class="layers-icon"></div>
      <div>
        <h2 className="text-lg font-semibold mt-3">Layered Materials</h2>
        <p className="text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
    </td>
  </tr>
  
  <tr>
  <td className=" items-center w-64 ">
     <div class="sound-icon"></div>
      <div>
        <h2 className="text-lg font-semibold mt-3">Sound Clarity</h2>
        <p className="text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
    </td>
    <td className=" items-center w-64 ">
     <div class="wireless-icon"></div>
      <div>
        <h2 className="text-lg font-semibold mt-3">Wireless Available</h2>
        <p className="text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
      </div>
    </td>
  </tr>
</table>
</div>

    </div>
  );
}

export default Features;
