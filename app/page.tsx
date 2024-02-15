'use client'
import Image from 'next/image'
import { accordion, card  } from "./constants"
import Navbar from '@/app/components/shared/Navbar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion'
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/shared/card"



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
      <div className="my-[4%] w-[300px] md:w-[600px] mx-auto ">
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
    <section className='my-[10px]'>
      <div className="m-4">
        <h1 className='text-bold'>قضايا الاتحاد</h1>
        </div>
      <div className=' flex-col mx-auto justify-center  md:grid md:grid-cols-2  md:gap-4 md:mx-auto '>
        {card.map(card => (
        <Card key={card.id} className='bg-[#0c0c0c] text-accent h-[400px] overflow-scroll scrollbar scrollbar-thin '>
            <CardHeader>
            <CardTitle>{card.title}</CardTitle>
              </CardHeader>
            <CardContent>
              <p>{card.content}</p>
              </CardContent>
        </Card>
        ))}
      </div>
    </section>

    <section className='m-10'>
        <div>
          <ol className={"list-decimal list-inside"}>
            <li>مصالح المجتمع نقيض مصالح قوى السلطة </li>
            <li>واقع التعليم نتيجة خيارات قوى النظام:</li>
            <ul className={"list-disc list-inside"}>
              <li>حوكمة التعليم </li>
              <li>نهب التعليم</li>
              <li>طبقية التعليم</li>
              <li>أيديولوجيّة تصدير "العمالة الماهرة"</li>
              <li>التعليم واللجوء</li>
                </ul>
                <li>أسباب الخطر المحدق في التعليم في ظل الانهيار</li>
                <ul className={"list-disc list-inside"}>
                  <li>الجامعة اللبنانية</li>
                  <li>القطاع الرسمي</li>
                  <li>المعاهد</li>
                  <li>المناهج</li>
                </ul>
                <li>الأهداف: خياراتنا</li>
                <ul className={"list-disc list-inside"}>
                <li>الجامعة اللبنانيّة</li>
                <li>القطاع الرسمي</li>
                <li>القطاع الخاص</li>
                <li>المعاهد </li>
                <li>المناهج</li>
                </ul>
                <li>الخاتمة </li>
          </ol>
        </div>
    </section>
    
    </main>
  </>
    )
}
