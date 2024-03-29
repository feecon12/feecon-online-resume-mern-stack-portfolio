/* eslint-disable react/prop-types */
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import ListIcon from './ListIcon'

const DetailCard = ({ type, time, place, info }) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <ListIcon />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>

            <h3 className='capitalize font-bold text-2xl sm:text-xl cs:text-lg '>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div className='my-16'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    '
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>


                    <DetailCard
                        type={'MERN Fullstack Engineering'}
                        time={'2022 - present'}
                        place={'Scaler Academy by InterviewBit'}
                        info="Relevant course work included Javscript programming, React.js, Express.js, MongoDB, High Level System Designing, and Data Engineering"

                    />

                    <DetailCard
                        type={'Bachelor of Technology In Electronics and Communication'}
                        time={'2016 - 2020'}
                        place={'ITER, SOA University, Bhubaneswar'}
                        info="Relevant courses included Electronics and Comunication, Computer Architecture, and programming in MATLAB, and Python"

                    />

                    <DetailCard
                        type={'Higher Secondary Education in Science'}
                        time={'2016'}
                        place={'Kendriya Vidyalaya, Bargarh'}
                        info=" Relevant courses included Physics, Chemistry, Mathematics, and Computer Sciences"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education