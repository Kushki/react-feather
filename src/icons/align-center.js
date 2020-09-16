import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignCenter = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M18 10H6" />
      <path d="M21 6H3" />
      <path d="M21 14H3" />
      <path d="M18 18H6" />
    </svg>
  );
});

AlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignCenter.displayName = 'AlignCenter';

export default AlignCenter;
