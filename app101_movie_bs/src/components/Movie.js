
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import './Movie.css'
import './card.css'
const Movie = ({title,year,summary,poster,genres}) =>{
    const navigate = useNavigate();
    const gotoDetail = () => {
        navigate("/detail", {
            state: {
                year,title,summary,poster,genres
            }
        });
    };
return(
    


    <Card className='cardList'>
      <Card.Img variant="top" src={poster} alt={title} title={title} className='card-img-top' />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>
            
        <p>{summary.slice(0, 100)}...</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">출시 년도 : {year}년 <br/> 
        장르  {
                            genres.map((genre,index)=>{
                                return(
                                    <li key={index}>
                                          {genre}</li>
                                )
                            })
                           
                        }</small>
      </Card.Footer>
      <Nav.Link href="/detail"><Button variant="info" onClick={gotoDetail}>상세보기</Button></Nav.Link>
      
    </Card>
 

 
)
}
export default Movie;