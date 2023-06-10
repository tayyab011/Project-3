import React,{useEffect} from 'react';
import p10 from '../Imges/p10.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
    return (
      <div data-theme="light">
        <div className="w-full md:flex flex-wrap overflow-hidden">
          <img
            src={p10}
            className="w-full md:w-1/3 object-cover"
            data-aos="fade-left"
          />

          <div
            className="w-full md:w-2/3 grid md:grid-cols-2 grid-cols-1 px-5 py-8 bg-midnight text-white"
            data-aos="fade-right"
          >
            <div>
              <h1
                className="md:text-6xl text-5xl font-extrabold pl-3 "
                data-aos="fade-up"
              >
                Contact
              </h1>
            </div>
            <p
              className="font-extralight text-sm text-night pr-3 pb-16 pt-10"
              data-aos="fade-down"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              voluptatum ipsum incidunt vero alias minima voluptatibus dicta
              illo blanditiis nobis repellat esse ut a Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Blanditiis voluptatem
              accusantium neque ipsa voluptate cumque dolores sapiente nihil,
              aliquam sed.
            </p>
            <div
              className="md:w-1/3 py-3 w-full flex px-2 md:flex-wrap"
              data-aos="fade-up"
            >
              <h4 className="px-2 font-semibold">Open</h4>
              <br />
              <p className="px-1">
                Tuesday-Saturday <br />
                9:00am-9:00pm
              </p>{" "}
              <br />
              <p className="px-1">
                tayyabmd@gmail.com <br />
                123-456=890 <br />
                123-456-789
              </p>
            </div>
            <div className="w-full flex-wrap pt-8" data-aos="fade-up">
              <form action="">
                <h2
                  className="text-4xl font-semibold pb-1
                        "
                >
                  Commercial Requests
                </h2>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b-2 bg-midnight text-night font-light mb-5 p-4 hover:border-b-night border-b-2 focus:ring-0 outline-none transition duration-150 focus:border-b-night placeholder-white"
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b-2 bg-midnight text-night font-light mb-5 p-4 hover:border-b-night border-b-2 focus:ring-0 outline-none transition duration-150 placeholder-white focus:border-b-night"
                />
                <br />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  className=" border-b-2 bg-midnight text-night font-light mb-5 p-2 hover:border-b-night  focus:ring-0 focus:border-b-night outline-none transition duration-150 placeholder-white "
                  placeholder="message"
                ></textarea>
                <button type="submit">
                  <button type='submit' class="fancy">
                    <span class="top-key"></span>
                    <span class="text">Send</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                  </button>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;