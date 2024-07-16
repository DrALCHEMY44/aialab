import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect} from './ui/TextGenerateEffect'
import MagicButton  from './ui/MagicButton'
import {FaLocationArrow} from 'react-icons/fa'
import { BackgroundBeams } from './ui/BackgroundBeams'
import Logo from './Logo'

const hero = () => {
  return (
    <div className="pb-20 pt-36" >
        <div>
            <BackgroundBeams className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
            <BackgroundBeams className="-top-10 -left-full h-[80vh] w-[50vw]"/>
            <BackgroundBeams className="-top-28 -left-80 h-[80vh] w-[50vw]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className='max-w-[89vw]  md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center'>
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-50"> 
              <Logo/>
            </h2>
            <TextGenerateEffect
               className= "text-center text-[40px] md: text-5xl text-purple"
               words="BEYOND THE LIMITS"
            />
            <a href="/">
              <MagicButton
               title={'OUR WORKS'} icon={<FaLocationArrow/>} position={'right'} />
              <title>AIALAB</title>
            </a>
          </div>
        </div>
    </div>
  )
}

export default hero