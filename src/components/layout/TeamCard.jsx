import React from 'react'
import Icon from '../common/Icon'
import Button from '../common/Button'

const TeamCard = ({ image, name, title, date, face, Couples }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden ">
            <img src={image} alt={title} title={title} className="w-full object-top object-cover team-card-image" />
            <div className="p-4 rounded-xl">
                <div className=" flex flex-row items-center justify-between">
                    <p className="text-text-secondary text-lg font-semibold tracking-normal font-sans">
                        {name.split("\n").map((line, index) => (
                            <span key={index}>
                                {line}
                                {index !== name.split("\n").length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                    <Button className="bg-secondary font-semibold text-[11px] font-sans px-2 py-1" shadowColor="#000000">
                        BOOK A SESSION
                    </Button>
                </div>
                <p className='text-text-secondary  mt-3 text-[13px] font-normal font-sans opacity-70'>{title}</p>
                <div className="flex flex-row items-center justify-between">
                    <div className="">
                        <div className="flex flex-row items-center gap-1">
                            <p className='text-text-secondary text-[14px] font-sans font-semibold opacity-70'>1-On-1 : <span className='text-text-secondary font-sans text-[14px] font-medium opacity-70'>{face} |</span></p>
                            <p className='text-text-secondary text-[14px] font-sans font-semibold opacity-70 '>Couples : <span className='text-text-secondary font-sans text-[14px] font-medium opacity-70'>{Couples}</span></p>
                        </div>
                        <p className="text-text-secondary font-sans text-[14px] opacity-80">{date}</p>
                    </div>
                    <Button className="bg-secondary font-sans text-sm px-3 py-1" shadowColor="#000000">
                        <Icon title="dropdown" width='10px' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
