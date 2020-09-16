import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Plant = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M8.57143 22L6 15H18L15.4286 22H8.57143Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 14V2"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7.76419C13 5.75158 14.4 2.02824 20 3.23581C20 5.24842 18.6 8.97175 13 7.76419Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11 10.7642C11 8.75158 9.6 5.02824 4 6.23581C4 8.24842 5.4 11.9718 11 10.7642Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Plant.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Plant.displayName = 'Plant';

export default Plant;
