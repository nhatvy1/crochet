import About from '@/components/about'
import Banner from '@/components/banner'
import Brands from '@/components/brands'
import Contact from '@/components/contact'
import GridImage from '@/components/grid-img'
import News from '@/components/news'
import Stats from '@/components/stats'
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
      <Brands />
      <Stats />
      <News />
      <Contact />
    </>
  )
}
