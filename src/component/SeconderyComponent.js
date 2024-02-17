import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SeconderyContainer =()=>{
    const movies = useSelector(store => store.movies)
    return(
        <div>
            <MoviesList title=" Now Playing Movies" movies={movies.nowPlayingMovies}/>
            <MoviesList title=" Upcoming" movies={movies.upcomingMovies}/>
            <MoviesList title=" Popular Movies" movies={movies.popularMovies}/>            
            <MoviesList title=" Top rated" movies={movies.topRatedMovies}/>            
        </div>
    )
};

export default SeconderyContainer;