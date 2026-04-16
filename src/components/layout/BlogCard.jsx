import React from "react";
import Button from "../common/Button";

const BlogCard = ({ title, image, date }) => {
    return (
        <div className="bg-white rounded-2xl h-max overflow-hidden ">
            <img src={image} alt={title} title={title} className="w-full h-auto" />
            <div className="p-4">
                <p className="text-text-secondary text-base">{title.slice(0, 80)}</p>
                <div className="flex mt-5 flex-row justify-between items-center">
                    <span className="text-black font-sans text-[12px]">{date}</span>
                    <Button className="bg-secondary  font-sans text-sm px-3 py-1" shadowColor="#000000">
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
