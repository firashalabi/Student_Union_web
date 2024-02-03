'use client'
import Image from 'next/image'
import { accordion  } from "./constants"
import Navbar from '@/app/components/shared/Navbar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion'
import { Button } from './components/ui/button'


export default function Home() {

  
  return (
    <>
      <div>
      <Navbar />

      </div>
    
    <main className="min-h-screen w-full text-center ">
          <section id='main'  className=' text-center w-full'>
          <div className=" flex-row items-center justify-center mx-auto ">
            <h2 className='font-bold '>الاتحاد الطلابي العام<br />
                وثيقة الانتساب السياسيّة
              </h2>
              <p className="my-[4%] mx-auto text-wrap w-[350px] md:w-[500px] ">
              تيمنا بالاتحاد الوطني للطلاب مؤسسين الجامعية اللبنانية، اتحادا نقابيا لاجل الطلاب والمجتمع واسكتمالا لنضال الحركة الطلابيا تاريخيا بين من بدء نضال التأسيس للجامعة الوطنية حتى اليوم في معركة الحفاظ على حق التعليم وبناء المجتمع وحمايته من التفتيت.
              </p>
          </div>
      <div className="my-[4%] w-[400px] md:w-[600px] mx-auto ">
        {accordion.map(item =>(
          <Accordion type="single" collapsible className="w-full" key="key.id">
              <AccordionItem value="item.id" >

                <AccordionTrigger>{item.title}</AccordionTrigger>

                  <AccordionContent className=' h-[200px] line-clamp-4 overflowx-hidden hover:overflow-y-scroll scrollbar scrollbar-thin p-4'> {item.content}</AccordionContent>
                
              </AccordionItem>
          </Accordion>
      ))
    }
      </div>
    </section>

    <section>   
      
    {/* {tweet.map((tweet) => (
  <EmbeddedTweet tweet={tweet.tweetId} key={tweet.id} /> */}
{/* ))} */}

    </section>

    <section className=' mt-[4%] '>
      <div className='flex text-center justify-center'> 
        <h2 className='font-bold'>قضايا الاتحاد </h2>
       </div>

       <div className="flex flex-grid bg-black items-start w-[1000px] h-[500px] mt-[3%] ">
        
        {/* <div className='w-[400px] h-[200px] bg-white'></div>
        <div className='w-[400px] h-[200px] bg-white'></div> */}
       </div>
    </section>
    </main>
  </>
    )
}
