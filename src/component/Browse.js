import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainComponent from "./MainContainer";
import SeconderyComponent from "./SeconderyComponent";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse=()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

    return(
        <div>
            <Header/>
            {
                showGptSearch ? <GptSearch/> :
                <>
                    <MainComponent/>
                    <SeconderyComponent/>
                </>
            }
        </div>
    )
};


export default Browse;