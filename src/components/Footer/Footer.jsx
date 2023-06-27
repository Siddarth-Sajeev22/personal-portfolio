import React from 'react';
import css from './Footer.module.scss';
import {motion} from 'framer-motion';
import {BiLogoLinkedin, BiLogoGithub} from 'react-icons/bi';
import { footerVariants, staggerChildren } from '../../utils/motion';
const Footer = () => {
    return (
        <motion.section 
        variant={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount:0.25}}
        className={`paddings ${css.wrapper}`}>




            <motion.div 
            variants={footerVariants}
            className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>
                        <span className="primaryText">
                            Lets's make something <br/>
                            amazing together.
                        </span>
                        <span className='primaryText'>
                            Start by <a href="mailto:siddarthsajeev2002@gmail.com">saying hi</a>
                        </span>
                        
                </div>

                <div className={css.right}>
                        <div className={` flexCenter ${css.menu}`}>
                            <span className="secondaryText">Information</span>
                            <p>Thiruvananthapuram, Kerala, India</p>
                        </div>

                        <div className={` flexCenter ${css.menu}`}>
                            <li>siddarthsajeev2002@gmail.com</li>
                            <li className={` ${css.phone}`}><a className={`flexCenter`} href="https://www.linkedin.com/in/siddarth-sajeev-17065522a/" target="_blank">LinkedIn - <BiLogoLinkedin size={"30px"}/></a></li>
                            <li className={` ${css.phone}`}><a className={`flexCenter`} href="https://github.com/Siddarth-Sajeev22" target="_blank">Github -  <BiLogoGithub size={"30px"}/></a></li>
                        </div>
                </div>


            </motion.div>
        </motion.section>
    )
}

export default Footer