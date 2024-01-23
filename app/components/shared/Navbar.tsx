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
    <div className='flex flex-row'>
      <Image 
        src={EttihadLogo}
        alt='Logo'
        width={300} 
        height={300}
      />
      <div className="flex my-auto">

              <Navlinks />
              </div>
            {/* <LinkIcon className="w-6" /> */}
            <p className="block">{link.name}</p>
          </div>

  </>
  )
  }