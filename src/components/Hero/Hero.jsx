import React from 'react'
import css from './Hero.module.scss'
const Hero = () => {
    return (
        <section className={` paddings ${css.wrapper}`}>
            <section className={`innerWidth ${css.container}`}>
                <div className={`${css.upperElements}`}>
                    <span className='primaryText'>
                        Hey there, <br /> I'm Siddarth.
                    </span>
                    <span className='secondaryText'>
                        I design beautiful simple
                        <br />
                        things, and I love what I do.
                    </span>
                </div>

                <div className={css.person}>
                    <img src="./person.png" alt="" />
                </div>


                <a className={css.email} href="mailto:siddarthsajeev2002@gmail.com">
                    siddarthsajeev2002@gmail.com
                </a> 

                <div className={`${css.lowerElements}`}>
                    <div className={`${css.experience}`}>
                        <div className="primaryText">10</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </div>
                    <div className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>CERTIFIED PROFESSIONAL</span>
                        <span>WEB DEVELOPMENT</span>
                    </div>
                </div>

            </section>
        </section>
    )
}

export default Hero