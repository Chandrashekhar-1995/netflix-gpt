import MovieCards from "./MovieCards";

const MoviesList =({title, movies})=>{
    if (!movies) return;
    return(
        <div className="flex overflow-x-scroll">
            <div>
                {title}
                    <div className="flex">
                        {movies.map((movie)=>(
                        <MovieCards key={movie.id} posterPath={movie.poster_path}/>
                        )
                        )}
                    </div>
            </div>
        </div>
    )
};

export default MoviesList;