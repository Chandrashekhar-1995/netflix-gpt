import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer =()=>{
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];
    const {title, overview, id  } = mainMovie;
    // console.log(mainMovie);
    return(
        <div>
            <VideoTitle title={title} overview={overview} />
            <VideoBackground moviesId={id}/>
        </div>
    )
};

export default MainContainer;