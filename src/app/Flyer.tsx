"use client";
import React from "react";
import { useState } from "react";
import { RandomReveal } from "react-random-reveal";

const Flyer = () => {
  const djs = [
    {
      name: "JAG",
    },
    {
      name: "JACC.WAV",
    },
    {
      name: "VICTORIA H",
    },
    {
      name: "AMADO",
    },
    {
      name: "LOUVREZE",
    },
    {
      name: "SNTPB",
    },
    {
      name: "SARA LUNA",
    },
    {
      name: "LUSTPOINTER",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="animate-fade-in ">
      <div className="absolute top-0 left-0 p-5 font-medium ">APRETAITO</div>
      <div className="absolute top-0 right-0 p-5 ">0x00000002</div>
      <div className="absolute top-20 left-0 p-5 ">
        {djs.map((dj, index) => (
          <div
            key={index}
            suppressHydrationWarning
            className="text-xl font-bold"
          >
            <RandomReveal isPlaying duration={4} characters={dj.name} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 right-0 p-5  rounded ">
        <div className="fixed bottom-0 left-0 w-full bg-black h-[90px] p-5">
          <div className="text-right">
            <RandomReveal
              isPlaying
              duration={3}
              characters={"Calle 56 # 3-34, APTO 208"}
            />
          </div>
          <div className="text-right">
            <RandomReveal
              isPlaying
              duration={3}
              characters={"2 JUN, 4AM - ???"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flyer;
