import React from 'react'
import hero from '../assets/hero.png';
import {heroIcons} from '../Data';
import {FaArrowRight} from 'react-icons/fa';


const Home = () => {
  return (
    <div className='section flex items-center xl:justify-center justify-start flex-wrap'
    id='home'>
        <div className='flex flex-col items-start gap-10'>
            <div className='sm:text-[2.5rem] text-[1.8rem] font-bold'>
                Masaledar & Lazizdar <br /> Food is Waiting <br />For you
            </div>
            <div className='btn'>
                <a href="#">View Menu</a>
                <FaArrowRight />
            </div>
            <div className='flex md:gap-6 gap-2'>
                {heroIcons.map((heroIcon, index) => {
                    return(
                        <div className='bg-black w-12 h-12 text-white flex items-center justify-center md:text-3xl text-xl rounded-full' key={index}>{heroIcon}</div>
                    )
                })}
            </div>
        </div>
        <div className='min-w-[200px] md:w-[550px] justify-self-center'>
            <img src={hero} alt="" />
        </div>
     
    </div>
  )
}

export default Home
