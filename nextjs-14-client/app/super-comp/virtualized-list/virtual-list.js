import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";

const style = {
  container: (props = {}) => {
    if (!props || !props.width || !props.height) {
      return {};
    }

    return {
      width: props.width,
      position: "relative",
      height: props.height,
    };
  },
  listWrapper: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    position: "absolute",
  },
  list: (height) => ({
    height,
    position: "relative",
  }),
  item: (props) => ({
    height: props.height,
    left: 0,
    right: 0,
    top: props.top,
    position: "absolute",
  }),
};

const getData = (source) => {
  const mapHeight = {};
  let totalHeight = 0;
  let maxRowHeight = 0;
  let top = 50;

  source.forEach((item, index) => {
    mapHeight[index] = {
      height: item.height,
      top: top,
    };
    top += item.height;
    totalHeight += item.height;
    maxRowHeight = Math.max(maxRowHeight, item.height);
  });

  return {
    mapHeight,
    totalHeight,
    maxRowHeight,
  };
};

const List = ({ renderItem, className, source = [], overScanCount = 5 }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const data = useMemo(() => getData(source), [source]);

  const listWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(event.target.scrollTop);
    };

    const wrapper = listWrapperRef.current;
    wrapper.addEventListener("scroll", handleScroll);

    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getHeight = () => data.totalHeight;

  const checkIfVisible = (index) => {
    const elemPosition = data.mapHeight[index].top;
    return (
      elemPosition > scrollTop &&
      elemPosition < scrollTop + overScanCount * data.maxRowHeight
    );
  };

  return (
    <div style={{ ...style.listWrapper }} ref={listWrapperRef}>
      <div style={style.list(getHeight())}>
        {source.map(
          (_, index) =>
            checkIfVisible(index) &&
            renderItem({
              index: index,
              style: style.item(data.mapHeight[index]),
            })
        )}
      </div>
    </div>
  );
};

List.propTypes = {
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
  source: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.string.isRequired,
    })
  ),
  overScanCount: PropTypes.number,
};

export default List;
