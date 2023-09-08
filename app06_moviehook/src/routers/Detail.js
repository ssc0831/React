import './MovieView.css';
import { useLocation } from "react-router-dom"
const Detail = () => {
    const location = useLocation();
    console.log({location})
    return (
        <div className="movie__container">
                    <img src={location.state.poster} 
                    alt={location.state.title} title={location.state.title} />
                    <div className="movie__data">
                        <h3 className="movie__title"> app06 {location.state.title}</h3>
                        <h5 className="movie__year">{location.state.year}</h5>
                        <ul className="movie__genres">
                            {
                                location.state.genres.map((genre, index) =>{
                                    return(
                                        <li key={index}>
                                            {genre}    
                                            
                                        </li>
                                    )
                                })
                            }
    
    
                        </ul>
    
                        <p >{location.state.summary}</p>
                        
                    </div>    
    
            </div>
        )
    }
  
  export default Detail;