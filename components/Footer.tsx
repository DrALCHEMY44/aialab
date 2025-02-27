import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { profile } from 'console'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <Image
            src="/footer-grid.svg" alt="grid" 
            className="w-full h-full opacity-50"
            width={400}
            height={400}
            />
        </div>
        <div className=" flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-purple">your</span>digital and technology presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-cemter">Reach out to us today and lets discuss how I can help you archieve your goals</p>
            <a href="mailto:aialab@gmail.com">
                <MagicButton title={"Lets get in touch"} icon={<FaLocationArrow/>} position={"right"}/>
            </a>
        </div>

        <div className="flex mt-16 md:flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 ALCHEMY</p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border-black-300">
                        <Image src={profile.img} alt={profile.id.toString()} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer