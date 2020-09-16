import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cloud = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
          d="M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2044C13.4245 5.1728 12.0727 4.46599 10.6069 4.16428C9.14112 3.86256 7.62008 3.97804 6.21664 4.49759C4.8132 5.01714 3.58363 5.91993 2.66764 7.10338C1.75165 8.28683 1.18598 9.70348 1.0349 11.1924C0.883813 12.6812 1.15338 14.1826 1.81296 15.526C2.47255 16.8693 3.4957 18.0007 4.76617 18.7916C6.03663 19.5824 7.50347 20.0011 8.99999 20H18C19.3261 20 20.5978 19.4732 21.5355 18.5355C22.4732 17.5979 23 16.3261 23 15C23 13.6739 22.4732 12.4021 21.5355 11.4645C20.5978 10.5268 19.3261 10 18 10Z"
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

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cloud.displayName = 'Cloud';

export default Cloud;
