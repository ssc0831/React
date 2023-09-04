const Food = ({food}) => {
    
    const {id, name, rating, image}= food;
    return(
        <div>
        번호 : {id} <br/>
        이름 : {name} <br/>
        사진 : <img src={image}
        style={{width :"100px", height:"100px"}}
        alt={name} /><br/>
        평점 : {rating} <br/><br/>



        {/* 번호 : {food.id} <br/>
        이름 : {food.name} <br/>
        사진 : <img src={food.image}
        style={{width :"100px", height:"100px"}}
        alt={food.name} /><br/>
        평점 : {food.rating} <br/><br/> */}
        </div>
    )
}
export default Food;