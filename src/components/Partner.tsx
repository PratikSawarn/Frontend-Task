import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Partner() {
  return (
    <div className="py-16 bg-[#080810] text-slate-100">
      <MaxWidthWrapper>
        <div className="text-center">
          <h2 className="text-5xl font-light ">Meet Our StarClinch Squads</h2>
          <div className="relative flex justify-center pt-60">
            <div
              className="h-[400px] w-[800px] bg-indigo-900/10  border-2 border-[#212145] border-opacity-30 border-b-0 rounded-t-full overflow-hidden"
              style={{ boxShadow: "inset 0px 20px 40px rgba(0, 0, 0, 1)" }}
            >
              <div className="absolute bottom-20 right-[30%]">
                <div className="max-w-md text-center">
                  <h2 className="text-4xl font-light">Design Dynamos</h2>
                  <p className="text-sm font-light opacity-60 mt-6">
                    The Artist behind the visuals. These design superheroes
                    bring ideas to life, painting our projects with creativity
                    and Imagination.
                  </p>
                  <p className="mt-6 text-sm font-medium text-emerald-500">
                    Our Design team is growing <a>Apply now</a>
                  </p>
                </div>
              </div>
              <div className="absolute right-[42%] top-1/4">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <div className="h-40 w-40 rounded-xl overflow-hidden">
                        <img className="object-cover" src="teams.jpeg" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>

                  <CarouselPrevious className="bg-transparent" />
                  <CarouselNext className="bg-transparent" />
                </Carousel>
              </div>
              <span className="absolute bottom-0 left-20">
                <div className="h-28 w-28 overflow-hidden rounded-full opacity-25">
                  <img className="object-cover" src="teams.jpeg" />
                </div>
              </span>
              <span className="absolute bottom-0 right-20">
                <div className="h-28 w-28 overflow-hidden rounded-full opacity-25">
                  <img className="object-cover" src="teams.jpeg" />
                </div>
              </span>
              <span className="absolute bottom-56 left-[20%]">
                <div className="h-28 w-28 overflow-hidden rounded-full opacity-25">
                  <img className="object-cover" src="teams.jpeg" />
                </div>
              </span>
              <span className="absolute bottom-56 right-[20%]">
                <div className="h-28 w-28 overflow-hidden rounded-full opacity-25">
                  <img className="object-cover" src="teams.jpeg" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
