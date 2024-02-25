import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser} from "../store/userSlice";
import { AVATAR_URL, POSTER } from "../utils/constants";

const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()


  const handleSubmitButtonClicked = ()=>{
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;


    if(!loginForm){
      //Sign up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
             // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL:AVATAR_URL })
        .then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        }).catch((error)=> {
          setErrorMessage(error.message)
        });       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    }
    else {
            // Sign in Logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+ "-" +errorMessage);
            });
        }

  
  }

  const handleToggleBtn = ()=>{
    setLoginForm(!loginForm);
  }

  return (
    <div>
      <Header />
      <div className=" absolute">
        <img src={POSTER} alt="poster"  />
      </div>
      <form className=" w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg" onClick={(e)=>e.preventDefault()}>
      <h1 className=" text-3xl my-5 ">{loginForm ? "Sign In" : "Sign up"}</h1>
        { !loginForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-slate-800 "/>}
        <input type="text" ref={email} placeholder="Email" className="p-4 my-4 w-full bg-slate-800 "/>
        <input type="text" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-slate-800"/>
        {errorMessage}
        <button className="p-4 my-4 bg-red-700 w-full " onClick={handleSubmitButtonClicked}>{loginForm ? "Sign In" : "Sign up"}</button>
        <div className="flex"><p>{loginForm ? "New to Netflix" : "Alredy have an account"} ? </p><p className=" px-2 font-bold cursor-pointer" onClick={handleToggleBtn}>{loginForm ? "Sing up now" : "Login now"}</p></div>
      </form>
    </div>
  );
};

export default Login;
