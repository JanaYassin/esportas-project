import Image from 'next/image'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Details from './components/Details'
import Greenblackpart from './components/Greenblackpart'
import Types from './components/Types'
import Feedback from './components/Feedback'
import './components/style.css';
import './globals.css';

const Home = () => {
  return (
    <div className='main-body'>
      <Header />
      <About />
      <Features />
      <Greenblackpart />
      <Details />
    <div className="w-full mt-32 mb-32">
        <div className="blue-bg">
          <div className='text-part w-2/3 p-6'>
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

      <Types />
      <Feedback />
      <div className="price-part bg-white w-full">
      <div class="pl-56 pr-48 pb-8">
  <div class="flex">
    <div class="">
      <div class="headphone3"></div>
    </div>
    <div class="w-3/5">
      <h1 class="pt-16 text-[30px] font-bold text-left text-black w-10/12">
        Purchase <span class="orange-text">Krado Headphone</span> For $299
      </h1>
      <p class="text-[13px] text-left text-gray-500 w-10/12">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
      </p>
      <button class="custom-rounded-button button-color text-white text-[13px] w-46 mt-4 mb-12 px-6 py-2 hover:bg-orange-400">
        PURCHASE NOW
      </button>
    </div>
  </div>
</div>
      </div>
      <div className="w-full grey-bg">
      <div className='flex justify-center items-center p-8'>
            <span className='icon1 pr-8 w-24'></span>
            <span className='icon2 pr-8 w-24'></span>
            <span className='icon3 pr-8 w-24'></span> 
            <span className='icon4 pr-8 w-24'></span>
            <span className='icon5 pr-8 w-24'></span>
            <span className='icon6 pr-8 w-24'></span>
            </div> 
      
      </div>

      <div className="subscribe-part">
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-[25px] grey-text font-bold pb-2 pt-12">Subscribe To Our Newsletter</h1>
          <p className="text-[12px] text-center text-slate-400 pb-8 ">
           Be First To Get Latest Updates Form Krado
          </p>
          <div className="input-part flex items-center">
  <input
    type="email"
    placeholder="Enter Your Email"
    className="border border-gray-300 px-3 py-3 w-96 pb-2 pr-10"
  />
  <button className="bg-orange-500 text-white px-3 py-2 hover:bg-orange-400 absolute ml-72 mt-10 transform -translate-y-1/2">
    Subscribe
  </button>
</div>
          </div>
          </div>

          <div className="footer w-full mt-12  grey-bg">
          <div className='flex flex-col justify-center items-center'>
          <div className='logo1 w-14 pb-4 pt-12'></div> 
          <h1 className="text-center grey-text font-bold text-[40px]">KRADO</h1>
          <p className='ext-center text-[10px] pt-8 pb-8 grey-text'>@ 2019 All rights reserved</p>
          </div>
          </div>

          </div>

    
  );
}

export default Home;
