import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { changeLanguage } from "../store/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { addUser, removeUser } from "../store/userSlice";
import {toggleGptSearchView, clearGptSearchPage} from "../store/gptSlice";

const Header=()=>{
    const dispatch =useDispatch();
    const navigate = useNavigate();


    const user = useSelector((store)=> store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
      };

    const handleGptSearchClick = () =>{
        // console.log("handleGptSearchClick BTN Clicked");
        dispatch(toggleGptSearchView());

        if(showGptSearch)  dispatch(clearGptSearchPage())
    };

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            navigate("/error");
          });
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
    
        // Unsiubscribe when component unmounts
        return () => unsubscribe();
      }, []);

    return(
        <div className=" absolute px-8 py-2 w-full bg-gradient-to-b from-black justify-between flex z-10">
            <img className="w-44" src={LOGO}  alt="logo" />
            {user && <div className="flex m-4 mx-12">
            {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
            <button className=" py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
            <img className="w-12 h-12" alt="user icon" src={user?.photoURL}/>
            <button className=" mx-4 font-bold text-white" onClick={handleSignOut}>Sign out</button>
        </div>}
        </div>
    )
}


export default Header;
