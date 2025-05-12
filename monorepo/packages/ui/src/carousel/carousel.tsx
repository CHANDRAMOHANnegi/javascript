import { ReactNode } from "react";

export type CarouselProps = {
  items: [{ key: string; content?: ReactNode }];
};

export const Carousel = (props: CarouselProps) => {
  return (
    <div className="carousel-container border border-b-1">
      <div className="carousel-left-button">left</div>
      <div className="carousel-content">
        {props.items.map((item) => (
          <div>{item.content}</div>
        ))}
      </div>
      <div className="carousel-right-button">right</div>
    </div>
  );
};

export default Carousel;
