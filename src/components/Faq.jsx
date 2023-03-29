import React, { useState } from "react";

const Question = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="text-white px-4 text-left md:mx-24 flex flex-col"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="bg-zinc-800 py-2 my-1 text-lg px-3 hover:bg-zinc-500 transition-all md:text-2xl md:py-6 cursor-pointer">
        {props.question}
      </div>
      <div
        className={`bg-zinc-800 text-md md:text-2xl px-3 transition-all duration-100 overflow-hidden py-6 ${
          open ? "h-auto" : "hidden"
        }`}
      >
        {props.description}
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="text-center space-y-2 bg-black text-white pb-16">
      <div className=" py-8 font-bold text-3xl md:text-5xl">
        Frequently Asked Questions
      </div>
      <Question
        question="What is Netflix?"
        description="Netflix is a streaming service that offers a wide variety of award-winning 
        TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want without a single commercial – all for one 
        low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <Question
        question="How much does Netflix cost?"
        description="Netflix is a streaming service that offers a wide variety of award-winning 
        TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want without a single commercial – all for one 
        low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <Question
        question="Where can I watch?"
        description="Netflix is a streaming service that offers a wide variety of award-winning 
        TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want without a single commercial – all for one 
        low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <Question
        question="How do I cancel?"
        description="Netflix is a streaming service that offers a wide variety of award-winning 
        TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want without a single commercial – all for one 
        low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <Question
        question="What can I watch on Netflix"
        description="Netflix is a streaming service that offers a wide variety of award-winning 
        TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want without a single commercial – all for one 
        low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <Question
        question="Is Netflix good for kids"
        description="Netflix is a streaming service that offers a wide variety of award-winning 
        TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want without a single commercial – all for one 
        low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <div className="">
        <div className="text-lg py-5 md:text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <input
          className="outline outline-1 rounded-sm placeholder:p-2 border-gray-50 opacity-60 bg-black placeholder:px-2 h-12 w-full my-5 md:h-16 md:w-[400px] px-1"
          type="text"
          placeholder="Email Address"
        />
        <button className="bg-red-600 rounded-sm px-4 py-2 hover:bg-red-500 md:text-2xl md:py-3 mx-1 font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Faq;
