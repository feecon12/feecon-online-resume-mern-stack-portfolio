import Layout from '../components/Layout'
import aboutMeDev from '../assets/image/photo1.jpg'
import Education from '../components/Education'
import Experience from '../components/Experience'
const About = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16 '>
        {/* <AnimatedText text="Passion Empowers Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' /> */}

        <h2 className='font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl'>
          About
        </h2>
        <div className='grid w-full grid-cols-8 gap-16 pt-16 sm:gap-8'>
          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
            <p className='font-medium'>
              Feecon Behera is a dedicated software developer and problem solver with over 2 years of experience in the field. Hailing from Cement Nagar, Bargarh, Odisha, Feecon has established a strong foundation in key technologies, including ReactJs and MySql, and continues to refine his skills through the Scaler Academy.
            </p>

            <p className='my-4 font-medium'>
              Education has been a crucial stepping stone in Feecons journey. He holds a Bachelor of Technology in Electronics and Communication from Siksha O Anusandhan University, acquired between August 2016 and June 2020. His academic journey included a range of relevant coursework such as Data Structures and Algorithms, Database Management, and Web Development, providing him with a robust knowledge base.
            </p>

          </div>
          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8'
          >
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark' />
            <img src={aboutMeDev} alt='Feecon' className='w-full h-auto rounded-2xl'
              sizes='(max-widthL768px) 100vw,
                            (max-width:1200px) 60vw,
                            33vw'
            />
          </div>

          <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col items-end justify-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '>
                {/* <AnimatedNumbers value={4} /> */}
                4+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg xs:text-base'>satisfied clients</h2>
            </div>

            <div className='flex flex-col items-end justify-center  xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '>
                {/* <AnimatedNumbers value={10} /> */}
                10+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg xs:text-base'>projects completed</h2>
            </div>

            <div className='flex flex-col items-end justify-center  xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '>
                {/* <AnimatedNumbers value={2} /> */}
                2+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg xs:text-base'>years of experiences</h2>
            </div>
          </div>
        </div>
        <Experience/>
        <Education/>
      </Layout>
    </main>
  )
}

export default About;