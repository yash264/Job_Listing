import React from 'react'
import { Link } from 'react-router-dom'
import section from '../assets/Image/Section.png'

function Hero() {
    return (
        <>
            <section className='text-center py-32 bg-black text-white'>
                <p className='font-medium text-[12px] leading-[16px ] text-center align-middle font=[Geist]'>Trusted by 10,000+ companies worldwide</p>
                <h1 className='font-[Geist] font-bold text-[60px] tracking-[-1.5px] text-center'>
                    The complete platform to
                    <span className='text-[#00D091]'> hire <br />smarter</span>
                </h1>
            </section>
            <div className='text-center mt-6'>
                <p className='font-[Geist] font-normal text-[18px]leading-[28px] text-center align-middle'>Streamline your hiring process with AI-powered matching, automated workflows, and a
                    seamless experience for both recruiters and candidates.
                </p>
                <button className='mt-6 bg-[rgba(0,208,145,1)] text-black px-6 py-3 rounded-xl'>
                    Start Free Hiring
                </button>
                <Link to="/job" className='bg-[rgba(4,4,4,1)] border border-gray-700 text-white px-6 py-3 rounded-xl transition ml-2'>
                    Browse Jobs</Link>
                <section className="w-full mx-auto border-t border-b border-gray-700 py-`48px` px-`96px`">
                    <img
                        src={section}
                        alt="Section image"
                        className="w-full h-auto object-contain"
                    />
                    <h1 className='text-white text-3xl font-bold mt-10'>Everything you need to hire the best</h1>
                    <p className='text-white mt-4'>Powerful tools designed to help you find, evaluate, and hire top talent faster than ever.</p>
                </section>

            </div>

        </>
    )
}

export default Hero