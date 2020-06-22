import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  height = '100%',
  className = 'svg-icon',
  viewBox = '0 0 56 57',
}) => (
  <svg
    className={`svg-icon ${className}`}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4H10L11 5H14V7H2V5H5L6 4ZM5 20C3.89999 20 3 19.1 3 18V8H13V18C13 19.1 12.1 20 11 20H5ZM22 8H15V10H22V8ZM19 16H15V18H19V16ZM15 12H21V14H15V12ZM5 10H11V18H5V10Z"
      fill={fill}
      // fillOpacity="0.54"
    />
  </svg>
);

export default SVG;
