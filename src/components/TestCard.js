import React from "react";
const TestCard = (props) => {
  return(
    <div className=" sm:min-w-full min-h-full bg-[#EDEDE2] rounded-xl flex flex-col py-8 px-4 gap-8">
      <div className="flex items-center justify-center rounded-full bg-pink-500 h-20 w-20 text-white text-xl">
        {props.name.charAt(0)}
      </div>

      <div className="text-lg">{props.para}</div>
      <div className="font-bold text-3xl">{props.name}</div>
    </div>
  )
}
export default TestCard;