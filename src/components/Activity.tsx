import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Activity() {
  return (
    <div className="py-32 bg-[#080810] text-slate-100">
      <MaxWidthWrapper>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-20">
            {/* rows for every activity */}
            <div className="grid justify-items-start ">
              <div className="flex flex-row gap-x-12">
                <div className="flex items-end max-w-xs">
                  <h2 className="text-2xl font-light text-center  ">
                    Late Night Maggie <br />
                    Party for the boost
                  </h2>
                </div>
                <div>
                  <img
                    className="w-72 object-cover rounded-2xl rotate-12 hover:-rotate-2 transition ease-in-out delay-100 duration-1000"
                    src="https://wallpapers.com/images/hd/black-and-white-arijit-singh-solo-performance-still-wh2uxiitq7wp2y1b.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="grid justify-items-end  ">
              <div className="flex flex-row gap-x-12">
                <div className="flex items-end max-w-xs">
                  <h2 className="text-2xl font-light text-center  ">
                    Late Night Maggie <br />
                    Party for the boost
                  </h2>
                </div>
                <div>
                  <img
                    className="w-72 object-cover rounded-2xl rotate-12 hover:-rotate-2 transition ease-in-out delay-100 duration-1000"
                    src="https://wallpapers.com/images/hd/black-and-white-arijit-singh-solo-performance-still-wh2uxiitq7wp2y1b.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="grid justify-items-start ">
              <div className="flex flex-row gap-x-12">
                <div className="flex items-end max-w-xs">
                  <h2 className="text-2xl font-light text-center  ">
                    Late Night Maggie <br />
                    Party for the boost
                  </h2>
                </div>
                <div>
                  <img
                    className="w-72 object-cover rounded-2xl rotate-12 hover:-rotate-2 transition ease-in-out delay-100 duration-1000"
                    src="https://wallpapers.com/images/hd/black-and-white-arijit-singh-solo-performance-still-wh2uxiitq7wp2y1b.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="grid justify-items-end">
              <div className="flex flex-row gap-x-12">
                <div className="flex items-end max-w-xs">
                  <h2 className="text-2xl font-light text-center  ">
                    Late Night Maggie <br />
                    Party for the boost
                  </h2>
                </div>
                <div>
                  <img
                    className="w-72 object-cover rounded-2xl rotate-12 hover:-rotate-2 transition ease-in-out delay-100 duration-700"
                    src="https://wallpapers.com/images/hd/black-and-white-arijit-singh-solo-performance-still-wh2uxiitq7wp2y1b.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
