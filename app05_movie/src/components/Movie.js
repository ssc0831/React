import { Component } from "react";

class Movie extends Component{
    render(){
        const {title, year, summary, poster, genres} = this.props
        return (
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                
                <div>
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{title}</h5>
                    
                    <p>{summary.slice(0,100)}...</p>
                </div>

            </div>
        )
    }
}
export default Movie;