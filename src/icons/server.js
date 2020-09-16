import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Server = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path
          d="M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z"
          stroke="#46525C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z"
          stroke="#46525C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clippath>
      </defs>
    </svg>
  );
});

Server.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Server.displayName = 'Server';

export default Server;
