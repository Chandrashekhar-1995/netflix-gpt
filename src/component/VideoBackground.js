import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground =({moviesId})=>{
    // console.log(moviesId);
   useMovieTrailer(moviesId);
   const trailerVideo = useSelector(store=> store.movies?.trailerVideo);
   console.log(trailerVideo);
    return(
        <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerVideo.key+"?si=tBmNwCdUzvCTcrA6?&autoplay=1&mute=1"}
            title="YouTube video player" frameorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>

        </div>
    )
};

export default VideoBackground;