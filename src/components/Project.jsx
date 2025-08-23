import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";

const Project = ({title, description, subDescription, href, image, tags}) => {

    const [isHidden, setIsHidden] = useState(false);
     
  return (
    <div className="flex flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
      <div>
        <p className="text-2xl">Title</p>
        <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag)=>(
                <span key={tag.id}>{tag.name}</span>
            ))}
        </div>
      </div>
      <button onClick={() => (setIsHidden(true))} className="flex items-center gap-1 cursor-pointer hover-animation">
        Read More
        <img src="assets/arrow-right.svg" alt="" className="w-5" />
      </button>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
      {isHidden && (<ProjectDetail title={title} description={description} subDescription={subDescription} image={image} tags={tags} href={href}
    closeModal={()=>(setIsHidden(false))}
      />)}
    </div>
  );
};

export default Project;
