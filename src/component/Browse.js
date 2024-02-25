import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./gpt/GptSearchPage";
import MainContainer from "./MainContainer"
import SeconderyContainer from "./SeconderyContainer"

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
                showGptSearch ? <GptSearchPage/> :
                <>
                    <MainContainer/>
                    <SeconderyContainer/>
                </>
            }
        </div>
    )
};


export default Browse;