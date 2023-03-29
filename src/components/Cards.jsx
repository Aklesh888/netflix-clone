import React from "react";
import img from "./../assets/background.jpg";
import tv from './../assets/tv.png'
import kids from './../assets/kids.png'
import mobile from './../assets/movies.jpg'


const Card = (props) => {
  return (
    <div>
      <div className="pt-10 pb-12 my-2 space-y-5 bg-black text-white text-center flex flex-col justify-center items-center md:hidden">
        <div className=" text-2xl font-bold md:text-4xl">{props.title}</div>
        <div className="flex px-10 space-y-5 flex-col md:flex-row justify-center items-center md:text-left">
          <div className=" text-xl md:text-2xl">{props.description}</div>
          <div className="">
            <img src={props.img} alt="" className="h-[150px] w-[300px] " />
          </div>
        </div>
      </div>
      <div className="hidden font-medium md:flex my-3 text-white pt-[128px] space-x-10 pb-12 px-32 space-y-5 bg-black justify-between">
        <div className={`flex flex-row ${props.className}`}>
          <div className=" flex flex-col space-y-5">
            <div className="md:text-5xl font-extrabold">{props.title}</div>
            <div className="text-2xl font-normal">{props.description}</div>
          </div>
          <img className="md:h-[300px] md:w-[600px] mx-4" src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex flex-col bg-zinc-800">
      <div className="">
        <Card
          title="Enjoy your TV."
          description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          img={tv}
        />
        <Card
          className="flex-row-reverse"
          title="Download your shows to watch offline."
          description="Save your favorites easily and always have something to watch."
          img={mobile}
        />
        <Card
          title="Watch Everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV. "
          img={img}
        />
        <Card
          title="Create profiles for kids."
          description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership.          "
          img={kids}
        />
      </div>
    </div>
  );
};

export default Cards;
