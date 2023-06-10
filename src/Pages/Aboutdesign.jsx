import React,{useEffect} from 'react';
import a from '../Imges/h1.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutdesign = () => {


 useEffect(() => {
   AOS.init({ duration: 1500 });
 }, []);

    return (
      <div>
        <div>
          <h1
            className="text-4xl font-bold text-center py-5"
            data-aos="flip-up"
          >
            About Design Studio
          </h1>
          <p className=" text-sm pt-5 text-center px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            inventore odio voluptate. Temporibus doloremque, nihil soluta quae,
            eligendi sit quo recusandae labore nisi libero tempora dolorum modi
            eaque culpa et!
          </p>
          {/*  <div className="w-full flex-wrap md:flex static">
          <div className="w-full pt-12 px-8 md:w-1/2 gap-y-5 text-white z-40 md:left-16 md:pt-5 md:absolute  grid grid-cols-2  sm:gap-x-2 md:gap-x-2 ">
            <p className="md:w-40 lg:w-48 w-40  h-40 bg-midnight">
              <h1 className="text-center text-3xl">Projects</h1>
              <h1 className="text-center text-5xl">100</h1>
            </p>
            <p className="md:w-40 lg:w-48 w-40 h-40 bg-midnight">
              <h1 className="text-center text-3xl">Clients</h1>
              <h1 className="text-center text-5xl">40</h1>
            </p>
            <p className=" md:w-40 lg:w-48  h-40 w-40 bg-midnight">
              <h1 className="text-center text-3xl">Our Team</h1>
              <h1 className="text-center text-5xl">20</h1>
            </p>
            <p className=" w-40 md:w-40 lg:w-48  h-40 bg-midnight">
              <h1 className="text-center text-3xl">Awards</h1>
              <h1 className="text-center text-5xl">76</h1>
            </p>
          </div>

          <div className="w-full md:w-1/2 md:right-48 z-10 sm:px-5  pt-12 md:absolute ">
            <img src={a} alt="" />
          </div>
        </div> */}
          <div className="w-full md:flex flex-wrap md:relative">
            <div className="md:w-1/2 w-full grid grid-cols-2 md:absolute md:left-10 md:gap-x-1 md:gap-y-5 pl-10 pt-5 z-20 gap-y-5 gap-x-5">
              <p
                className="md:w-40 lg:w-48 w-40  h-40 bg-midnight"
                data-aos="fade-right"
              >
                <h1 className="text-center text-3xl">Projects</h1>
                <h1 className="text-center text-5xl">100</h1>
              </p>
              <p
                className="md:w-40 lg:w-48 w-40 h-40 bg-midnight"
                data-aos="fade-left"
              >
                <h1 className="text-center text-3xl">Clients</h1>
                <h1 className="text-center text-5xl">40</h1>
              </p>
              <p
                className=" md:w-40 lg:w-48  h-40 w-40 bg-midnight"
                data-aos="fade-right"
              >
                <h1 className="text-center text-3xl">Our Team</h1>
                <h1 className="text-center text-5xl">20</h1>
              </p>
              <p
                className=" w-40 md:w-40 lg:w-48  h-40 bg-midnight"
                data-aos="fade-left"
              >
                <h1 className="text-center text-3xl">Awards</h1>
                <h1 className="text-center text-5xl">76</h1>
              </p>
            </div>
            <div className="md:w-1/2 w-full pt-24 md:absolute md:right-40 ">
              <img src={a} className="w-full" data-aos="flip-right" />
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="bg-midnight hover:bg-night p-3 hover:text-white rounded-lg shadow-lg mx-auto lg:mt-570px md:mt-500px mt-10">
            learn more
          </button>
        </div>
      </div>
    );
};

export default Aboutdesign;