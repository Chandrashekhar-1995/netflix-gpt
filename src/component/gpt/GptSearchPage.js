import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { POSTER } from "../../utils/constants";

const GptSearchPage = ()=>{
    return(
        <div>
        <div className=" absolute -z-10">
        <img src={POSTER} alt="poster"  />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
    )
};

export default GptSearchPage;