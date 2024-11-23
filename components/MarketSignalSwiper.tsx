import useWindowWidth from "@/hooks/useWindowWidth";
import { Collection } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useRef, useState, useEffect } from "react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

interface MarketSignalSwiperProps {
  collections: Collection[];
}

const MarketSignalSwiper = ({ collections }: MarketSignalSwiperProps) => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [chunkSize, setChunkSize] = useState(2); // Default to smallest size
  const { windowWidth, screens } = useWindowWidth();

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, []);

  // Function to chunk the collections array into groups based on chunk size
  const chunkCollections = (collections: Collection[], size: number) => {
    const chunks = [];
    for (let i = 0; i < collections.length; i += size) {
      chunks.push(collections.slice(i, i + size));
    }
    return chunks;
  };

  // Update chunk size based on window width

  useEffect(() => {
    if (windowWidth >= screens["2xl"]) {
      setChunkSize(8);
    } else if (windowWidth >= screens.xl) {
      setChunkSize(5);
    } else if (windowWidth >= screens.md) {
      setChunkSize(4);
    } else {
      setChunkSize(2);
    }
  }, [windowWidth]);

  const collectionChunks = chunkCollections(collections, chunkSize);

  return (
    <div className="relative">
      <Swiper
        ref={sliderRef}
        spaceBetween={30}
        modules={[Navigation, FreeMode, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {collectionChunks.map((chunk, chunkIndex) => (
          <SwiperSlide key={chunkIndex}>
            <div
              className={`2xl:grid-cols-8 grid grid-cols-2 gap-x-4 md:grid-cols-4 xl:grid-cols-5`}
            >
              {chunk.map((collection, index) => (
                <div
                  key={index}
                  className="grid aspect-square grid-cols-1 content-between space-y-2 rounded-xl bg-secondary p-4"
                >
                  <div className="w-full space-y-2 text-center">
                    <img
                      src={collection.icon_url}
                      alt={collection.name}
                      className="inline-block w-32 rounded-xl"
                    />
                    <p>{collection.name}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Floor</p>
                      <p>{collection.floor_price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Volume</p>
                      <p>{collection.volume}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute left-[-16px] top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-accent p-2 transition-all duration-200 hover:p-2.5"
        onClick={handlePrev}
      >
        <ArrowLeft width={20} />
      </div>
      <div
        className="absolute right-[-16px] top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-accent p-2 transition-all duration-200 hover:p-2.5"
        onClick={handleNext}
      >
        <ArrowRight width={20} />
      </div>
    </div>
  );
};

export default MarketSignalSwiper;
