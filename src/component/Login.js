import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";

const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);




  const handleSubmitButtonClicked = ()=>{
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  
  }

  const handleToggleBtn = ()=>{
    setLoginForm(!loginForm);
  }

  return (
    <div>
      <Header />
      <div className=" absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="poster"  />
      </div>
      <form className=" w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg" onClick={(e)=>e.preventDefault()}>
      <h1 className=" text-3xl my-5 ">{loginForm ? "Sign In" : "Sign up"}</h1>
        { !loginForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-slate-800 "/>}
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
