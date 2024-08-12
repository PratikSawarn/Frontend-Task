import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function Albums() {
  return (
    <div className="py-16 bg-[#080810]">
      <div
        className="h-screen border-2 border-[#212145] border-opacity-60 border-b-0 rounded-tl-full rounded-tr-full overflow-hidden "
        style={{ boxShadow: "inset 0px 20px 40px rgba(0, 0, 0, 1)" }}
      >
        <MaxWidthWrapper>
          <div className=" max-w-full px-16 overflow-hidden">
            <div className=" p-10 ">
              <Tabs
                defaultValue="photos"
                className="flex flex-col justify-center"
              >
                <TabsList className="w-max h-max p-2 bg-[#0E0E19] mx-auto space-x-3">
                  <TabsTrigger
                    value="photos"
                    className="px-8 py-4 rounded-xl bg-[#191922] text-white "
                  >
                    Photos
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    className="px-8 py-4 rounded-xl bg-[#191922] text-white"
                  >
                    Videos
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="photos" className="mt-16">
                  <div className="grid grid-cols-4 gap-4">
                    {photos?.map((photos) => (
                      <div
                        key={photos.id}
                        className={`rounded-xl overflow-hidden ${
                          photos.id === 1 || photos.id === 3
                            ? "rounded-tl-full rounded-tr-full rounded-bl-full"
                            : ""
                        }`}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={photos.photo}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="videos">
                  <div className="mt-28">
                    <Carousel>
                      <CarouselContent>
                        <CarouselItem className="basis-1/3">
                          <div className=" rounded-xl overflow-hidden">
                            <img
                              className="object-cover"
                              src="https://th.bing.com/th/id/OIP.pHZFVI12QU5lI3VSIBN7uwAAAA?rs=1&pid=ImgDetMain"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                          <div className=" rounded-xl overflow-hidden">
                            <img
                              className="object-cover"
                              src="https://th.bing.com/th/id/OIP.pHZFVI12QU5lI3VSIBN7uwAAAA?rs=1&pid=ImgDetMain"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                          <div className=" rounded-xl overflow-hidden">
                            <img
                              className="object-cover"
                              src="https://th.bing.com/th/id/OIP.pHZFVI12QU5lI3VSIBN7uwAAAA?rs=1&pid=ImgDetMain"
                            />
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                    </Carousel>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

const photos = [
  {
    id: 1,
    photo:
      "https://www.dreampirates.in/actress/pimg/14-03-2020-3491-katrina-kaif.jpg",
  },
  {
    id: 2,
    photo:
      "https://wallpapers.com/images/hd/black-and-white-arijit-singh-solo-performance-still-wh2uxiitq7wp2y1b.jpg",
  },
  {
    id: 3,
    photo:
      "https://www.dreampirates.in/actress/pimg/14-03-2020-3491-katrina-kaif.jpg",
  },
  {
    id: 4,
    photo: "https://wallpapercave.com/wp/wp8181866.jpg",
  },
  {
    id: 5,
    photo:
      "https://th.bing.com/th/id/OIP.pHZFVI12QU5lI3VSIBN7uwAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    photo:
      "https://th.bing.com/th/id/OIP.pHZFVI12QU5lI3VSIBN7uwAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    photo: "https://wallpapercave.com/wp/wp8181866.jpg",
  },
  {
    id: 8,
    photo: "https://wallpapercave.com/wp/wp8181866.jpg",
  },
];
