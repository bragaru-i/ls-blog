import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 30 30',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2H20C21.1 2 22 2.89999 22 4V16C22 17.1 21.1 18 20 18H6L2 22L2.01001 4C2.01001 2.89999 2.90002 2 4 2ZM5.17004 16H20V4H4V17.17L4.57996 16.59L5.17004 16ZM6 12H8V14H6V12ZM8 9H6V11H8V9ZM6 6H8V8H6V6ZM15 12H10V14H15V12ZM10 9H18V11H10V9ZM18 6H10V8H18V6Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
