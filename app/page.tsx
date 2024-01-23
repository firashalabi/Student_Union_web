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

          <div className="">
            <span className='font-bold '>الاتحاد الطابي العام<br />
                وثيقة الانتساب السياسيّة
              </span>
              <p className="my-[4%] font-semi-bold ">
              تيمنا بالاتحاد الوطني للطلاب مؤسسين الجامعية اللبنانية، اتحادا نقابيا لاجل الطلاب والمجتمع واسكتمالا لنضال الحركة الطلابيا تاريخيا بين من بدء نضال التأسيس للجامعة الوطنية حتى اليوم في معركة الحفاظ على حق التعليم وبناء المجتمع وحمايته من التفتيت.
              </p>
          </div>


      <div className="my-[4%]">
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
    </div>
    </main>
  </>
    )
}
