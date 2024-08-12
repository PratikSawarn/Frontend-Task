"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <div className="relative bg-[#080810] py-20 flex justify-center text-center text-slate-50 overflow-hidden">
      <MaxWidthWrapper>
        <div className=" flex justify-center">
          <div className="flex flex-col">
            <h2 className="text-5xl max-w-2xl mx-auto">
              Recent Shows made star-studded via StarClinch
            </h2>
            <div className="pt-20 ">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="">
                    <div className="h-max grid grid-cols-2 gap-x-4">
                      <div className="overflow-hidden flex justify-center">
                        <img
                          className="object-cover max-h-96 rounded-t-full"
                          src="https://wallpapercave.com/wp/wp8181866.jpg"
                        />
                      </div>
                      <div className="flex flex-col my-auto text-left">
                        <h2 className="font-light text-4xl max-w-md">
                          Zakir Khan at the event{" "}
                          <span className="text-slate-500">
                            for an Event hosted
                          </span>{" "}
                          at pune for Meesho
                        </h2>
                        <p className="opacity-80 text-xl pt-6 font-extralight">
                          14 Mar 2023
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="">
                    <div className="h-max grid grid-cols-2 gap-x-4">
                      <div className="overflow-hidden flex justify-center">
                        <img
                          className="object-cover max-h-96 rounded-t-full"
                          src="https://wallpapercave.com/wp/wp8181866.jpg"
                        />
                      </div>
                      <div className="flex flex-col my-auto text-left">
                        <h2 className="font-light text-4xl max-w-md">
                          Zakir Khan at the event{" "}
                          <span className="text-slate-500">
                            for an Event hosted
                          </span>{" "}
                          at pune for Meesho
                        </h2>
                        <p className="opacity-80 text-xl pt-6 font-extralight">
                          14 Mar 2023
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-slate-800 size-12 text-white" />
                <CarouselNext className="bg-slate-800 p-2 size-12 text-white" />
              </Carousel>
            </div>
          </div>
          <span className="absolute left-0 border-border border-[0.5px] backdrop-blur-sm rounded-full -rotate-45 -translate-x-80 py-3 border-opacity-25">
            <marquee scrollamount="30">
              HIGHLIGHT OF TODAY * HIGHLIGHT OF TODAY * HIGHLIGHT OF TODAY *
              HIGHLIGHT OF TODAY * HIGHLIGHT OF TODAY * HIGHLIGHT OF TODAY *
            </marquee>
          </span>
          <motion.span className="absolute bottom-0 right-0  border-border border-[0.5px] backdrop-blur-sm rounded-full -rotate-45 translate-x-80 py-3 border-opacity-25">
            <marquee scrollamount="30" direction="right">
              HIGHLIGHT OF TODAY * HIGHLIGHT OF TODAY * HIGHLIGHT OF TODAY *
              HIGHLIGHT OF TODAY * HIGHLIGHT OF TODAY * HIGHLIGHT OF TODAY *
            </marquee>
          </motion.span>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
