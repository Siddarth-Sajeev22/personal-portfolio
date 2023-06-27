import React from 'react'
import css from './Portfolio.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerChildren} from "../../utils/motion"
const Portfolio = () => {

    return (
        <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>

            <a  className="anchor" id="portfolio"></a>
            <div className={` innerWidth flexCenter ${css.container}`}>

                    <div className={` flexCenter ${css.heading}`}>
                        <div>
                            <span className='primaryText'>
                                My Latest Works 
                            </span>
                        </div>

                        <a href = "https://github.com/Siddarth-Sajeev22" target ="_blank" className='secondaryText'>
                            Explore More Works
                        </a>
                    </div>
                    
                    <div className={` flexCenter ${css.showCase}`}>
                        <motion.img
                        variants={fadeIn("up", "tween", 0.5, 0.6)}
                        src="./MusicPlayer.png" 
                        alt="project"
                        />

                        <motion.img 
                        variants={fadeIn("up", "tween", 0.5, 0.6)}
                        src="./Netflixclone.png" 
                        alt="project" 
                        />

                        <motion.img 
                        variants={fadeIn("up", "tween", 0.5, 0.6)}
                        src="./Gradego.png" 
                        alt="project" 
                        />
                    </div>
            </div>
        </motion.section>
    )
}

export default Portfolio