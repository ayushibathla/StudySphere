
const Card = (props) =>{
  let image=props.image;
  return (
    <div className="w-120 h-120 bg-white">
      <img src={image} className="w-56 h-56"/>
    </div>
  )
}
export default Card;
