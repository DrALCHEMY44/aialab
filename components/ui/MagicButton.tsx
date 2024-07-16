'use client'

import React from 'react'
import  { useState } from 'react';

const MagicButton = ({
  title , icon , position, handleClick, otherClasses
}: {
  
  title : string; icon : React.ReactNode ;position : string ; handleClick ?:() =>void; otherClasses ?: string;
}) => {
  return (
   // Button code
    <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-full p-[1px]  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-10 " onClick={handleClick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[iconic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
        {otherClasses}
        {position ==='left' && icon}
        {title}
        {position ==='right' && icon}
    </button> 
  )
}

export default MagicButton