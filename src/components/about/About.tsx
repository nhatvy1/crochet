import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5'
import { MdLocalPhone } from 'react-icons/md'

const About = () => {
  return (
    <section className='about mt-[80px] xl:mt-[200px] relative z-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]'>
          <div className='flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8'>
            <h2 className='capitalize h2'>
              We create the art of stylish living stylishly
            </h2>
            <p>
              It is a long establish fact that a reader will be distracted by
              the of readable content of a page when lookings at its layout the
              points of using that it has a more-or-less normal.
            </p>
            <div className='flex items-center justify-center xl:justify-start gap-4'>
              <div className='bg-accent/15 size-[93px] rounded-full flex items-center justify-center'>
                <MdLocalPhone className='text-accent text-4xl' />
              </div>
              <div className='text-left'>
                <div className='text-2xl font-bold'>033 2650 824</div>
                <div>Call Us Any time</div>
              </div>
            </div>
            <button className='btn btn-primary mx-auto xl:mx-0'>
              Get free estimation <IoArrowForward className='text-accent' />
            </button>
          </div>
          <div className='about__img order-1 xl:order-none ordermax-w-[453px] mx-auto xl:max-w-none xl:mx-0'>
            <Image
              src='/about/img.jpg'
              alt='about'
              width={453}
              height={453}
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
