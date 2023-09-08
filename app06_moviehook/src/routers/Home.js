import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Home.css'
import Movie from '../components/Movie';


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = () => {
        axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
            .then((res) => {
                console.log("res : ", res);
                setMovies(res.data.data.movies);
                setLoading(false);
            });
    };

    // componentDidMount와 같은 역할을 하는 useEffect
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <section className='container'>
            {isLoading ? (
                <div className="loader">
                    <span>isLoading</span>
                </div>
            ) : (
                <div className='movies'>
                    {movies.map((movie) => (
                        // 사진, title, year, genres, summary
                        <Movie
                            key={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Home;