import { useSelector } from "react-redux";
import MoviesList from "../MoviesList";

const GptMovieSuggestion = ()=>{
    const {moviesName, movieResults } = useSelector(store=> store.gpt);
    if(!moviesName) return null;
    return(
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
        {moviesName.map((movieName,index)=><MoviesList key={movieName} title={movieName} movies={movieResults[index]}/>)}
        </div>        
        </div>
    )
};

export default GptMovieSuggestion;