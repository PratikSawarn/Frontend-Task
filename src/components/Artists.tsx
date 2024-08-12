import React from "react";
import { motion } from "framer-motion";

export default function Artists({
  image_uri,
  title,
}: {
  image_uri: string;
  title: string;
}) {
  return (
    <div className="col-span-2  relative">
      <div className="rounded-full border-8 border-red-500 h-[600px] w-[600px] overflow-hidden">
        <img className="object-cover h-full w-full" src={image_uri} />
      </div>
      <motion.span
        transition={{ ease: "easeIn", duration: 1 }}
        initial={{
          rotateZ: "45deg",
          translateX: "-80px",
          opacity: 0,
        }}
        animate={{
          translateX: "-80px",
          rotateZ: "0deg",
          opacity: 1,
        }}
        className="absolute top-[50%] -translate-x-40 text-6xl font-medium "
      >
        {title}
      </motion.span>
    </div>
  );
}
