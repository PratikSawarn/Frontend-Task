import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

export default function Team() {
  return (
    <div className="relative py-20 bg-[#080810] text-white text-center overflow-hidden">
      <MaxWidthWrapper>
        <div className="flex justify-center">
          <div className="relative w-full rounded-full backdrop-blur-sm border-border border-[0.5px] bg-slate-200/10 py-20 z-10 overflow-hidden">
            <div className="relative max-w-2xl mx-auto space-y-10">
              <div className="">
                <h2 className="text-7xl ">20+ Talented Folks</h2>
                <span className="absolute -top-12 left-0">
                  <img src="text-vector.png" className=" rounded-xl h-14" />
                </span>
                <span className="absolute right-0 top-0 font-extralight text-sm px-5 py-1 backdrop-blur-sm border-[0.5px] border-border rounded-full -translate-y-5 rotate-12 overflow-hidden">
                  Inclusive
                </span>
                <span className="absolute left-0 top-16 font-extralight text-sm px-5 py-1 backdrop-blur-sm border-[0.5px] border-border rounded-full -translate-x-7 -rotate-12 overflow-hidden">
                  Fun
                </span>
              </div>
              <p className="opacity-80 font-light ">
                From passion-driven dedication to impactful contribution, we do
                it all here. We are growing and will be excited to hearfrom you!
              </p>
              <button className="px-8 py-2 bg-black font-light rounded-2xl">
                Join our team &rarr;
              </button>
              <span className="absolute right-0 bottom-0 font-extralight text-sm px-5 py-1 backdrop-blur-sm border-[0.5px] border-border rounded-full translate-y-20 rotate-12 overflow-hidden">
                Inclusive
              </span>
              <span className="absolute right-20 bottom-0 font-extralight text-sm px-5 py-1 backdrop-blur-sm border-[0.5px] border-border rounded-full translate-y-20 -rotate-12 overflow-hidden">
                Dynamic
              </span>
              <span className="absolute right-40 bottom-0 font-extralight text-sm px-5 py-1 backdrop-blur-sm border-[0.5px] border-border rounded-full translate-y-20 rotate-12 overflow-hidden">
                Viberant
              </span>
              <span className="absolute right-60 bottom-0 font-extralight text-sm px-5 py-1 backdrop-blur-sm border-[0.5px] border-border rounded-full translate-y-20 -rotate-12 overflow-hidden">
                Inclusive
              </span>
              <span className="absolute right-80 bottom-0 font-extralight text-sm px-5 py-1 backdrop-blur-sm border-[0.5px] border-border rounded-full translate-y-20 -rotate-12 overflow-hidden">
                Inclusive
              </span>
              <span className="absolute left-40 bottom-0 font-extralight text-sm px-5 py-1 backdrop-blur-sm border-[0.5px] border-border rounded-full translate-y-20 rotate-12 overflow-hidden">
                Inclusive
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-20 size-96 rounded-full bg-gradient-to-t from-pink-500 via-red-500 to-[#080810]" />
        <div className="absolute top-0 right-0 translate-x-20 size-96 rounded-full bg-gradient-to-t from-pink-500 via-red-500 to-[#080810]" />
      </MaxWidthWrapper>
    </div>
  );
}
