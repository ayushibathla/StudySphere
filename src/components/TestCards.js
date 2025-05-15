import React from "react";
import TestCard from "./TestCard";

const TestCards = () => {
  return(
    <div className=" flex gap-6 m-8 h-full ">
      <div>
        <TestCard para={"Super educational, I learned a lot, professionally, I liked the practical part a lot too, wish to have more sessions with you!"} name="Dixita Das"/>
      </div>
      <div>
        <TestCard para={"Even if it was online, the trainer managed it quite well: he was patient, always open to answer questions, and very knowledgeable. Thanks a lot!"} name="Sankar Kumar"/>
      </div>
      <div>
        <TestCard para={"Great content, good networking with attendees, case studies were useful and gave solid real-life examples"} name="Krishnakumar K"/>
      </div>
      <div>
        <TestCard para={"I really enjoyed all the information. Parts of the masterclass were new for me and parts not, but it's nice to have a masterclass like this to get you up to date again and also hear experiences and questions of other people."} name="Akshita Gupta"/>
      </div>
      <div>
        <TestCard para={"Great content, good networking with attendees, case studies were useful and gave solid real-life examples"} name="Krishnakumar K"/>
      </div>
    </div>
  )
}
export default TestCards;