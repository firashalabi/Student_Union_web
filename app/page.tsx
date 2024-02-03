'use client'
import Image from 'next/image'
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/app/components/ui/accordion"

import { accordion  } from "./constants"
import Navbar from '@/app/components/shared/Navbar'
import backgroundImage from'@/public/1100104.jpg'
import { EmbeddedTweet, TweetProps } from 'react-tweet';
import { Tweet } from './components/ui/Tweet';
import { components } from './components/ui/TweetEmbed';
import { tweetIds } from '@/lib/utils';
import { getTweet } from 'react-tweet/api';


export default function Home() {
//   const MyTweet = ({ id }: { id: string }) => (
//     <Tweet id={id} components={components} />
//   )


  
  return (
    <>
      <div>
      <Navbar />
      </div>
    
    <main className="min-h-screen w-full text-center ">
          <section id='main'  className='flex-row text-center w-full'>
          <div className="flex-col ">
            <span className='font-bold '>الاتحاد الطلابي العام<br />
                وثيقة الانتساب السياسيّة
              </span>
              <p className="my-[4%]  text-wrap w-[300px] text-right">
              تيمنا بالاتحاد الوطني للطلاب مؤسسين الجامعية اللبنانية، اتحادا نقابيا لاجل الطلاب والمجتمع واسكتمالا لنضال الحركة الطلابيا تاريخيا بين من بدء نضال التأسيس للجامعة الوطنية حتى اليوم في معركة الحفاظ على حق التعليم وبناء المجتمع وحمايته من التفتيت.
              </p>
          </div>
      <div className="my-[4%] w-[300px] justify-center ">
        {accordion.map(item =>(
          <Accordion type="single" collapsible className="w-full " key="key.id">
              <AccordionItem value="item.id" >

                <AccordionTrigger>{item.title}</AccordionTrigger>

                  <AccordionContent>{item.content}</AccordionContent>
                
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
