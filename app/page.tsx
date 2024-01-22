import Image from 'next/image'
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/app/components/ui/accordion"

  import EttihadLogo from '@/public/ettihad black logo.png';

import { accordion } from "./constants"
import Navbar from '@/app/components/shared/Navbar'

export default function Home() {
  return (
    <>
      <div className="flex top-0 ">
      <Navbar />
      </div>
    
    <main className="flex min-h-screen flex-col  p-24">
        <div className="flex flex-col w-[500px]">
      {accordion.map(item =>(
        <Accordion type="single" collapsible className="w-full" key="item.id">
            <AccordionItem value="item.id" >

              <AccordionTrigger>{item.title}</AccordionTrigger>

                <AccordionContent>{item.content}</AccordionContent>
              
            </AccordionItem>
          </Accordion>
      ))
    }
    </div>
    </main>
  </>
    )
}
