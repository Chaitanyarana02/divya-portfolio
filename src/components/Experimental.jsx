import { GoArrowLeft } from "react-icons/go";
import cardImage from "../assets/images/card1.jpg";
import image1 from "../assets/MixMedia/1.png";
import image2 from "../assets/MixMedia/2.png";
import image3 from "../assets/MixMedia/3.png";
import image4 from "../assets/MixMedia/4.png";

import showcaseVideo from "../assets/videos/clone1.mp4";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    image1,
    image2,
    image3,
    image4
];

const Experimental = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
      const handleClick = (section) => {
        if (location.pathname === "/") {
          scroller.scrollTo(section, {
            duration: 500,
            smooth: true,
            offset: -80,
          });
        } else {
          navigate("/", { state: { scrollTo: section } });
        }
      };
    return (
        <section className="px-6 md:px-64 py-16 bg-[#181C14] text-white ">
            <div
                className="relative w-full rounded-xl overflow-hidden bg-black"
            >
                <iframe src="https://player.vimeo.com/video/1070711947?h=b6184a16de&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="h-[82vh] w-[100%]" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="KYA MAIN SUNDAR LAG RAHA HOON"></iframe>
            </div>

            <div className="text-base leading-relaxed font-serif text-[#ECDFCC] mt-10">
                <p className="font-bold flex items-center justify-between"><span> Title - पहचा नो ’</span> <span>--DOP, Director, Editor</span></p>
                <p className="mt-1">Duration - 02 : 41 mins</p>
                <div className="mt-12 space-y-1">
                    <p>
                        ‘Pehchaano’ quite literally translates to ‘recognize’ or ‘find something’. This title provokes many emotions,
                        people often say they just want to leave everything and ‘disappear’ but deep down all they really want is
                        to be found by somebody, feel validated and known.
                    </p>

                    <p>
                        I explored different narratives through both the mediums, sound and visual . When you focus only on
                        the visuals , there’s a sense of particular idea that goes along . Contradictory to this is my audio
                        narrative , I made an ambience of a person sitting and listening to radio , he listens to a lot of different
                        people, different emotions mainly sorrow , fury , contentment , basically he is listening to a bunch of
                        people longing for somebody’s ear .
                    </p>
                </div>
            </div>

            <hr className="my-18 border-[#ECDFCC]" />
            <div className="flex justify-between items-center">
                <button
                    onClick={() => handleClick("works")}
                    className="cursor-pointer p-4 rounded-full border border-white text-white hover:bg-black text-4xl transition"
                >
                    <GoArrowLeft />
                </button>
                <button
                    onClick={() => navigate("/film-photography")}
                    className="cursor-pointer p-4 rounded-full rotate-180 border border-white text-white hover:bg-black text-4xl transition"
                >
                    <GoArrowLeft />
                </button>
            </div>
        </section>
    );
};

export default Experimental;
