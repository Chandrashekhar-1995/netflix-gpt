import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer =(moviesId) =>{
    // console.log(moviesId);
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    //fetch Movies Video
    const getMovieVideos = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+moviesId+"/videos?language=en-US" , API_OPTIONS);
        const json = await data.json();
        // console.log(json);
       
         // Filter Trailer Video from all json videos
         const filterData = json.results.filter(video => video.type === "Trailer");
         const trailer = filterData.length ? filterData[0] : json.results[0];
         // console.log(trailer);
         dispatch(addTrailerVideo(trailer));
    };

    useEffect(()=>{
        !trailerVideo && getMovieVideos();;
    },[]);
};

export default useMovieTrailer;