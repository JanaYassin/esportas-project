import React from 'react';

function Details() {
  return (
    <div className="bg-white details-part mt-36 flex justify-center items-center h-screen pl-52">
    <div className="">
  <div className="flex">
    <div className="w-2/5">
      <div className="headphone1"></div>
    </div>
    <div className="w-2/5 p-8">
      <h1 className="text-[30px] font-bold w4/5 text-black">
        Kardo Came Up Width The Latest Technology
      </h1>
      <p className="text-[13px] text-gray-500">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernature aut
        odit aut fugit, sed quia.
      </p>
      <button className="custom-rounded-button button-color mt-8 text-white px-6 py-2 hover:bg-orange-400">
        EXPLORE MORE
      </button>
    </div>
  </div>
  <div className="flex">
    <div className="w-2/5 p-8">
      <h1 className="text-[30px] font-bold mt-20 text-black">
        Kardo Modern Design With Wireless Gadget
      </h1>
      <p className="text-[13px] text-gray-500">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernature aut
        odit aut fugit, sed quia.
      </p>
      <button className="custom-rounded-button button-color mt-8 text-white px-6 py-2 hover:bg-orange-400">
        EXPLORE MORE
      </button>
    </div>
    <div className="w-2/5">
      <div className="headphone2 mt-20"></div>
    </div>
  </div>
</div>

  </div>

  );
}

export default Details;
