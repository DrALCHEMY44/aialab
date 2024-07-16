import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex justify-center w-[100%] h-auto">
        <Image
          src="/logo2.png" 
          alt="logo"
          width={1000}
          height={600}  
          className="flex flex-center v-100 h-50 "     
        
        />
    </div>
  )
}

export default Logo