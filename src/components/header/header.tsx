'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { RiMenu4Fill } from 'react-icons/ri'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='sticky top-0 h-[90px] shadow-xl z-30 bg-white'>
      <div className='container mx-auto flex justify-between h-full items-center'>
        <Link href='#'>
          <Image src='/logo.svg' alt='logo' width={200} height={200} />
        </Link>

        <nav>
          <div
            className='cursor-pointer lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <RiMenu4Fill className='text-3xl' />
          </div>
          <ul
            className={`fixed w-full ${
              isOpen ? 'h-[350px] p-6' : 'h-0'
            } bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300`}
          >
            <li>
              <Link href='#'>Home</Link>
            </li>
            <li>
              <Link href='#'>About</Link>
            </li>
            <li>
              <Link href='#'>Testimonials</Link>
            </li>
            <li>
              <Link href='#'>Our Work</Link>
            </li>
            <li>
              <Link href='#'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
