import About from '@/components/about'
import Banner from '@/components/banner'
import GridImage from '@/components/grid-img'
import Steps from '@/components/steps'
import Testimonial from '@/components/testimonial'

export default function Home() {
  return (
    <>
      <GridImage />
      <Banner />
      <Steps />
      <About />
      <Testimonial />
      <div className='h-[3000px]'></div>
    </>
  )
}
