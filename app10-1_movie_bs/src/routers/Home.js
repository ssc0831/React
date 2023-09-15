import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Movie from "../components/Movie";


const Home = () =>{
    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(true)
    const getMovies = () =>{
        axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
        .then((res=>{
            console.log(res.data)
            setMovies(res.data.data.movies)
            setLoading(false)
        }))
    } 
    useEffect(()=>{
        getMovies();
    },[])

 
    return(
        <Container>
        {
            isLoading ? (
                <div className="loader">
                    <span>isLoading</span>
                </div>) : (
                    <Row >
             
                    {
                     movies.map((movie) => {
                        return (
                            <Col md = {4} key={movie.id}>
                         <Movie 
                        year = {movie.year}
                        title = {movie.title}
                        summary ={movie.summary}
                        poster ={movie.medium_cover_image}
                        genres = {movie.genres}
                        />
                        </Col>
                        )
                    })
                    }
                    {
                        
                    }
       
                </Row>
            )
        }
 </Container> 
   )
}
export default Home;