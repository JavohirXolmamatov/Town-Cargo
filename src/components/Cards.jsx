import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Cards({ title, src }) {
  return (
    <div>
      <div className="grid-cols-1 h-[250px]">
        <figure className="relative w-full h-full overflow-hidden">
          <img src={src} alt="img1 " className="h-full w-full object-cover" />
          <figcaption className="absolute bottom-0 -left-15 hover:-left-5  h-full  w-[110%] hover:bg-black/20 transition-all duration-300 ease-in-out ">
            <div className="absolute bottom-5 bg-blue-500 py-1 px-10  text-white  skew-x-40">
              <div className="w-full flex items-center justify-center gap-4 -skew-x-40">
                <span className="">
                  <FaArrowRight className="text-white-500 h-5 w-5" />
                </span>
                <h6 className="text-xl">{title}</h6>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Cards;
