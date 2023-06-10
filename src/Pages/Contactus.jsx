import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import h3 from '../Imges/p2.jpg';

const Contactus = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
    return (
      <div>
        <div className="w-full md:flex  relative z-20">
          <div className="w-full md:w-1/2 pt-16">
            <img
              src={h3}
              className="absolute md:left-72 w-96 object-cover px-8 h-96"
              data-aos="flip-left"
            />
          </div>

          <section
            class="text-white bg-night rounded-lg body-font w-80  mx-auto md:w-1/2 shadow-lg relative absolute top-36 md:mr-16"
            data-aos="flip-right"
          >
            <div class="container px-5 py-3 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-midnight">
                  Contact Us
                </h1>
              </div>

              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-full">
                    <div class="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        class="w-full bg-transparent bg-opacity-50 rounded  border-b-2  border-t-0 border-l-0 border-r-0  border focus:border-b-yellow-500 placeholder-white focus:bg-transparent focus:border-b-3 text-base outline-none text-midnight py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="p-2 w-full">
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        class="w-full bg-transparent bg-opacity-50 rounded border-b-2  border-t-0 border-l-0 border-r-0  border focus:border-b-yellow-500 placeholder-white focus:bg-transparent focus:border-b-3 text-base outline-none text-midnight py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="relative">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your comment"
                        class="w-full bg-transparent bg-opacity-50 rounded  border-b-2  border-t-0 border-l-0 border-r-0  border focus:border-b-yellow-500 placeholder-white focus:bg-transparent focus:border-b-3 text-base outline-none text-midnight py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <button class="flex mx-auto text-white bg-midnight border-0 py-2 px-8 focus:outline-none hover:bg-transparent rounded text-lg">
                      Send 
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </section>
        </div>
        <div
          className="w-full h-52 bg-midnight absolute -mt-96"
          data-aos="fade-up"
          data-aos-duration="4000"
        ></div>
        <br />
        <br />
      </div>
    );
};

export default Contactus;