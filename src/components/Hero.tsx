"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { title } from "process";
import Artists from "./Artists";

export default function Hero() {
  const [view, setView] = useState(0);

  const onArtistClickChange = () => {
    console.log("clicked", view);
    setView((v) => (v >= 2 ? 0 : ++v));
  };

  return (
    <section className="w-full bg-[#080810] text-white">
      <MaxWidthWrapper>
        <div className="w-full py-16 grid grid-cols-3">
          <div className="col-span-2" onClick={onArtistClickChange}>
            {view === 0 && (
              <Artists
                title={artist[0].title}
                image_uri={artist[0].image_url}
              />
            )}
            {view === 1 && (
              <Artists
                title={artist[1].title}
                image_uri={artist[1].image_url}
              />
            )}
            {view === 2 && (
              <Artists
                title={artist[2].title}
                image_uri={artist[2].image_url}
              />
            )}
          </div>
          <div className=" w-min flex items-center  ml-12 ">
            <div className="flex flex-col">
              <h2 className="text-6xl font-medium mb-6">
                <span className="text-gray-400 font-light">Choose from</span>{" "}
                100+ categories
              </h2>
              <p className="text-2xl font-light text-red-500/80">
                Explore all categories &rarr;
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

const artist = [
  {
    id: 1,
    image_url:
      "https://wallpapers.com/images/hd/black-and-white-arijit-singh-solo-performance-still-wh2uxiitq7wp2y1b.jpg",
    title: "Singer",
  },
  {
    id: 2,
    image_url: "https://wallpapercave.com/wp/wp8181866.jpg",
    title: "Comedian",
  },
  {
    id: 3,
    image_url:
      "https://th.bing.com/th/id/OIP.pHZFVI12QU5lI3VSIBN7uwAAAA?rs=1&pid=ImgDetMain",
    title: "Comedian",
  },
];
