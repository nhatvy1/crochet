import Image from 'next/image'
import { RiArrowRightSLine } from 'react-icons/ri'

const Brands = () => {
  return (
    <section className='brands mt-[80px] xl:mt-[150px] relative z-20'>
      <div className='container mx-auto xl:px-0'>
        <div className='text-center'>
          <h2 className='work__title mb-4 h2'>Follow Our Projects</h2>
          <p className='work__subtitle max-w-3xl mx-auto'>
            Its is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className='work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]'>
          {Array.from({ length: 4 }, (_, index) => (
            <div className='w-full max-w-[548px] h-full mx-auto' key={index}>
              <Image
                src={`/work/0${index+1}.png`}
                alt=''
                className='mb-6'
                width={500}
                height={500}
              />
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='h3'>Modern Kitchen</h3>
                  <p>Description/Architecture</p>
                </div>
                <button className='bg-accent-secondary hover:bg-accent/20 size-[70px] rounded-full flex items-center justify-center'>
                  <RiArrowRightSLine className='text-3xl text-primary pl-1' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
