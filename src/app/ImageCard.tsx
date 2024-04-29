import Image from "next/image";
import { motion } from "framer-motion";

const ImageCard = () => {
  const imagesArray = [
    {
      image1:
        "https://images.unsplash.com/photo-1534607287018-541c7d97748f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYW4lMjBnaXJsJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      image2:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div>
      {imagesArray.map((src, index) => (
        <div className="flex basis-full md:gap-6 gap-2" key={index}>
          <motion.div animate={{transitionDuration: '3s', width:['100%', '20%']}} className="daba1 rounded-3xl relative overflow-hidden h-full w-full">
              <Image
                className="object-cover overflow-hidden"
                src={src.image1}
                alt="Image"
                fill
                sizes="(max-width: 300px) 300px, (max-width:600px) 600px, 1200px"
                draggable="false"
              />
          </motion.div>
          {src?.image2 ? (
            <div className="flex-auto w-1/5 daba2 rounded-3xl relative overflow-hidden">
              <Image
                className="object-cover"
                src={src.image2}
                fill
                alt="noImage"
                sizes="(max-width:300px) 300px, (max-width:600px) 600px, 1200px"
                draggable="false"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
