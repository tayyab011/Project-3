import React,{useEffect} from 'react';
import a from '../Imges/h.jpg';
import b from '../Imges/p8.jpg';
import q1 from '../Imges/q1.jpg';
import q2 from '../Imges/q2.jpg';
import q3 from '../Imges/q3.jpg';
import f1 from '../Imges/f1.jpg';
import f2 from '../Imges/f2.jpg';
import f3 from '../Imges/f3.jpg';
import f4 from '../Imges/f4.jpg';
import AOS from "aos";
import "aos/dist/aos.css";


  
const Aboutus = () => {

 useEffect(() => {
   AOS.init({ duration: 1500 });
 }, []);


    return (
      <div data-theme="light" className=" overflow-hidden">
        <div className="w-full h-96  bg-midnight p-10 text-night">
          <h1 className="text-4xl pb-5" data-aos="fade-up">
            Social Media
          </h1>
          <h6 className="md:w-1/2 w-full" data-aos="fade-up-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            mollitia praesentium illum doloribus, repellat rem reiciendis
            voluptas optio, sint ea quisquam? Aut odit laudantium amet
            voluptatum soluta. Accusantium, officiis minus.
          </h6>
        </div>

        <div className="w-full md:flex flex-wrap">
          <img
            src={a}
            data-aos="flip-right"
            className="md:pl-5 md:py-10  object-cover  md:w-1/2 px-2"
          />
          <div
            className="p-2 pl-5    md:pt-56 shadow-lg md:w-1/2"
            data-aos="fade-left"
          >
            <h1 className="text-2xl">Content Creator</h1>
            <p className="md:w-80 w-full">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              delectus reiciendis consectetur eligendi, quasi excepturi magnam
              culpa facere doloremque iusto!
            </p>

            <h1 className="text-2xl pt-10">+ Details</h1>

            <p className="md:w-80">
              <br />
              <br />
              Lorem
              <br /> ipsum dolor sit amet consectetur adipisicing elit. Quae
              maiores itaque unde beatae distinctio, blanditiis nam velit
              consequuntur perspiciatis. Labore quaerat dolorem sunt debitis
              porro, optio dicta illo consectetur libero.
            </p>
          </div>
        </div>

        <div className="w-full h-96 bg-orange-300 text-center p-16">
          <p data-aos="fade-right">Lorem ipsum dolor sit amet.</p>
          <br />
          <p data-aos="fade-left">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <p data-aos="fade-right">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Placeat, reprehenderit.
          </p>
          <br />
          <button className="btn hover:bg-orange-600 border-2 bg-transparent text-black">
            learn more
          </button>
        </div>
        <div className="w-full md:flex flex-wrap">
          <div
            className="p-8 md:p-5 md:w-1/2 w-full   md:pt-56 shadow-lg "
            data-aos="flip-right"
          >
            <h1 className="text-2xl">Content Creator</h1>
            <p className="md:w-96 w-full">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              delectus reiciendis consectetur eligendi, quasi excepturi magnam
              culpa facere doloremque iusto!
            </p>

            <h1 className="text-2xl pt-10">+ Details</h1>

            <p className="md:w-96">
              <br />
              <br />
              Lorem
              <br /> ipsum dolor sit amet consectetur adipisicing elit. Quae
              maiores itaque unde beatae distinctio, blanditiis nam velit
              consequuntur perspiciatis. Labore quaerat dolorem sunt debitis
              porro, optio dicta illo consectetur libero.
            </p>
          </div>
          <img
            src={b}
            data-aos="fade-up-left"
            className="md:px-5 md:py-10  object-cover  md:w-1/2 w-full px-7"
          />
        </div>

        <div className="w-full md:flex flex-wrap mt-4">
          <div className=" m-2  w-52 h-96 rounded-xl shadow-2xl p-0 mx-auto">
            <div className="h-1/2 w-full bg-midnight  rounded-t-xl"></div>
            <div
              className="h-1/2 w-full bg-yellow-800 relative
             rounded-b-xl"
            >
              <img
                src={q1}
                className="h-11/12 w-36 absolute    bottom-10 left-8"
                data-aos="flip-right"
              />
            </div>
          </div>

          <div className="m-2 w-52 h-96 rounded-xl shadow-2xl  bg-midnight p-0 mx-auto">
            <div className="h-1/2 w-full bg-midnight  rounded-t-xl"></div>
            <div
              className="h-1/2 w-full bg-yellow-800 relative
             rounded-b-xl"
            >
              <img
                src={q2}
                data-aos="flip-left"
                className="h-11/12 w-36 absolute    bottom-10 left-8"
              />
            </div>
          </div>
          <div className="m-2 w-52 h-96 rounded-xl shadow-2xl  bg-midnight p-0 mx-auto">
            <div className="h-1/2 w-full bg-midnight  rounded-t-xl"></div>
            <div
              className="h-1/2 w-full bg-yellow-800 relative
             rounded-b-xl"
            >
              <img
                src={q3}
                data-aos="flip-right"
                className="h-11/12 w-36 absolute    bottom-10 left-8"
              />
            </div>
          </div>
        </div>

        <div className="w-full  md:flex bg-midnight p-2">
          <p className="md:w-1/6 p-5  w-full" data-aos="zoom-in">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            placeat minima vel expedita, quam accusamus perspiciatis nobis?
            Quae, voluptates dolores?
          </p>
          <img
            src={f1}
            className="md:w-1/6 object-cover w-full"
            data-aos="fade-left"
          />
          <img
            src={f2}
            className="md:w-1/6  object-cover w-full"
            data-aos="fade-right"
          />
          <img
            src={f3}
            className="md:w-1/6 object-cover w-full"
            data-aos="flip-down"
          />
          <img
            src={f4}
            className="md:w-1/6 object-cover w-full"
            data-aos="flip-up"
          />
          <p className="md:w-1/6 p-5 w-full" data-aos="fade-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            cum praesentium quam omnis cupiditate quaerat architecto veritatis
            earum est nemo!
          </p>
        </div>
      </div>
    ); 
};

export default Aboutus;
