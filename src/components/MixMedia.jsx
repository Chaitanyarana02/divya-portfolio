import { GoArrowLeft } from "react-icons/go";
import image1 from "../assets/MixMedia/1.png";
import image2 from "../assets/MixMedia/2.png";
import image3 from "../assets/MixMedia/3.png";
import image4 from "../assets/MixMedia/4.png";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const images = [image1, image2, image3, image4];

const MixMedia = () => {
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
    <section className="px-6 md:px-64 pb-16 bg-[#181C14] text-white relative z-10">
      {/* Video */}
      <div className="relative w-full rounded-xl overflow-hidden z-0 py-12">
        <iframe
          src="https://player.vimeo.com/video/1070709110?h=eb7d6482af&amp;title=0&amp;byline=0&amp;portrait=0"
          className="h-[82vh] w-[100%]"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Disappear"
        ></iframe>
      </div>

      {/* Description */}
      <div className="text-[17px] leading-relaxed ">
        {/* Title + Duration */}
        <p className="font-bold text-2xl">Title - Disappear</p>
        <p className="mt-2 text-base">Duration - 00:38</p>

        {/* Narrative */}
        <div className="mt-6 space-y-4 text-base">
          <p>
            "Disappear" holds a personal significance for me, every part of it reflects the feelings
            that generated in me while I witnessed my first film festival — pure cinema, pure emotions.
            It made me come out of my comfort zone and experiment with my narrative.
          </p>
          <p>
            The film is an amalgamation of a person finding solace, being confused, expressing
            emotions in one way or another, in a person or around them.
          </p>
          <p>
            It is made up of videos, some personal moments, and film photographs. I printed every clip
            frame by frame, drew upon it and later scanned them. This is how I delved into multimedia
            animation.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="space-y-12 mt-24 z-10">
        <h3
          className="text-2xl font-semibold mb-12"
          style={{ fontFamily: "BDO Grotesk" }}
        >
          PROCESS
        </h3>
        <div className="grid grid-cols-2 gap-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-md"
            >
              <img
                src={img}
                alt={`process-${index}`}
                className="w-full h-[380px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <hr className="my-16 border-[#ECDFCC]" />
      <div className="flex justify-between items-center">
          <button
            onClick={() => handleClick("works")}
            className="cursor-pointer p-4 rounded-full border border-white text-white hover:bg-black text-4xl transition"
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={() => navigate("/experimental")}
            className="cursor-pointer p-4 rounded-full rotate-180 border border-white text-white hover:bg-black text-4xl transition"
          >
            <GoArrowLeft />
          </button>
        </div>
    </section>
  );
};

export default MixMedia;
