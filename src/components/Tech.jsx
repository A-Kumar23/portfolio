import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/constant';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';


const TechCard = ({name, icon , index}) => {
  console.warn(index, 'tech')
  // console.log(name, 'tech name')
  // console.error(icon, 'tech icon')
  return (
    <>
      <Tilt className=" w-full" >
          <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div
            options={{ max: 45, scale: 1 , speed: 450}}
            className='bg-tertiary rounded-[20px] p-2  flex justify-evenly items-center flex-col'
            >
            <img src={icon} alt={name} className='w-full h-full object-contain' />
              {/* <h3 className='text-white font-bold text-center' >{name}</h3> */}
            </div>
          </motion.div>
      </Tilt>
    </>
  )
}




const Tech = () => {
  return (
  
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology, index ) => (
      <div key={technology.name} className='w-28 h-28'  title={technology.name} >
        {/* <BallCanvas icon={technology.icon} /> */}
        <TechCard {...technology} index={index} />
      </div>
    ))}
      
    </div>
  
  )
}

export default SectionWrapper(Tech, '')