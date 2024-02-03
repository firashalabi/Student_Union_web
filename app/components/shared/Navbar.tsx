"use client"
import Home from '@/app/page'
    import EttihadLogo from '@/public/ettihad-black.png'
    import EttihadWhiteLogo from '@/public/ettihad-white.png'
    import Image from 'next/image'
import Link from 'next/link'
import Navlinks from '../ui/nav-links'
import { LinkIcon } from 'lucide-react'
import link from 'next/link'


  export default function Navbar() { 
  return (
    <>
    <div className='flex'>
      <Image 
        src={EttihadWhiteLogo}
        alt='Logo'
        width={200} 
        height={200}
      />
      <div className=" hidden md:flex text-center my-auto">

              <Navlinks />
              </div>
          </div>

  </>
  )
  }