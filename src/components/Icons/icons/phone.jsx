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
      d="M22.2051 5.295L11.625 15.875L7.44507 11.705L6.03503 13.115L11.625 18.705L23.625 6.705L22.2051 5.295ZM17.965 6.705L16.5549 5.295L10.215 11.635L11.625 13.045L17.965 6.705ZM5.96497 18.705L0.375 13.115L1.79504 11.705L7.375 17.295L5.96497 18.705Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
