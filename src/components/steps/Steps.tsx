import Link from 'next/link'
import { GiFox } from 'react-icons/gi'
import { GoArrowRight } from 'react-icons/go'

const Steps = () => {
  return (
    <section className='steps mt-[80px] xl:mt-[200px] relative z-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-12 xl:grid-cols-3'>
          {Array.from({ length: 3 }, (_, index) => (
            <div className='steps__step text-center' key={index}>
              <div className='flex items-center justify-center mb-4'>
                <GiFox className='text-5xl text-accent' />
              </div>
              <h3 className='h3 mb-5'>Project Planing</h3>
              <p className='mb-5 max-w-md mx-auto'>
                There are many variations of the passages of lorem Ipsum from
                available, majority.
              </p>
              <Link
                href='#'
                className='font-semibold flex items-center gap-2 mx-auto w-fit'
              >
                Read more <GoArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
