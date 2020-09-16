import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TrendingDown = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M23 18L13.5 8.5L8.5 13.5L1 6" />
      <path d="M17 18H23V12" />
    </svg>
  );
});

TrendingDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TrendingDown.displayName = 'TrendingDown';

export default TrendingDown;
