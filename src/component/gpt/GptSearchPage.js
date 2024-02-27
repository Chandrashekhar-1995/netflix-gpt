import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { POSTER } from "../../utils/constants";

const GptSearchPage = ()=>{
    return(
        <div>
        <div className="fixed -z-10">
        <img className="h-screen object-cover" src={POSTER} alt="poster"  />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
    )
};

export default GptSearchPage;