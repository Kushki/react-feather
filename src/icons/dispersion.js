import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dispersion = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path
        d="M15.5 2H22V8.5"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 15.5V22H16"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L15 9"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22L15 15"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 4C7 3.44772 6.55228 3 6 3C5.44772 3 5 3.44772 5 4H7ZM5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20H5ZM5 4V20H7V4H5Z"
        fill="#46525C"
      />
      <path
        d="M10 7H4C1 7 1 12 4 12H7.99999C11 12 11 17 7.99999 17H2"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});

Dispersion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dispersion.displayName = 'Dispersion';

export default Dispersion;
