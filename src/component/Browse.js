import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainContainer";
import SeconderyComponent from "./SeconderyComponent";


const Browse=()=>{
    useNowPlayingMovies();

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