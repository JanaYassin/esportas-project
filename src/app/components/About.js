import React from 'react';
import './style.css';

function About() {
  return (
    <div className="blue-part bg-blue-500  min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-[40px] font-bold mb-6 text-left w-96 mr-60">Discover The Power Of Great Music</h1>
      <p className="text-[15px] mb-4 text-left w-96 mr-60">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan totam rem aperi.
      </p>
      <button className="custom-rounded-button button-color w-48 mr-[450px] mt-4 text-white px-6 py-2 hover:bg-orange-400">
        PURCHASE NOW
      </button>
    </div>
  );
}

export default About;
