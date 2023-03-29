import React from "react";
import bg from "./../assets/background.jpg";
import logo from "./../assets/logo.png";
const GetStarted = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bg}')` } }
      className="flex flex-col h-[75vh] md:h-full w-full p-6 text-white text-center md:px-48 backdrop:brightness-50"
    >
      <div className="flex justify-between w-full brightness-200">
        <img src={logo} alt="" className=" h-[30px] w-[110px] md:h-[40px] md:w-[130px] self-start" />
        <div className=" cursor-pointer bg-red-600 h-7 w-18 text-center rounded-md px-2 md:px-3 md:h-8 md:w-22 md:text-lg">
        
          Sign In
        </div>
      </div>
      <div className="my-12 md:space-y-10 pt-32">
        <div className=" font-bold text-3xl my-5 md:text-5xl">
          Unlimited movies, TV shows, and more.
        </div>
        <div className="text-lg font-normal flex flex-col space-y-4 md:text-2xl">
          <div>Plans now start at USD2.99/month. </div>
          <div>
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
        </div>
        <div className="">
            <input className=" outline outline-1 rounded-sm placeholder:p-2 border-gray-50 opacity-60 bg-black placeholder:px-2 h-12 w-full my-5 md:h-16 md:w-[400px] mx-1" type="text" placeholder="Email Address"/>
            <button className="bg-red-600 rounded-sm px-4 py-2 hover:bg-red-500 md:text-2xl md:py-3 mx-1 font-medium">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
