import { ReactNode, useEffect, useState } from "react";
import { Button } from "../button/button";

export type CarouselProps = {
  items: { key: string; content?: ReactNode }[];
};

const CARD_WIDTH = 200;
const NO_OF_CARD_PER_VIEW = 2;

export const Carousel = ({ items }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(NO_OF_CARD_PER_VIEW);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const clonedItems = [
    ...items.slice(-NO_OF_CARD_PER_VIEW),
    ...items,
    ...items.slice(0, NO_OF_CARD_PER_VIEW),
  ];

  const CONTENT_WIDTH = clonedItems.length * CARD_WIDTH;

  const handleLeftClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(
        (currentSlide - 1 + clonedItems.length) % clonedItems.length
      );
    }
  };

  const handleRightClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((currentSlide + 1) % clonedItems.length);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentSlide >= items.length + NO_OF_CARD_PER_VIEW) {
          setCurrentSlide(currentSlide - items.length);
        } else if (currentSlide < NO_OF_CARD_PER_VIEW) {
          setCurrentSlide(items.length + currentSlide);
        }
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentSlide, isTransitioning, items.length]);

  console.log(currentSlide);

  return (
    <div
      className={`carousel-container border border-b-1 flex items-center  overflow-hidden relative `}
      style={{ width: NO_OF_CARD_PER_VIEW * CARD_WIDTH }}
    >
      <Button
        className="carousel-left-button absolute z-10"
        onClick={handleLeftClick}
      >
        left
      </Button>
      <div
        className={`carousel-content flex overflow-hidden flex-shrink-0 border-2  `}
        style={{
          width: CONTENT_WIDTH,
        }}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${CARD_WIDTH * currentSlide}px) `,
            transition: isTransitioning
              ? " transform ease-in-out 500ms "
              : "none",
          }}
        >
          {clonedItems.map((item, _idx) => (
            <div className="" key={`${item.key}-${_idx}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <Button
        className="carousel-left-button absolute right-0 z-10"
        onClick={handleRightClick}
      >
        right
      </Button>
      {/* <div className="dots absolute bottom-0 justify-center">0 0 0</div> */}
    </div>
  );
};
