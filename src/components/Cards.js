import undergraduate from '../assets/College.png';
import graduate from '../assets/Graduate.png';
import student from '../assets/s.png';
import Card from "./Card";

const Cards = () =>{
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-white '>
      {/* <div className='flex-col'>
        <Card image={student}/>
        <p className='text-slate-900 text-base'>Student</p>
      </div>
      <div className='flex-col '>
        <Card image={undergraduate} />
        <p className='text-slate-900  text-base'>Undergraduate</p>
      </div>

      <div className='flex-col'>
        <Card image={graduate}/>
        <p className='text-slate-900 text-base'>Graduate</p>
      </div> */}
      
    
      
      <div className='flex gap-12 '>
        
        <div className='border-2 rounded-md h-4/12 flex flex-col justify-center '>
          <div><Card image={student} /></div>
          <div  className='flex justify-center items-center'>
            <input type='checkbox' value='undergraduate'  />
            <label className='text-slate-900 text-base ml-2 font-semibold'>
              Student
            </label>
          </div>
          
          
        </div>

        <div className='border-2 rounded-md h-4/12 flex flex-col justify-center'>
          <Card image={undergraduate} />
          <div className='flex justify-center items-center'>
            <input type='checkbox' value='undergraduate' />
          <label className='text-slate-900  text-base ml-2 font-semibold'>
            Undergraduate
          </label>
          </div>
        </div>

        <div className='border-2 rounded-md h-4/12 flex flex-col justify-center'>
          <Card image={graduate} />
          <div className='flex justify-center items-center'>
            <input type='checkbox' value='graduate' />
            <label className='text-slate-900  text-base ml-2 font-semibold'>
              Graduate
            </label>
          </div>
          
        </div>
        
      </div>
      
    </div>
  )
}
export default Cards;