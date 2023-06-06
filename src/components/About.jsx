import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../utils/styles';
import { services } from '../constants/constant';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServicesCard = ({title, index, icon}) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full" >
          <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div
            options={{ max: 45, scale: 1 , speed: 450}}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
              <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
            </div>
          </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >
          Introduction
        </p>
        <h2 className={styles.sectionHeadText} >
          Overview.
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Hi, I'm Arun, a software developer and designer who loves to create beautiful and functional digital products. I have more than one years of experience in designing and developing websites, apps, and games using various tools and frameworks such as HTML, CSS, JavaScript, Bootstrap, Photoshop, Illustrator,React, Node.js, MongoDB, MySql and Python. I have a keen eye for aesthetics and usability, and I always strive to deliver high-quality work that meets the needs and expectations of my clients. Some of my recent projects include a portfolio website, a movie app, and a puzzle game.  You can check out my portfolio and GitHub profile for more details.  You can check out my portfolio and GitHub profile for more details.  I'm always eager to learn new things and take on new challenges. If you have a project idea or want to collaborate with me, please feel free to reach out to me anytime.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
          {
            services.map((service, index) => (
              <ServicesCard key={service.title} index={index} {...service} />
            ))
          }
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')