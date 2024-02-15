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
            <VideoBackground moviesId={id}/>
            <VideoTitle title={title} overview={overview} />
        </div>
    )
};

export default MainContainer;