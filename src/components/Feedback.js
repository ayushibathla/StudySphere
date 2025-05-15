import React from "react";
import TestCards from "./TestCards";
const Feedback = () => {
  return(
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className="text-8xl font-semibold">Real People ,</div>
      <div className="text-8xl font-semibold">Real Talks</div>
      </div>
      <TestCards/>
    </div>
  )
}
export default Feedback;