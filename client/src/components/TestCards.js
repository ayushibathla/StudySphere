import React from "react";
import TestCard from "./TestCard";

const TestCards = () => {
  return(
    <div className=" flex gap-6 m-8 h-full items-center">
      <div><button><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/double-left.png" alt="double-left"/></button></div>
      <div>
        <TestCard para={"Super educational, I learned a lot, professionally, I liked the practical part a lot too, wish to have more sessions with you!"} name="Dixita Das"/>
      </div>
      <div>
        <TestCard para={"Even if it was online, the trainer managed it quite well: he was patient, always open to answer questions, and very knowledgeable."} name="Varun Chugh"/>
      </div>
      <div>
        <TestCard para={"Great content, good networking with attendees, case studies were useful and gave solid real-life examples.Thankyou!"} name="Krish Arora"/>
      </div>
      <div>
        <TestCard para={"I really enjoyed all the information. Parts of the masterclass were new for me and parts not, but it's nice to have a masterclass."} name="Akshit Gupta"/>
      </div>
      <div>
        <TestCard para={"Great content, good networking with attendees, case studies were useful and gave solid real-life examples. Thankyou!"} name="Krishnakumar"/>
      </div>

      <div><button><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/double-right.png" alt="double-left"/></button></div>
    </div>
  )
}
export default TestCards;