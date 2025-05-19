import React from "react";
import TestCards  from "../components/TestCards"
;
const Testimonial = () => {
  return(
    <div className="min-h-screen p-20 bg-violetCustom flex flex-col gap-6 justify-center items-center w-screen">
      
      <div className="text-7xl font-semibold text-white">Real People ,</div>
      <div className="text-7xl font-semibold text-white">Real Talks</div>
    
      <TestCards/>

    </div>
  )
}
export default Testimonial;