/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import ListIcon from './ListIcon'

const DetailCard = ({ position, company, companyLink, time, address, work }) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <ListIcon />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>

            <h3 className='capitalize font-bold text-2xl sm:text-xl cs:text-lg'>
                {position}
                &nbsp;
                <a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark '>@{company}</a>
            </h3>

            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>

            <p className='font-medium w-full md:text-sm px-3'>
                {work.map((item, index) => <li className="mt-2 list-disc"
                key={index}>{item.bullet}</li>)}
            </p>

        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )

    const pwcWork = [
        {
            bullet: "I was part of a collaborative team effort focused on developing a healthcare domain portal. "
        },
        {
            bullet: "Developed a dedicated portal tailored to the needs of group insurance brokers, streamlining their interactions with the system."
        },
        {
            bullet: "Implemented end-to-end business flows, including quoting, enrollment, and contract renewal, providing a holistic platform for managing insurance operations."
        },
        {
            bullet: "Designed the portal to accommodate three distinct group types: Small Groups, Large Groups, and Family and Individual policies, ensuring flexibility and customization."
        },
        {
            bullet: "Created robust maintenance flows, enabling quick and secure modification of various records, ensuring data accuracy and compliance with changing requirements."
        },
        
    ]
    return (
        <div className='my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

                    <DetailCard
                        position={'Associate Software Engineer'}
                        company={'PwC'}
                        companyLink={'www.pwc.com'}
                        time={'Apr 2021 - Oct 2023'}
                        address={'Bangalore, Karnataka'}
                        work={pwcWork}
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience