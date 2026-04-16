import React from 'react'
import Container from '../components/common/Container'

const TherapistServices = () => {
    return (
        <Container className='bg-white py-16'>
            <h1 className="text-text-secondary text-center font-zen text-3xl md:text-4xl leading-snug">
                Where Therapy and Counseling Begins With the Healer
            </h1>
            <p className="font-zen opacity-80 text-center text-text-secondary my-8 text-base md:text-base">The Therapy Park invests in its practitioners the same way it invests in clients, because sustainable <br className=' hidden md:block' /> counseling and mental health services begin from within.</p>
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 md:px-24">
                <div className="">
                    <img src="/assets/images/TherapistServices/Internships.png" alt="" className='w-full h-auto p-5 sm:p-10 md:p-0' />
                </div>
                <div className="">
                    <img src="/assets/images/TherapistServices/Workshops.png" alt="" className='w-full h-auto p-5 sm:p-10 md:p-0' />
                </div>
                <div className="">
                    <img src="/assets/images/TherapistServices/Mentorship.png" alt="" className='w-full h-auto p-5 sm:p-10 md:p-0' />
                </div>
                <div className="">
                    <img src="/assets/images/TherapistServices/Therapy.png" alt="" className='w-full h-auto p-5 sm:p-10 md:p-0' />
                </div>
            </div>
        </Container>
    )
}

export default TherapistServices
