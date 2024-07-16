import React from 'react';
import {BentoGrid, BentoGridItem} from './ui/BentoGrid';
import {gridItems} from '@/data';

const Grid = () => {
  return (
    <section id="about" className="text-purple-800 font-bold">
        <BentoGrid className="text-purple ">
            {gridItems.map(({id, title,description , className, img , imgClassName, titleClassName, spareImg,}) => (
                <BentoGridItem
                    key={id}
                    title={title}
                    description={description} 
                    id={id} 
                    className={className}  
                    img={img } 
                    imgClassName={imgClassName}        
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid