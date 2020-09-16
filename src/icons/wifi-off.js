import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const WifiOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <g clipPath="url(#clip0)">
        <path d="M1 1L23 23" />
        <path d="M16.72 11.06C17.5391 11.4597 18.305 11.9603 19 12.55" />
        <path d="M5 12.55C6.48208 11.3108 8.26587 10.4862 10.17 10.16" />
        <path d="M10.71 5.04998C12.8524 4.87735 15.0076 5.13815 17.047 5.8168C19.0864 6.49546 20.9682 7.57806 22.58 8.99998" />
        <path d="M1.42004 9C2.80721 7.77385 4.39774 6.79922 6.12004 6.12" />
        <path d="M8.53003 16.11C9.54523 15.3888 10.7597 15.0013 12.005 15.0013C13.2504 15.0013 14.4648 15.3888 15.48 16.11" />
        <path d="M12 20H12.01" />
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clippath>
      </defs>
    </svg>
  );
});

WifiOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WifiOff.displayName = 'WifiOff';

export default WifiOff;
