import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground =({moviesId})=>{
    // console.log(moviesId);
    //fetch Movies Video
    const getMoviesVideo = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+moviesId+"/videos?language=en-US" , API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        // Filter Trailer Video from all json videos
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
    }

    useEffect(()=>{
        getMoviesVideo();
    },[]); 
    return(
        <div>
            Trailer
        </div>
    )
};

export default VideoBackground;