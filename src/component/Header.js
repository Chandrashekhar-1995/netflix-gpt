import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";
import { LOGO } from "../utils/constants";
import { SUPPORT_LANGUAGE } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";


const Header=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user =useSelector(store => store.user);     
    const handleSignOut = ()=>{
                signOut(auth).then(() => {
                }).catch((error) => {
                    navigate("/error")
                });
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
              navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/");
            }
          });
          return ()=> unsubscribe();
    },[]);

    const handleGptSearchClick = ()=>{
      //toggle my GPT Page
      dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) =>{
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));
    }  

    return(
        <div className=" absolute px-8 py-2 w-full bg-gradient-to-b from-black justify-between flex z-10">
            <img className="w-44" src={LOGO}  alt="logo" />
            {user && <div className="flex m-4 mx-12">
            <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguageChange}>
              {SUPPORT_LANGUAGE.map((lang)=>(<option key={lang.identifier} value={lang.identifier} >{lang.name}</option>))}
            </select>
            <button className=" py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>
            <img className="w-12 h-12" alt="user icon" src={user?.photoURL}/>
            <button className=" mx-4 font-bold text-white" onClick={handleSignOut}>Sign out</button>
        </div>}
        </div>
    )
}


export default Header;
