import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion'
import {staggerContainer, fadeIn, slideIn} from '../../utils/motion'
const Hero = () => {
    return (
        <section className={` paddings ${css.wrapper}`}>
            <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount: 0.25}}
            className={`innerWidth ${css.container}`}>
                <div className={`${css.upperElements}`}>
                    <motion.span 
                    variants={fadeIn("right","tween",0.2,1)}
                    className='primaryText'>
                        Hey there, <br /> I'm Siddarth.
                    </motion.span>
                    <motion.span 
                    variants={fadeIn("left","tween",0.4,1)}
                    className='secondaryText'>
                        I build things for the web,
                        <br />
                        and I love what I do.
                    </motion.span>
                </div>

                <motion.div 
                variants={fadeIn("up","tween",0.3,1)}
                className={css.person}>
                    <motion.img 
                    variants={slideIn("up","tween",0.5,1.3)}
                    src="./per.png" alt="" />
                </motion.div>


                <motion.a 
                variants={fadeIn("up","tween",0.3,1)}
                className={css.email} href="mailto:siddarthsajeev2002@gmail.com">
                    siddarthsajeev2002@gmail.com
                </motion.a> 

                <div className={`${css.lowerElements}`}>
                    <motion.div 
                    variant ={fadeIn("right","tween",0.3,1)}
                    className={`${css.experience}`}>
                        <div className="primaryText">10</div>
                        <div className="secondaryText">
                            <div>Resume Link</div>
                            
                        </div>
                    </motion.div>

                    <motion.div 
                    variant ={fadeIn("left","tween",0.5,1)}
                    className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>WEB DEVELOPMENT</span>
                        <span>ENTHUSIAST</span>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    )
}

export default Hero;