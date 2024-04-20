'use client'

import Button from "@/components/shared/ui/button";
import Container from "@/components/shared/ui/container";
import Title from "@/components/shared/ui/title";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
    <>
     <section id='Header' className='border-b border-gray-500/30 py-10'>
      <Container>
        <Title title='Medical Web App' className='mb-5' />
        <p>
        The goal of the application was to create an easy-to-use platform for the patient and the doctor
        </p>
        <div className='flex flex-col lg:flex-grow lg:items-center justify-between mt-5 gap-5'>
          <Link href='https://medical-project-kx19.onrender.com/'>
          <Button
            type='button'
            label='View Live App'
            className='w-auto'
            onClick={() => {}}
          />
          </Link>
          
          <ul className='space-y-3 mb-10 ml-6'>
            <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>
              Industry: Web App
            </li>
            <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>
              Timeline: 2 months
            </li>
            <li className='relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2'>
              Product design
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
          <Image
            src='/cap-medical.png'
            alt='Image'
            fill
            className='object-fill rounded-xl'
          />
        </div>
      </Container>
    </section>
    </> );
}
 
export default Header;