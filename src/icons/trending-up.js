import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TrendingUp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M23 6L13.5 15.5L8.5 10.5L1 18" />
      <path d="M17 6H23V12" />
    </svg>
  );
});

TrendingUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TrendingUp.displayName = 'TrendingUp';

export default TrendingUp;
