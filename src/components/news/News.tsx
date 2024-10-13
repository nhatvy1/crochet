import Image from 'next/image'
import { RiArrowRightSLine } from 'react-icons/ri'

const News = () => {
  return (
    <section className='stats mt-[80px] xl:mt-[150px] relative z-20'>
      <div className='container mx-auto px-0'>
        <div className='max-w-[810px] mx-auto text-center mb-[52px]'>
          <h2 className='news__title h2 mb-3'>Articles & News</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>

        <div className='news__grid grid grid-cols-1 xl:grid-cols-3'>
          {Array.from({ length: 3 }, (_, index) => (
            <div
              className='news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0'
              key={index}
            >
              <Image
                src={`/news/0${index + 1}.png`}
                alt='dsadsa'
                width={382}
                height={520}
              />
              <div className='flex flex-col gap-[30px]'>
                <h3 className='h3'>
                {`Let's Get Solution For Builing Constructions Work`}
                </h3>
                <div className='flex items-center justify-between'>
                  <p className='text-base'>22 June, 2024</p>
                  <button className='bg-accent-secondary hover:bg-accent/20 size-[52px] rounded-full flex items-center justify-center'>
                    <RiArrowRightSLine className='text-3xl text-primary pl-1' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
