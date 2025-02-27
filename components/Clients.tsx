import React from 'react'
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from '@/data';

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="heading">
            Kind words from {''}
            <span className="text-purple"> Satisfied clients</span>
        </h1>
        <div className="flex flex-col items-center ">
            <InfiniteMovingCards 
               items={testimonials}
               direction="left"
               speed="slow"

            />
        </div>
    </div>   
  )
}

export default Clients