import React,{useEffect} from 'react';

import bg1 from "../Imges/bg1.jpg";
import bg2 from '../Imges/bg2.jpg'
import p2 from '../Imges/p2.jpg'
import p1 from '../Imges/p1.jpg'
import p4 from '../Imges/p4.jpg'
import p5 from '../Imges/p5.jpg'
import p6 from '../Imges/p6.jpg'
import AOS from'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import Aboutdesign from './Aboutdesign';
import Contactus from './Contactus';

const NewHome = () => {

  useEffect(()=>{
AOS.init({duration: 1500})
},[])
    return (
      <div className="overflow-hidden" data-theme="light">
        <header id="top">
          <img src={bg1} alt="" id="bgi1" />
          <div id="textbgi">
            <h1 className="text-5xl md:text-6xl w-full p-12 md:p-24 leading-16 text-white">
              Visit our Inspirational Showrooms{" "}
              <font className="font-extrabold text-yellow-600">TODAY</font>!
            </h1>
            <p className="text-white px-12  md:px-28  text-medium w-full md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo
              ad ipsa rerum delectus? Voluptatibus suscipit quisquam eaque odio
              impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Atque quas alias error animi maxime soluta voluptatum, velit
              fugiat, iusto praesentium labore neque quia nam laudantium
              reiciendis expedita perferendis dolore pariatur?
            </p>
            <Link>
              <button className="c-button c-button--gooey ">
                {" "}
                Read more
                <div class="c-button__blobs ">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>
        </header>
        <main>
          <section>
            <div className="w-full flex-wrap md:flex py-14" id="he">
              <div
                className="w-full md:w-1/2 p-12 lg:p-28  "
                data-aos="fade-up"
              >
                <h2 className="text-4xl font-extrabold text-yellow-600">
                  About building our company
                </h2>
                <br />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima laboriosam doloribus tempora eos beatae quae nihil
                  pariatur sunt fugiat amet dolorum adipisci ratione suscipit
                  quibusdam libero ad nemo laudantium officia nostrum sapiente,
                  itaque at accusantium illo alias! Enim fugit, expedita
                  necessitatibus voluptas sint libero tempora vel, minima
                  dolores dolorem ipsum.
                </p>
                <Link>
                  <button class="cta">
                    <span>Read more</span>
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-1/2  relative mx-auto justify-center ">
                <div
                  className=" absolute md:top-14 md:left-10 top-6 left-16"
                  id="bgc1"
                  data-aos="fade-right"
                ></div>
                <div
                  className=" absolute md:top-14 md:left-6 top-6 left-16"
                  id="bgc"
                  data-aos="fade-left"
                ></div>
                <img
                  src={p1}
                  alt=""
                  className="absolute md:top-4 md:left-12 lg:left-28 top-2 left-24"
                  id="p1"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="w-full flex-wrap h-screen md:flex pt" id="he">
              <div className="w-full h-1/2 md:w-1/2 md:h-full relative">
                <div
                  className=" absolute md:top-14 md:left-10 top-6 left-16"
                  id="bgc1"
                  data-aos="fade-left"
                ></div>
                <div
                  className=" absolute md:top-14 md:left-6 top-6 left-16"
                  id="bgc"
                  data-aos="fade-right"
                ></div>
                <img
                  src={p2}
                  alt=""
                  className="absolute md:top-4 md:left-12 lg:left-28 top-2 left-24"
                  id="p1"
                  data-aos="fade-up"
                />
              </div>
              <div
                className="w-full  md:w-1/2 md:h-full p-10"
                data-aos="fade-up"
              >
                <p className="font-extralight md:text-2xl   text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  rem, expedita quidem consequatur optio corporis suscipit omnis
                  reprehenderit cupiditate mollitia!
                </p>
                <p className="md:text-medium text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  atque commodi minus consequatur eligendi soluta quidem
                  reprehenderit veniam, facere vel blanditiis itaque assumenda
                  laudantium iste exercitationem numquam nam nesciunt ad!
                  Deleniti neque iusto explicabo natus aspernatur, beatae
                  molestiae, voluptas harum incidunt odit velit, aliquam
                  delectus iure itaque. Quas, sed ea.
                </p>
                <Link>
                  <button class="cta">
                    <span>Read more</span>
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <article className="">
          <div className="w-full h-screen flex-wrap md:flex " id="carp">
            <img src={bg2} alt="" id="cari" />

            <div className="w-full md:w-3/4 h-full" id="cardi">
              <section class="text-white body-font">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
                    <h3
                      class="text-3xl md:text-6xl font-bold title-font text-white"
                      data-aos="fade-right"
                    >
                      WE DESIGN AND DELIVER
                      <font className="text-yellow-400 font-extrabold">
                        {" "}
                        BEAUTIFUL
                      </font>{" "}
                      HOMES
                    </h3>
                  </div>
                  <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                      <div class="flex rounded-lg h-full bg-transparent p-8 flex-col">
                        <div class="flex items-center mb-3">
                          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent text-white flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <h2 class="text-white text-lg title-font font-medium">
                            Shooting Stars
                          </h2>
                        </div>
                        <div class="flex-grow">
                          <p class="leading-relaxed text-base">
                            Blue bottle crucifix vinyl post-ironic four dollar
                            toast vegan taxidermy. Gastropub indxgo juice
                            poutine.
                          </p>
                          <a class="mt-3 text-yellow-400 inline-flex items-center">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                      <div class="flex rounded-lg h-full bg-transparent p-8 flex-col">
                        <div
                          class="flex items-center mb-3"
                          data-aos="flip-down"
                        >
                          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent text-white flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <h2 class="text-white text-lg title-font font-medium">
                            The Catalyzer
                          </h2>
                        </div>
                        <div class="flex-grow">
                          <p class="leading-relaxed text-base">
                            Blue bottle crucifix vinyl post-ironic four dollar
                            toast vegan taxidermy. Gastropub indxgo juice
                            poutine.
                          </p>
                          <a class="mt-3 text-yellow-400 inline-flex items-center">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                      <div class="flex rounded-lg h-full bg-transparent p-8 flex-col">
                        <div class="flex items-center mb-3">
                          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent text-white flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="6" cy="6" r="3"></circle>
                              <circle cx="6" cy="18" r="3"></circle>
                              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                          </div>
                          <h2 class="text-white text-lg title-font font-medium">
                            Neptune
                          </h2>
                        </div>
                        <div class="flex-grow">
                          <p class="leading-relaxed text-base">
                            Blue bottle crucifix vinyl post-ironic four dollar
                            toast vegan taxidermy. Gastropub indxgo juice
                            poutine.
                          </p>
                          <a class="mt-3 text-yellow-400 inline-flex items-center">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"></h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src={p4}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-900 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 class="title-font text-lg font-medium text-yellow-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p class="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src={p5}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-green-900 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 class="title-font text-lg font-medium text-yellow-900 mb-3">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src={p6}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-green-900 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 class="title-font text-lg font-medium text-yellow-900 mb-3">
                      The 400 Blows
                    </h1>
                    <p class="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Aboutdesign />
        <Contactus />
      </div>
    );
};

export default NewHome;