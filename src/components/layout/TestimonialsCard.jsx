import React from 'react'

const TestimonialsCard = ({
    text,
    name = "Anonymous",
}) => {
    return (
        <div className="relative ">

            {/* Shadow */}
            <div className="absolute top-2 left-2 w-full h-full bg-primary rounded-md"></div>

            {/* Card */}
            <div className="bg-text-primary rounded-md border border-black relative z-10 flex flex-col h-[300px]">

                {/* Text */}
                <div className="px-4 pt-4 flex-1">
                    <p className='text-primary text-[13px] opacity-75 font-normal font-sans'>
                        {text}
                    </p>
                </div>

                {/* Name */}
                <div className="border-t-2 px-4 py-2">
                    <p className='text-primary text-base font-sans font-medium'>
                        {name}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default TestimonialsCard