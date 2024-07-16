import React from "react";
export const Offer = ({
  image,
  name,
  category,
  firstPrice,
  secondPrice,
  rating,
}) => {
  return (
    <>
      <div className="flex bg-white  w-[305px]  pt-[15px]  pl-[20px] pr-[20px] text-center rounded-[20px] transition-transform transform hover:scale-105 hover:shadow-lg  ">
        <div className="  ">
          <div className="text-left">
            {" "}
            <button
              className="bg-primary py-[10px] 
             px-[20px] rounded-[10px] mt-[30px] text-white text-left"
            >
              {category}
            </button>
          </div>
          <img className="w-[265px] h-[256px]" src={image} alt="image" />
          <p className="text-left pb-[10px] text-base text-primary font-bold">
            {name}
          </p>
          <hr />
          <span className="flex pt-[10px]">
            <del className="text-[15px] text-fourth pr-[10px] pt-[3px]">
              {firstPrice}
            </del>
            <p className="text-sm text-primary font-bold">{secondPrice}</p>
            <p className="pl-[60px]">{rating}</p>
          </span>
        </div>
      </div>
    </>
  );
};
