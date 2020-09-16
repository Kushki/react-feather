import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Wifi = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M5 12.55C6.97656 10.9037 9.46761 10.0021 12.04 10.0021C14.6124 10.0021 17.1034 10.9037 19.08 12.55" />
        <path d="M1.42004 8.99997C4.34247 6.42394 8.10434 5.00262 12 5.00262C15.8957 5.00262 19.6576 6.42394 22.58 8.99997" />
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

Wifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wifi.displayName = 'Wifi';

export default Wifi;
