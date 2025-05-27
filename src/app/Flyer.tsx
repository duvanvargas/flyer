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
    <div className="animate-fade-in">
      <div className="absolute top-0 left-0 p-5 font-medium">APRETAITO</div>
      <div className="absolute top-0 right-0 p-5">0x00000002</div>
      <div className="absolute top-20 left-0 p-5">
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
      <div className="absolute bottom-0 right-0 p-5">
        <RandomReveal
          isPlaying
          duration={3}
          characters={"Calle 56 # 3-34, APTO 208"}
        />
      </div>
      <div className="absolute bottom-10 right-0 p-5">
        <RandomReveal isPlaying duration={3} characters={"2 JUN, 5AM - ???"} />
      </div>
    </div>
  );
};

export default Flyer;
