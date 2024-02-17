import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainComponent from "./MainContainer";
import SeconderyComponent from "./SeconderyComponent";


const Browse=()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();

    return(
        <div>
            <Header/>
            <MainComponent/>
            <SeconderyComponent/>
            {/* 
            Main Conatainer 
                -   Video Back Ground
                -   Title and discription
                -   @2 Buttons
            Second Container
                -   Movies list * n
                -   Movise cards * n
             */}
        </div>
    )
}


export default Browse;