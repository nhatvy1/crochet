'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonial = () => {
  return (
    <div className='testimonial mt-[80px] xl:mt-[200px] relative z-20'>
      <div className='testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6'>
        <div className='flex flex-col items-center pt-[88px] pb-[110px]'>
          <h2 className='h2 mb-9 text-center'>What clients say</h2>
          <div className='w-full'>
            <Swiper
              className='mySwiper h-[400px]'
              loop={true}
              pagination={{
                clickable: true
              }}
              slidesPerView={3}
              spaceBetween={20}
              modules={[Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1
                },
                920: {
                  slidesPerView: 2
                },
                960: {
                  slidesPerView: 3
                }
              }}
            >
              {Array.from({ length: 4 }, (_, index) => (
                <SwiperSlide key={index}>
                  <div className='testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto'>
                    <div className='flex gap-4 mb-6'>
                      <Image
                        src='/testimonial/01.png'
                        alt='testimonial'
                        width={70}
                        height={70}
                        className='w-[60px] h-[60px]'
                      />
                      <div>
                        <h3 className='h3'>Nattasha Mith</h3>
                        <div>Greenville, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry.Ipsum has been.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
