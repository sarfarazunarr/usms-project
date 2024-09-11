import React from 'react'
import image from '../assets/man.png'

const Hero = () => {
    return (
        <section id='home' className="bg-[#1e40af]">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-white xl:text-6xl">Welcome to Information Computing Department!</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">We are part of Univeristy of Sufism and Modern Sciences Bhitshah where we explore the power of Information Technology.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-transparent hover:text-white">
                        Know More About Us!
                    </a>
                </div>
                <div className="hidden w-[800px] -mb-14 size-[500px] lg:flex">
                    <img src={image} alt="man" />
                </div>
            </div>
        </section>
    )
}

export default Hero
