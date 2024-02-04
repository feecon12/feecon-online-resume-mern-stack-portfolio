import devPic from "../assets/image/dev1.png"
import Button from "../components/Button";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout className="lg:flex py-10">
      <section className="w-full flex">
        <div className='w-1/2 md:w-full'>
          <img src={devPic} alt='FME' className='w-full h-auto lg:hidden md:inline-block md:w-full'
            sizes='(max-width:768px) 100vw,
                (max-width:1200px) 60vw,
                50vw'
          />
        </div>
        <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
          <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
            With 3 years of experience into software development and testing, I have a strong foundation in ReactJs and NodeJS. Currently, I m honing my problem-solving skills through Scaler Academy. I hold cloud certifications from
            AWS and Azure, bringing expertise in cloud technologies. Additionally, I possess knowledge of CRM systems like Salesforce. I m enthusiastic about joining a dynamic team and contributing my skills to drive company success.
          </p>
          <div className='flex gap-4 items-center self-start mt-2 lg:self-center'>
            <Button
              text={'Resume'}
              to={'/Resume.pdf'}
              className="px-8 hover:border-dark"
            />
            <a href="" className="hover:underline hover:underline-offset-4">more</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage;