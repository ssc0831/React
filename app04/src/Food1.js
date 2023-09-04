
const Food1 = ({id, name, picture, rating}) => {
    return(
        <div>
        번호 : {id} <br/>
        이름 : {name} <br/>
        사진 : <img src={picture}
        style={{width :"100px", height:"100px"}}
        alt={name} /><br/>
        평점 : {rating} <br/><br/>
        </div>
    )
}
export default Food1;