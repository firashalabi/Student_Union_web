"use client"
import Home from '@/app/page'
    import EttihadLogo from '@/public/ettihad-black.png'
    import Image from 'next/image'
import Link from 'next/link'
import Navlinks from '../ui/nav-links'
import { LinkIcon } from 'lucide-react'
import link from 'next/link'


  export default function Navbar() { 
  return (
    <>
    <div className='block'>
      <Image 
        src={EttihadLogo}
        alt='Logo'
        width={300} 
        height={300}
      /></div>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              <Navlinks />
              </div>
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          

  </>
  )
  }