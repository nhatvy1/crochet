import Image from 'next/image'
import Link from 'next/link'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { PiYoutubeLogoLight } from 'react-icons/pi'

const Footer = () => {
  return (
    <footer className='contact mt-[80px] xl:mt-[150px] relative z-20'>
      <div className='container mx-auto px-0'>
        <div className='flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]'>
          <div className='footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left'>
            <Link href='#' className='flex justify-center xl:justify-start'>
              <Image src='/logo.svg' alt='Logo' width={150} height={150} />
            </Link>
            <p className='mb-8 text-xl'>
              Subtitle: It is a long established fact that a reader will be
              distracted lookings.
            </p>
            <ul className='text-primary flex gap-[54px] justify-center xl:justify-start'>
              <li>
                <Link href=''>
                  <CiFacebook />
                </Link>
              </li>
              <li>
                <Link href=''>
                  <PiYoutubeLogoLight />
                </Link>
              </li>
              <li>
                <Link href=''>
                  <CiLinkedin />
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end'>
            <div className='footer__item'>
              <h3 className='h3 mb-3'>Pages</h3>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link href='#'>About</Link>
                </li>
                <li>
                  <Link href='#'>Testimonial</Link>
                </li>
                <li>
                  <Link href='#'>Our Work</Link>
                </li>
                <li>
                  <Link href='#'>News</Link>
                </li>
                <li>
                  <Link href='#'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className='footer__item'>
              <h3 className='h3 mb-3'>Services</h3>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link href='#'>About</Link>
                </li>
                <li>
                  <Link href='#'>Testimonial</Link>
                </li>
                <li>
                  <Link href='#'>Our Work</Link>
                </li>
                <li>
                  <Link href='#'>News</Link>
                </li>
                <li>
                  <Link href='#'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className='footer__item'>
              <h3 className='h3 mb-3'>Contact</h3>
              <div className='flex flex-col gap-6 text-[20px]'>
                <p>55 East Birchwood Ave. Brooklyn, New York  2024</p>
                <p>demo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
