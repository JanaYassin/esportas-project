import Image from 'next/image'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Details from './components/Details'


import './globals.css';

const Home = () => {
  return (
    <><div>
      <Header />
      <About />
      <Features />
      <div className="flex w-full h-4/5">
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
        <div className="flex-1 bg-black flex items-center justify-center green-text ">
          <p className="text-[30px] font-bold mb-8">Watch
            <span className='video '></span>
            <span className='ml-[90px] mb-8'>Video</span>
          </p>
        </div>
      </div>
    </div>
    <Details />
    <div className="w-full mt-32 mb-32">
        <div className="blue-bg">
          <div className='w-2/3 p-6'>
        <h1 className="mt-24 text-[30px] ml-[700px] font-bold text-left text-black w-1/2">The Krado Is a Great Way To Get On The Music</h1>
        <p className="text-[15px] ml-[700px] mb-4 text-left text-gray-500 w-1/2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo
            enim voluptat.
          </p>
          <button className="custom-rounded-button button-color text-white text-[13px] w-46 ml-[700px] mt-4 mb-24 px-6 py-2 hover:bg-orange-400">
            PURCHACE NOW
          </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
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

      <div className="w-full mt-32 mb-32">
        <div className="grey-bg">
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
            <div className='ml-2'>
            <span className='text-[15px] font-semibold mb-1'>Micheal Deo</span><br />
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


      <div className="w-full">
      <table className='w-3/4 ml-48'>
      <tr>
        <td className='w-2/5'> <div className='headphone3'></div></td>
        <td className='w-2/6'>
  
        <h1 className="mt-12 text-[30px] font-bold text-left text-black w-11/12">Purchase <span className='orange-text'>Krado Headphone</span> For $299</h1>
        <p className="text-[13px] mb-4 text-left text-gray-500 w-11/12">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspematur aut odit aut fugit, set quia.
          </p>
          <button className="custom-rounded-button button-color text-white text-[13px] w-46 mt-4 mb-12 px-6 py-2 hover:bg-orange-400">
            PURCHACE NOW
          </button>
        </td>
        </tr>
      </table>
      </div>
      <div className="w-full mt-12 mb-12 grey-bg">
      <div className='flex justify-center items-center '>
            {/* <span className='icon1 mr-14 w-20 mb-12 mt-12'></span>
            <span className='icon2 mr-14 w-20'></span>
            <span className='icon3 mr-14 w-20'></span> 
            <span className='icon4 mr-14 w-20'></span>
            <span className='icon5 mr-14 w-20'></span>
            <span className='icon6 w-20'></span> */}
            </div> 
      
      </div>

      <div className="w-full ">

          <div className="flex flex-col justify-center items-center">
          <h1 className="text-[25px] grey-text font-bold mb-4 mt-12">Subscribe To Our Newsletter</h1>
          <p className="text-[12px] text-center text-slate-400 mb-8">
           Be First To Get Latest Updates Form Krado
          </p>
          <div className="flex items-center">
  <input
    type="email"
    placeholder="Enter Your Email"
    className="border border-gray-300 px-3 py-3 w-96 mb-2 pr-10"
  />
  <button className="bg-orange-500 text-white px-3 py-2 hover:bg-orange-400 absolute ml-72 mt-8 transform -translate-y-1/2">
    Subscribe
  </button>
</div>

          </div>
          </div>

          <div className="w-full mt-12  grey-bg">
          <div className='flex flex-col justify-center items-center'>
          <div className='logo1 w-14 mb-4 mt-12'></div> 
          <h1 className="text-center grey-text font-bold text-[40px]">KRADO</h1>
          <p className='ext-center text-[10px] mt-8 mb-8'>@ 2019 All rights reserved</p>
          </div>
          </div>



    </>
    
  );
}

export default Home;
