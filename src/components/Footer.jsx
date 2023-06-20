import React from 'react'
import { styles } from '../utils/styles';
import { socialMedias } from '../constants/constant';
import { git } from '../assets';

const Footer = () => {
    return (
        <footer
            className={`${styles.paddingX} w-full  py-1`}
        >
        <div>
       
        </div>
            <div className='w-full flex flex-col items-center justify-center max-w-7xl mx-auto'>
                <div className='flex justify-center items-center '>

                    {socialMedias.map((media, index) => (
                        <a
                            // onClick={() => window.open(media.profile_link, '_blank')}
                            href={media.profile_link}
                            className=' w-10 h-10 rounded-full flex justify-center items-center'
                            key={index}
                            target='_blank'
                            
                        >
                            <img src={media.icon} alt={media.name} className='w-3/5 h-3/5 object-contain' />
                        </a>
                    ))

                    }
                </div>
                <p className=' font-poppins font-medium  cursor-pointer text-[12px]'> Copyright <span>&#169;</span> 2023 Arun Kanaujia </p>
            </div>
        </footer>
    )
}

export default Footer