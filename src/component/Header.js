import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


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
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
              navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/");
            }
          });
    },[])

    return(
        <div className=" absolute px-8 py-2 w-full bg-gradient-to-b from-black justify-between flex z-10">
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo" />
            {user && <div className="flex  m-4 mx-12">
            <img className="w-12 h-12" alt="user icon" src={user?.photoURL}/>
            <button className=" mx-4 font-bold text-white" onClick={handleSignOut}>Sign out</button>
        </div>}
        </div>
    )
}


export default Header;
